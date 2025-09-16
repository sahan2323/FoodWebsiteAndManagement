import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "general"
    });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="display-1">Get in <span className="text-gradient">Touch</span></h1>
            <p className="body-large">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-premium">
                <div className="contact-form-header">
                  <h2 className="heading-2">Send Us a Message</h2>
                  <p className="section-subtitle">Fill out the form below and we'll get back to you promptly</p>
                </div>
                
                <div className="contact-form">
                  {/* Basic Information */}
                  <div className="form-row">
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

                  <div className="form-row">
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
                        <option value="order">Place an Order</option>
                        <option value="catering">Catering Services</option>
                        <option value="feedback">Feedback</option>
                        <option value="complaint">Report an Issue</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-input"
                      placeholder="Brief subject of your message"
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
                      placeholder="Please share your message, questions, or special requests..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`button-primary ${isSubmitting ? 'loading' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="contact-info-section">
              {/* Quick Contact */}
              <div className="contact-info-card">
                <h3 className="heading-2">Quick Contact</h3>
                
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="contact-icon">📞</div>
                    <div className="contact-details">
                      <div className="contact-primary">(555) 123-4567</div>
                      <div className="contact-secondary">Call us directly</div>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <div className="contact-icon">✉️</div>
                    <div className="contact-details">
                      <div className="contact-primary">orders@delibites.com</div>
                      <div className="contact-secondary">Email us anytime</div>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <div className="contact-icon">📍</div>
                    <div className="contact-details">
                      <div className="contact-primary">123 Food Street</div>
                      <div className="contact-secondary">Flavor Town, FT 12345</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="business-hours-card">
                <h3 className="heading-2">Business Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Mon - Sat</span>
                    <span className="hours-time">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Sunday</span>
                    <span className="hours-time">10:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="quick-actions">
                <div className="action-button primary">
                  <div className="action-icon">📞</div>
                  <div className="action-text">Call Now</div>
                </div>
                <div className="action-button secondary" onClick={() => navigate('/menu')} style={{ cursor: 'pointer' }}>
                  <div className="action-icon">📋</div>
                  <div className="action-text">View Menu</div>
                </div>
              </div>

              {/* Response Time */}
              <div className="response-time-card">
                <div className="response-icon">⚡</div>
                <h4 className="response-title">Fast Response</h4>
                <p className="response-text">
                  We typically respond to all messages within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Simplified */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">Frequently Asked Questions</h2>
            <p className="section-subtitle">Quick answers to common questions</p>
          </div>
          
          <div className="faq-grid">
            {[
              {
                q: "How can I place an order?",
                a: "You can place orders through our website, by phone, or visit us in person. We accept all major payment methods."
              },
              {
                q: "Do you offer delivery?",
                a: "Yes, we offer delivery within a 5-mile radius. Delivery fees and minimum order amounts apply."
              },
              {
                q: "Can I customize my package?",
                a: "Absolutely! We specialize in custom packages. Contact us to discuss your specific needs and preferences."
              },
              {
                q: "What are your delivery times?",
                a: "Standard delivery is 30-45 minutes. Rush orders may be available for an additional fee during busy periods."
              }
            ].map((faq, index) => (
              <div key={index} className="faq-item">
                <h4 className="faq-question">{faq.q}</h4>
                <p className="faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-section">
            <h2 className="heading-1">Ready to Order?</h2>
            <p className="section-subtitle">
              Get in touch with us today and let's create something delicious together.
            </p>
            <div className="cta-buttons">
              <div className="cta-button">
                📞 Call to Order
              </div>
              <div className="button-secondary">
                🛍️ Browse Services
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}