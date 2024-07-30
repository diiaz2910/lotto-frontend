<div align="center">
  <a href="https://graphql.org/" target="_blank"><img src="https://graphql.org/img/logo.svg" width="200" alt="GraphQL Logo"></a>
  <img src="https://github.com/diiaz2910/assets-repo/blob/master/png-transparent-google-colab-logo-tech-companies-removebg-preview.png?raw=true" width="300">
  <a href="https://reactjs.org" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="200" alt="React Logo"></a>
  <h1>Lotto Project</h1>
  <p>This Lotto project aims to display statistics about numbers in the New Zealand lottery game. It will present numbers and statistics obtained from Google Colab, and display them on both web and mobile applications. The app is designed to be updated every time a game is played, ensuring that the data and statistics remain current.</p>
</div>


### Description:
This project is the frontend for the Lotto application, designed to display a series of data analyses for the New Zealand lottery. The application is built with React, TypeScript, Vite, Apollo, and GraphQL. It features a custom Mantine template with a variety of components for a rich user interface. Data will be fetched from Google Colab, connected with MongoDB.

### Current Status:
COLAB Connected to MongoDB and fetching data done. GRAPHQL Server working receiving queries from playground/postman and pending to deploy on VERCEL.
Developing forms to connect front and back and writing graphql documentation on frontend project.
Evualuating best way to present charts and tables with search and sort.

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
