import React, { useEffect } from 'react';
import { useForm } from '@formspree/react';
import classes from './ContactForm.module.css';

export function ContactForm() {
  const [formData, setFormData] = React.useState({ name: '', email: '', subject: '', message: '', subscribe: false });
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID || 'mnnevjbz';
  const [state, handleFormSubmit] = useForm(formspreeId);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    // Controlled inputs are still used; the Formspree hook will read from the form element.
    handleFormSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  }, [state.succeeded]);

  return (
    <form className={classes.ContactForm} onSubmit={handleSubmit}>
      <h1>Contact Us</h1>
      <p>
        Feel free to reach out with any questions or comments! We will get back to you as soon as possible.
      </p>
      
      <div className={classes.FormRow}>
        <div className={classes.FormGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className={classes.FormGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
      </div>
      <div className={classes.FormGroup}>
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} />
      </div>

      <div className={classes.FormGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleInputChange} required></textarea>
      </div>
      {/* Hidden field to help identify submissions as contact form */}
      <input type="hidden" name="formType" value="contact" />

      <button type="submit" className={classes.SubmitBtn} disabled={state.submitting}>
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>

      {state.succeeded && <p className={classes.SuccessMsg}>Thank you for your message! I'll get back to you soon.</p>}
      {state.errors && state.errors.length > 0 && (
        <div className={classes.ErrorMsg} role="alert">
          {state.errors.map((err, idx) => (
            <p key={idx}>{err.message}</p>
          ))}
        </div>
      )}
    </form>
  );
}