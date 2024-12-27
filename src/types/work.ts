export interface WorkItem {
  id: number
  title: string
  description: string
  category: string
  image: string
}

export type WorkCategory = 'all' | 'brand' | 'digital' | 'space' | 'package' 