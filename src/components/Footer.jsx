export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #0f1419 0%, #1a2332 25%, #1e3a3a 50%, #2a5555 100%);
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(201, 169, 110, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(201, 169, 110, 0.08) 0%, transparent 50%),
            linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.2) 100%);
        }

        .footer::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(201, 169, 110, 0.5) 50%, transparent 100%);
        }

        .footer-content {
          position: relative;
          z-index: 2;
          backdrop-filter: blur(0.5px);
        }

        .section-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
        }

        .section-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(201, 169, 110, 0.05), transparent);
          transition: left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .section-card:hover::before {
          left: 100%;
        }

        .section-card:hover {
          transform: translateY(-4px);
          border-color: rgba(201, 169, 110, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(201, 169, 110, 0.1);
        }

        .brand-logo {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff 0%, #c9a96e 50%, #e8d5b7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          display: inline-block;
          letter-spacing: -0.02em;
        }

        .brand-logo::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #c9a96e, #e8d5b7);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .section-card:hover .brand-logo::after {
          transform: scaleX(1);
        }

        .section-title {
          font-size: 1rem;
          font-weight: 600;
          color: #c9a96e;
          margin-bottom: 1.5rem;
          position: relative;
          padding-left: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .section-title::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 20px;
          background: linear-gradient(180deg, #c9a96e, #e8d5b7);
          border-radius: 2px;
        }

        .footer-link {
          color: #e2e8f0;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 400;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          display: inline-block;
          padding: 0.25rem 0;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #c9a96e, #e8d5b7);
          transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .footer-link:hover {
          color: #c9a96e;
          transform: translateX(4px);
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .social-icon {
          width: 3rem;
          height: 3rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .social-icon::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #c9a96e, #e8d5b7);
          opacity: 0;
          transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .social-icon:hover::before {
          opacity: 1;
        }

        .social-icon:hover {
          transform: translateY(-6px) scale(1.05);
          border-color: rgba(201, 169, 110, 0.3);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2), 0 6px 12px rgba(201, 169, 110, 0.2);
        }

        .social-icon span {
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .social-icon:hover span {
          color: #1a3636;
          transform: scale(1.1);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          padding: 0.5rem;
          border-radius: 8px;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.03);
          transform: translateX(4px);
        }

        .contact-icon {
          font-size: 1.125rem;
          color: #c9a96e;
          width: 1.5rem;
          text-align: center;
        }

        .newsletter-container {
          position: relative;
        }

        .newsletter-form {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .newsletter-input {
          flex: 1;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          padding: 0.875rem 1rem;
          color: #ffffff;
          font-size: 0.9rem;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .newsletter-input:focus {
          outline: none;
          border-color: #c9a96e;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 3px rgba(201, 169, 110, 0.1);
          transform: translateY(-1px);
        }

        .newsletter-btn {
          background: linear-gradient(135deg, #c9a96e 0%, #e8d5b7 100%);
          color: #1a3636;
          border: none;
          border-radius: 10px;
          padding: 0.875rem 1.5rem;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
        }

        .newsletter-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s;
        }

        .newsletter-btn:hover::before {
          left: 100%;
        }

        .newsletter-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(201, 169, 110, 0.4);
        }

        .hours-grid {
          display: grid;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: #cbd5e1;
        }

        .hours-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.25rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .hours-time {
          color: #c9a96e;
          font-weight: 500;
        }

        .bottom-bar {
          background: rgba(0, 0, 0, 0.2);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(201, 169, 110, 0.3) 50%, transparent 100%);
          margin: 2rem 0;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .section-card {
            padding: 1.5rem;
          }

          .brand-logo {
            font-size: 1.75rem;
          }

          .social-icons {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-content {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .newsletter-btn {
            width: 100%;
          }
        }
      `}</style>

      <footer className="footer text-white">
        <div className="footer-content max-w-7xl mx-auto px-6 py-16">
          <div className="footer-grid grid lg:grid-cols-3 gap-8">
            
            {/* Brand Section */}
            <div className="section-card">
              <h3 className="brand-logo mb-4">Foodie Delight</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Where culinary artistry meets impeccable service. Crafting extraordinary dining experiences since 2015.
              </p>
              
              <div className="social-icons flex gap-3">
                {[
                  { icon: '📘', label: 'Facebook' },
                  { icon: '📷', label: 'Instagram' },
                  { icon: '🐦', label: 'Twitter' },
                  { icon: '📱', label: 'TikTok' }
                ].map((social, i) => (
                  <div key={i} className="social-icon" aria-label={social.label}>
                    <span>{social.icon}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation & Contact */}
            <div className="section-card">
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <h4 className="section-title">Navigation</h4>
                  <div className="space-y-2">
                    {[
                      { name: 'Our Menu', href: '/menu' },
                      { name: 'Reservations', href: '/contact' },
                      { name: 'Private Dining', href: '/services' },
                      { name: 'About Us', href: '/about' }
                    ].map((link, i) => (
                      <a key={i} href={link.href} className="footer-link block">
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="section-title">Contact</h4>
                  <div>
                    <div className="contact-item">
                      <span className="contact-icon">📍</span>
                      <span className="text-slate-300 text-sm">123 Culinary Street, Food City</span>
                    </div>
                    <div className="contact-item">
                      <span className="contact-icon">📞</span>
                      <a href="tel:+15551234567" className="footer-link">(555) 123-4567</a>
                    </div>
                    <div className="contact-item">
                      <span className="contact-icon">✉️</span>
                      <a href="mailto:info@foodiedelight.com" className="footer-link">info@foodiedelight.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter & Hours */}
            <div className="section-card">
              <div className="newsletter-container">
                <h4 className="section-title">Stay Connected</h4>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  Subscribe for exclusive offers, events, and culinary updates.
                </p>
                
                <form className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="newsletter-input"
                    required
                  />
                  <button type="submit" className="newsletter-btn">Subscribe</button>
                </form>

                <div>
                  <h5 className="text-sm font-semibold mb-3 text-slate-200">Operating Hours</h5>
                  <div className="hours-grid">
                    <div className="hours-item">
                      <span>Monday - Thursday</span>
                      <span className="hours-time">11:00 AM - 10:00 PM</span>
                    </div>
                    <div className="hours-item">
                      <span>Friday - Saturday</span>
                      <span className="hours-time">11:00 AM - 11:00 PM</span>
                    </div>
                    <div className="hours-item">
                      <span>Sunday</span>
                      <span className="hours-time">12:00 PM - 9:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <div className="mb-4 md:mb-0">
              <span>© {currentYear} Foodie Delight. All rights reserved.</span>
            </div>
            
            <div className="flex gap-6">
              <a href="/privacy" className="footer-link">Privacy Policy</a>
              <a href="/terms" className="footer-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}