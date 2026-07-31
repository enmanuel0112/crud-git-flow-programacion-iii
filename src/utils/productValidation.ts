import type { Product, ProductFormData, ProductFormErrors } from '../types/product'

export function getEmptyProductForm(): ProductFormData {
  return {
    name: '',
    category: '',
    price: '',
    quantity: '0',
    description: '',
  }
}

export function productToFormData(product: Product): ProductFormData {
  return {
    name: product.name,
    category: product.category,
    price: String(product.price),
    quantity: String(product.quantity),
    description: product.description,
  }
}

export function validateProductForm(formData: ProductFormData) {
  const errors: ProductFormErrors = {}
  const price = Number(formData.price)
  const quantity = Number(formData.quantity)

  if (!formData.name.trim()) {
    errors.name = 'El nombre del producto es obligatorio.'
  }

  if (!formData.category.trim()) {
    errors.category = 'La categoria es obligatoria.'
  }

  if (!Number.isFinite(price) || price <= 0) {
    errors.price = 'El precio debe ser mayor que cero.'
  }

  if (!Number.isFinite(quantity) || quantity < 0) {
    errors.quantity = 'La cantidad disponible no puede ser negativa.'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  }
}

export function createProductId() {
  if ('randomUUID' in crypto) {
    return crypto.randomUUID()
  }

  return `product-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}
