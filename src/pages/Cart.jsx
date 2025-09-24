import { useState, useContext } from "react";
import { CartContext } from "../components/CartContext"; // Update this path to match your file struc
export default function Cart() {
  const { cart: cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [discount, setDiscount] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const [showPromoSuccess, setShowPromoSuccess] = useState(false);
  const [removingItem, setRemovingItem] = useState(null);

  const promoCodesDb = {
    "WELCOME15": { discount: 15, description: "Welcome offer - 15% off" },
    "CHEF25": { discount: 25, description: "Chef's special - 25% off" },
    "LOYAL10": { discount: 10, description: "Loyalty discount - 10% off" },
    "WEEKEND20": { discount: 20, description: "Weekend special - 20% off" }
  };

  const deliveryOptions = [
    { 
      id: "pickup", 
      name: "Pickup", 
      time: "Ready in 25 minutes", 
      price: 0, 
      icon: "🏪",
      description: "Collect from restaurant" 
    },
    { 
      id: "standard", 
      name: "Standard Delivery", 
      time: "45-60 minutes", 
      price: 0, 
      icon: "🚗", 
      note: "Free for orders over $50",
      description: "Regular delivery service"
    },
    { 
      id: "express", 
      name: "Express Delivery", 
      time: "25-35 minutes", 
      price: 8, 
      icon: "⚡",
      description: "Priority delivery"
    },
    { 
      id: "premium", 
      name: "White Glove Service", 
      time: "60 minutes", 
      price: 15, 
      icon: "🎩", 
      note: "Setup included",
      description: "Premium service with setup"
    }
  ];

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      handleRemoveItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id) => {
    setRemovingItem(id);
    setTimeout(() => {
      removeFromCart(id);
      setRemovingItem(null);
    }, 300);
  };

  const applyPromoCode = () => {
    const code = promoCode.toUpperCase();
    if (promoCodesDb[code]) {
      setAppliedPromo(promoCodesDb[code]);
      setDiscount(promoCodesDb[code].discount);
      setPromoCode("");
      setShowPromoSuccess(true);
      setTimeout(() => setShowPromoSuccess(false), 3000);
    } else {
      // In a real app, you'd show a proper error message
      alert("Invalid promo code. Try: WELCOME15, CHEF25, LOYAL10, or WEEKEND20");
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    setDiscount(0);
  };

  // Calculations
  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = item.originalPrice || item.price;
    return total + (itemPrice * item.quantity);
  }, 0);
  
  const savings = cartItems.reduce((total, item) => {
    if (item.originalPrice) {
      return total + ((item.originalPrice - item.price) * item.quantity);
    }
    return total;
  }, 0);

  const discountAmount = (subtotal * discount) / 100;
  const selectedDelivery = deliveryOptions.find(opt => opt.id === deliveryOption);
  const deliveryFee = subtotal >= 50 && deliveryOption === 'standard' ? 0 : selectedDelivery?.price || 0;
  const tax = (subtotal - discountAmount) * 0.0875; // 8.75% tax
  const total = subtotal - discountAmount + tax + deliveryFee;

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real app, you'd handle the actual checkout process here
    alert("Order placed successfully! 🎉\n\nOrder confirmation sent to your email.");
    
    // Clear the cart using context
    clearCart();
    setAppliedPromo(null);
    setDiscount(0);
    setPromoCode("");
    setIsCheckingOut(false);
  };

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        {/* Empty Cart Hero Section */}
        <section className="cart-hero">
          <div className="container">
            <div className="cart-hero-content">
              <h1 className="display-1">Your Cart <span className="text-gradient">Awaits</span></h1>
              <p className="body-large">
                Discover our exquisite collection of culinary masterpieces and start building your perfect dining experience.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/30">
                  <span className="text-lg font-semibold text-white">Premium Ingredients</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/30">
                  <span className="text-lg font-semibold text-white">Chef Prepared</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/30">
                  <span className="text-lg font-semibold text-white">Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="section">
          <div className="container">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/menu"
                className="button-primary px-10 py-4 text-lg"
              >
                <span>🍽️</span>
                <span>Explore Our Menu</span>
              </a>
              <a
                href="/experiences"
                className="button-secondary px-10 py-4 text-lg"
              >
                <span>✨</span>
                <span>View Experiences</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="cart-page">
      {/* Cart Hero Section - Matching Contact/Menu Page Style */}
      <section className="cart-hero">
        <div className="container">
          <div className="cart-hero-content">
            <h1 className="display-1">Your Culinary <span className="text-gradient">Selection</span></h1>
            <p className="body-large">
              Review your carefully curated dining experience and complete your order with confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/30">
                <span className="text-lg font-semibold text-white">👨‍🍳 Chef Prepared</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/30">
                <span className="text-lg font-semibold text-white">🔒 Secure Checkout</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/30">
                <span className="text-lg font-semibold text-white">⭐ Premium Service</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/30">
                <span className="text-lg font-semibold text-white">🚀 Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 cart-grid">
            
            {/* Cart Items - Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="heading-2 text-[#0a0f0a] flex items-center gap-3">
                  <span className="w-10 h-10 bg-gradient-to-r from-[#c9a96e] to-[#e8d5b7] rounded-full flex items-center justify-center text-white font-bold">
                    {cartItems.length}
                  </span>
                  Order Items
                </h2>
                {savings > 0 && (
                  <div className="savings-indicator">
                    <span>💰</span>
                    You're saving {savings.toFixed(2)}
                  </div>
                )}
              </div>

              {cartItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`card-premium transform transition-all duration-300 ${
                    removingItem === item.id ? 'cart-item-removing' : 'hover:scale-[1.02]'
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    boxShadow: '0 10px 40px rgba(26, 54, 54, 0.08)'
                  }}
                >
                  <div className="p-8">
                    <div className="flex gap-6 cart-item-content">
                      {/* Enhanced Product Image */}
                      <div className="relative group">
                        <div className="w-36 h-36 cart-item-image-wrapper">
                          <img 
                            src={item.image || 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=300&fit=crop'} 
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            style={{ borderRadius: 'var(--border-radius-md)' }}
                          />
                        </div>
                        {item.chef_special && (
                          <div className="cart-item-badge">
                            <span>👨‍🍳</span>
                            Special
                          </div>
                        )}
                        {item.originalPrice && (
                          <div className="sale-badge">
                            SALE
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1 min-w-0">
                            <h3 className="heading-2 mb-2" style={{ fontSize: '1.75rem', color: 'var(--primary-dark)' }}>
                              {item.name}
                            </h3>
                            <div className="flex items-center gap-3 mb-3">
                              <span className="category-badge">
                                {item.category}
                              </span>
                              {item.chef_special && (
                                <span className="text-sm font-semibold" style={{ color: 'var(--accent-gold)' }}>⭐ Recommended</span>
                              )}
                            </div>
                          </div>
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="remove-button"
                            title="Remove item"
                          >
                            <span className="remove-icon">×</span>
                          </button>
                        </div>
                        
                        <div className="flex items-baseline gap-4 mb-4">
                          <div className="price-current highlighted-price">
                            {'$ ' + item.price}
                          </div>
                          {item.originalPrice && (
                            <div className="price-original">
                              {'$ ' + item.originalPrice}
                            </div>
                          )}
                        </div>
                        
                        {item.customizations && item.customizations.length > 0 && (
                          <div className="mb-6">
                            <p className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--primary-green)' }}>
                              <span>🎯</span>
                              Customizations:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {item.customizations.map((custom, idx) => (
                                <span key={idx} className="customization-tag">
                                  {custom}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <div className="quantity-control-wrapper flex items-center">
                            <button
                              onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                              className="quantity-button"
                            >
                              <span style={{ position: 'relative', zIndex: 1 }}>−</span>
                            </button>
                            <span className="quantity-display">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                              className="quantity-button"
                            >
                              <span style={{ position: 'relative', zIndex: 1 }}>+</span>
                            </button>
                          </div>
                          <div className="text-right">
                            <div className="price-total">
                              {'$ ' + (item.price * item.quantity).toFixed(2)}
                            </div>
                            {item.originalPrice && (
                              <div className="text-sm line-through" style={{ color: 'var(--text-light)' }}>
                                {'$ ' + (item.originalPrice * item.quantity).toFixed(2)}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Continue Shopping */}
              <div className="text-center pt-8">
                <a 
                  href="/menu"
                  className="button-secondary px-10 py-4 text-lg"
                >
                  <span>←</span>
                  <span>Continue Shopping</span>
                </a>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="space-y-8">
              
              {/* Enhanced Promo Code */}
              <div className="card-premium">
                <div className="p-8">
                  <h3 className="heading-2 mb-6 flex items-center gap-3" style={{ fontSize: '1.5rem', color: 'var(--primary-dark)' }}>
                    <span className="text-2xl">🎫</span>
                    Promo Code
                  </h3>
                  
                  {appliedPromo ? (
                    <div className={`promo-success-card ${showPromoSuccess ? 'animate-pulse' : ''}`}>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-bold text-green-800 text-lg flex items-center gap-2 mb-2">
                            <span>✅</span>
                            Code Applied!
                          </div>
                          <div className="text-sm text-green-600">{appliedPromo.description}</div>
                        </div>
                        <button
                          onClick={removePromoCode}
                          className="text-green-600 hover:text-green-800 text-sm font-semibold bg-white px-4 py-2 rounded-full hover:bg-green-50 transition-all duration-200"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <input
                          type="text"
                          placeholder="Enter code"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                          className="flex-1 promo-input"
                          onKeyPress={(e) => e.key === 'Enter' && applyPromoCode()}
                        />
                        <button
                          onClick={applyPromoCode}
                          disabled={!promoCode}
                          className="button-primary px-8 py-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                          style={{ borderRadius: 'var(--border-radius-md)' }}
                        >
                          Apply
                        </button>
                      </div>
                      
                      <div className="bg-gradient-to-r from-[#f9f7f4] to-white p-4 rounded-xl border border-[#c9a96e]/20">
                        <div className="text-xs text-[#6b7280] text-center mb-2">Available codes:</div>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {Object.keys(promoCodesDb).map(code => (
                            <button
                              key={code}
                              onClick={() => setPromoCode(code)}
                              className="promo-code-suggestion"
                            >
                              {code}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Enhanced Delivery Options */}
              <div className="card-premium">
                <div className="p-8">
                  <h3 className="heading-2 text-[#0a0f0a] mb-6 flex items-center gap-3" style={{fontSize: '1.5rem'}}>
                    <span className="text-2xl">🚚</span>
                    Delivery Options
                  </h3>
                  <div className="space-y-4">
                    {deliveryOptions.map((option) => (
                      <label 
                        key={option.id} 
                        className={`delivery-option ${deliveryOption === option.id ? 'selected' : ''}`}
                      >
                        <input 
                          type="radio" 
                          name="delivery" 
                          value={option.id}
                          checked={deliveryOption === option.id}
                          onChange={(e) => setDeliveryOption(e.target.value)}
                          className="w-5 h-5 text-[#c9a96e] focus:ring-[#c9a96e] focus:ring-2" 
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <span className="delivery-icon">{option.icon}</span>
                              <span className="font-semibold text-[#1a3636]">{option.name}</span>
                            </div>
                            {option.price > 0 && (
                              <span className="text-[#c9a96e] font-bold text-lg">+${option.price}</span>
                            )}
                          </div>
                          <div className="text-sm text-[#6b7280] mb-1">{option.time}</div>
                          <div className="text-xs text-[#1a3636]">{option.description}</div>
                          {option.note && (
                            <div className="text-xs text-[#c9a96e] font-medium mt-1 flex items-center gap-1">
                              <span>💡</span>
                              {option.note}
                            </div>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Order Summary */}
              <div className="card-premium overflow-hidden">
                <div className="order-summary-header">
                  <h3 className="heading-2 text-white mb-2 flex items-center gap-3" style={{fontSize: '1.5rem'}}>
                    <span className="text-2xl">📋</span>
                    Order Summary
                  </h3>
                </div>
                <div className="p-8 space-y-5">
                  <div className="space-y-4">
                    <div className="summary-line-item">
                      <span className="text-[#6b7280]">Subtotal</span>
                      <span className="font-semibold text-[#1a3636] text-lg">{'$ ' + subtotal.toFixed(2)}</span>
                    </div>
                    
                    {savings > 0 && (
                      <div className="summary-line-item text-green-600">
                        <span className="flex items-center gap-2">
                          <span>💰</span>
                          Item Savings
                        </span>
                        <span className="font-semibold text-lg">{'-$ ' + savings.toFixed(2)}</span>
                      </div>
                    )}
                    
                    {discount > 0 && (
                      <div className="summary-line-item text-green-600">
                        <span className="flex items-center gap-2">
                          <span>🎫</span>
                          Promo Discount ({discount}%)
                        </span>
                        <span className="font-semibold text-lg">{'-$ ' + discountAmount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="summary-line-item">
                      <span className="text-[#6b7280]">Tax (8.75%)</span>
                      <span className="font-semibold text-[#1a3636] text-lg">{'$ ' + tax.toFixed(2)}</span>
                    </div>
                    
                    <div className="summary-line-item">
                      <span className="text-[#6b7280] flex items-center gap-2">
                        <span>{selectedDelivery?.icon}</span>
                        {selectedDelivery?.name}
                      </span>
                      {deliveryFee === 0 ? (
                        <span className="text-green-600 font-bold text-lg">FREE</span>
                      ) : (
                        <span className="font-semibold text-[#1a3636] text-lg">{'$ ' + deliveryFee.toFixed(2)}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="summary-total">
                    <div className="flex justify-between items-center text-3xl font-bold text-[#1a3636] mb-2 highlighted-total">
                      <span>Total</span>
                      <span className="total-amount highlighted-price">
                        {'  $' + total.toFixed(2)}
                      </span>
                    </div>
                    {(savings + discountAmount) > 0 && (
                      <div className="text-sm text-green-600 text-right font-medium">
                        🎉 You saved {(savings + discountAmount).toFixed(2)}!
                      </div>
                    )}
                  </div>

                  <div className="pt-6 space-y-4 centered-button-container">
                    <button
                      onClick={handleCheckout}
                      disabled={isCheckingOut}
                      className={`w-full checkout-button ${
                        isCheckingOut ? 'opacity-75 cursor-not-allowed' : ''
                      } text-xl font-semibold flex items-center justify-center gap-3`}
                    >
                      {isCheckingOut ? (
                        <>
                          <div className="loading-spinner"></div>
                          Processing Order...
                        </>
                      ) : (
                        <>
                          <span>🛒</span>
                          Proceed to Checkout
                        </>
                      )}
                    </button>
                    
                    <div className="security-features">
                      <div className="security-feature">
                        <span className="icon">🔒</span>
                        <span>SSL Encrypted</span>
                      </div>
                      <div className="w-1 h-1 bg-[#6b7280] rounded-full"></div>
                      <div className="security-feature">
                        <span className="icon">⚡</span>
                        <span>Instant Processing</span>
                      </div>
                      <div className="w-1 h-1 bg-[#6b7280] rounded-full"></div>
                      <div className="security-feature">
                        <span className="icon">💳</span>
                        <span>All Cards Accepted</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}