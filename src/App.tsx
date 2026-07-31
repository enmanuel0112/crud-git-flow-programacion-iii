import './App.css'
import { readProducts } from './utils/productStorage'

const initialProducts = readProducts()

function App() {
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
          <strong>{initialProducts.length}</strong>
          <span className="status-help">Persistencia configurada con LocalStorage</span>
        </div>
      </header>

      <section className="workspace-panel">
        <h2>Base del proyecto</h2>
        <p>
          La estructura inicial esta preparada para agregar las operaciones de
          crear, listar, buscar, editar y eliminar productos en ramas feature
          independientes.
        </p>
      </section>
    </main>
  )
}

export default App
