import { Pencil, Trash2 } from 'lucide-react'
import type { Product } from '../types/product'
import { formatCurrency, formatDate } from '../utils/formatters'

type ProductTableProps = {
  products: Product[]
  totalProducts: number
  onEditProduct: (productId: string) => void
  onDeleteProduct: (productId: string) => void
}

function ProductTable({
  products,
  totalProducts,
  onEditProduct,
  onDeleteProduct,
}: ProductTableProps) {
  if (totalProducts === 0) {
    return (
      <div className="empty-state">
        <h3>No hay productos registrados</h3>
        <p>Agrega el primer producto desde el formulario de registro.</p>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="empty-state">
        <h3>No se encontraron coincidencias</h3>
        <p>Ajusta la busqueda o limpia el filtro de categoria.</p>
      </div>
    )
  }

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Categoria</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Creado</th>
            <th>Actualizado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <strong>{product.name}</strong>
                <span>{product.description || 'Sin descripcion'}</span>
              </td>
              <td>{product.category}</td>
              <td>{formatCurrency(product.price)}</td>
              <td>{product.quantity}</td>
              <td>{formatDate(product.createdAt)}</td>
              <td>{formatDate(product.updatedAt)}</td>
              <td>
                <div className="row-actions">
                  <button
                    type="button"
                    className="icon-action"
                    onClick={() => onEditProduct(product.id)}
                    aria-label={`Editar ${product.name}`}
                    title="Editar producto"
                  >
                    <Pencil size={17} aria-hidden="true" />
                    Editar
                  </button>
                  <button
                    type="button"
                    className="icon-action danger-action"
                    onClick={() => onDeleteProduct(product.id)}
                    aria-label={`Eliminar ${product.name}`}
                    title="Eliminar producto"
                  >
                    <Trash2 size={17} aria-hidden="true" />
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable
