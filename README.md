# 🚀 Vite + React Starter

This is a React project bootstrapped with [Vite](https://vitejs.dev/), a fast frontend build tool.

## 🧱 Requirements

- Node.js (v16 or higher)
- pnpm (or npm/yarn)

---

## 📦 Installation

Install dependencies:

```bash
pnpm install

```

🧪 Development
Start the development server:


pnpm dev
Runs locally at: http://localhost:5173

🏗️ Build
Build the project for production:


pnpm build
Output is located in the dist/ folder

🔍 Preview
Preview the production build locally:


pnpm preview
📁 Project Structure

```
src/
├── App.jsx         # Main React component
├── main.jsx        # Entry point for Vite
└── assets/         # Static assets (images, etc.)
```

🔧 Customization Tips
Add Tailwind CSS:


pnpm add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Environment Variables:

Create a .env file

Prefix custom variables with VITE_ (e.g., VITE_API_URL)

Proxy API Calls:
Configure in vite.config.js:

```
server: {
  proxy: {
    "/api": {
      target: "https://your-api.com",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
}
```
Results after configurations in vite.config.js

<img width="658" alt="image" src="https://github.com/user-attachments/assets/eca2b470-0749-46d3-b4a5-6b266a5f3974" />



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
