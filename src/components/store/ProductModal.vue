<template>
  <Transition name="modal">
    <div v-if="show" class="modal-overlay" @click="close">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="close">&times;</button>
        <div class="modal-body">
          <div class="product-image">
            <img :src="product.image" :alt="product.title">
          </div>
          <div class="product-details">
            <h2>{{ product.title }}</h2>
            <p class="description">{{ product.description }}</p>
            <div class="price">¥{{ product.price }}</div>
            <div class="actions">
              <div class="quantity">
                <button @click="decreaseQuantity">-</button>
                <span>{{ quantity }}</span>
                <button @click="increaseQuantity">+</button>
              </div>
              <button class="add-to-cart" @click="addToCart">
                加入购物车
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Product } from '@/types/store'

interface Props {
  show: boolean
  product: Product | null
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'add-to-cart', product: Product & { quantity: number }): void
}>()

const quantity = ref(1)

const close = () => {
  emit('close')
  quantity.value = 1
}

const increaseQuantity = () => {
  quantity.value++
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const addToCart = () => {
  if (props.product) {
    emit('add-to-cart', {
      ...props.product,
      quantity: quantity.value
    })
    close()
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #111;
  border-radius: 8px;
  width: 90%;
  max-width: 1000px;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}

.modal-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 40px;
}

.product-image img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.product-details {
  display: flex;
  flex-direction: column;
}

.product-details h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.description {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 30px;
}

.price {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
}

.actions {
  margin-top: auto;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.quantity button {
  width: 30px;
  height: 30px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: none;
  color: #fff;
  cursor: pointer;
}

.add-to-cart {
  width: 100%;
  padding: 15px;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-to-cart:hover {
  background: rgba(255, 255, 255, 0.9);
}

/* 动画 */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .modal-body {
    grid-template-columns: 1fr;
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .modal-body {
    padding: 15px;
  }

  .product-details h2 {
    font-size: 20px;
  }

  .price {
    font-size: 24px;
  }

  .quantity {
    gap: 15px;
  }

  .quantity button {
    width: 25px;
    height: 25px;
  }
}
</style> 