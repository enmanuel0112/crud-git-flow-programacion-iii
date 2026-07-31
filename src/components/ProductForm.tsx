import { PackagePlus, Save, X } from 'lucide-react'
import { useEffect, useState, type FormEvent } from 'react'
import type {
  Product,
  ProductFormData,
  ProductFormErrors,
} from '../types/product'
import {
  getEmptyProductForm,
  productToFormData,
  validateProductForm,
} from '../utils/productValidation'

type ProductFormProps = {
  editingProduct: Product | null
  onSubmitProduct: (formData: ProductFormData) => void
  onCancelEdit: () => void
}

function ProductForm({
  editingProduct,
  onSubmitProduct,
  onCancelEdit,
}: ProductFormProps) {
  const [formData, setFormData] = useState<ProductFormData>(
    getEmptyProductForm,
  )
  const [errors, setErrors] = useState<ProductFormErrors>({})
  const isEditing = Boolean(editingProduct)

  useEffect(() => {
    setFormData(
      editingProduct ? productToFormData(editingProduct) : getEmptyProductForm(),
    )
    setErrors({})
  }, [editingProduct])

  function updateField(field: keyof ProductFormData, value: string) {
    setFormData((currentForm) => ({ ...currentForm, [field]: value }))
    setErrors((currentErrors) => ({ ...currentErrors, [field]: undefined }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const validation = validateProductForm(formData)
    setErrors(validation.errors)

    if (!validation.isValid) {
      return
    }

    onSubmitProduct(formData)

    if (!isEditing) {
      setFormData(getEmptyProductForm())
    }
  }

  return (
    <form className="product-form" onSubmit={handleSubmit} noValidate>
      {isEditing && (
        <div className="edit-banner">
          <span>Editando: {editingProduct?.name}</span>
          <button type="button" className="ghost-action" onClick={onCancelEdit}>
            <X size={16} aria-hidden="true" />
            Cancelar
          </button>
        </div>
      )}

      <div className="form-grid">
        <label>
          Nombre
          <input
            type="text"
            value={formData.name}
            onChange={(event) => updateField('name', event.target.value)}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </label>

        <label>
          Categoria
          <input
            type="text"
            value={formData.category}
            onChange={(event) => updateField('category', event.target.value)}
            aria-invalid={Boolean(errors.category)}
          />
          {errors.category && (
            <span className="field-error">{errors.category}</span>
          )}
        </label>

        <label>
          Precio
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={formData.price}
            onChange={(event) => updateField('price', event.target.value)}
            aria-invalid={Boolean(errors.price)}
          />
          {errors.price && <span className="field-error">{errors.price}</span>}
        </label>

        <label>
          Cantidad disponible
          <input
            type="number"
            min="0"
            step="1"
            value={formData.quantity}
            onChange={(event) => updateField('quantity', event.target.value)}
            aria-invalid={Boolean(errors.quantity)}
          />
          {errors.quantity && (
            <span className="field-error">{errors.quantity}</span>
          )}
        </label>
      </div>

      <label>
        Descripcion
        <textarea
          rows={3}
          value={formData.description}
          onChange={(event) => updateField('description', event.target.value)}
        />
      </label>

      <button className="primary-action" type="submit">
        {isEditing ? (
          <Save size={18} aria-hidden="true" />
        ) : (
          <PackagePlus size={18} aria-hidden="true" />
        )}
        {isEditing ? 'Guardar cambios' : 'Crear producto'}
      </button>
    </form>
  )
}

export default ProductForm
