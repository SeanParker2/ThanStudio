<template>
  <HomeSection>
    <div class="contact-content">
      <div class="contact-title">
        <h2>Find<br>Our<br>Studio</h2>
        <div class="arrow-icon">→</div>
      </div>

      <div class="office-info">
        <div class="office-block">
          <h3>Ningbo</h3>
          <p>Room 888, Mingchuang Mansion,<br>
          NO.707 South Tiantong Road,<br>
          Yinzhou District, Ningbo City,<br>
          P.R. China, 315000</p>
        </div>

        <div class="office-block">
          <h3>Shanghai <span>Preparatory Office</span></h3>
          <p>4F-Unit 1, 278 Jin Hu Road,<br>
          Shanghai, P.R. China, 200000</p>
        </div>

        <div class="contact-block">
          <h4>Business Inquiries</h4>
          <a href="mailto:info@than.studio">info@than.studio</a>
          <a href="tel:+86574288783780">+86 574 2887 8378</a>
        </div>

        <div class="contact-block">
          <h4>Join Us</h4>
          <a href="mailto:career@than.studio">career@than.studio</a>
        </div>
      </div>

      <div class="right-info">
        <div class="office-block">
          <h3>Hangzhou</h3>
          <p>1-608, Sanbao Cultural and<br>
          Creative Industrial Park,<br>
          No.50 Xueyuan North Road,<br>
          Gongshu District, Hangzhou,<br>
          P.R. China, 310015</p>
        </div>

        <div class="social-links">
          <h4>Social Media</h4>
          <a href="#" target="_blank">Instagram</a>
          <a href="#" target="_blank">Behance</a>
          <a href="#" target="_blank">WeChat</a>
        </div>

        <div class="icp">浙ICP备2022028708号</div>
      </div>
    </div>
  </HomeSection>
</template>

<script setup lang="ts">
import HomeSection from './HomeSection.vue'
</script>

<style scoped>
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px;
}

.contact-title {
  position: relative;
  padding-top: 80px;
}

.contact-title h2 {
  font-size: 4.5rem;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 40px;
}

.arrow-icon {
  font-size: 2.5rem;
  opacity: 0.6;
  transform: translateX(0);
  transition: transform 0.3s ease;
}

.contact-title:hover .arrow-icon {
  transform: translateX(10px);
}

.office-block {
  position: relative;
  padding-top: 30px;
  margin-bottom: 40px;
}

.office-block:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
}

.office-block h3 {
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.office-block h3 span {
  font-size: 0.9rem;
  opacity: 0.6;
  font-weight: normal;
}

.office-block p {
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
}

.contact-block,
.social-links {
  margin-top: 40px;
}

.contact-block h4,
.social-links h4 {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.9);
}

.contact-block a,
.social-links a {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin-bottom: 12px;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 0;
}

.contact-block a:hover,
.social-links a:hover {
  color: #fff;
  padding-left: 10px;
}

.icp {
  margin-top: 60px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
}

@media (max-width: 1200px) {
  .contact-content {
    gap: 40px;
    padding: 0 60px;
  }

  .contact-title h2 {
    font-size: 3.5rem;
  }

  .office-block h3 {
    font-size: 1.6rem;
  }
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 30px;
  }

  .contact-title h2 {
    font-size: 2.8rem;
  }

  .office-block h3 {
    font-size: 1.4rem;
  }
}
</style> 