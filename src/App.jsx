import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Hobbies from './pages/Hobbies.jsx';
import Contact from './pages/Contact.jsx';
import greenflowImg from './assets/images/greenflow.svg';
import ecotravelImg from './assets/images/ecotravel.svg';
import uikitImg from './assets/images/uikit.svg';
import hikingImg from './assets/images/hiking.svg';
import graduationImg from './assets/images/graduation.svg';
import travelImg from './assets/images/travel.svg';
import musicImg from './assets/images/music.svg';

const STORAGE_KEY = 'portfolio-theme';

const App = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem(STORAGE_KEY) || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const projects = useMemo(
    () => [
      {
        title: 'GreenFlow Dashboard',
        description:
          'Un cruscotto analitico per monitorare le metriche di sostenibilità con grafici interattivi.',
        image: greenflowImg,
        github: 'https://github.com/your-username/greenflow',
        demo: 'https://your-username.github.io/greenflow/'
      },
      {
        title: 'EcoTravel Planner',
        description:
          'App web responsiva per pianificare viaggi a basso impatto ambientale con itinerari smart.',
        image: ecotravelImg,
        github: 'https://github.com/your-username/ecotravel',
        demo: 'https://your-username.github.io/ecotravel/'
      },
      {
        title: 'Minimalist UI Kit',
        description:
          'Libreria di componenti React modulare, pensata per interfacce minimal ed eleganti.',
        image: uikitImg,
        github: 'https://github.com/your-username/minimal-ui-kit',
        demo: 'https://your-username.github.io/minimal-ui-kit/'
      }
    ],
    []
  );

  const hobbies = useMemo(
    () => [
      {
        title: 'Hiking',
        description: 'Amo esplorare sentieri montani e fotografare panorami mozzafiato.',
        image: hikingImg
      },
      {
        title: 'Laurea',
        description: 'Ho conseguito una laurea in Ingegneria Informatica con focus su UX e accessibilità.',
        image: graduationImg
      },
      {
        title: 'Viaggi',
        description: 'Scopro culture diverse per nutrire creatività e visione globale dei progetti.',
        image: travelImg
      },
      {
        title: 'Musica',
        description: 'Suono il piano e creo playlist che mi accompagnano mentre progetto.',
        image: musicImg
      }
    ],
    []
  );

  const skills = useMemo(
    () => [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'UI/UX', icon: '🎨' },
      { name: 'Accessibility', icon: '♿' }
    ],
    []
  );

  return (
    <div className="app-container">
      <Navbar theme={theme} />
      <AnimatePresence mode="wait">
        <motion.main
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Home />
          <About />
          <Projects projects={projects} />
          <Hobbies hobbies={hobbies} />
          <Contact />
        </motion.main>
      </AnimatePresence>
      <Footer theme={theme} toggleTheme={toggleTheme} skills={skills} />
    </div>
  );
};

export default App;
