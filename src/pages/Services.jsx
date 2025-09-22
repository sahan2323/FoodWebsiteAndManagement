import { useState } from "react";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Custom Package Builder",
      shortDesc: "Build your perfect short eats combination",
      fullDesc: "Create your ideal package by selecting from our wide variety of fresh short eats. Perfect for any occasion, from small gatherings to large celebrations.",
      icon: "🛍️",
      price: "Starting at $15",
      duration: "Ready in 30-45 minutes",
      features: [
        "Choose from 15+ varieties",
        "Flexible package sizes",
        "Custom dietary options",
        "Fresh preparation guarantee"
      ],
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 2,
      title: "Party Catering",
      shortDesc: "Full-service catering for celebrations",
      fullDesc: "Let us handle your party catering needs with our comprehensive service. From setup to cleanup, we make your celebration stress-free.",
      icon: "🎉",
      price: "Starting at $12/person",
      duration: "Full event coverage",
      features: [
        "Professional setup service",
        "Decorative presentation",
        "Serving staff available",
        "Complete cleanup included"
      ],
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 3,
      title: "Office Delivery",
      shortDesc: "Fresh meals delivered to your workplace",
      fullDesc: "Convenient lunch delivery service perfect for team meetings, office celebrations, or regular meal breaks. Fresh and delicious every time.",
      icon: "💼",
      price: "Starting at $8/person",
      duration: "30-60 minute delivery",
      features: [
        "Bulk order discounts",
        "Scheduled deliveries",
        "Individual packaging",
        "Invoice billing available"
      ],
      image: "https://images.unsplash.com/photo-1556909114-4f6e67ced5de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 4,
      title: "Home Service",
      shortDesc: "Professional catering at your home",
      fullDesc: "Transform your home gathering into a memorable event. We bring everything needed to serve delicious food, making hosting effortless.",
      icon: "🏠",
      price: "Starting at $18/person",
      duration: "2-4 hours service",
      features: [
        "In-home setup",
        "Professional staff",
        "Complete table service",
        "Post-event cleanup"
      ],
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  ];

  const quickServices = [
    {
      title: "Express Pickup",
      description: "Ready-made packages for immediate pickup",
      icon: "⚡",
      price: "From $10"
    },
    {
      title: "Weekly Meal Plans",
      description: "Regular deliveries of your favorite items",
      icon: "📅",
      price: "From $50/week"
    },
    {
      title: "Gift Packages",
      description: "Perfect gifts for food lovers",
      icon: "🎁",
      price: "From $20"
    },
    {
      title: "Bulk Orders",
      description: "Large quantity orders with discounts",
      icon: "📦",
      price: "From $6/person"
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1 className="display-1">Our <span className="text-gradient">Services</span></h1>
            <p className="body-large">
              From custom packages to full event catering, we provide fresh, delicious short eats 
              for every occasion. Simple ordering, professional service, exceptional taste.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">What We Offer</h2>
            <p className="section-subtitle">
              Professional food services designed to make your events memorable
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay">
                    <div className="service-icon">{service.icon}</div>
                    <div className="service-price">{service.price}</div>
                  </div>
                </div>

                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.shortDesc}</p>
                  
                  <div className="service-meta">
                    <span>{service.duration}</span>
                  </div>

                  <div className="service-features">
                    {service.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <span className="feature-check">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="service-actions">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="button-secondary"
                    >
                      Learn More
                    </button>
                    <button className="button-primary">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">Quick Options</h2>
            <p className="section-subtitle">Additional services for your convenience</p>
          </div>
          
          <div className="quick-services-grid">
            {quickServices.map((service, index) => (
              <div key={index} className="quick-service-card">
                <div className="quick-service-icon">{service.icon}</div>
                <h4 className="quick-service-title">{service.title}</h4>
                <p className="quick-service-description">{service.description}</p>
                <div className="quick-service-price">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">How It Works</h2>
            <p className="section-subtitle">Simple steps to get your delicious food</p>
          </div>
          
          <div className="steps-container">
            {[
              {
                step: "1",
                title: "Choose Service",
                description: "Select the service that fits your needs"
              },
              {
                step: "2", 
                title: "Place Order",
                description: "Call us or visit to place your order"
              },
              {
                step: "3",
                title: "We Prepare", 
                description: "Fresh preparation using quality ingredients"
              },
              {
                step: "4",
                title: "Enjoy",
                description: "Delivery, pickup, or full service - your choice"
              }
            ].map((process, index) => (
              <div key={index} className="step-item">
                <div className="step-number">{process.step}</div>
                <h4 className="step-title">{process.title}</h4>
                <p className="step-description">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section section-alt">
        <div className="container">
          <div className="contact-cta-card">
            <h2 className="heading-1">Ready to Order?</h2>
            <p className="cta-description">
              Contact us today to discuss your needs or place an order. We're here to make your event delicious and memorable.
            </p>
            <div className="cta-actions">
              <button className="cta-button">
                📞 Call Now: (555) 123-4567
              </button>
              <button className="button-secondary">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="service-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">{selectedService.title}</h3>
              <button
                onClick={() => setSelectedService(null)}
                className="modal-close"
              >
                ×
              </button>
            </div>

            <div className="modal-body">
              <img 
                src={selectedService.image} 
                alt={selectedService.title}
                className="modal-image"
              />

              <div className="modal-info">
                <div className="modal-pricing">
                  <span className="modal-price">{selectedService.price}</span>
                  <span className="modal-duration">{selectedService.duration}</span>
                </div>

                <p className="modal-description">{selectedService.fullDesc}</p>

                <div className="modal-features">
                  <h4>What's Included:</h4>
                  <div className="modal-features-list">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="modal-feature">
                        <span className="feature-check">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <button
                onClick={() => setSelectedService(null)}
                className="button-secondary"
              >
                Close
              </button>
              <button className="button-primary">
                Order This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}