<template>
  <Transition name="drawer">
    <div v-if="show" class="cart-drawer">
      <div class="drawer-header">
        <h2>购物车</h2>
        <button class="close-btn" @click="$emit('close')">&times;</button>
      </div>
      
      <div class="cart-items" v-if="items.length > 0">
        <div v-for="item in items" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.title">
          <div class="item-info">
            <h3>{{ item.title }}</h3>
            <p class="price">¥{{ item.price }}</p>
          </div>
          <div class="item-quantity">
            <button @click="updateQuantity(item, -1)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="updateQuantity(item, 1)">+</button>
          </div>
          <button class="remove-btn" @click="removeItem(item)">删除</button>
        </div>
      </div>
      
      <div v-else class="empty-cart">
        <p>购物车是空的</p>
      </div>

      <div class="cart-footer" v-if="items.length > 0">
        <div class="total">
          <span>总计:</span>
          <span class="total-price">¥{{ totalPrice }}</span>
        </div>
        <button class="checkout-btn" @click="checkout">结算</button>
      </div>
    </div>
  </Transition>

  <Transition name="overlay">
    <div v-if="show" class="cart-overlay" @click="$emit('close')"></div>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CartItem, UpdateQuantityPayload } from '@/types/store'

interface Props {
  show: boolean
  items: CartItem[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'update-quantity', payload: UpdateQuantityPayload): void
  (e: 'remove-item', item: CartItem): void
  (e: 'checkout'): void
}>()

const totalPrice = computed(() => {
  return props.items.reduce((total, item) => {
    return total + (item.price * item.quantity)
  }, 0)
})

const updateQuantity = (item: CartItem, change: number) => {
  emit('update-quantity', { item, change })
}

const removeItem = (item: CartItem) => {
  emit('remove-item', item)
}

const checkout = () => {
  emit('checkout')
}
</script>

<style scoped>
.cart-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  background: #111;
  z-index: 1001;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.close-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}

.cart-items {
  flex: 1;
  overflow-y: auto;
}

.cart-item {
  display: grid;
  grid-template-columns: 80px 1fr auto auto;
  gap: 15px;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.cart-item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
}

.item-quantity {
  display: flex;
  align-items: center;
  gap: 10px;
}

.item-quantity button {
  width: 24px;
  height: 24px;
  border: 1px solid rgba(255,255,255,0.3);
  background: none;
  color: #fff;
  cursor: pointer;
}

.remove-btn {
  color: #ff4444;
  background: none;
  border: none;
  cursor: pointer;
}

.cart-footer {
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.total {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.total-price {
  font-size: 20px;
  font-weight: 600;
}

.checkout-btn {
  width: 100%;
  padding: 12px;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 1000;
}

/* 动画 */
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.3s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .cart-drawer {
    width: 100%;
    height: 100vh;
    height: -webkit-fill-available;
    padding: calc(var(--safe-area-inset-top) + 15px) var(--mobile-padding) 
            calc(var(--safe-area-inset-bottom) + 15px);
  }

  .cart-header {
    position: sticky;
    top: 0;
    background: #000;
    z-index: 1;
    padding: 15px 0;
    margin: -15px 0 15px;
  }

  .cart-items {
    max-height: calc(100vh - 200px);
    -webkit-overflow-scrolling: touch;
  }

  .cart-item {
    padding: 10px 0;
  }

  .item-image {
    width: 80px;
    height: 80px;
    border-radius: var(--mobile-radius);
  }

  .cart-footer {
    position: sticky;
    bottom: 0;
    background: #000;
    padding: 15px 0;
    margin: 15px 0 -15px;
  }

  .checkout-btn {
    padding: 15px;
    border-radius: var(--mobile-radius);
  }
}
</style> 