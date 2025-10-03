import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Home = () => {
  return (
    <section id="home" className="section hero">
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="hero__eyebrow">Ciao, sono</p>
        <h1>Alex Rossi</h1>
        <h2 className="hero__tagline">
          <Typewriter
            words={['Front-end Developer', 'UI/UX Designer', 'Green Tech Advocate']}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </h2>
        <p className="hero__description">
          Progetto interfacce digitali minimaliste che uniscono eleganza, sostenibilità e performance.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">
            Scopri i progetti
          </a>
          <div className="hero__social">
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
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
