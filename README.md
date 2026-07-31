# Gestor de Productos ITLA

Proyecto academico de Programacion III para demostrar el uso de Git y Git Flow
mediante un CRUD de productos construido con React, TypeScript y Vite.

## Objetivo academico

Evidenciar un flujo de trabajo con ramas `main`, `dev`, `qa`, cinco ramas
`feature/*`, Pull Requests hacia cada rama principal y commits descriptivos.

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
- Editar productos existentes.
- Eliminar productos con confirmacion.
- Mantener los datos mediante LocalStorage.

## Estructura del proyecto

```text
src/
  components/
    ProductFilters.tsx
    ProductTable.tsx
    ProductForm.tsx
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

La rama `main` contiene la version final, `dev` funciona como rama de
integracion y `qa` representa validacion. Cada rama `feature/*` se integra
mediante Pull Requests independientes hacia `dev`, `qa` y `main`.

## Ramas feature

- `feature/project-foundation`
- `feature/create-products`
- `feature/list-and-search-products`
- `feature/update-products`
- `feature/delete-products`

## Pull Requests

El listado real de Pull Requests se documentara en `docs/git-flow-evidence.md`
cuando todos los PRs esten creados y fusionados.

## Autor

Cesar Enmanuel Ogando Perdomo - Matricula 2024-2485

## Repositorio

https://github.com/enmanuel0112/crud-git-flow-programacion-iii
