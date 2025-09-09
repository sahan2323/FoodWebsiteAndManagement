import { useState } from "react";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Fine Dining Experience",
      shortDesc: "Elegant atmosphere with world-class service",
      fullDesc: "Immerse yourself in our sophisticated dining room where every detail is designed to create an unforgettable experience. From our handpicked tableware to our professionally trained staff, every moment is crafted to perfection.",
      icon: "🍽️",
      price: "Starting at $85 per person",
      duration: "2-3 hours",
      features: [
        "Seven-course tasting menu",
        "Sommelier wine pairing",
        "Private table service",
        "Complimentary amuse-bouche",
        "Chef's special surprise",
        "Personalized menu cards"
      ],
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop",
      availability: "Daily 6:00 PM - 10:00 PM"
    },
    {
      id: 2,
      title: "Chef's Table Experience",
      shortDesc: "Intimate dining with front-row kitchen views",
      fullDesc: "Witness culinary artistry up close at our exclusive chef's table. Watch our master chefs create each dish while enjoying personalized interaction and behind-the-scenes insights into our culinary process.",
      icon: "👨‍🍳",
      price: "Starting at $150 per person",
      duration: "3-4 hours",
      features: [
        "Interactive chef experience",
        "Exclusive 10-course menu",
        "Kitchen tour and Q&A",
        "Premium wine selection",
        "Signed recipe cards",
        "Photo opportunities"
      ],
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=400&fit=crop",
      availability: "Friday & Saturday 7:00 PM"
    },
    {
      id: 3,
      title: "Private Event Catering",
      shortDesc: "Bespoke catering for your special occasions",
      fullDesc: "Transform your special events with our comprehensive catering services. From intimate gatherings to grand celebrations, we create customized menus and provide full-service catering that exceeds expectations.",
      icon: "🎉",
      price: "Starting at $75 per person",
      duration: "Full event service",
      features: [
        "Custom menu design",
        "Professional event staff",
        "Full setup and breakdown",
        "Premium tableware",
        "Dietary accommodations",
        "Event planning consultation"
      ],
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop",
      availability: "By appointment, 48hr notice"
    },
    {
      id: 4,
      title: "Wine Tasting Events",
      shortDesc: "Curated wine experiences with expert guidance",
      fullDesc: "Explore exceptional wines from around the world with our certified sommelier. Each tasting is paired with carefully selected small plates designed to complement and enhance the wine flavors.",
      icon: "🍷",
      price: "Starting at $65 per person",
      duration: "2 hours",
      features: [
        "6 premium wine selections",
        "Expert sommelier guidance",
        "Artisan cheese pairings",
        "Tasting notes provided",
        "Wine education session",
        "Take-home wine guide"
      ],
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&h=400&fit=crop",
      availability: "Every Thursday 7:00 PM"
    },
    {
      id: 5,
      title: "Culinary Classes",
      shortDesc: "Learn from our master chefs",
      fullDesc: "Master the art of fine cuisine with hands-on cooking classes led by our executive chefs. Learn professional techniques, knife skills, and the secrets behind our signature dishes.",
      icon: "📚",
      price: "Starting at $120 per person",
      duration: "3 hours",
      features: [
        "Hands-on cooking instruction",
        "Professional chef guidance",
        "Recipe cards and techniques",
        "All ingredients provided",
        "Enjoy your creations",
        "Certificate of completion"
      ],
      image: "https://images.unsplash.com/photo-1556909114-567ba4862194?w=600&h=400&fit=crop",
      availability: "Saturdays 2:00 PM - 5:00 PM"
    },
    {
      id: 6,
      title: "Corporate Dining",
      shortDesc: "Sophisticated venue for business meetings",
      fullDesc: "Elevate your business meetings and corporate events with our professional dining services. Private dining rooms, audiovisual equipment, and customized menus designed for business success.",
      icon: "💼",
      price: "Starting at $95 per person",
      duration: "2-4 hours",
      features: [
        "Private dining rooms",
        "A/V equipment available",
        "Business lunch menus",
        "WiFi and presentation setup",
        "Dedicated service staff",
        "Flexible scheduling"
      ],
      image: "https://images.unsplash.com/photo-1556909114-4f6e67ced5de?w=600&h=400&fit=crop",
      availability: "Monday-Friday 11:30 AM - 2:30 PM"
    }
  ];

  const additionalServices = [
    {
      title: "Personal Chef Service",
      description: "Private chef for your home events",
      icon: "👨‍🍳",
      price: "From $200/event"
    },
    {
      title: "Menu Consultation",
      description: "Custom menu planning and design",
      icon: "📋",
      price: "From $150/session"
    },
    {
      title: "Gift Experiences",
      description: "Perfect gifts for food enthusiasts",
      icon: "🎁",
      price: "From $100"
    },
    {
      title: "Food Photography",
      description: "Professional food styling and photography",
      icon: "📸",
      price: "From $300/session"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-[var(--bg-cream)] to-[var(--bg-light)]">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="display-1 section-title mb-6">
              Exclusive <span className="text-gradient">Culinary Services</span>
            </h1>
            <p className="body-large text-gray-600 mb-8">
              Beyond exceptional dining, we offer curated experiences that celebrate the art of cuisine. 
              From intimate chef's tables to grand celebrations, discover services crafted for the discerning palate.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <span className="font-semibold">Award Winning</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">👥</span>
                <span className="font-semibold">Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✨</span>
                <span className="font-semibold">Bespoke Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1 section-title">Our Signature Services</h2>
            <p className="section-subtitle">
              Each service is meticulously designed to provide an extraordinary culinary journey
            </p>
          </div>
          
          <div className="grid-premium">
            {services.map((service) => (
              <div key={service.id} className="card-premium group">
                <div className="card-image">
                  <img src={service.image} alt={service.title} />
                  <div className="absolute top-4 left-4 text-4xl bg-white/90 p-3 rounded-full shadow-lg">
                    {service.icon}
                  </div>
                  <div className="absolute top-4 right-4 bg-[var(--accent-gold)] text-[var(--primary-dark)] px-3 py-1 rounded-full text-sm font-bold">
                    {service.price}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="absolute bottom-4 left-4 right-4 bg-white text-[var(--primary-dark)] py-2 px-4 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[var(--accent-gold)]"
                  >
                    Learn More
                  </button>
                </div>

                <div className="card-body">
                  <h3 className="card-title">{service.title}</h3>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <span>⏱️</span>
                      {service.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <span>📅</span>
                      Available
                    </span>
                  </div>
                  
                  <p className="card-description">{service.shortDesc}</p>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold text-[var(--primary-dark)] mb-3">Includes:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <span className="text-[var(--accent-gold)] mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-[var(--accent-gold)] font-medium">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="button-secondary flex-1 px-4 py-2 text-sm"
                    >
                      Details
                    </button>
                    <button className="button-primary flex-1 px-4 py-2 text-sm">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="section section-alt">
        <div className="container">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-[var(--accent-gold)]/10">
            <div className="text-center mb-12">
              <h3 className="heading-1 section-title mb-4">Service Hours & Availability</h3>
              <p className="text-gray-600">Plan your perfect dining experience with our flexible scheduling</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-[var(--bg-cream)] to-[var(--bg-light)] rounded-2xl">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h4 className="font-bold text-[var(--primary-dark)] mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{service.availability}</p>
                  <div className="text-xs text-[var(--accent-gold)] font-semibold bg-white/50 px-2 py-1 rounded-full inline-block">
                    {service.duration}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-6 bg-gradient-to-r from-[var(--primary-green)] to-[var(--secondary-green)] text-white px-8 py-4 rounded-2xl">
                <span className="text-2xl">📞</span>
                <div className="text-left">
                  <div className="font-semibold">Reserve by Phone</div>
                  <div className="text-sm opacity-90">(555) 123-4567</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h3 className="heading-1 section-title">Additional Services</h3>
            <p className="section-subtitle">Complete culinary solutions for every occasion</p>
          </div>
          
          <div className="grid-features">
            {additionalServices.map((service, index) => (
              <div key={index} className="feature-box hover:scale-105">
                <span className="feature-icon">{service.icon}</span>
                <h4 className="feature-title">{service.title}</h4>
                <p className="feature-description">{service.description}</p>
                <div className="mt-4 text-[var(--accent-gold)] font-bold">{service.price}</div>
                <button className="button-primary mt-4 px-6 py-2 text-sm">
                  Inquire Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h3 className="heading-1 section-title">How We Serve You</h3>
            <p className="section-subtitle">Our meticulous process ensures exceptional experiences every time</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "Discuss your vision, preferences, and requirements with our team"
              },
              {
                step: "2", 
                title: "Planning",
                description: "Custom menu design and detailed event planning tailored to you"
              },
              {
                step: "3",
                title: "Preparation", 
                description: "Expert chefs prepare every element with precision and care"
              },
              {
                step: "4",
                title: "Experience",
                description: "Enjoy your perfectly executed culinary experience"
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--accent-gold)] to-[var(--light-gold)] rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-[var(--primary-dark)] shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[var(--accent-gold)] to-transparent"></div>
                  )}
                </div>
                <h4 className="heading-2 text-[var(--primary-dark)] mb-3" style={{fontSize: '1.5rem'}}>
                  {process.title}
                </h4>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container">
          <div className="bg-gradient-to-br from-[var(--primary-green)] to-[var(--secondary-green)] text-white p-12 rounded-3xl text-center">
            <h3 className="heading-1 mb-6">Ready for an Extraordinary Experience?</h3>
            <p className="body-large mb-8 opacity-90 max-w-3xl mx-auto">
              Let us create a bespoke culinary journey tailored to your preferences. 
              Contact our team today to discuss your perfect dining experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-3 bg-white text-[var(--primary-green)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--light-gold)] transition-all duration-300 hover:scale-105">
                <span>Contact Our Team</span>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                </svg>
              </a>
              <a href="tel:+94711052772" className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[var(--primary-green)] transition-all duration-300">
                <span>📞</span>
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="heading-1 text-[var(--primary-dark)] mb-2">{selectedService.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <span className="text-[var(--accent-gold)]">💰</span>
                    {selectedService.price}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-[var(--accent-gold)]">⏱️</span>
                    {selectedService.duration}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <img 
              src={selectedService.image} 
              alt={selectedService.title}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />

            <p className="text-gray-700 mb-6 leading-relaxed">{selectedService.fullDesc}</p>

            <div className="mb-6">
              <h4 className="font-bold text-[var(--primary-dark)] mb-4">What's Included:</h4>
              <div className="grid md:grid-cols-2 gap-2">
                {selectedService.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <span className="text-[var(--accent-gold)] mr-2">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[var(--bg-cream)] p-4 rounded-xl mb-6">
              <h5 className="font-semibold mb-2">Availability:</h5>
              <p className="text-sm text-gray-600">{selectedService.availability}</p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setSelectedService(null)}
                className="button-secondary flex-1"
              >
                Close
              </button>
              <button className="button-primary flex-1">
                Book This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}