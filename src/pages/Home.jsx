import { useState, useEffect } from "react";

export default function Home() {
  const [inquiry, setInquiry] = useState({
    name: "",
    email: "",
    phone: "",
    selectedPackage: "",
    message: ""
  });

  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=1920&h=1080&fit=crop"
  ];

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "An extraordinary culinary journey. Every dish was a masterpiece, and the service was impeccable."
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      comment: "The perfect blend of innovation and tradition. This is fine dining at its absolute best."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 5,
      comment: "Exceptional atmosphere, incredible flavors, and attention to detail that's second to none."
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: ""
  });

  const featuredPackages = [
    {
      id: 1,
      name: "Healthy Meal",
      price: "$40/$60",
      originalPrice: "$45/$70",
      description: "Our healthiest option with fresh ingredients and balanced portions.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
      badge: "Most Healthy",
      features: ["Regular/Large", "Fresh Ingredients", "Low Calorie"]
    },
    {
      id: 2,
      name: "Student Budget Package",
      price: "$15/$25",
      originalPrice: "$20/$30",
      description: "Affordable meals for students including a main and beverage.",
      image: "https://images.unsplash.com/photo-1523983307663-0d22b8ec1d8c?w=600&h=400&fit=crop",
      badge: "Budget Friendly",
      features: ["Regular/Large", "Main + Beverage", "Affordable"]
    },
    {
      id: 3,
      name: "Special Sri Lankan Kottu",
      price: "$12/$18",
      originalPrice: "$14/$20",
      description: "Delicious kottu paired with a beverage, a local favorite.",
      image: "https://images.unsplash.com/photo-1562967916-eb82221dfb26?w=600&h=400&fit=crop",
      badge: "Local Favorite",
      features: ["Regular/Large", "Kottu + Beverage", "Authentic Sri Lankan"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    const button = e.target.querySelector('button[type="submit"]');
    button.classList.add('loading');
    
    setTimeout(() => {
      alert("Thank you for your order inquiry! Our team will contact you within 30 minutes to confirm your reservation.");
      setInquiry({ 
        name: "", 
        email: "", 
        phone: "", 
        selectedPackage: "",
        message: "" 
      });
      button.classList.remove('loading');
    }, 1500);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment) {
      const newReviewData = {
        ...newReview,
        id: Date.now()
      };
      setReviews([...reviews, newReviewData]);
      setNewReview({ name: "", rating: 5, comment: "" });
      alert("Thank you for your review! It means the world to us.");
    }
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>⭐</span>
    ));
  };

  return (
    <div>
      {/* Hero Section with Rotating Images */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26, 54, 54, 0.4) 0%, rgba(45, 90, 90, 0.3) 100%), url('${heroImages[currentHeroImage]}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out'
        }}
      >
        <div className="hero-content">
          <h1 className="display-1 hero-title">
            Healthy Plates,<br />
            <span className="text-gradient">Cultural Tastes</span>
          </h1>
          <p className="body-large hero-subtitle">
            Experience a unique cuisine, exploring various flavors from around the world, with quality and health-conscious options.
          </p>
          <a href="#order-now" className="cta-button">
            <span>Order Now</span>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
            </svg>
          </a> 
          <a href="menu" className="cta-button">
            <span>Discover Menu</span>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
            </svg>
          </a>
        </div>
        
        {/* Hero Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentHeroImage ? 'bg-white w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Featured Packages */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1 section-title">Signature Experiences</h2>
            <p className="section-subtitle">
              Curated dining experiences designed to exceed expectations and create lasting memories
            </p>
          </div>
          
          <div className="grid-premium">
            {featuredPackages.map((pkg) => (
              <div key={pkg.id} className="card-premium">
                <div className="card-image">
                  <img src={pkg.image} alt={pkg.name} />
                  <div className="card-overlay">{pkg.price}</div>
                  {pkg.originalPrice && (
                    <div className="absolute top-1 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      Save ${parseInt(pkg.originalPrice.slice(1)) - parseInt(pkg.price.slice(1))}
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {pkg.badge}
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="card-title">{pkg.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold text-green-600">{pkg.price}</span>
                    {pkg.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                    )}
                  </div>
                  <p className="card-description">{pkg.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-green-600">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <a href="#order-now" className="button-primary">Order Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order/Inquiry Section - Simplified */}
      <section id="order-now" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1 section-title">Place Your Order</h2>
            <p className="section-subtitle">
              Choose your package and we'll get back to you within 30 minutes
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="form-premium">
              <form onSubmit={handleInquirySubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Your full name"
                      value={inquiry.name}
                      onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="your.email@example.com"
                      value={inquiry.email}
                      onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="(555) 123-4567"
                      value={inquiry.phone}
                      onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Select Package *</label>
                    <select
                      className="form-select"
                      value={inquiry.selectedPackage}
                      onChange={(e) => setInquiry({ ...inquiry, selectedPackage: e.target.value })}
                      required
                    >
                      <option value="">Choose a package...</option>
                      {featuredPackages.map((pkg) => (
                        <option key={pkg.id} value={pkg.name}>
                          {pkg.name} - {pkg.price}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Special Requests (Optional)</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Dietary requirements, celebration details, or specific requests..."
                    value={inquiry.message}
                    onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                  />
                </div>
                
                <button type="submit" className="button-primary" style={{width: '100%', justifyContent: 'center'}}>
                  <span>Confirm Order</span>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Experience Gallery */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1 section-title">Experience Our World</h2>
            <p className="section-subtitle">
              Step into an atmosphere where every detail is crafted to perfection, 
              creating unforgettable moments for our guests
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=400&fit=crop",
                title: "Elegant Ambiance",
                description: "Sophisticated interior design with warm lighting and premium furnishings"
              },
              {
                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=400&fit=crop",
                title: "Culinary Artistry",
                description: "Each dish is a masterpiece, crafted with passion and precision"
              },
              {
                image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=500&h=400&fit=crop",
                title: "Master Chefs",
                description: "Award-winning chefs bringing years of expertise to every plate"
              }
            ].map((item, index) => (
              <div key={index} className="card-premium group">
                <div className="card-image">
                  <img src={item.image} alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews - Text Only */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1 section-title">What Our Customers Say</h2>
            <p className="section-subtitle">
              Real experiences from satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {reviews.map((review) => (
              <div key={review.id} className="card-premium" style={{padding: '2rem'}}>
                <div className="flex mb-3">{renderStars(review.rating)}</div>
                <p className="text-gray-600 leading-relaxed italic mb-4">"{review.comment}"</p>
                <div className="font-bold text-lg text-gray-800">- {review.name}</div>
              </div>
            ))}
          </div>

          {/* Add Review Form */}
          <div className="max-w-2xl mx-auto">
            <div className="form-premium">
              <h3 className="heading-2 text-center mb-6">Share Your Experience</h3>
              <form onSubmit={handleReviewSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter your full name"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Rating</label>
                    <select
                      className="form-select"
                      value={newReview.rating}
                      onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ Excellent</option>
                      <option value={4}>⭐⭐⭐⭐ Very Good</option>
                      <option value={3}>⭐⭐⭐ Good</option>
                      <option value={2}>⭐⭐ Fair</option>
                      <option value={1}>⭐ Needs Improvement</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Your Review</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Tell us about your experience..."
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="button-primary" style={{width: '100%', justifyContent: 'center'}}>
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Simplified */}
      <section className="section">
        <div className="container">
          <div className="cta-section">
            <h2 className="heading-1">Ready to Order?</h2>
            <p className="section-subtitle">
              Get in touch with us today and experience delicious, healthy meals
            </p>
            <div className="cta-buttons">
              <a href="#order-now" className="button-primary">
                <span>Place Your Order</span>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                </svg>
              </a>
              <a href="/contact" className="button-secondary">
                <span>Contact Us</span>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}