import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "30px" }}>
      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(to right, #4facfe, #00f2fe)",
          color: "white",
          padding: "50px",
          borderRadius: "15px",
          marginBottom: "40px",
        }}
      >
        <h1>🛍️ Welcome to ShopEasy</h1>
        <p style={{ fontSize: "20px" }}>
          Discover the best deals on Shoes, Watches, Laptops & Accessories.
        </p>

        <Link to="/products">
          <button
            style={{
              padding: "12px 25px",
              fontSize: "18px",
              marginTop: "20px",
              cursor: "pointer",
              borderRadius: "8px",
              border: "none",
            }}
          >
            Shop Now
          </button>
        </Link>
      </div>

      {/* Categories */}
      <h2>🛒 Shop by Category</h2>

      <div className="products-container">
        <div className="product-card">
          <img src="/shoe.png" alt="Shoes" width="120" />
          <h3>Shoes</h3>
          <Link to="/products">
            <button>View</button>
          </Link>
        </div>

        <div className="product-card">
          <img src="/watch.png" alt="Watch" width="120" />
          <h3>Watches</h3>
          <Link to="/products">
            <button>View</button>
          </Link>
        </div>

        <div className="product-card">
          <img src="/laptop.png" alt="Laptop" width="120" />
          <h3>Laptops</h3>
          <Link to="/products">
            <button>View</button>
          </Link>
        </div>

        <div className="product-card">
          <img src="/headphone.png" alt="Headphones" width="120" />
          <h3>Headphones</h3>
          <Link to="/products">
            <button>View</button>
          </Link>
        </div>
      </div>

      {/* Offers */}
      <h2 style={{ marginTop: "50px" }}>🔥 Today's Offers</h2>

      <div className="products-container">
        <div className="product-card">
          <h3>👟 Shoes</h3>
          <p>20% OFF</p>
        </div>

        <div className="product-card">
          <h3>⌚ Smart Watches</h3>
          <p>Buy 1 Get 10% OFF</p>
        </div>

        <div className="product-card">
          <h3>💻 Laptops</h3>
          <p>Free Bag + Mouse</p>
        </div>
      </div>

      {/* Features */}
      <h2 style={{ marginTop: "50px" }}>Why Shop With Us?</h2>

      <div className="products-container">
        <div className="product-card">
          <h3>🚚 Free Delivery</h3>
          <p>On orders above ₹999</p>
        </div>

        <div className="product-card">
          <h3>💳 Secure Payment</h3>
          <p>100% Safe Transactions</p>
        </div>

        <div className="product-card">
          <h3>🔄 Easy Returns</h3>
          <p>7-Day Return Policy</p>
        </div>

        <div className="product-card">
          <h3>⭐ Trusted Quality</h3>
          <p>Top Rated Products</p>
        </div>
      </div>
    </div>
  );
}

export default Home;