import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      showAlert({
        text: 'Please fill out name, email, and message.',
        type: 'danger',
      });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        }
      );

      showAlert({
        text: 'Message sent successfully! I\'ll get back to you soon.',
        type: 'success',
      });

      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error details:', error);
      console.error('Error message:', error.text);
      showAlert({
        text: 'Failed to send message. Please try again.',
        type: 'danger',
      });
    } finally {
      setLoading(false);
      setTimeout(() => {
        hideAlert();
      }, 3000);
    }
  };

  return (
    <main className="pt-24 pb-8">
      {alert.show && <Alert {...alert} />}

      <section className="contact-page relative overflow-hidden w-full min-h-[calc(100vh-8rem)] pt-8 px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 flex items-center">
        <div
          className="contact-bg-image pointer-events-none absolute left-0 right-0 top-10 bottom-0 opacity-55"
          style={{
            backgroundImage: "url('/assets/Gallery5.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            filter: 'grayscale(1) saturate(0.35) brightness(0.58)',
          }}
        />
        <div
          className="contact-bg-overlay pointer-events-none absolute left-0 right-0 top-10 bottom-0 bg-black/25"
        />

        <div
          className="contact-card relative z-10 w-full max-w-3xl mx-auto rounded-3xl border border-black-300 p-6 md:p-8"
          style={{ backgroundColor: 'rgb(45, 45, 50)', boxShadow: 'var(--box-shadow), var(--box-glow)', color: '#ffffff' }}
        >
          <p className="inline-flex text-xs tracking-wide uppercase border border-black-300 rounded-full px-3 py-1 mb-4 opacity-80">
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">Get in touch</h1>
          <p className="text-base md:text-lg opacity-80 mb-6 max-w-2xl">
            Available for job opportunities, internships, collaborations, and interesting project ideas. Feel free to reach out!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="field-label" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />

            <label className="field-label" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
            />

            <label className="field-label" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="field-input resize-y"
              placeholder="Write your message here..."
              value={form.message}
              onChange={handleChange}
            />

            <button type="submit" className="field-btn mt-2" disabled={loading}>
              {loading ? 'Preparing Email...' : 'Send Message'}
            </button>
          </form>

          <p className="text-sm mt-5 opacity-80">
            Prefer email directly?{' '}
            <a href="mailto:acschultz24@gmail.com" className="underline">
              acschultz24@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
