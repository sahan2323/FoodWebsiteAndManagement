import { useState, useEffect } from "react";

export default function Menu() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filterBy, setFilterBy] = useState("all");

  const menuItems = [
    // Appetizers
    {
      id: 1,
      name: "Truffle Arancini",
      price: 18,
      originalPrice: 22,
      category: "appetizers",
      description: "Crispy risotto balls infused with black truffle, served with saffron aioli and microgreens",
      image: "https://images.unsplash.com/photo-1559847844-d5c65715f3e5?w=500&h=400&fit=crop",
      dietary: ["vegetarian"],
      chef_special: true,
      spice_level: 0
    },
    {
      id: 2,
      name: "Wagyu Beef Tartare",
      price: 28,
      category: "appetizers",
      description: "Premium wagyu beef, quail egg yolk, capers, shallots, and truffle oil on artisan toast",
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&h=400&fit=crop",
      dietary: [],
      chef_special: true,
      spice_level: 1
    },
    {
      id: 3,
      name: "Oysters Rockefeller",
      price: 24,
      category: "appetizers",
      description: "Fresh Blue Point oysters with spinach, herbs, and pernod, finished with hollandaise",
      image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=500&h=400&fit=crop",
      dietary: ["gluten-free"],
      chef_special: false,
      spice_level: 0
    },

    // Mains
    {
      id: 4,
      name: "Lobster Thermidor",
      price: 48,
      originalPrice: 55,
      category: "mains",
      description: "Whole lobster with cognac cream sauce, gruyere cheese, and fresh herbs",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&h=400&fit=crop",
      dietary: ["gluten-free"],
      chef_special: true,
      spice_level: 0
    },
    {
      id: 5,
      name: "Dry-Aged Ribeye",
      price: 65,
      category: "mains",
      description: "28-day dry-aged prime ribeye with roasted bone marrow and red wine jus",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=400&fit=crop",
      dietary: ["gluten-free"],
      chef_special: true,
      spice_level: 0
    },
    {
      id: 6,
      name: "Chilean Sea Bass",
      price: 42,
      category: "mains",
      description: "Pan-seared sea bass with miso glaze, forbidden rice, and pickled vegetables",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=400&fit=crop",
      dietary: ["gluten-free"],
      chef_special: false,
      spice_level: 1
    },
    {
      id: 7,
      name: "Duck Confit",
      price: 38,
      category: "mains",
      description: "Slow-cooked duck leg with cherry gastrique, duck fat potatoes, and seasonal greens",
      image: "https://images.unsplash.com/photo-1565299585323-38174c4a6773?w=500&h=400&fit=crop",
      dietary: ["gluten-free"],
      chef_special: false,
      spice_level: 0
    },
    {
      id: 8,
      name: "Vegan Wellington",
      price: 32,
      category: "mains",
      description: "Mushroom and lentil wellington with roasted vegetables and herb oil",
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&h=400&fit=crop",
      dietary: ["vegan", "vegetarian"],
      chef_special: false,
      spice_level: 0
    },

    // Salads
    {
      id: 9,
      name: "Burrata & Heirloom Tomato",
      price: 22,
      category: "salads",
      description: "Creamy burrata with heirloom tomatoes, basil oil, aged balsamic, and sourdough croutons",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&h=400&fit=crop",
      dietary: ["vegetarian"],
      chef_special: false,
      spice_level: 0
    },
    {
      id: 10,
      name: "Grilled Octopus Salad",
      price: 26,
      category: "salads",
      description: "Charred octopus with warm potato salad, olives, capers, and lemon vinaigrette",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=400&fit=crop",
      dietary: ["gluten-free"],
      chef_special: true,
      spice_level: 1
    },
    {
      id: 11,
      name: "Quinoa Power Bowl",
      price: 19,
      category: "salads",
      description: "Superfood quinoa with roasted vegetables, avocado, hemp seeds, and tahini dressing",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=400&fit=crop",
      dietary: ["vegan", "vegetarian", "gluten-free"],
      chef_special: false,
      spice_level: 0
    },

    // Desserts
    {
      id: 12,
      name: "Chocolate Soufflé",
      price: 16,
      category: "desserts",
      description: "Dark chocolate soufflé with vanilla bean ice cream and gold leaf (20-minute preparation)",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=400&fit=crop",
      dietary: ["vegetarian"],
      chef_special: true,
      spice_level: 0
    },
    {
      id: 13,
      name: "Crème Brûlée Trilogy",
      price: 14,
      category: "desserts",
      description: "Three mini crème brûlées: vanilla bean, lavender honey, and espresso",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=400&fit=crop",
      dietary: ["vegetarian", "gluten-free"],
      chef_special: false,
      spice_level: 0
    },
    {
      id: 14,
      name: "Lemon Tart",
      price: 12,
      category: "desserts",
      description: "Meyer lemon tart with Italian meringue and candied lemon zest",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&h=400&fit=crop",
      dietary: ["vegetarian"],
      chef_special: false,
      spice_level: 0
    },

    // Beverages
    {
      id: 15,
      name: "Wine Pairing Flight",
      price: 35,
      category: "beverages",
      description: "Three carefully selected wines to complement your meal, served with tasting notes",
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&h=400&fit=crop",
      dietary: [],
      chef_special: true,
      spice_level: 0
    },
    {
      id: 16,
      name: "Craft Cocktail",
      price: 16,
      category: "beverages",
      description: "House-crafted cocktail with premium spirits and fresh ingredients",
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500&h=400&fit=crop",
      dietary: [],
      chef_special: false,
      spice_level: 0
    },
    {
      id: 17,
      name: "Artisan Coffee Service",
      price: 8,
      category: "beverages",
      description: "Single-origin coffee prepared with precision, served with petit fours",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&h=400&fit=crop",
      dietary: ["vegan", "vegetarian"],
      chef_special: false,
      spice_level: 0
    }
  ];

  const categories = [
    { id: "all", name: "All Dishes", icon: "🍽️" },
    { id: "appetizers", name: "Appetizers", icon: "🥗" },
    { id: "mains", name: "Main Courses", icon: "🥩" },
    { id: "salads", name: "Salads", icon: "🥬" },
    { id: "desserts", name: "Desserts", icon: "🍰" },
    { id: "beverages", name: "Beverages", icon: "🍷" }
  ];

  const dietaryFilters = [
    { id: "all", name: "All Items" },
    { id: "vegetarian", name: "Vegetarian" },
    { id: "vegan", name: "Vegan" },
    { id: "gluten-free", name: "Gluten-Free" }
  ];

  // Filter and search logic
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
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

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    
    // Visual feedback
    const button = document.querySelector(`[data-item-id="${item.id}"]`);
    if (button) {
      button.innerHTML = "Added! ✓";
      button.style.background = "linear-gradient(45deg, #10B981, #059669)";
      setTimeout(() => {
        button.innerHTML = "Add to Cart";
        button.style.background = "";
      }, 1500);
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

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
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-[var(--bg-cream)] to-[var(--bg-light)]">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="display-1 section-title mb-6">
              Culinary <span className="text-gradient">Masterpieces</span>
            </h1>
            <p className="body-large text-gray-600 mb-8">
              Each dish is a carefully crafted symphony of flavors, textures, and artistry. 
              Discover our collection of signature creations that redefine fine dining.
            </p>
            {getTotalItems() > 0 && (
              <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg border border-[var(--accent-gold)]/20">
                <span className="text-2xl">🛒</span>
                <span className="font-semibold text-[var(--primary-dark)]">
                  {getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''} in cart
                </span>
                <a href="/cart" className="text-[var(--accent-gold)] font-semibold hover:underline">
                  View Cart →
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Filter & Search Controls */}
      <section className="section" style={{paddingTop: '3rem', paddingBottom: '2rem'}}>
        <div className="container">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--accent-gold)]/10 mb-12">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[var(--accent-gold)] focus:outline-none transition-all duration-300 text-lg"
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">🔍</span>
              </div>
            </div>

            {/* Filters */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[var(--primary-dark)] mb-3">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[var(--accent-gold)] focus:outline-none"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--primary-dark)] mb-3">Dietary</label>
                <select
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[var(--accent-gold)] focus:outline-none"
                >
                  {dietaryFilters.map(filter => (
                    <option key={filter.id} value={filter.id}>{filter.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--primary-dark)] mb-3">Results</label>
                <div className="p-3 bg-gray-100 rounded-xl text-center font-semibold">
                  {sortedItems.length} dish{sortedItems.length !== 1 ? 'es' : ''} found
                </div>
              </div>
            </div>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[var(--primary-green)] to-[var(--secondary-green)] text-white shadow-lg transform scale-105'
                    : 'bg-white text-[var(--primary-dark)] border-2 border-[var(--accent-gold)]/20 hover:border-[var(--accent-gold)] hover:shadow-lg'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid-premium">
            {sortedItems.map((item) => (
              <div key={item.id} className="card-premium group">
                <div className="card-image relative">
                  <img src={item.image} alt={item.name} />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-[var(--accent-gold)] text-[var(--primary-dark)] px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                      ${item.price}
                    </div>
                    {item.originalPrice && (
                      <div className="text-center mt-1">
                        <span className="text-sm text-gray-500 line-through bg-white/90 px-2 py-1 rounded">
                          ${item.originalPrice}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Chef's Special Badge */}
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
                      <div className="flex ml-2">
                        {renderSpiceLevel(item.spice_level)}
                      </div>
                    )}
                  </div>

                  <p className="card-description">{item.description}</p>

                  <div className="flex items-center justify-between mt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[var(--accent-gold)]">
                        ${item.price}
                      </div>
                      {item.originalPrice && (
                        <div className="text-sm text-gray-400 line-through">
                          ${item.originalPrice}
                        </div>
                      )}
                    </div>
                    <button
                      data-item-id={item.id}
                      onClick={() => addToCart(item)}
                      className="button-primary px-8 py-3 text-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {sortedItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="heading-2 text-[var(--primary-dark)] mb-4">No dishes found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
              <button
                onClick={() => {
                  setSearchTerm("");
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

      {/* Special Features */}
      <section className="section">
        <div className="container">
          <div className="bg-gradient-to-br from-[var(--primary-green)] to-[var(--secondary-green)] text-white p-12 rounded-3xl">
            <div className="text-center mb-8">
              <h3 className="heading-1 mb-4">🍾 Wine Pairing Available</h3>
              <p className="body-large opacity-90">
                Enhance your dining experience with expertly selected wine pairings for each course
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Sommelier Selection",
                  description: "Our certified sommelier personally selects wines to complement each dish",
                  icon: "🍷"
                },
                {
                  title: "Premium Collection",
                  description: "Over 300 wines from renowned vineyards around the world",
                  icon: "🏆"
                },
                {
                  title: "Perfect Pairing",
                  description: "Each wine is chosen to enhance and elevate the flavors of your meal",
                  icon: "✨"
                }
              ].map((feature, index) => (
                <div key={index} className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-lg">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className="font-bold text-xl mb-2">{feature.title}</h4>
                  <p className="opacity-90">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-1 section-title mb-6">Ready to Experience Culinary Excellence?</h2>
            <p className="body-large text-gray-600 mb-8">
              Reserve your table today and embark on an unforgettable culinary journey crafted by our award-winning chefs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="button-primary px-8 py-4">
                <span>Reserve Your Table</span>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                </svg>
              </a>
              {getTotalItems() > 0 && (
                <a href="/cart" className="button-secondary px-8 py-4">
                  <span>View Cart ({getTotalItems()})</span>
                  <span className="text-xl">🛒</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}