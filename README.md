# use-fetch

A complete fetch hook and loading and error management components for Next.js applications.

This repository provides a lightweight, type-safe solution for handling data fetching, loading states, and error handling in Next.js projects (compatible with both App Router and Pages Router). It is completely free and designed for easy integration by copying the necessary code files directly into your project.

## Features

- Simple API for data fetching with automatic management of loading and error states.
- TypeScript support with full type inference.
- Customizable loading and error UI components.
- Works in client and server components (when used appropriately).
- Minimal dependencies and small footprint.
- Includes example implementations for common use cases.

## Installation

This project is not published as an npm package. Instead, it is intended for direct code copying to give you full control and avoid dependency overhead. Follow these steps:

1. Navigate to the relevant directories in this repository.
2. Copy the files you need:
   - hook used for `GET` method : [`hook/useApiQuery.ts`](hook/useApiQuery.ts)
   - hook used for another methods : [`hook/useApiMutation.ts`](hook/useApiMutation.ts)
   - Main component : [`component/fetchRenderer.tsx`](./component/fetchRenderer.tsx)
   - Types: [`type`](./type) (if needed for type definitions)
3. Paste them into your project's corresponding directories (e.g., `src/hook/`, `src/component/`).

```
hook/                         # Core data fetching hook
└── useApiQuery.ts
└── useApiMutation.ts
component/
└── fetchRenderer.tsx         # Customizable error display component
type/                         # Shared TypeScript types
└── component.ts
└── hook.ts
```

## Usage Examples

Below are code snippets you can copy-paste directly. These are based on the repository's implementation for quick reference.

## Additional Notes

- **Dependencies**: The hook uses `axios` and `react-query`.
- **Customization**: Feel free to modify the copied code to fit your needs.

## Contributing

If you'd like to improve the hook or components, fork the repository and submit a pull request. Suggestions for better error handling or additional features are welcome.
