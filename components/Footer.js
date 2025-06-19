// components/Footer.js
import styles from './Footer.module.css';
import {
  FaInstagram,
  FaLinkedinIn,
  FaCcPaypal,
  FaApplePay,
  FaCcVisa,
  FaCcMastercard,
  FaGooglePay,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        {/* Newsletter */}
        <div className={styles.newsletter}>
          <h3>Be the first to know</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>Subscribe</button>
          </div>
        </div>

        {/* Contact Info */}
        <div className={styles.contact}>
          <h4>Contact Us</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4>Currency</h4>
          <p>🇺🇸 USD</p>
          <small>
            Transactions will be completed in Euros and a currency reference is available on hover.
          </small>
        </div>

        {/* Links */}
        <div className={styles.links}>
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliance Docs</li>
          </ul>
        </div>

        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={styles.footerBottom}>
        <div className={styles.socialPay}>
          {/* Social Media */}
          <div className={styles.social}>
            <p>Follow us:</p>
            <FaInstagram />
            <FaLinkedinIn />
          </div>

          {/* Payment Icons */}
          <div className={styles.payment}>
            <p>mettā muse accepts</p>
            <div className={styles.icons}>
              <FaGooglePay />
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcPaypal />
              <FaApplePay />
            </div>
          </div>
        </div>

        <p>© 2025 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
