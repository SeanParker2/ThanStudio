<template>
  <div class="contact-sections">
    <div class="info-block">
      <h2>业务咨询</h2>
      <a href="mailto:info@than.studio">info@than.studio</a>
      <a href="tel:+86574288783780">+86 574 2887 8378</a>
    </div>
    
    <div class="info-block">
      <h2>加入我们</h2>
      <a href="mailto:career@than.studio">career@than.studio</a>
    </div>
    
    <div class="social-block">
      <h2>社交媒体</h2>
      <div class="social-links">
        <a href="#" target="_blank">Instagram</a>
        <a href="#" target="_blank">Behance</a>
        <a href="#" target="_blank">WeChat</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-sections {
  margin-top: 40px;
}

.info-block {
  margin-bottom: 40px;
}

.info-block h2 {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.info-block a {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin-bottom: 10px;
  transition: color 0.3s ease;
}

.info-block a:hover {
  color: #fff;
}

.social-links {
  display: flex;
  gap: 20px;
}

@media (max-width: 768px) {
  .contact-sections {
    margin-top: 30px;
  }

  .info-block {
    margin-bottom: 30px;
  }

  .social-links {
    flex-direction: column;
    gap: 15px;
  }

  .info-block a {
    padding: 10px 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
}
</style> 