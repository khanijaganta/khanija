import React, { useState } from 'react';

// ProductDetail Component
const ProductDetail = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

// ShoppingCart Component
const ShoppingCart = ({ cart, onUpdateCart, onRemoveFromCart }) => {
  const handleUpdateCart = (productId, quantity) => {
    onUpdateCart(productId, quantity);
  };

  const handleRemoveFromCart = (productId) => {
    onRemoveFromCart(productId);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', flex: '1' }}>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.product.id} style={{ marginBottom: '10px' }}>
          <p>{item.product.name}</p>
          <p>Price: ${item.product.price}</p>
          <p>
            Quantity: 
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleUpdateCart(item.product.id, parseInt(e.target.value))}
            />
          </p>
          <button onClick={() => handleRemoveFromCart(item.product.id)}>Remove</button>
        </div>
      ))}
      <p>Total: ${totalPrice}</p>
    </div>
  );
};

// App Component
const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.product.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { product: product, quantity: 1 }]);
    }
  };

  const updateCart = (productId, quantity) => {
    const updatedCart = cart.map(item =>
      item.product.id === productId ? { ...item, quantity: quantity } : item
    );
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.product.id !== productId);
    setCart(updatedCart);
  };

  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 10 },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 20 },
    // Add more products as needed
  ];

  return (
    <div>
      <h1>Online Store</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px' }}>
          <h2>Products</h2>
          {products.map(product => (
            <ProductDetail
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
        <ShoppingCart
          cart={cart}
          onUpdateCart={updateCart}
          onRemoveFromCart={removeFromCart}
        />
      </div>
    </div>
  );
};

export default App;