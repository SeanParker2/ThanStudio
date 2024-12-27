<template>
  <div class="values-container">
    <div class="values-grid">
      <div 
        v-for="(value, index) in coreValues" 
        :key="value.title"
        class="value-card"
        :style="{ '--delay': `${index * 0.1}s` }"
        v-observe-visibility="onVisibilityChange"
      >
        <div class="value-icon">
          <component :is="value.icon" />
        </div>
        <div class="value-content">
          <div class="value-number">0{{ index + 1 }}</div>
          <h3>{{ value.title }}</h3>
          <p>{{ value.description }}</p>
        </div>
        <div class="value-hover-bg"></div>
      </div>
    </div>
  </div>
</template>

const coreValues = [
  {
    title: '创新',
    description: '突破常规思维，探索设计的无限可能，为品牌注入创新活力。',
    icon: InnovationIcon
  },
  {
    title: '专注',
    description: '专注每一个细节，追求卓越品质，打造完美的设计作品。',
    icon: FocusIcon
  },
  {
    title: '协作',
    description: '开放共赢的理念，与客户深度协作，共同创造优秀作品。',
    icon: TeamworkIcon
  },
  {
    title: '责任',
    description: '承担社会责任，用设计传递正确价值观，创造可持续的未来。',
    icon: ResponsibilityIcon
  }
]

const onVisibilityChange = (isVisible: boolean, entry: IntersectionObserverEntry) => {
  if (isVisible) {
    entry.target.classList.add('visible')
  }
}
</script>

<style scoped>
.values-container {
  position: relative;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.value-card {
  position: relative;
  padding: 40px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay);
}

.value-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.value-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 30px;
  color: var(--text-color);
}

.value-number {
  font-size: 4rem;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.1);
  position: absolute;
  top: 20px;
  right: 30px;
}

.value-content {
  position: relative;
  z-index: 1;
}

.value-card h3 {
  font-size: 2rem;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #fff, rgba(255,255,255,0.7));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.value-card p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
}

.value-hover-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(255,255,255,0.05), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.value-card:hover .value-hover-bg {
  opacity: 1;
}

@media (max-width: 1024px) {
  .values-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .value-card {
    padding: 30px;
  }

  .value-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 20px;
  }

  .value-number {
    font-size: 3rem;
  }

  .value-card h3 {
    font-size: 1.8rem;
  }
}
</style> 