import { useEffect, useState } from 'react'
import './App.css'
import ProductForm from './components/ProductForm'
import type { Product, ProductFormData } from './types/product'
import { readProducts, writeProducts } from './utils/productStorage'
import { createProductId } from './utils/productValidation'

function App() {
  const [products, setProducts] = useState<Product[]>(readProducts)
  const [statusMessage, setStatusMessage] = useState('')

  useEffect(() => {
    writeProducts(products)
  }, [products])

  function handleCreateProduct(formData: ProductFormData) {
    const now = new Date().toISOString()
    const newProduct: Product = {
      id: createProductId(),
      name: formData.name.trim(),
      category: formData.category.trim(),
      price: Number(formData.price),
      quantity: Number(formData.quantity),
      description: formData.description.trim(),
      createdAt: now,
      updatedAt: now,
    }

    setProducts((currentProducts) => [newProduct, ...currentProducts])
    setStatusMessage(`Producto "${newProduct.name}" creado correctamente.`)
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Programacion III - ITLA</p>
          <h1>Gestor de Productos ITLA</h1>
          <p className="lead">
            Aplicacion CRUD academica para evidenciar uso de Git, ramas feature
            y Pull Requests bajo un flujo Git Flow.
          </p>
        </div>
        <div className="status-panel" aria-label="Estado del inventario">
          <span className="status-label">Productos guardados</span>
          <strong>{products.length}</strong>
          <span className="status-help">Persistencia configurada con LocalStorage</span>
        </div>
      </header>

      {statusMessage && (
        <p className="status-message" role="status">
          {statusMessage}
        </p>
      )}

      <section className="workspace-panel" aria-labelledby="product-form-title">
        <h2 id="product-form-title">Registro de productos</h2>
        <ProductForm onCreateProduct={handleCreateProduct} />
      </section>
    </main>
  )
}

export default App
