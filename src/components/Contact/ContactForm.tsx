import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("PLV0ks6ugqy5_G9Q5"); // Replace with your actual public key
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_nb4n4t5', // service ID
        'template_htcx4pd', // template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Paul Kratsios',
        },
        'PLV0ks6ugqy5_G9Q5' // EmailJS public key
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
      console.error('Failed to send email:', error);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Get in Touch</h2>
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>
                I am always eager to explore new opportunities and collaborations.
                If you have any questions or simply wish to connect, please feel free to reach out.
              </p>
              
              <div className="contact-links">
                <a href="mailto:paulkratsios18@gmail.com" className="contact-link">
                  <FaEnvelope />
                  <span>paulkratsios18@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/paulkratsios" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <FaLinkedin />
                  <span>linkedin.com/in/paulkratsios</span>
                </a>
                <a href="https://github.com/PaulKratsios18" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <FaGithub />
                  <span>github.com/PaulKratsios18</span>
                </a>
                <a href="tel:2122037879" className="contact-link">
                  <FaPhone />
                  <span>(212) 203-7879</span>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="Your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="Your message"
                  rows={6}
                />
              </div>
              <motion.button
                type="submit"
                className="submit-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.button>
              
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="form-status success"
                >
                  Message sent successfully!
                </motion.div>
              )}
              
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="form-status error"
                >
                  Failed to send message. Please try again.
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm; 