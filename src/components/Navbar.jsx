import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = ({ theme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <a href="#home" className="navbar__logo" aria-label="Vai alla sezione iniziale">
        <span className="navbar__mark">AR</span>
        <span className="navbar__name">Alex Rossi</span>
      </a>
      <nav className="navbar__links" aria-label="Navigazione principale">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="navbar__link">
            {section.label}
          </a>
        ))}
      </nav>
      <div className="navbar__social" aria-label="Link ai social">
        <a href="https://github.com/your-username" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:hello@alexrossi.dev" aria-label="Invia un'email">
          <HiOutlineMail />
        </a>
      </div>
      <span className="navbar__theme" aria-live="polite">
        {theme === 'dark' ? '🌙' : '☀️'}
      </span>
    </motion.header>
  );
};

export default Navbar;
