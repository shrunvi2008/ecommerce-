function Product({ cart, setCart }) {
  const products = [
    {
      id: 1,
      name: "Nike Shoes",
      price: "₹2999",
      image: "/shoe.png",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "₹1999",
      image: "/watch.png",
    },
    {
      id: 3,
      name: "Headphones",
      price: "₹1499",
      image: "/headphone.png",
    },
    {
      id: 4,
      name: "Laptop",
      price: "₹49999",
      image: "/laptop.png",
    },
    
    {
     id: 5,
      name: "jeans",
      price: "₹1200",
      image: "/jeans.png", 
    },
    {
     id: 6,
      name: "top",
      price: "₹1000",
      image: "/top.png", 
    },
    {
     id: 7,
      name: "sandel",
      price: "₹2000",
      image: "/sandel.png", 
    },
    {
     id: 8,
      name: "braclet",
      price: "₹200",
      image: "/braclet.png", 
    },
    {
     id: 9,
      name: "plazo",
      price: "₹800",
      image: "/plazo.png", 
    },
    {
     id: 10,
      name: "anklet",
      price: "₹1000",
      image: "/anklet.png", 
    },
    {
     id: 11,
      name: "necklace",
      price: "₹200",
      image: "/necklace.png", 
    },
    {
     id: 12,
      name: "saree",
      price: "₹2000",
      image: "/saree.png", 
    },
    
    
    
    
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Products</h1>
      <h2>Cart Items: {cart.length}</h2>

      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              width="150px"
            />

            <h3>{product.name}</h3>
            <p>{product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;