import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=12")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <section className="home">
      <h1 className="title">Welcome to CatLife Store</h1>
      <p className="description">
        Your one-stop shop for curious cats and cool humans.
      </p>
      <button className="cta-button">Shop Now</button>

      <div className={`product-container ${theme === 'theme2' ? 'list-view' : 'card-view'}`}>
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p className="price">${product.price}</p>
              <p className="category">{product.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
