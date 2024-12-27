<template>
  <div class="contact-container">
    <!-- 左侧联系信息 -->
    <div class="contact-info">
      <h1>Get in Touch</h1>
      <div class="info-sections">
        <div class="info-block">
          <h2>业务咨询</h2>
          <a href="mailto:info@than.studio" class="hover-link">info@than.studio</a>
          <a href="tel:+86574288783780" class="hover-link">+86 574 2887 8378</a>
        </div>
        
        <div class="info-block">
          <h2>加入我们</h2>
          <a href="mailto:career@than.studio" class="hover-link">career@than.studio</a>
        </div>
        
        <div class="info-block">
          <h2>社交媒体</h2>
          <div class="social-links">
            <a href="#" target="_blank" class="hover-link">Instagram</a>
            <a href="#" target="_blank" class="hover-link">Behance</a>
            <a href="#" target="_blank" class="hover-link">WeChat</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧办公室信息 -->
    <div class="office-locations">
      <div class="office">
        <h2>宁波总部</h2>
        <p>浙江省宁波市鄞州区<br>
        南通路707号明创大厦888室<br>
        邮编: 315000</p>
      </div>
      
      <div class="office">
        <h2>杭州办公室</h2>
        <p>浙江省杭州市拱墅区<br>
        学院北路50号三宝文创园1-608<br>
        邮编: 310015</p>
      </div>
      
      <div class="office">
        <h2>上海办公室<span>筹备中</span></h2>
        <p>上海市静安区<br>
        金湖路278号1单元4楼<br>
        邮编: 200000</p>
      </div>
    </div>

    <footer>
      <div class="icp">浙ICP备2022028708号</div>
    </footer>
  </div>
</template>

<style scoped>
.contact-container {
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 40px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-content: center;
}

.contact-info {
  padding-right: 40px;
  display: flex;
  flex-direction: column;
}

.contact-info h1 {
  font-size: 3rem;
  margin-bottom: 40px;
  font-weight: 500;
  background: linear-gradient(45deg, #fff, rgba(255,255,255,0.7));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.info-sections {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.info-block {
  margin-bottom: 30px;
  padding-left: 20px;
  border-left: 1px solid rgba(255,255,255,0.1);
}

.info-block h2 {
  font-size: 1.1rem;
  margin-bottom: 15px;
  font-weight: 500;
}

.hover-link {
  display: block;
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  margin-bottom: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.hover-link:hover {
  color: #fff;
  transform: translateX(10px);
}

.social-links {
  display: flex;
  gap: 20px;
}

.office-locations {
  display: grid;
  gap: 20px;
  align-content: center;
}

.office {
  padding: 25px;
  background: rgba(255,255,255,0.03);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.office:hover {
  background: rgba(255,255,255,0.05);
  transform: translateY(-5px);
}

.office h2 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.office h2 span {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.5);
  font-weight: normal;
}

.office p {
  color: rgba(255,255,255,0.7);
  line-height: 1.6;
  font-size: 0.95rem;
}

footer {
  grid-column: span 2;
  text-align: center;
  padding-top: 20px;
}

.icp {
  color: rgba(255,255,255,0.4);
  font-size: 0.8rem;
}

@media (max-width: 1024px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 40px;
    height: auto;
    min-height: 100vh;
  }

  .contact-info {
    padding-right: 0;
  }

  footer {
    grid-column: span 1;
  }
}

@media (max-width: 768px) {
  .contact-container {
    padding: 80px 20px 20px;
  }

  .contact-info h1 {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }

  .office {
    padding: 20px;
  }
}
</style> 