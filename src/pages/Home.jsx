import { useState, useEffect } from "react";

export default function Home() {
  const [inquiry, setInquiry] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "An extraordinary culinary journey. Every dish was a masterpiece, and the service was impeccable.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c2ed?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      comment: "The perfect blend of innovation and tradition. This is fine dining at its absolute best.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 5,
      comment: "Exceptional atmosphere, incredible flavors, and attention to detail that's second to none.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: ""
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const featuredPackages = [
    {
      id: 1,
      name: "Chef's Tasting Menu",
      price: "$125",
      originalPrice: "$150",
      description: "An exquisite 7-course journey showcasing our chef's finest creations with wine pairings",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      badge: "Most Popular",
      features: ["7 Courses", "Wine Pairing", "Seasonal Ingredients", "Chef's Table Experience"]
    },
    /*{
      id: 2,
      name: "Romantic Evening",
      price: "$95",
      originalPrice: "$120",
      description: "Perfect for special occasions with candlelit ambiance, premium selections, and personalized service",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop",
      badge: "Bestseller",
      features: ["Private Table", "Complimentary Champagne", "Rose Petals", "Dessert Surprise"]
    },*/
    {
      id: 2,
      name: "Business Lunch Elite",
      price: "$45",
      originalPrice: "$55",
      description: "Sophisticated dining experience perfect for important business meetings and networking",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop",
      badge: "Executive Choice",
      features: ["Express Service", "Private Dining", "WiFi Access", "Presentation Setup"]
    },
    {
      id: 3,
      name: "Celebration Feast",
      price: "$180",
      originalPrice: "$220",
      description: "Grand celebration package for special events, featuring our signature dishes and premium service",
      image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&h=400&fit=crop",
      badge: "Premium",
      features: ["Serves 8-10", "Custom Menu", "Decorations", "Dedicated Staff"]
    }
  ];

  const achievements = [
    { icon: "🏆", number: "15+", label: "Awards Won" },
    { icon: "⭐", number: "4.9", label: "Customer Rating" },
    { icon: "👨‍🍳", number: "8", label: "Expert Chefs" },
    { icon: "🍽️", number: "50K+", label: "Happy Customers" }
  ];

  // Testimonial carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    // Add loading state
    const button = e.target.querySelector('button[type="submit"]');
    button.classList.add('loading');
    
    setTimeout(() => {
      alert("Thank you for your inquiry! Our team will contact you within 2 hours.");
      setInquiry({ name: "", email: "", phone: "", message: "" });
      button.classList.remove('loading');
    }, 1500);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment) {
      const newReviewData = {
        ...newReview,
        id: Date.now(),
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face"
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
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="display-1 hero-title">
            Culinary Excellence<br />
            <span className="text-gradient">Redefined</span>
          </h1>
          <p className="body-large hero-subtitle">
            Experience the perfect harmony of innovative cuisine, elegant ambiance, 
            and exceptional service in the heart of the city
          </p>
          <a href="/menu" className="cta-button">
            <span>Discover Our Menu</span>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="section" style={{paddingTop: '4rem', paddingBottom: '4rem'}}>
        <div className="container">
          <div className="grid-features">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-5xl mb-4">{achievement.icon}</div>
                <div className="display-2 text-gradient mb-2">{achievement.number}</div>
                <div className="text-lg text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Experience Gallery */}
      <section className="section section-alt">
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
                    <span className="text-2xl font-bold text-[var(--accent-gold)]">{pkg.price}</span>
                    {pkg.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                    )}
                  </div>
                  <p className="card-description">{pkg.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-[var(--accent-gold)]">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button className="button-primary">Reserve Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1 section-title">The Foodie Delight Difference</h2>
            <p className="section-subtitle">
              We don't just serve food; we create experiences that linger in memory long after the last bite
            </p>
          </div>
          
          <div className="grid-features">
            {[
              {
                icon: "🌟",
                title: "Michelin Standards",
                description: "Every dish meets the highest culinary standards with premium, locally-sourced ingredients prepared to perfection"
              },
              {
                icon: "👨‍🍳",
                title: "Award-Winning Chefs",
                description: "Our culinary team consists of internationally trained chefs with combined decades of fine dining experience"
              },
              {
                icon: "🏛️",
                title: "Elegant Atmosphere",
                description: "Sophisticated ambiance with carefully curated design elements that enhance every dining experience"
              },
              /*{
                icon: "🍷",
                title: "Curated Wine Selection",
                description: "Extensive wine cellar featuring rare vintages and perfect pairings selected by our sommelier"
              },*/
              {
                icon: "⚡",
                title: "Impeccable Service",
                description: "White-glove service with attention to every detail, ensuring a seamless and memorable experience"
              },
              /*{
                icon: "🎭",
                title: "Exclusive Events",
                description: "Private dining experiences, wine tastings, and special chef's table events for discerning guests"
              }*/
            ].map((feature, index) => (
              <div key={index} className="feature-box">
                <span className="feature-icon">{feature.icon}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1 section-title">What Our Guests Say</h2>
            <p className="section-subtitle">
              The voices of satisfaction from those who have experienced our culinary excellence
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="glassmorphism p-8 rounded-3xl text-center">
              <div className="flex justify-center mb-6">
                {renderStars(reviews[currentTestimonial].rating)}
              </div>
              <blockquote className="text-2xl font-light italic text-gray-700 mb-6 leading-relaxed">
                "{reviews[currentTestimonial].comment}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <img 
                  src={reviews[currentTestimonial].image} 
                  alt={reviews[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-[var(--accent-gold)]"
                />
                <div className="text-left">
                  <div className="font-bold text-[var(--primary-dark)]">{reviews[currentTestimonial].name}</div>
                  <div className="text-sm text-gray-600">Verified Guest</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mb-12">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-[var(--accent-gold)] w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Add Review Form */}
          <div className="max-w-2xl mx-auto">
            <div className="form-premium">
              <h3 className="heading-2 text-center mb-8">Share Your Experience</h3>
              <form onSubmit={handleReviewSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                      <option value={5}>⭐⭐⭐⭐⭐ Exceptional</option>
                      <option value={4}>⭐⭐⭐⭐ Excellent</option>
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
                    placeholder="Tell us about your dining experience..."
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="button-primary w-full">
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1 section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Have questions about our menu, want to make a reservation, or planning a special event? 
              We're here to help create your perfect dining experience.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="form-premium">
              <form onSubmit={handleInquirySubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
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
                    <label className="form-label">Email Address</label>
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
                
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="Your phone number"
                    value={inquiry.phone}
                    onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Your Message</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Tell us about your inquiry, special requests, or how we can help you..."
                    value={inquiry.message}
                    onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                    required
                  />
                </div>
                
                <button type="submit" className="button-primary w-full">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading-1 section-title mb-6">Ready for an Unforgettable Experience?</h2>
            <p className="body-large text-gray-600 mb-8">
              Join thousands of satisfied guests who have discovered the perfect blend of exceptional cuisine, 
              elegant ambiance, and world-class service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/menu" className="button-primary px-8 py-4">
                <span>Explore Our Menu</span>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                </svg>
              </a>
              <a href="/contact" className="button-secondary px-8 py-4">
                <span>Make Reservation</span>
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