import { useContext, useState } from "react";
import { CartContext } from "../components/CartContext";

export default function Menu() {
  const { addToCart } = useContext(CartContext);
  const [selectedCuisine, setSelectedCuisine] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filterBy, setFilterBy] = useState("all");

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
      cuisine: "Thai",
      items: [
        {
          id: 5,
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
    { id: "Thai", name: "Thai", icon: "🇹🇭" }
  ];

  const categories = [
    { id: "all", name: "All Dishes" },
    { id: "appetizers", name: "Appetizers" },
    { id: "soups", name: "Soups" },
    { id: "veg", name: "Vegetarian" },
    { id: "non-veg", name: "Non-Veg" },
    { id: "curries", name: "Curries" },
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
    <div className="min-h-screen pt-24">

      {/* Cuisine Selector */}
      <section className="section bg-white py-6">
        <div className="container flex flex-wrap justify-center gap-4">
          {cuisines.map(cuisine => (
            <button
              key={cuisine.id}
              onClick={() => setSelectedCuisine(cuisine.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCuisine === cuisine.id
                  ? 'bg-gradient-to-r from-[var(--primary-green)] to-[var(--secondary-green)] text-white shadow-lg'
                  : 'bg-white text-[var(--primary-dark)] border-2 border-[var(--accent-gold)]/20 hover:border-[var(--accent-gold)]'
              }`}
            >
              <span>{cuisine.icon}</span>
              {cuisine.name}
            </button>
          ))}
        </div>
      </section>

      {/* Filters & Search (same as before) */}
      <section className="section" style={{paddingTop: '1rem', paddingBottom: '2rem'}}>
        <div className="container">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--accent-gold)]/10 mb-12">

            {/* Search */}
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

            {/* Sort, Dietary, Results */}
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

          {/* Category Buttons */}
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
                    <div className="bg-[var(--accent-gold)] text-[var(--primary-dark)] px-4 py-2 rounded-full font-bold text-lg shadow-lg">
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
                      <div className="text-3xl font-bold text-[var(--accent-gold)]">
                        ${item.price}
                      </div>
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

          {sortedItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="heading-2 text-[var(--primary-dark)] mb-4">No dishes found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
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
    </div>
  );
}
