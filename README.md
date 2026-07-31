# Gestor de Productos ITLA

Proyecto academico de Programacion III para demostrar el uso de Git y Git Flow mediante un CRUD de productos construido con React, TypeScript y Vite.

## Objetivo academico

Evidenciar un flujo de trabajo con ramas `main`, `dev`, `qa`, cinco ramas `feature/*`, Pull Requests hacia cada rama principal y commits descriptivos.

## Tecnologias

- React
- TypeScript
- Vite
- CSS
- LocalStorage
- Lucide React

## Instalacion

```bash
npm install
```

## Ejecucion

```bash
npm run dev
```

## Compilacion

```bash
npm run build
```

## Funcionalidades CRUD

- Crear productos con validaciones.
- Consultar y listar productos.
- Buscar por nombre o categoria.
- Editar productos existentes y actualizar la fecha de modificacion.
- Eliminar productos con confirmacion previa y actualizacion inmediata.
- Mantener los datos mediante LocalStorage.

## Estructura del proyecto

```text
src/
  components/
    ProductFilters.tsx
    ProductForm.tsx
    ProductTable.tsx
  types/
    product.ts
  utils/
    formatters.ts
    productStorage.ts
    productValidation.ts
  App.tsx
  App.css
  index.css
```

## Estrategia de ramas

La rama `main` contiene la version final, `dev` funciona como rama de integracion y `qa` representa validacion. Cada rama `feature/*` se integra mediante Pull Requests independientes hacia `dev`, `qa` y `main`.

## Ramas feature

- `feature/project-foundation`
- `feature/create-products`
- `feature/list-and-search-products`
- `feature/update-products`
- `feature/delete-products`

## Pull Requests

El listado real de Pull Requests esta documentado en `docs/git-flow-evidence.md` y en `docs/pull-requests.json`.

### Pull Requests fusionados
- #1 [chore: initialize React TypeScript project](https://github.com/enmanuel0112/crud-git-flow-programacion-iii/pull/1) - feature/project-foundation -> dev - MERGED
- #2 [chore: initialize foundation for QA](https://github.com/enmanuel0112/crud-git-flow-programacion-iii/pull/2) - feature/project-foundation -> qa - MERGED
- #3 [chore: initialize production foundation](https://github.com/enmanuel0112/crud-git-flow-programacion-iii/pull/3) - feature/project-foundation -> main - MERGED
- #4 [feat: implement product creation form](https://github.com/enmanuel0112/crud-git-flow-programacion-iii/pull/4) - feature/create-products -> dev - MERGED
- #5 [feat: validate product creation in QA](https://github.com/enmanuel0112/crud-git-flow-programacion-iii/pull/5) - feature/create-products -> qa - MERGED
- #6 [feat: release product creation](https://github.com/enmanuel0112/crud-git-flow-programacion-iii/pull/6) - feature/create-products -> main - MERGED
- #7 [feat: add product listing and search](https://github.com/enmanuel0112/crud-git-flow-programacion-iii/pull/7) - feature/list-and-search-products -> dev - MERGED
- #8 [feat: validate listing and search in QA](https://github.com/enmanuel0112/crud-git-flow-programacion-iii/pull/8) - feature/list-and-search-products -> qa - MERGED
- #9 [feat: release product listing and search](https://github.com/enmanuel0112/crud-git-flow-programacion-iii/pull/9) - feature/list-and-search-products -> main - MERGED
- #10 [feat: implement product editing](https://github.com/enmanuel0112/crud-git-flow-programacion-iii/pull/10) - feature/update-products -> dev - MERGED
- #11 [feat: validate product editing in QA](https://github.com/enmanuel0112/crud-git-flow-programacion-iii/pull/11) - feature/update-products -> qa - MERGED
- #12 [feat: release product editing](https://github.com/enmanuel0112/crud-git-flow-programacion-iii/pull/12) - feature/update-products -> main - MERGED
- #13 [feat: add product deletion confirmation](https://github.com/enmanuel0112/crud-git-flow-programacion-iii/pull/13) - feature/delete-products -> dev - MERGED
- #14 [feat: validate product deletion in QA](https://github.com/enmanuel0112/crud-git-flow-programacion-iii/pull/14) - feature/delete-products -> qa - MERGED
- #15 [feat: release product deletion](https://github.com/enmanuel0112/crud-git-flow-programacion-iii/pull/15) - feature/delete-products -> main - MERGED

## Autor

Cesar Enmanuel Ogando Perdomo - Matricula 2024-2485

## Repositorio

https://github.com/enmanuel0112/crud-git-flow-programacion-iii
