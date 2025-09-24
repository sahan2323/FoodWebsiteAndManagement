import { useContext, useState } from "react";
import { CartContext } from "../components/CartContext";

import Modal from "../components/Modal";

export default function Menu() {
  const { addToCart, cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const [selectedCuisine, setSelectedCuisine] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filterBy, setFilterBy] = useState("all");
  const [addedToCartIds, setAddedToCartIds] = useState(new Set());
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const menuItems = [
    {
      cuisine: "Sri Lankan",
      items: [
        {
          id: 1,
          name: "Sri Lankan Kottu",
          price: 12,
          category: "noodles",
          description: "Chopped roti stir-fried with vegetables, egg, and spices",
          image: "https://images.unsplash.com/photo-1604908177522-040f18c202f1?w=500&h=400&fit=crop",
          dietary: ["non-veg"],
          chef_special: true,
          spice_level: 2
        },
        {
          id: 2,
          name: "Pol Sambol",
          price: 5,
          category: "veg",
          description: "Spicy coconut relish with chili, onion, and lime",
          image: "https://images.unsplash.com/photo-1630450204925-476c7a5a5e29?w=500&h=400&fit=crop",
          dietary: ["vegan", "gluten-free"],
          chef_special: false,
          spice_level: 2
        }
      ]
    },
    {
      cuisine: "Indian",
      items: [
        {
          id: 3,
          name: "Paneer Butter Masala",
          price: 14,
          category: "curries",
          description: "Paneer cooked in creamy tomato sauce with butter & spices",
          image: "https://images.unsplash.com/photo-1589308078059-f634b47d4c29?w=500&h=400&fit=crop",
          dietary: ["vegetarian"],
          chef_special: true,
          spice_level: 1
        },
        {
          id: 4,
          name: "Chicken Tikka Masala",
          price: 16,
          category: "curries",
          description: "Chargrilled chicken in rich spiced curry sauce",
          image: "https://images.unsplash.com/photo-1604909053195-64dd5b43dfc4?w=500&h=400&fit=crop",
          dietary: ["non-veg", "gluten-free"],
          chef_special: false,
          spice_level: 2
        }
      ]
    },
    {
      cuisine: "American",
      items: [
        {
          id: 5,
          name: "Classic Tuna Salad",
          price: 10,
          category: "salads",
          description: "Creamy tuna mixed with vegan mayo, Dijon mustard and a touch of garlic and spice.",
          image: "https://images.unsplash.com/photo-1605522018064-26d9a2a441a6?w=500&h=400&fit=crop",
          dietary: ["non-veg"],
          chef_special: false,
          spice_level: 1
        }
      ]
    },
    {
      cuisine: "Thai",
      items: [
        {
          id: 6,
          name: "Tom Yum Soup",
          price: 10,
          category: "soups",
          description: "Hot and sour Thai soup with lemongrass and shrimp",
          image: "https://images.unsplash.com/photo-1605522018064-26d9a2a441a6?w=500&h=400&fit=crop",
          dietary: ["non-veg"],
          chef_special: false,
          spice_level: 3
        }
      ]
    }
    
  ];

  const cuisines = [
    { id: "all", name: "All Cuisines", icon: "🌍" },
    { id: "Sri Lankan", name: "Sri Lankan", icon: "🇱🇰" },
    { id: "Indian", name: "Indian", icon: "🇮🇳" },
    { id: "American", name: "American", icon: "🇺🇸" },
    { id: "Thai", name: "Thai", icon: "🇹🇭" },
    { id: "Chinese", name: "Chinese", icon: "🇨🇳" }
  ];

  const categories = [
    { id: "all", name: "All Dishes" },
    { id: "appetizers", name: "Appetizers" },
    { id: "soups", name: "Soups" },
    { id: "veg", name: "Vegetarian" },
    { id: "non-veg", name: "Non-Veg" },
    { id: "curries", name: "Curries" },
    { id: "salads", name: "Salads" },
    { id: "noodles", name: "Noodles" },
    { id: "desserts", name: "Desserts" },
    { id: "beverages", name: "Beverages" }
  ];

  const dietaryFilters = [
    { id: "all", name: "All Items" },
    { id: "vegetarian", name: "Vegetarian" },
    { id: "vegan", name: "Vegan" },
    { id: "gluten-free", name: "Gluten-Free" }
  ];

  // Filter by cuisine first, then category, search, dietary
  const filteredItems = menuItems
    .filter(group => selectedCuisine === "all" || group.cuisine === selectedCuisine)
    .flatMap(group => group.items)
    .filter(item => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDietary = filterBy === "all" || item.dietary.includes(filterBy);
      return matchesCategory && matchesSearch && matchesDietary;
    });

  // Sort items
  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });



  const renderSpiceLevel = (level) => {
    return Array(3).fill(0).map((_, i) => (
      <span key={i} className={i < level ? "text-red-500" : "text-gray-300"}>🌶️</span>
    ));
  };

  const renderDietaryIcons = (dietary) => {
    const icons = {
      vegetarian: "🌱",
      vegan: "🌿",
      "gluten-free": "🌾"
    };
    return dietary.map(diet => (
      <span key={diet} className="text-sm" title={diet}>
        {icons[diet]}
      </span>
    ));
  };

  return (
    <div className="menu-page">

      {/* Menu Hero Section - Matching Contact Page Style */}
      <section className="menu-hero">
        <div className="container">
          <div className="menu-hero-content">
            <h1 className="display-1">Our Exquisite <span className="text-gradient">Menu</span></h1>
            <p className="body-large">
              Discover a world of flavors crafted with passion and served with excellence. 
              Each dish tells a story of tradition, innovation, and culinary artistry.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/30">
                <span className="text-lg font-semibold text-white">{menuItems.flatMap(g => g.items).length} Signature Dishes</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/30">
                <span className="text-lg font-semibold text-white">{cuisines.length - 1} Cuisine Types</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/30">
                <span className="text-lg font-semibold text-white">Chef's Specials</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Cuisine Selector */}
      <section className="bg-white py-8" style={{boxShadow: 'var(--shadow-light)', borderBottom: '1px solid rgba(201, 169, 110, 0.1)'}}>
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--primary-dark)'}}>Choose Your Cuisine</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {cuisines.map(cuisine => (
              <button
                key={cuisine.id}
                onClick={() => setSelectedCuisine(cuisine.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCuisine === cuisine.id
                    ? 'text-white shadow-lg'
                    : 'bg-white border-2 hover:shadow-md'
                }`}
                style={{
                  background: selectedCuisine === cuisine.id ? 'var(--gradient-primary)' : 'white',
                  color: selectedCuisine === cuisine.id ? 'white' : 'var(--primary-dark)',
                  borderColor: selectedCuisine === cuisine.id ? 'transparent' : 'rgba(201, 169, 110, 0.3)',
                }}
                onMouseEnter={(e) => {
                  if (selectedCuisine !== cuisine.id) {
                    e.target.style.borderColor = 'var(--accent-gold)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCuisine !== cuisine.id) {
                    e.target.style.borderColor = 'rgba(201, 169, 110, 0.3)';
                  }
                }}
              >
                <span>{cuisine.icon}</span>
                <span>{cuisine.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Filters & Search */}
      <section className="section-alt" style={{paddingTop: '3rem', paddingBottom: '3rem'}}>
        <div className="container">
          <div className="form-premium">
            
            {/* Section Header */}
            <div className="text-center mb-8">
              <h2 className="heading-2 mb-4" style={{color: 'var(--primary-dark)'}}>Find Your Perfect Dish</h2>
              <p className="max-w-2xl mx-auto" style={{color: 'var(--text-light)'}}>
                Filter by category, dietary preferences, or search for something specific
              </p>
            </div>

            {/* Enhanced Search */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">🔍</span>
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-input pl-12"
                />
              </div>
            </div>

            {/* Enhanced Sort, Dietary, Results */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="form-group">
                <label className="form-label">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="form-select"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Dietary</label>
                <select
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value)}
                  className="form-select"
                >
                  {dietaryFilters.map(filter => (
                    <option key={filter.id} value={filter.id}>{filter.name}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Results</label>
                <div className="p-3 rounded-xl text-center font-semibold border" style={{
                  background: 'linear-gradient(to right, rgba(201, 169, 110, 0.1), rgba(45, 90, 90, 0.1))',
                  borderColor: 'rgba(201, 169, 110, 0.2)',
                  color: 'var(--primary-green)'
                }}>
                  <div className="text-2xl font-bold">{sortedItems.length}</div>
                  <div className="text-sm" style={{color: 'var(--text-light)'}}>
                    dish{sortedItems.length !== 1 ? 'es' : ''} found
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'text-white shadow-lg scale-105'
                    : 'bg-white border-2 hover:shadow-lg'
                }`}
                style={{
                  background: selectedCategory === category.id ? 'var(--gradient-primary)' : 'white',
                  color: selectedCategory === category.id ? 'white' : 'var(--primary-dark)',
                  borderColor: selectedCategory === category.id ? 'transparent' : 'rgba(201, 169, 110, 0.2)',
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category.id) {
                    e.target.style.borderColor = 'var(--accent-gold)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category.id) {
                    e.target.style.borderColor = 'rgba(201, 169, 110, 0.2)';
                  }
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid-premium">
            {sortedItems.map((item) => (
              <div key={item.id} className="card-premium group">
                <div className="card-image relative">
                  <img src={item.image} alt={item.name} />

                  {/* Price */}
                  <div className="absolute top-4 right-4">
                    <div className="card-overlay">
                      ${item.price}
                    </div>
                  </div>

                  {/* Chef Special */}
                  {item.chef_special && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <span>👨‍🍳</span>
                      <span>Chef's Special</span>
                    </div>
                  )}

                  {/* Dietary Icons */}
                  {item.dietary.length > 0 && (
                    <div className="absolute bottom-4 left-4 flex gap-1 bg-white/90 px-2 py-1 rounded-full">
                      {renderDietaryIcons(item.dietary)}
                    </div>
                  )}
                </div>

                <div className="card-body">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="card-title flex-1">{item.name}</h3>
                    {item.spice_level > 0 && (
                      <div className="flex ml-2">{renderSpiceLevel(item.spice_level)}</div>
                    )}
                  </div>

                  <p className="card-description">{item.description}</p>

                  <div className="flex items-center justify-between mt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold" style={{color: 'var(--accent-gold)'}}>
                        ${item.price}
                      </div>
                    </div>
                    <button
                      data-item-id={item.id}
                      onClick={() => {
                        addToCart(item);
                        setAddedToCartIds((prev) => new Set(prev).add(item.id));
                        setTimeout(() => {
                          setAddedToCartIds((prev) => {
                            const newSet = new Set(prev);
                            newSet.delete(item.id);
                            return newSet;
                          });
                        }, 2000);
                        setIsCartModalOpen(true);
                      }}
                      className="button-primary px-8 py-3 text-sm flex items-center justify-center gap-2"
                    >
                      {addedToCartIds.has(item.id) ? (
                        <>
                          <span>✔️</span>
                          <span>Added</span>
                        </>
                      ) : (
                        "Add to Cart"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sortedItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="heading-2 mb-4" style={{color: 'var(--primary-dark)'}}>No dishes found</h3>
              <p className="mb-6" style={{color: 'var(--text-light)'}}>Try adjusting your filters or search terms</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCuisine("all");
                  setSelectedCategory("all");
                  setFilterBy("all");
                }}
                className="button-secondary"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Cart Summary */}
      <button
        onClick={() => setIsCartModalOpen(true)}
        className="fixed bottom-4 right-4 bg-primary-green text-white px-4 py-2 rounded-full shadow-lg z-40"
        aria-label="Open Cart"
      >
        Cart ({cart.length})
      </button>

      <Modal isOpen={isCartModalOpen} onClose={() => setIsCartModalOpen(false)}>
        <div className="flex flex-col max-h-[80vh] overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">My Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg shadow-md" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-600 italic">{item.category}</p>
                      <p className="text-sm font-semibold mt-1">LKR {item.price.toLocaleString()}</p>
                      <div className="flex items-center gap-2 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100 transition"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          −
                        </button>
                        <span className="px-3 py-1 border rounded bg-gray-50">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 border rounded hover:bg-gray-100 transition"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800 text-xl font-bold px-2 rounded transition"
                      aria-label={`Remove ${item.name} from cart`}
                      title="Remove item"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t pt-4 flex justify-between items-center font-semibold">
                <span>Total</span>
                <span>
                  LKR{" "}
                  {cart.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}
                </span>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <button className="bg-black text-white py-3 rounded font-bold">CHECK OUT</button>
                <button
                  onClick={() => setIsCartModalOpen(false)}
                  className="bg-gray-200 py-3 rounded font-bold"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}