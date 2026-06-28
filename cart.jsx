function Cart({ cart, setCart }) {
  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter(
      (_, index) => index !== indexToRemove
    );

    setCart(updatedCart);
  };

  return (
    <div>
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="product-card">
            <img
              src={item.image}
              alt={item.name}
              width="150px"
            />

            <h3>{item.name}</h3>
            <p>{item.price}</p>

            <button onClick={() => removeFromCart(index)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;