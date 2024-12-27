export interface User {
  id: number
  name: string
  email: string
}

export interface Product {
  id: number
  title: string
  description: string
  price: number
  category: string
  image: string
}

export interface Work {
  id: number
  title: string
  description: string
  category: string
  image: string
  date: string
}

export interface TimelineItem {
  id: number
  date: string
  title: string
  description: string
  image?: string
}

export interface CoreValue {
  title: string
  description: string
  icon?: string
}

export interface Office {
  city: string
  address: string
  status?: string
}

// 其他类型定义
