import React, { useState, useEffect } from "react";

function Panier({ name, prix, picture }) {
  const [isVisible, setIsVisible] = useState(false);
  const [cart, setCart] = useState([]);

  // Show or hide the cart
  const show = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);

  // Add product to cart or increase quantity
  useEffect(() => {
    if (name && prix && picture) {
      const existingProduct = cart.find((product) => product.name === name);

      if (existingProduct) {
        // Product exists, increase quantity by 1
        const updatedCart = cart.map((product) =>
          product.name === name
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      } else {
        // Product doesn't exist, add with quantity 1
        const newProduct = { name, prix, picture, quantity: 1 };
        const updatedCart = [...cart, newProduct];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    }
  }, [name, prix, picture]);

  // Retrieve cart from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  // Calculate total price
  const calculateTotalPrice = () =>
    cart.reduce((total, product) => total + product.prix * product.quantity, 0).toFixed(2);

  // Decrease product quantity or remove it
  const decreaseQuantity = (productToUpdate) => {
    const updatedCart = cart.map((product) =>
      product.name === productToUpdate.name
        ? {
            ...product,
            quantity: product.quantity > 1 ? product.quantity - 1 : 0,
          }
        : product
    );

    // Remove product if quantity is 0
    const filteredCart = updatedCart.filter((product) => product.quantity > 0);
    setCart(filteredCart);
    localStorage.setItem("cart", JSON.stringify(filteredCart));
  };

  return (
    <>
      {/* Cart Icon */}
      <div className="fixed right-5 top-11 z-50 cursor-pointer" onClick={show}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#34D399"
        >
          <path d="m536-84-56-56 142-142-340-340-142 142-56-56 56-58-56-56 84-84-56-58 56-56 58 56 84-84 56 56 58-56 56 56-142 142 340 340 142-142 56 56-56 58 56 56-84 84 56 58-56 56-58-56-84 84-56-56-58 56Z" />
        </svg>
        <p className="text-xs font-light text-white ml-6">
          {cart.reduce((sum, product) => sum + product.quantity, 0)}
        </p>
      </div>

      {/* Cart Modal */}
      {isVisible && (
        <div className="fixed top-0 right-0 z-40 w-full sm:w-2/3 lg:w-1/3 flex items-center justify-center mt-24">
          <div className="bg-black text-white p-8 rounded-lg shadow-lg relative">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-green-500">My Cart</h2>
              <button onClick={closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="28px"
                  viewBox="0 -960 960 960"
                  width="28px"
                  fill="#E5E7EB"
                >
                  <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56Z" />
                </svg>
              </button>
            </div>

            {/* Cart Items */}
            {cart.length > 0 ? (
              <div className="max-h-80 overflow-y-auto">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between mb-4 p-4 bg-gray-800 rounded-lg shadow-md"
                  >
                    <img
                      src={item.picture}
                      alt={item.name}
                      className="w-16 h-16 rounded-md border-2 border-green-500"
                    />
                    <div className="flex-1 ml-4">
                      <h3 className="text-lg font-semibold text-blue-300">{item.name}</h3>
                      <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                      <p className="text-gray-400">Price: ${(item.prix * item.quantity).toFixed(2)}</p>
                    </div>
                    <button onClick={() => decreaseQuantity(item)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        viewBox="0 -960 960 960"
                        width="20px"
                        fill="#F87171"
                      >
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-400">Your cart is empty.</p>
            )}

            {/* Total Price */}
            {cart.length > 0 && (
              <div className="mt-6 flex justify-between items-center">
                <p className="text-xl font-semibold text-gray-300">Total:</p>
                <p className="text-2xl font-bold text-green-500">${calculateTotalPrice()}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Panier;
