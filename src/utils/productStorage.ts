import type { Product } from '../types/product'

export const PRODUCTS_STORAGE_KEY = 'itla-products'

export function readProducts(): Product[] {
  try {
    const rawProducts = window.localStorage.getItem(PRODUCTS_STORAGE_KEY)

    if (!rawProducts) {
      return []
    }

    const parsedProducts = JSON.parse(rawProducts)
    return Array.isArray(parsedProducts) ? parsedProducts : []
  } catch {
    return []
  }
}

export function writeProducts(products: Product[]) {
  window.localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products))
}
