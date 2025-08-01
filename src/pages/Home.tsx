import { useTheme } from "../context/ThemeContext";
import { useProducts } from "../context/ProductsContext";

const Home = () => {
  // Get current theme (used to switch layout between card and list)
  const { theme } = useTheme();

  // Get cached/fetched products and loading state from context
  const { products, loading } = useProducts();

  return (
    <section className="home">
      <h1 className="title">Welcome to Cartzilla!</h1>
      <p className="description">
        The beast of bargains—where your cart roars louder than your wallet.
        Grab it before it stomps away!
      </p>
      <button className="cta-button">Don't click this</button>

      {loading ? (
        <div className="placeholder-grid">
          
          {/* Simple skeleton grid: fixed number of placeholder boxes */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="placeholder-card" />
          ))}
        </div>
      ) : (

        // Once loaded, render products. Theme2 uses list layout, others use card grid.
        <div
          className={`product-container ${
            theme === "theme2" ? "list-view" : "card-view"
          }`}
        >
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
      )}
    </section>
  );
};

export default Home;
