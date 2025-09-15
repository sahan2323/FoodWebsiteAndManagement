import { useState, useContext } from "react";
import { CartContext } from "../components/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [discount, setDiscount] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const [paymentStep, setPaymentStep] = useState(1);



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
  const subtotal = cart.reduce((total, item) => {
    const itemPrice = item.originalPrice || item.price;
    return total + (itemPrice * item.quantity);
  }, 0);
  
  const savings = cart.reduce((total, item) => {
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
    clearCart();
    setAppliedPromo(null);
    setDiscount(0);
    setPromoCode("");
    setIsCheckingOut(false);
    setPaymentStep(1);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-24 flex items-center">
        <div className="container mx-auto text-center py-16">
          <div className="relative mb-8">
            <div className="text-9xl animate-bounce">🛒</div>
            <div className="absolute -top-4 -right-4 text-4xl animate-pulse">✨</div>
          </div>
          <h1 className="display-2 text-[var(--primary-dark)] mb-6">Your Cart is Empty</h1>
          <p className="body-large text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover our exquisite collection of culinary masterpieces and start building your perfect meal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="button-primary px-8 py-4 inline-flex items-center justify-center gap-3 transform hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="text-xl">🍽️</span>
              <span>Explore Our Menu</span>
            </a>
            <a
              href="/services"
              className="button-secondary px-8 py-4 inline-flex items-center justify-center gap-3 transform hover:scale-105 transition-transform duration-200"
            >
              <span className="text-xl">✨</span>
              <span>View Experiences</span>
            </a>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
              <div className="text-3xl mb-3">👨‍🍳</div>
              <h3 className="font-semibold text-blue-800 mb-2">Chef Prepared</h3>
              <p className="text-sm text-blue-600">Fresh ingredients, expert cooking</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
              <div className="text-3xl mb-3">🚚</div>
              <h3 className="font-semibold text-green-800 mb-2">Fast Delivery</h3>
              <p className="text-sm text-green-600">Hot and fresh at your doorstep</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="font-semibold text-purple-800 mb-2">Premium Quality</h3>
              <p className="text-sm text-purple-600">Only the finest ingredients</p>
            </div>
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
                <h2 className="heading-2 text-[var(--primary-dark)]">Order Items ({cart.length})</h2>
                {savings > 0 && (
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                    💚 You're saving ${savings.toFixed(2)}
                  </div>
                )}
              </div>

              {cart.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-md p-6 flex gap-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="relative flex-shrink-0 w-32 h-32 overflow-hidden rounded-xl border border-gray-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                    />
                    {item.chef_special && (
                      <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-semibold animate-pulse shadow-lg">
                        👨‍🍳 Special
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-2xl font-semibold text-[var(--primary-dark)] mb-1">
                            {item.name}
                          </h3>
                          <div className="text-sm text-gray-500 mb-2 capitalize">{item.category}</div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-600 text-3xl font-bold transition-colors duration-200 w-8 h-8 flex items-center justify-center rounded-full"
                          title="Remove item"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          ×
                        </button>
                      </div>
                      
                      <div className="flex items-center gap-6 mb-4">
                        <div className="text-3xl font-extrabold text-[var(--accent-gold)]">
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
                              <span key={index} className="text-xs bg-[var(--bg-cream)] px-3 py-1 rounded-full text-gray-600 border border-[var(--accent-gold)]/30">
                                {custom}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-12 h-12 bg-gray-100 rounded-full font-bold text-[var(--primary-dark)] hover:bg-[var(--accent-gold)] hover:text-white transition-all duration-200 flex items-center justify-center"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          −
                        </button>
                        <span className="text-2xl font-bold text-[var(--primary-dark)] min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-12 h-12 bg-gray-100 rounded-full font-bold text-[var(--primary-dark)] hover:bg-[var(--accent-gold)] hover:text-white transition-all duration-200 flex items-center justify-center"
                          aria-label={`Increase quantity of ${item.name}`}
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
                  <div className="space-y-3">
                    {deliveryOptions.map((option) => (
                      <label key={option.id} className={`flex items-start space-x-4 cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 ${
                        deliveryOption === option.id
                          ? 'border-[var(--accent-gold)] bg-gradient-to-r from-[var(--bg-cream)] to-white shadow-lg'
                          : 'border-gray-200 hover:border-[var(--accent-gold)]/50 hover:bg-gray-50'
                      }`}>
                        <input
                          type="radio"
                          name="delivery"
                          value={option.id}
                          checked={deliveryOption === option.id}
                          onChange={(e) => setDeliveryOption(e.target.value)}
                          className="mt-1 text-[var(--accent-gold)] w-4 h-4"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">{option.icon}</span>
                            <div>
                              <span className="font-semibold text-[var(--primary-dark)]">{option.name}</span>
                              {option.price > 0 && (
                                <span className="text-[var(--accent-gold)] font-bold ml-2">+${option.price}</span>
                              )}
                            </div>
                          </div>
                          <div className="text-sm text-gray-600 mb-1">{option.time}</div>
                          {option.note && (
                            <div className="text-xs text-[var(--accent-gold)] font-medium">{option.note}</div>
                          )}
                        </div>
                        {deliveryOption === option.id && (
                          <div className="text-green-500 text-xl">✓</div>
                        )}
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
                        className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                          isCheckingOut
                            ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                            : 'button-primary hover:scale-105 hover:shadow-lg transform'
                        }`}
                      >
                        {isCheckingOut ? (
                          <div className="flex items-center justify-center gap-3">
                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                            <span>Placing Order...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-3">
                            <span>🔒</span>
                            <span>Proceed to Checkout</span>
                            <span>→</span>
                          </div>
                        )}
                      </button>
                      {isCheckingOut && (
                        <div className="mt-4">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-[var(--accent-gold)] h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
                          </div>
                          <p className="text-xs text-gray-500 text-center mt-2">Processing your order...</p>
                        </div>
                      )}
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
