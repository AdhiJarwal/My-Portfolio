import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaMedium, FaSpinner, FaCheck, FaTimes } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, sending, sent, failed

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/xqadobrb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }),
      });
      
      if (response.ok) {
        setSubmitStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('failed');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      setSubmitStatus('failed');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'aadhijrwl21@gmail.com',
      link: 'mailto:aadhijrwl21@gmail.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Hyderabad, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/AdhiJarwal',
      color: '#333'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/adjrwl',
      color: '#0077b5'
    },
    {
      icon: <FaMedium />,
      name: 'Medium',
      url: 'https://medium.com/@adhirajmjarwal',
      color: '#00ab6c'
    }
  ];

  return (
    <motion.div 
      className="min-h-screen pt-32 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <motion.h1 
          className="text-4xl font-bold text-center mb-4"
          style={{ color: 'var(--color-primary-text)' }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Let's connect & build something amazing together.
        </motion.h1>
        
        <motion.p 
          className="text-center text-lg max-w-4xl mx-auto mb-16"
          style={{ color: 'var(--color-primary-text)' }}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I'm always open to discussing new opportunities, collaborations, or just having a chat about cloud technologies. 
          Feel free to reach out!
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary-text)' }}>Contact Information</h2>
            <div className="mb-12">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="backdrop-blur-md flex items-center gap-4 p-6 rounded-xl border-2 mb-4 shadow-lg hover:shadow-xl transition-all"
                  style={{ backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-card-border)' }}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="text-2xl" style={{ color: 'var(--color-accent)' }}>{info.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: 'var(--color-primary-text)' }}>{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} style={{ color: 'var(--color-accent)' }}>{info.value}</a>
                    ) : (
                      <p style={{ color: 'var(--color-accent)' }}>{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary-text)' }}>Connect With Me</h3>
              <motion.div className="backdrop-blur-md p-4 rounded-xl border-2 shadow-lg" style={{ backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-card-border)' }} whileHover={{ scale: 1.02 }}>
                <div className="flex justify-start gap-8">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 transition-colors"
                      style={{ color: 'var(--color-primary-text)' }}
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + 0.1 * index }}
                    >
                      <span className="text-3xl">{social.icon}</span>
                      <span className="text-sm font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="backdrop-blur-md p-8 rounded-2xl border-2 shadow-xl"
            style={{ backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-card-border)' }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary-text)' }}>Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border-2 rounded-lg focus:outline-none transition-colors placeholder-gray-500"
                  style={{ borderColor: '#DBE2EF', backgroundColor: 'var(--color-light-bg)', color: 'var(--color-primary-text)' }}
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border-2 rounded-lg focus:outline-none transition-colors placeholder-gray-500"
                  style={{ borderColor: '#DBE2EF', backgroundColor: 'var(--color-light-bg)', color: 'var(--color-primary-text)' }}
                  required
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-4 border-2 rounded-lg focus:outline-none transition-colors placeholder-gray-500"
                  style={{ borderColor: '#DBE2EF', backgroundColor: 'var(--color-light-bg)', color: 'var(--color-primary-text)' }}
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border-2 rounded-lg focus:outline-none transition-colors resize-none placeholder-gray-500"
                  style={{ borderColor: '#DBE2EF', backgroundColor: 'var(--color-light-bg)', color: 'var(--color-primary-text)' }}
                  required
                ></textarea>
              </div>
              
              <motion.button 
                type="submit"
                className={`btn w-full flex items-center justify-center gap-2 ${
                  submitStatus === 'sending' ? 'bg-gray-400 cursor-not-allowed' :
                  submitStatus === 'sent' ? 'bg-green-500 hover:bg-green-600' :
                  submitStatus === 'failed' ? 'bg-red-500 hover:bg-red-600' :
                  'btn-primary'
                }`}
                disabled={submitStatus === 'sending'}
                whileHover={submitStatus === 'sending' ? {} : { scale: 1.05 }}
                whileTap={submitStatus === 'sending' ? {} : { scale: 0.95 }}
              >
                {submitStatus === 'sending' && <FaSpinner className="animate-spin" />}
                {submitStatus === 'sent' && <FaCheck />}
                {submitStatus === 'failed' && <FaTimes />}
                {submitStatus === 'sending' ? 'Sending...' :
                 submitStatus === 'sent' ? 'Message Sent!' :
                 submitStatus === 'failed' ? 'Failed to Send' :
                 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;