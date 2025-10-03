import { motion } from 'framer-motion';

const Footer = ({ theme, toggleTheme, skills }) => {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <motion.div
          className="footer__column"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Alex Rossi</h3>
          <p>Design minimalista, performance e accessibilità per esperienze web memorabili.</p>
          <button className="footer__toggle" onClick={toggleTheme} type="button" aria-label="Cambia tema">
            {theme === 'dark' ? 'Passa al tema chiaro' : 'Passa al tema scuro'}
          </button>
        </motion.div>
        <motion.nav
          className="footer__column"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          aria-label="Link rapidi"
        >
          <h4>Link rapidi</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#hobbies">Hobbies</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </motion.nav>
        <motion.div
          className="footer__column footer__skills"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4>Skills</h4>
          <ul>
            {skills.map((skill) => (
              <li key={skill.name}>
                <span className="footer__skill-icon" aria-hidden="true">{skill.icon}</span>
                {skill.name}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} Alex Rossi · Tutti i diritti riservati.</p>
    </footer>
  );
};

export default Footer;
