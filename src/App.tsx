import { useEffect, useMemo, useState } from 'react'
import './App.css'
import ProductFilters from './components/ProductFilters'
import ProductForm from './components/ProductForm'
import ProductTable from './components/ProductTable'
import type { Product, ProductFormData } from './types/product'
import { readProducts, writeProducts } from './utils/productStorage'
import { createProductId } from './utils/productValidation'

function App() {
  const [products, setProducts] = useState<Product[]>(readProducts)
  const [statusMessage, setStatusMessage] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    writeProducts(products)
  }, [products])

  const categories = useMemo(() => {
    return Array.from(new Set(products.map((product) => product.category))).sort(
      (firstCategory, secondCategory) =>
        firstCategory.localeCompare(secondCategory),
    )
  }, [products])

  const filteredProducts = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase()

    return products.filter((product) => {
      const matchesText =
        product.name.toLowerCase().includes(normalizedSearchTerm) ||
        product.category.toLowerCase().includes(normalizedSearchTerm)
      const matchesCategory =
        !selectedCategory || product.category === selectedCategory

      return matchesText && matchesCategory
    })
  }, [products, searchTerm, selectedCategory])

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

      <section className="workspace-panel" aria-labelledby="product-list-title">
        <div className="section-heading">
          <div>
            <h2 id="product-list-title">Inventario</h2>
            <p>
              {filteredProducts.length} de {products.length} productos visibles
            </p>
          </div>
        </div>
        <ProductFilters
          categories={categories}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          onSearchTermChange={setSearchTerm}
          onSelectedCategoryChange={setSelectedCategory}
        />
        <ProductTable
          products={filteredProducts}
          totalProducts={products.length}
        />
      </section>
    </main>
  )
}

export default App
