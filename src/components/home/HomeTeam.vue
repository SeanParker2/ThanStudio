<template>
  <div class="team-section">
    <div class="team-content">
      <div class="showcase-wrapper">
        <div class="team-showcase">
          <img src="@/assets/images/a1.jpg" alt="Team showcase" />
        </div>
      </div>
      <div class="member-grid">
        <div 
          v-for="member in teamMembers" 
          :key="member.id" 
          class="member-card"
        >
          <div class="member-photo">
            <img :src="getTeammatePath(member.id)" :alt="member.name" />
          </div>
          <div class="member-info">
            <h3>{{ member.name }}</h3>
            <p>{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const getTeammatePath = (id: number) => {
  return new URL(`../../assets/images/teammate${id}.jpg`, import.meta.url).href
}

const teamMembers = ref([
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Creative Director'
  },
  {
    id: 2,
    name: 'Mike Zhang',
    role: 'Design Lead'
  },
  {
    id: 3,
    name: 'Lisa Wang',
    role: 'Art Director'
  },
  {
    id: 4,
    name: 'Tom Liu',
    role: 'Strategy Director'
  }
])
</script>

<style scoped>
.team-content {
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  gap: 80px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px;
  height: 100vh;
  align-items: center;
}

.showcase-wrapper {
  width: 90%;
  margin: 0 auto;
}

.team-showcase img {
  width: 100%;
  height: 65vh;
  object-fit: cover;
  border-radius: 4px;
}

.member-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.member-card {
  text-align: center;
  transition: transform 0.3s ease;
}

.member-card:hover {
  transform: translateY(-5px);
}

.member-photo {
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.member-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-info h3 {
  font-size: 1.2rem;
  margin-bottom: 8px;
  font-weight: 500;
}

.member-info p {
  font-size: 0.9rem;
  opacity: 0.7;
}

@media (max-width: 1200px) {
  .team-content {
    grid-template-columns: 1fr;
    gap: 60px;
    padding: 60px;
  }

  .showcase-wrapper {
    width: 100%;
  }

  .team-showcase img {
    height: 50vh;
  }
}

@media (max-width: 768px) {
  .team-content {
    padding: 40px 20px;
  }

  .member-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .member-photo {
    width: 100px;
    height: 100px;
  }

  .team-showcase img {
    height: 40vh;
  }
}
</style> 