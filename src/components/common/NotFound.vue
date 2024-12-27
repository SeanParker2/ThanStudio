<template>
  <div class="not-found">
    <div class="not-found-content">
      <h1>404</h1>
      <p>页面不存在</p>
      <router-link to="/" class="home-link">
        返回首页
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.not-found h1 {
  font-size: 6rem;
  margin-bottom: 20px;
}

.not-found p {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 40px;
}

.home-link {
  display: inline-block;
  padding: 12px 24px;
  background: #fff;
  color: #000;
  text-decoration: none;
  border-radius: 4px;
  transition: opacity 0.3s ease;
}

.home-link:hover {
  opacity: 0.9;
}
</style> 