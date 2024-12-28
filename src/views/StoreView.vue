<template>
  <div class="store-page">
    <!-- 商店头部 -->
    <header class="store-header">
      <h1>THAN STORE</h1>
      <p>探索我们精心设计的产品系列</p>
    </header>

    <!-- 搜索和排序工具栏 -->
    <div class="toolbar">
      <div class="search-box">
        <input 
          type="text" 
          v-model="searchQuery"
          placeholder="搜索商品..."
          @input="filterProducts"
        >
      </div>
      
      <div class="sort-options">
        <select v-model="sortOption" @change="sortProducts">
          <option value="default">默认排序</option>
          <option value="priceAsc">价格从低到高</option>
          <option value="priceDesc">价格从高到低</option>
          <option value="nameAsc">名称 A-Z</option>
        </select>
      </div>
    </div>

    <!-- 商品分类 -->
    <div class="category-filter">
      <button 
        v-for="cat in categories" 
        :key="cat.value"
        class="category-btn"
        :class="{ active: currentCategory === cat.value }"
        @click="filterProducts(cat.value)"
      >
        {{ cat.label }}
      </button>
    </div>

    <!-- 商品网格 -->
    <TransitionGroup 
      name="products" 
      tag="div" 
      class="products-grid"
    >
      <div 
        v-for="product in filteredAndSortedProducts" 
        :key="product.id"
        class="product-item"
        :data-category="product.category"
      >
        <div class="product-image">
          <img :src="product.image" :alt="product.title">
          <div class="product-overlay">
            <button class="view-details" @click="viewProductDetails(product)">
              查看详情
            </button>
          </div>
        </div>
        <div class="product-info">
          <h3>{{ product.title }}</h3>
          <p class="product-desc">{{ product.description }}</p>
          <div class="product-meta">
            <div class="product-price">¥{{ product.price }}</div>
            <button class="add-to-cart" @click="addToCart(product)">
              加入购物车
            </button>
          </div>
        </div>
      </div>
    </TransitionGroup>

    <!-- 加载更多按钮 -->
    <button 
      v-if="hasMoreProducts" 
      class="load-more"
      @click="loadMore"
    >
      加载更多
    </button>

    <!-- 购物车抽屉 -->
    <CartDrawer
      :show="showCart"
      :items="cartItems"
      @close="showCart = false"
      @update-quantity="updateCartQuantity"
      @remove-item="removeFromCart"
      @checkout="handleCheckout"
    />

    <!-- 商品详情弹窗 -->
    <ProductModal
      :show="showProductModal"
      :product="selectedProduct"
      @close="closeProductModal"
      @add-to-cart="addToCart"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import CartDrawer from '@/components/store/CartDrawer.vue'
import ProductModal from '@/components/store/ProductModal.vue'
import type { Product, CartItem, UpdateQuantityPayload } from '@/types/store'
import image1 from '@/assets/images/10001.jpg'
import image2 from '@/assets/images/10002.png'
import image3 from '@/assets/images/10003.png'
import image4 from '@/assets/images/10004.png'
import image5 from '@/assets/images/10005.png'
import image6 from '@/assets/images/10006.png'
import image7 from '@/assets/images/10007.png'
import image8 from '@/assets/images/10008.png'

const categories = [
  { label: '全部', value: 'all' },
  { label: '图书', value: 'books' },
  { label: '艺术版画', value: 'prints' },
  { label: '文创用品', value: 'goods' }
]

const products = [
  {
    id: 1,
    title: '设计作品集 2023',
    description: 'Than Studio 年度精选作品集',
    price: 299,
    category: 'books',
    image: image1
  },
  {
    id: 2,
    title: '限量艺术海报',
    description: '编号版画 50版',
    price: 899,
    category: 'prints',
    image: image2
  },
  {
    id: 3,
    title: '创意笔记本',
    description: '特制纸张 独特工艺',
    price: 159,
    category: 'goods',
    image: image3
  },
  {
    id: 4,
    title: '抽象艺术版画',
    description: '限量100版 签名编号',
    price: 1299,
    category: 'prints',
    image: image4
  },
  {
    id: 5,
    title: '设计师帆包',
    description: '原创图案 环保材质',
    price: 259,
    category: 'goods',
    image: image5
  },
  {
    id: 6,
    title: '设计年鉴2024',
    description: '精选全球优秀设计案例',
    price: 399,
    category: 'books',
    image: image6
  },
  {
    id: 7,
    title: '艺术明信片套装',
    description: '12张精美卡片',
    price: 99,
    category: 'goods',
    image: image7
  },
  {
    id: 8,
    title: '城市印象系列',
    description: '限量城市艺术版画',
    price: 1599,
    category: 'prints',
    image: image8
  }
]

const currentCategory = ref('all')
const currentPage = ref(1)
const productsPerPage = 6
const searchQuery = ref('')
const sortOption = ref('default')
const showCart = ref(false)
const cartItems = ref<CartItem[]>([])
const showProductModal = ref(false)
const selectedProduct = ref<Product | null>(null)

const filteredAndSortedProducts = computed(() => {
  let result = [...products]
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(product => 
      product.title.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    )
  }
  
  if (currentCategory.value !== 'all') {
    result = result.filter(p => p.category === currentCategory.value)
  }
  
  switch (sortOption.value) {
    case 'priceAsc':
      result.sort((a, b) => a.price - b.price)
      break
    case 'priceDesc':
      result.sort((a, b) => b.price - a.price)
      break
    case 'nameAsc':
      result.sort((a, b) => a.title.localeCompare(b.title))
      break
  }
  
  return result.slice(0, currentPage.value * productsPerPage)
})

