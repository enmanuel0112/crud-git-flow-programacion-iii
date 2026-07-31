export type Product = {
  id: string
  name: string
  category: string
  price: number
  quantity: number
  description: string
  createdAt: string
  updatedAt: string
}

export type ProductFormData = {
  name: string
  category: string
  price: string
  quantity: string
  description: string
}
