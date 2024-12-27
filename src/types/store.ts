export interface Product {
  id: number
  title: string
  description: string
  price: number
  category: string
  image: string
  quantity?: number
}

export interface CartItem extends Product {
  quantity: number
}

export interface UpdateQuantityPayload {
  item: CartItem
  change: number
} 