<template>
  <div class="timeline-container">
    <!-- 时间轴标题 -->
    <div class="timeline-header">
      <div class="year-marker">2024</div>
      <div class="timeline-subtitle">Than Studio 发展历程</div>
    </div>
    
    <!-- 时间轴内容 -->
    <div class="timeline">
      <div 
        v-for="(item, index) in timelineItems" 
        :key="item.id"
        class="timeline-item"
        :class="{ 'right': index % 2 === 1 }"
        v-observe-visibility="onVisibilityChange"
      >
        <div class="timeline-date">
          <span class="date-text">{{ item.date }}</span>
          <div class="date-line"></div>
        </div>
        <div class="timeline-content">
          <div class="content-card">
            <div class="card-image">
              <img :src="item.image" :alt="item.title">
            </div>
            <div class="card-text">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <div class="milestone-tag">里程碑 #{{ index + 1 }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const timelineItems = [
  {
    id: 1,
    date: '2024 Q1',
    title: 'Than Studio 成立',
    description: '在宁波成立总部，开始探索设计的无限可能。专注于品牌设计、数字产品设计和空间设计领域。',
    image: '/src/assets/images/10001.jpg'
  },
  {
    id: 2,
    date: '2024 Q2',
    title: '上海办公室筹备',
    description: '扩展业务版图，建立上海联络处。深化与长三角地区客户的合作关系，拓展创意设计业务。',
    image: '/src/assets/images/10002.png'
  },
  {
    id: 3,
    date: '2024 Q3',
    title: '杭州分部成立',
    description: '在杭州三宝创意园区设立分部，深化数字设计业务。与科技企业建立战略合作伙伴关系。',
    image: '/src/assets/images/10003.png'
  },
  {
    id: 4,
    date: '2024 Q4',
    title: '国际业务拓展',
    description: '开始承接国际设计项目，与多个海外品牌建立合作。举办首届 Than Design Week 设计周活动。',
    image: '/src/assets/images/10004.png'
  }
]

const onVisibilityChange = (isVisible: boolean, entry: IntersectionObserverEntry) => {
  if (isVisible) {
    entry.target.classList.add('visible')
  }
}
</script>

<style scoped>
.timeline-container {
  position: relative;
  padding: 40px 0;
}

.timeline-header {
  text-align: center;
  margin-bottom: 80px;
}

.year-marker {
  font-size: 6rem;
  font-weight: 600;
  background: linear-gradient(45deg, #fff, rgba(255,255,255,0.3));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.timeline-subtitle {
  font-size: 1.2rem;
  color: rgba(255,255,255,0.7);
  margin-top: -20px;
}

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(
    to bottom,
    rgba(255,255,255,0) 0%,
    rgba(255,255,255,0.1) 20%,
    rgba(255,255,255,0.1) 80%,
    rgba(255,255,255,0) 100%
  );
}

.timeline-item {
  display: flex;
  justify-content: flex-end;
  padding: 40px 0;
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.timeline-item.right {
  justify-content: flex-start;
  transform: translateX(50px);
}

.timeline-item.visible {
  opacity: 1;
  transform: translateX(0);
}

.timeline-date {
  width: 150px;
  position: relative;
  display: flex;
  align-items: center;
}

.date-text {
  font-size: 1.2rem;
  font-weight: 500;
  color: rgba(255,255,255,0.9);
}

.date-line {
  flex-grow: 1;
  height: 1px;
  background: rgba(255,255,255,0.1);
  margin: 0 20px;
}

.timeline-content {
  width: calc(50% - 150px);
}

.content-card {
  background: rgba(255,255,255,0.03);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.content-card:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.content-card:hover .card-image img {
  transform: scale(1.05);
}

.card-text {
  padding: 30px;
  position: relative;
}

.card-text h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.card-text p {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255,255,255,0.7);
  margin-bottom: 20px;
}

.milestone-tag {
  display: inline-block;
  padding: 6px 12px;
  background: rgba(255,255,255,0.1);
  border-radius: 4px;
  font-size: 0.9rem;
  color: rgba(255,255,255,0.7);
}

@media (max-width: 1024px) {
  .timeline::before {
    left: 0;
  }

  .timeline-item,
  .timeline-item.right {
    justify-content: flex-start;
    padding-left: 50px;
  }

  .timeline-date {
    width: auto;
    margin-bottom: 20px;
  }

  .timeline-content {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .year-marker {
    font-size: 4rem;
  }

  .card-text {
    padding: 20px;
  }

  .card-text h3 {
    font-size: 1.3rem;
  }
}
</style> 