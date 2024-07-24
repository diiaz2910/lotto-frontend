<div align="center">
  <a href="https://graphql.org/" target="_blank"><img src="https://graphql.org/img/logo.svg" width="200" alt="GraphQL Logo"></a>
  <a href="https://reactjs.org" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="200" alt="React Logo"></a>
  <h1>Lotto Project</h1>
</div>


### Description:
This project is the frontend for the Lotto application, designed to display a series of data analyses for the New Zealand lottery. The application is built with React, TypeScript, Vite, Apollo, and GraphQL. It features a custom Mantine template with a variety of components for a rich user interface. Data will be fetched from Google Colab, connected with MongoDB.

### Features:
- **Vite**: Fast build tool and development server.
- **TypeScript**: Typed JavaScript for enhanced code quality and maintainability.
- **Apollo Client**: State management library for GraphQL.
- **GraphQL**: Query language for your API.
- **Mantine Components**: A comprehensive set of accessible React components.
- **PostCSS**: Tool for transforming CSS with JavaScript.
- **ESLint**: Tool for identifying and fixing linting issues in JavaScript/TypeScript code.
- **Data Integration**: Fetches data from Google Colab, connected with MongoDB.

### Setup:
1. **Install Dependencies and Start Development Server**:
   ```bash
   npm install
   
   npm run dev
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
