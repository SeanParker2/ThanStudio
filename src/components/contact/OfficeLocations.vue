<template>
  <div class="offices">
    <div v-for="office in offices" :key="office.city" class="office">
      <h2>{{ office.city }}<span v-if="office.status">{{ office.status }}</span></h2>
      <p v-html="office.address"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
const offices = [
  {
    city: '宁波总部',
    address: '浙江省宁波市鄞州区<br>南通路707号明创大厦888室<br>邮编: 315000'
  },
  {
    city: '杭州办公室',
    address: '浙江省杭州市拱墅区<br>学院北路50号三宝文创园1-608<br>邮编: 310015'
  },
  {
    city: '上海办公室',
    status: '筹备中',
    address: '上海市静安区<br>金湖路278号1单元4楼<br>邮编: 200000'
  }
]
</script>

<style scoped>
.office {
  margin-bottom: 40px;
}

.office h2 {
  font-size: 1.2rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.office h2 span {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  padding: 2px 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

.office p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}
</style> 