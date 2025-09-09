import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "email",
    inquiryType: "general",
    eventDate: "",
    guestCount: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert("Thank you for reaching out! Our team will contact you within 2 hours during business hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      preferredContact: "email",
      inquiryType: "general",
      eventDate: "",
      guestCount: ""
    });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      title: "Phone",
      icon: "📞",
      primary: "(555) 123-4567",
      secondary: "Reservations: (555) 123-4568",
      tertiary: "Catering: (555) 123-4569",
      availability: "Daily 10 AM - 10 PM"
    },
    {
      title: "Email",
      icon: "✉️",
      primary: "info@foodiedelight.com",
      secondary: "reservations@foodiedelight.com", 
      tertiary: "events@foodiedelight.com",
      availability: "Response within 2 hours"
    },
    {
      title: "Location",
      icon: "📍", 
      primary: "123 Culinary Street",
      secondary: "Downtown District",
      tertiary: "Food City, FC 12345",
      availability: "Valet parking available"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-[var(--bg-cream)] to-[var(--bg-light)]">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="display-1 section-title mb-6">
              Let's Create Something <span className="text-gradient">Extraordinary</span>
            </h1>
            <p className="body-large text-gray-600 mb-8">
              Whether you're planning an intimate dinner, a special celebration, or a corporate event, 
              our team is here to craft the perfect culinary experience for you.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-sm font-semibold">Quick Response</div>
                <div className="text-xs text-gray-600">Within 2 hours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-sm font-semibold">Personalized Service</div>
                <div className="text-xs text-gray-600">Tailored to you</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-sm font-semibold">Expert Guidance</div>
                <div className="text-xs text-gray-600">Professional advice</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="form-premium">
                <div className="text-center mb-8">
                  <h2 className="heading-1 section-title mb-4">Send Us a Message</h2>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you promptly</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-input"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Inquiry Type</label>
                      <select
                        name="inquiryType"
                        className="form-select"
                        value={formData.inquiryType}
                        onChange={handleChange}
                      >
                        <option value="general">General Inquiry</option>
                        <option value="reservation">Table Reservation</option>
                        <option value="private_dining">Private Dining</option>
                        <option value="catering">Catering Services</option>
                        <option value="corporate">Corporate Events</option>
                        <option value="wedding">Wedding & Special Events</option>
                        <option value="chef_table">Chef's Table Experience</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  {/* Event Details (conditional) */}
                  {(formData.inquiryType === 'catering' || formData.inquiryType === 'private_dining' || formData.inquiryType === 'wedding' || formData.inquiryType === 'corporate') && (
                    <div className="grid md:grid-cols-2 gap-6 p-6 bg-[var(--bg-cream)] rounded-xl">
                      <div className="form-group">
                        <label className="form-label">Preferred Event Date</label>
                        <input
                          type="date"
                          name="eventDate"
                          className="form-input"
                          value={formData.eventDate}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Number of Guests</label>
                        <select
                          name="guestCount"
                          className="form-select"
                          value={formData.guestCount}
                          onChange={handleChange}
                        >
                          <option value="">Select guest count</option>
                          <option value="2-10">2-10 guests</option>
                          <option value="11-25">11-25 guests</option>
                          <option value="26-50">26-50 guests</option>
                          <option value="51-100">51-100 guests</option>
                          <option value="100+">100+ guests</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div className="form-group">
                    <label className="form-label">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-input"
                      placeholder="Brief subject of your inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      name="message"
                      className="form-textarea"
                      rows="6"
                      placeholder="Please provide details about your inquiry, special requests, dietary restrictions, or any questions you may have..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Preferred Contact Method</label>
                    <div className="flex gap-6 mt-3">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === "email"}
                          onChange={handleChange}
                          className="mr-2 text-[var(--accent-gold)]"
                        />
                        <span className="text-sm">Email Response</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === "phone"}
                          onChange={handleChange}
                          className="mr-2 text-[var(--accent-gold)]"
                        />
                        <span className="text-sm">Phone Call</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[var(--primary-green)] to-[var(--secondary-green)] text-white hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-[var(--accent-gold)]/10">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{method.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[var(--primary-dark)] mb-3">{method.title}</h3>
                        <div className="space-y-1 text-sm">
                          <div className="font-semibold">{method.primary}</div>
                          <div className="text-gray-600">{method.secondary}</div>
                          <div className="text-gray-600">{method.tertiary}</div>
                          <div className="text-xs text-[var(--accent-gold)] font-medium mt-2">
                            {method.availability}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-[var(--primary-green)] to-[var(--secondary-green)] text-white p-6 rounded-2xl">
                <h3 className="heading-2 mb-6" style={{fontSize: '1.5rem'}}>Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Monday - Thursday</span>
                    <span className="font-bold">11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Friday - Saturday</span>
                    <span className="font-bold">11:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sunday</span>
                    <span className="font-bold">12:00 PM - 9:00 PM</span>
                  </div>
                  <div className="border-t border-white/20 pt-3 mt-4">
                    <div className="flex justify-between items-center text-sm">
                      <span>Kitchen Closes</span>
                      <span>1 hour before closing</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="tel:+15551234567"
                  className="bg-[var(--accent-gold)] text-[var(--primary-dark)] p-4 rounded-xl font-semibold text-center hover:bg-[var(--light-gold)] transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <div className="text-2xl mb-2">📞</div>
                  <div className="text-sm">Call Now</div>
                </a>
                <a 
                  href="/menu"
                  className="bg-white border-2 border-[var(--accent-gold)] text-[var(--primary-dark)] p-4 rounded-xl font-semibold text-center hover:bg-[var(--accent-gold)] transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <div className="text-2xl mb-2">📋</div>
                  <div className="text-sm">View Menu</div>
                </a>
              </div>

              {/* Social Media */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-[var(--accent-gold)]/10">
                <h3 className="heading-2 text-center mb-6" style={{fontSize: '1.5rem'}}>Follow Our Journey</h3>
                <div className="flex justify-center space-x-4 mb-4">
                  {[
                    { icon: "📘", label: "Facebook", color: "hover:text-blue-600" },
                    { icon: "📷", label: "Instagram", color: "hover:text-pink-600" },
                    { icon: "🐦", label: "Twitter", color: "hover:text-blue-400" },
                    { icon: "📱", label: "TikTok", color: "hover:text-black" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Stay updated with our latest dishes and events!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h3 className="heading-1 section-title">Visit Our Restaurant</h3>
            <p className="section-subtitle">Located in the heart of downtown, easily accessible and with valet parking</p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-[var(--accent-gold)]/10">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-96 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="text-center z-10">
                <div className="text-8xl mb-4">🗺️</div>
                <h4 className="text-2xl font-bold text-gray-700 mb-2">Interactive Map</h4>
                <p className="text-gray-600 mb-2">123 Culinary Street, Downtown District</p>
                <p className="text-[var(--accent-gold)] font-semibold">Click to open in Google Maps</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-gold)]/10 to-transparent"></div>
            </div>
            
            {/* Map Info */}
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center p-4">
                <div className="text-3xl mb-3">🚗</div>
                <h4 className="font-bold text-[var(--primary-dark)] mb-2">Parking</h4>
                <p className="text-sm text-gray-600">Complimentary valet parking available for all guests</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-3">🚇</div>
                <h4 className="font-bold text-[var(--primary-dark)] mb-2">Public Transport</h4>
                <p className="text-sm text-gray-600">3 minutes walk from Central Station, multiple bus routes</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-3">🚶‍♂️</div>
                <h4 className="font-bold text-[var(--primary-dark)] mb-2">Accessibility</h4>
                <p className="text-sm text-gray-600">Fully wheelchair accessible with dedicated entrance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h3 className="heading-1 section-title">Frequently Asked Questions</h3>
            <p className="section-subtitle">Quick answers to common inquiries</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "Do I need a reservation?",
                a: "While we welcome walk-ins, reservations are highly recommended, especially for weekends and special occasions. Book online or call us directly."
              },
              {
                q: "What dietary options do you offer?",
                a: "We cater to all dietary needs including vegetarian, vegan, gluten-free, and allergen-free options. Please inform us of any restrictions when booking."
              },
              {
                q: "What's your cancellation policy?",
                a: "Please cancel at least 2 hours in advance for regular reservations. Large parties require 24-hour notice. Same-day cancellations may incur a fee."
              },
              {
                q: "Do you offer private dining?",
                a: "Yes! We have private dining rooms for 8-50 guests and full restaurant buyouts. Custom menus and dedicated service available."
              },
              {
                q: "Is there a dress code?",
                a: "We encourage smart casual attire. While formal wear isn't required, we ask guests to dress appropriately for our upscale atmosphere."
              },
              {
                q: "Do you accommodate large groups?",
                a: "Absolutely! We specialize in group dining, corporate events, and celebrations. Our events team will ensure every detail is perfect."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-[var(--accent-gold)]/10 hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-bold text-[var(--primary-dark)] mb-3 flex items-start gap-2">
                  <span className="text-[var(--accent-gold)] mt-1">❓</span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section section-alt">
        <div className="container">
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 rounded-3xl text-center shadow-xl">
            <h3 className="heading-2 mb-4" style={{fontSize: '2rem'}}>🚨 After Hours & Emergencies</h3>
            <p className="mb-6 opacity-90">For urgent matters outside business hours or day-of-event emergencies:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+15551234911"
                className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-50 transition-colors duration-300"
              >
                📞 Emergency: (555) 123-4911
              </a>
              <div className="text-sm opacity-75">
                Available 24/7 for genuine emergencies only
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-1 section-title mb-6">Ready to Begin Your Culinary Journey?</h2>
            <p className="body-large text-gray-600 mb-8">
              Our team is standing by to help you plan the perfect dining experience. 
              Don't hesitate to reach out with any questions or special requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+15551234567"
                className="button-primary px-8 py-4 inline-flex items-center justify-center gap-3"
              >
                <span>📞</span>
                <span>Call Now for Immediate Service</span>
              </a>
              <a 
                href="/menu"
                className="button-secondary px-8 py-4 inline-flex items-center justify-center gap-3"
              >
                <span>📋</span>
                <span>Browse Our Menu</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}