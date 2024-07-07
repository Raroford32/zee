# Getting Started React App

`npm install` - This command is commonly used in the Node.js ecosystem to install project dependencies based on the package.json file.

`npm run dev` - Launches the development mode for your project. Running this script starts a local development server. You can open your project in a browser at [http://localhost:5173](http://localhost:5173)

### Congratulations!

You have the React App open in your browser on a local
server.

Other additional commands are available for preparing files if you
decide to deploy this application to remote hosting.

`npm run build` - Use this script to create an optimized version of your React project for production. The result will be provided as a ready-to-deploy build that you can host or use in production. The build will be located in the "dist" folder.

`npm run preview` - This script allows you to preview your production build locally. It starts an HTTP server to view the build located in the 'dist' folder. Open your project in a browser at [http://localhost:4173](http://localhost:4173)

For the development of this project, we used the Vite build tool. For
more details on working with Vite, please refer to the Vite documentation at [vitejs.dev/guide](http://vitejs.dev/guide)

This is all you need to know to launch the project. For a more detailed understanding, you can check the documentation in the "doc" folder. Open the "index.html" file in your browser.

<hr/>

Also, we'll leave an additional brief description or instruction with a link from the React application bundler Vite: (React + TypeScript + Vite).

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
