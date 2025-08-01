import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { ProductsProvider } from './context/ProductsContext';
import './main.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
<ThemeProvider>
  <ProductsProvider>
    <App />
  </ProductsProvider>
</ThemeProvider>
);
