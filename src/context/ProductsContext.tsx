import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { ENDPOINTS } from "../config";

// Keys of a product from the API
export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
}

interface ProductsContextType {
  products: Product[];
  loading: boolean;
}

// Create context (initially undefined to detect misuse)
const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

// Provider component that fetches and supplies products to the tree
export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false; // flag to avoid setting state on unmounted component

    // Fetch product data from configured endpoint
    fetch(ENDPOINTS.PRODUCTS)
      // Basic network response check; could be extended with retries/logging
      .then((res) => res.json())
      .then((data: Product[]) => {
        if (!cancelled) {
          setProducts(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Hook to consume the products context with safety check
export const useProducts = () => {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error("useProducts must be used inside ProductsProvider");
  return ctx;
};