const hasMoreProducts = computed(() => {
  const totalProducts = currentCategory.value === 'all' 
    ? products.length 
    : products.filter(p => p.category === currentCategory.value).length
  return totalProducts > currentPage.value * productsPerPage
})

const filterProducts = (category: string) => {
  currentCategory.value = category
  currentPage.value = 1
}

const loadMore = () => {
  currentPage.value++
}

const viewProductDetails = (product: Product) => {
  selectedProduct.value = product
  showProductModal.value = true
}

const addToCart = (product: Product & { quantity: number }) => {
  const existingItem = cartItems.value.find(item => item.id === product.id)
  if (existingItem) {
    existingItem.quantity += product.quantity
  } else {
    cartItems.value.push({ ...product })
  }
  showCart.value = true
}

const updateCartQuantity = ({ item, change }: UpdateQuantityPayload) => {
  const cartItem = cartItems.value.find(i => i.id === item.id)
  if (cartItem) {
    const newQuantity = cartItem.quantity + change
    if (newQuantity > 0) {
      cartItem.quantity = newQuantity
    } else {
      removeFromCart(item)
    }
  }
}

const removeFromCart = (item: CartItem) => {
  const index = cartItems.value.findIndex(i => i.id === item.id)
  if (index > -1) {
    cartItems.value.splice(index, 1)
  }
}

const handleCheckout = () => {
  console.log('Checkout:', cartItems.value)
}

const closeProductModal = () => {
  showProductModal.value = false
  selectedProduct.value = null
}
</script>

<style scoped>
.store-page {
  padding-top: 80px;
}

.store-header {
  text-align: center;
  padding: 60px 0;
}

.store-header h1 {
  font-size: 48px;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #fff, rgba(255,255,255,0.7));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.store-header p {
  font-size: 18px;
  color: rgba(255,255,255,0.7);
}

.category-filter {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 60px;
}

.category-btn {
  padding: 10px 20px;
  border: none;
  background: none;
  color: rgba(255,255,255,0.6);
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn:hover {
  color: #fff;
}

.category-btn.active {
  color: #fff;
  font-weight: 500;
  position: relative;
}

.category-btn.active:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 20%;
  width: 60%;
  height: 2px;
  background: #fff;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 0 80px;
  max-width: 1600px;
  margin: 0 auto;
}

.product-item {
  position: relative;
  background: rgba(255,255,255,0.03);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.product-item:hover {
  transform: translateY(-10px);
}

.product-image {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-item:hover .product-overlay {
  opacity: 1;
}

.view-details {
  padding: 12px 24px;
  border: 1px solid #fff;
  background: none;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.view-details:hover {
  background: #fff;
  color: #000;
}

.product-info {
  padding: 20px;
}

.product-info h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.product-desc {
  font-size: 14px;
  color: rgba(255,255,255,0.6);
  margin-bottom: 12px;
}

.product-price {
  font-size: 20px;
  font-weight: 500;
}

.load-more {
  display: block;
  margin: 60px auto;
  padding: 12px 40px;
  border: 1px solid #fff;
  background: none;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.load-more:hover {
  background: #fff;
  color: #000;
}

@media (max-width: 1200px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 40px;
  }
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }

  .category-filter {
    flex-wrap: wrap;
    gap: 15px;
    padding: 0 20px;
  }

  .store-header h1 {
    font-size: 36px;
  }

  .search-box input {
    width: 100%;
  }

  .sort-options {
    width: 100%;
  }

  .sort-options select {
    width: 100%;
  }

  .products-grid {
    padding: 0 20px;
  }

  .store-page {
    padding-top: 40px;
  }

  .products-grid {
    gap: 15px;
  }

  .product-item {
    background: rgba(255,255,255,0.05);
    border-radius: 8px;
    padding: 10px;
  }

  .product-meta {
    padding: 10px 0;
  }

  .product-price {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .toolbar {
    flex-direction: column;
    gap: 15px;
  }

  .search-box input {
    width: 100%;
  }

  .sort-options select {
    width: 100%;
  }

  .product-item {
    margin-bottom: 30px;
  }

  .product-item {
    aspect-ratio: 1;
  }
}

.product-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.add-to-cart {
  padding: 8px 16px;
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 4px;
  background: none;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-to-cart:hover {
  background: #fff;
  color: #000;
}

/* 商品列表动画 */
.products-enter-active,
.products-leave-active {
  transition: all 0.5s ease;
}

.products-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.products-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.products-move {
  transition: transform 0.5s ease;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  margin-bottom: 40px;
}

.search-box input {
  padding: 8px 16px;
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 4px;
  background: rgba(255,255,255,0.1);
  color: #fff;
  width: 300px;
}

.sort-options select {
  padding: 8px 16px;
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 4px;
  background: rgba(255,255,255,0.1);
  color: #fff;
  cursor: pointer;
}

@media (max-width: 768px) {
  .toolbar {
    flex-direction: column;
    gap: 15px;
    padding: 0 20px;
  }

  .search-box input {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .toolbar {
    flex-direction: column;
    gap: 15px;
  }

  .search-box input {
    width: 100%;
  }

  .sort-options select {
    width: 100%;
  }

  .product-item {
    margin-bottom: 30px;
  }
}

@media (max-width: 768px) {
  .store-page {
    padding-top: 60px;
  }

  .products-grid {
    gap: 15px;
    padding: 0 15px;
  }

  .product-item {
    background: rgba(255,255,255,0.03);
    border-radius: 8px;
    overflow: hidden;
  }

  .product-info {
    padding: 12px;
  }

  .product-title {
    font-size: 1rem;
    margin-bottom: 4px;
  }

  .product-price {
    font-size: 1.1rem;
    font-weight: 600;
  }

  .add-to-cart {
    padding: 6px 12px;
    font-size: 0.85rem;
  }
}
</style> 