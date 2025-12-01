import React from 'react';
import classes from './ContactForm.module.css';

export function ContactForm() {
  const [formData, setFormData] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = React.useState({ submitting: false, success: false, error: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: '' });
    
    // Simulating API call for demo (replace with your endpoint)
    const formspreeEndpoint = 'https://formspree.io/f/mnnevjbz'; 

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData) // Simplified payload
      });

      if (response.ok) {
        setFormStatus({ submitting: false, success: true, error: '' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      setFormStatus({ submitting: false, success: false, error: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <form className={classes.ContactForm} onSubmit={handleFormSubmit}>
      <h1>Contact Us</h1>
      <p>
        Feel free to reach out with any questions or comments! We will get back to you as soon as possible.
      </p>
      
      <div className={classes.FormRow}>
        {/* Fixed: Changed FormRow to FormGroup here */}
        <div className={classes.FormGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        {/* Fixed: Changed FormRow to FormGroup here */}
        <div className={classes.FormGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
      </div>

      {/* Added FormGroup wrapper for consistency */}
      <div className={classes.FormGroup}>
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} />
      </div>

      <div className={classes.FormGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleInputChange} required></textarea>
      </div>

      <button type="submit" className={classes.SubmitBtn} disabled={formStatus.submitting}>
        {formStatus.submitting ? 'Sending...' : 'Send Message'}
      </button>

      {/* Fixed: Used new single-name classes */}
      {formStatus.success && <p className={classes.SuccessMsg}>Thank you for your message! I'll get back to you soon.</p>}
      {formStatus.error && <p className={classes.ErrorMsg}>{formStatus.error}</p>}
    </form>
  );
}