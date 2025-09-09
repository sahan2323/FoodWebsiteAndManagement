import { useState, useEffect } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [discount, setDiscount] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const [paymentStep, setPaymentStep] = useState(1);

  // Sample cart items with enhanced data
  useEffect(() => {
    const sampleItems = [
      {
        id: 1,
        name: "Truffle Arancini",
        price: 18,
        originalPrice: 22,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1559847844-d5c65715f3e5?w=300&h=200&fit=crop",
        customizations: ["Extra truffle shavings", "Gluten-free option"],
        category: "Appetizer",
        chef_special: true
      },
      {
        id: 2,
        name: "Dry-Aged Ribeye",
        price: 65,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop",
        customizations: ["Medium rare", "Extra bone marrow"],
        category: "Main Course",
        chef_special: true
      },
      {
        id: 3,
        name: "Wine Pairing Flight",
        price: 35,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=200&fit=crop",
        customizations: ["Sommelier's selection"],
        category: "Beverages",
        chef_special: false
      }
    ];
    setCartItems(sampleItems);
  }, []);

  const promoCodesDb = {
    "WELCOME15": { discount: 15, description: "Welcome offer - 15% off" },
    "CHEF25": { discount: 25, description: "Chef's special - 25% off" },
    "LOYAL10": { discount: 10, description: "Loyalty discount - 10% off" },
    "WEEKEND20": { discount: 20, description: "Weekend special - 20% off" }
  };

  const deliveryOptions = [
    { id: "pickup", name: "Pickup", time: "Ready in 25 minutes", price: 0, icon: "🏪" },
    { id: "standard", name: "Standard Delivery", time: "45-60 minutes", price: 0, icon: "🚗", note: "Free for orders over $50" },
    { id: "express", name: "Express Delivery", time: "25-35 minutes", price: 8, icon: "⚡" },
    { id: "premium", name: "White Glove Service", time: "60 minutes", price: 15, icon: "🎩", note: "Setup included" }
  ];

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(id);
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    const code = promoCode.toUpperCase();
    if (promoCodesDb[code]) {
      setAppliedPromo(promoCodesDb[code]);
      setDiscount(promoCodesDb[code].discount);
      setPromoCode("");
    } else {
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
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    alert("Order placed successfully! 🎉\n\nOrder confirmation sent to your email. Our team will contact you shortly with preparation updates.");
    setCartItems([]);
    setAppliedPromo(null);
    setDiscount(0);
    setPromoCode("");
    setIsCheckingOut(false);
    setPaymentStep(1);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-24 flex items-center">
        <div className="container mx-auto text-center py-16">
          <div className="text-9xl mb-8">🛒</div>
          <h1 className="display-2 text-[var(--primary-dark)] mb-6">Your Cart is Empty</h1>
          <p className="body-large text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover our exquisite collection of culinary masterpieces and start building your perfect meal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="button-primary px-8 py-4 inline-flex items-center justify-center gap-3"
            >
              <span>🍽️</span>
              <span>Explore Our Menu</span>
            </a>
            <a
              href="/services"
              className="button-secondary px-8 py-4 inline-flex items-center justify-center gap-3"
            >
              <span>✨</span>
              <span>View Experiences</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="section bg-gradient-to-br from-[var(--bg-cream)] to-[var(--bg-light)]" style={{paddingTop: '4rem', paddingBottom: '4rem'}}>
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="display-1 section-title mb-6">
              Your Culinary <span className="text-gradient">Selection</span>
            </h1>
            <p className="body-large text-gray-600 mb-8">
              Review your carefully curated dining experience and complete your reservation.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">👨‍🍳</span>
                <span className="font-semibold">Chef Prepared</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                <span className="font-semibold">Secure Checkout</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span className="font-semibold">Premium Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="heading-2 text-[var(--primary-dark)]">Order Items ({cartItems.length})</h2>
                {savings > 0 && (
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                    💚 You're saving ${savings.toFixed(2)}
                  </div>
                )}
              </div>

              {cartItems.map((item) => (
                <div key={item.id} className="card-premium">
                  <div className="p-6">
                    <div className="flex gap-6">
                      <div className="relative">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-32 h-32 object-cover rounded-xl"
                        />
                        {item.chef_special && (
                          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                            👨‍🍳 Special
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="heading-2 text-[var(--primary-dark)] mb-1" style={{fontSize: '1.5rem'}}>
                              {item.name}
                            </h3>
                            <div className="text-sm text-gray-500 mb-2">{item.category}</div>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 text-2xl font-bold transition-colors duration-200 w-8 h-8 flex items-center justify-center"
                            title="Remove item"
                          >
                            ×
                          </button>
                        </div>
                        
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-3xl font-bold text-[var(--accent-gold)]">
                            ${item.price}
                          </div>
                          {item.originalPrice && (
                            <div className="text-lg text-gray-400 line-through">
                              ${item.originalPrice}
                            </div>
                          )}
                        </div>
                        
                        {item.customizations && item.customizations.length > 0 && (
                          <div className="mb-4">
                            <p className="text-sm font-semibold text-[var(--primary-dark)] mb-2">Customizations:</p>
                            <div className="flex flex-wrap gap-2">
                              {item.customizations.map((custom, index) => (
                                <span key={index} className="text-xs bg-[var(--bg-cream)] px-3 py-1 rounded-full text-gray-600 border border-[var(--accent-gold)]/20">
                                  {custom}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-12 h-12 bg-gray-100 rounded-full font-bold text-[var(--primary-dark)] hover:bg-[var(--accent-gold)] hover:text-white transition-all duration-200"
                            >
                              −
                            </button>
                            <span className="text-2xl font-bold text-[var(--primary-dark)] min-w-[3rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-12 h-12 bg-gray-100 rounded-full font-bold text-[var(--primary-dark)] hover:bg-[var(--accent-gold)] hover:text-white transition-all duration-200"
                            >
                              +
                            </button>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-[var(--primary-dark)]">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                            {item.originalPrice && (
                              <div className="text-sm text-gray-400 line-through">
                                ${(item.originalPrice * item.quantity).toFixed(2)}
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
                  className="button-secondary px-8 py-3 inline-flex items-center gap-3"
                >
                  <span>←</span>
                  <span>Continue Shopping</span>
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              
              {/* Promo Code */}
              <div className="card-premium">
                <div className="p-6">
                  <h3 className="heading-2 text-[var(--primary-dark)] mb-4" style={{fontSize: '1.25rem'}}>Promo Code</h3>
                  
                  {appliedPromo ? (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-green-800">✅ Applied</div>
                          <div className="text-sm text-green-600">{appliedPromo.description}</div>
                        </div>
                        <button
                          onClick={removePromoCode}
                          className="text-green-600 hover:text-green-800 text-sm font-semibold"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="Enter promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                        className="flex-1 p-3 border-2 border-gray-200 rounded-xl focus:border-[var(--accent-gold)] focus:outline-none text-center font-mono"
                      />
                      <button
                        onClick={applyPromoCode}
                        disabled={!promoCode}
                        className="button-primary px-6 py-3 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Apply
                      </button>
                    </div>
                  )}
                  
                  <div className="mt-4 text-xs text-gray-500 text-center">
                    Try: WELCOME15, CHEF25, LOYAL10, WEEKEND20
                  </div>
                </div>
              </div>

              {/* Delivery Options */}
              <div className="card-premium">
                <div className="p-6">
                  <h3 className="heading-2 text-[var(--primary-dark)] mb-4" style={{fontSize: '1.25rem'}}>Delivery Options</h3>
                  <div className="space-y-4">
                    {deliveryOptions.map((option) => (
                      <label key={option.id} className="flex items-start space-x-4 cursor-pointer p-3 rounded-xl hover:bg-[var(--bg-cream)] transition-colors">
                        <input 
                          type="radio" 
                          name="delivery" 
                          value={option.id}
                          checked={deliveryOption === option.id}
                          onChange={(e) => setDeliveryOption(e.target.value)}
                          className="mt-1 text-[var(--accent-gold)]" 
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xl">{option.icon}</span>
                            <span className="font-semibold">{option.name}</span>
                            {option.price > 0 && (
                              <span className="text-[var(--accent-gold)] font-bold">+${option.price}</span>
                            )}
                          </div>
                          <div className="text-sm text-gray-600">{option.time}</div>
                          {option.note && (
                            <div className="text-xs text-[var(--accent-gold)] mt-1">{option.note}</div>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="card-premium">
                <div className="p-6">
                  <h3 className="heading-2 text-[var(--primary-dark)] mb-6" style={{fontSize: '1.25rem'}}>Order Summary</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    
                    {savings > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Item Savings</span>
                        <span>-${savings.toFixed(2)}</span>
                      </div>
                    )}
                    
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Promo Discount ({discount}%)</span>
                        <span>-${discountAmount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span>Tax (8.75%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>{selectedDelivery?.name}</span>
                      {deliveryFee === 0 ? (
                        <span className="text-green-600 font-semibold">FREE</span>
                      ) : (
                        <span>${deliveryFee.toFixed(2)}</span>
                      )}
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between text-2xl font-bold text-[var(--primary-dark)]">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                      {(savings + discountAmount) > 0 && (
                        <div className="text-sm text-green-600 text-right mt-1">
                          Total savings: ${(savings + discountAmount).toFixed(2)}
                        </div>
                      )}
                    </div>

                    <div className="pt-6">
                      <button
                        onClick={handleCheckout}
                        disabled={isCheckingOut}
                        className="button-primary w-full py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isCheckingOut ? "Placing Order..." : "Proceed to Checkout"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Note */}
              <div className="text-xs text-gray-500 text-center">
                🔒 Secure checkout powered by trusted payment processors. Your data is encrypted.
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
