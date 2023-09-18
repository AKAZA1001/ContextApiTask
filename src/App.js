import React from 'react';
import { CartProvider } from './CartContext'; // Import your CartContext file
import ProductList from './ProductList'; // Your product list component

function App() {
  return (
    <CartProvider>
      <div className="App">
        {/* Your other components */}
        <ProductList />
      </div>
    </CartProvider>
  );
}

export default App;
