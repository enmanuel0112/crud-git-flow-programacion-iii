import { Search } from 'lucide-react'

type ProductFiltersProps = {
  categories: string[]
  searchTerm: string
  selectedCategory: string
  onSearchTermChange: (value: string) => void
  onSelectedCategoryChange: (value: string) => void
}

function ProductFilters({
  categories,
  searchTerm,
  selectedCategory,
  onSearchTermChange,
  onSelectedCategoryChange,
}: ProductFiltersProps) {
  return (
    <div className="filters-panel" aria-label="Filtros de productos">
      <label className="search-field">
        Buscar
        <span className="search-input">
          <Search size={18} aria-hidden="true" />
          <input
            type="search"
            placeholder="Nombre o categoria"
            value={searchTerm}
            onChange={(event) => onSearchTermChange(event.target.value)}
          />
        </span>
      </label>

      <label>
        Categoria
        <select
          value={selectedCategory}
          onChange={(event) => onSelectedCategoryChange(event.target.value)}
        >
          <option value="">Todas las categorias</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default ProductFilters
