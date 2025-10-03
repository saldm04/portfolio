import { useState } from 'react';
import { motion } from 'framer-motion';

const FORM_ENDPOINT = 'https://formspree.io/f/maylwvpr';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: data
      });

      if (response.ok) {
        setStatus('Grazie per il tuo messaggio! Ti risponderò al più presto.');
        form.reset();
      } else {
        throw new Error('Errore di invio');
      }
    } catch (error) {
      setStatus('Si è verificato un problema. Scrivimi a hello@alexrossi.dev.');
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="section__header">
        <h2>Contattami</h2>
        <p>Parliamo del tuo prossimo progetto o di una possibile collaborazione.</p>
      </div>
      <motion.form
        className="contact__form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <label>
          Nome
          <input type="text" name="name" placeholder="Il tuo nome" required />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="nome@email.com" required />
        </label>
        <label>
          Messaggio
          <textarea name="message" rows="4" placeholder="Come posso aiutarti?" required></textarea>
        </label>
        <button type="submit" className="btn btn--secondary">
          Invia messaggio
        </button>
        {status && <p className="contact__status">{status}</p>}
      </motion.form>
    </section>
  );
};

export default Contact;
