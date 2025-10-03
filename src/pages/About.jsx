import { motion } from 'framer-motion';
import profileImg from '../assets/images/profile.svg';

const About = () => {
  return (
    <section id="about" className="section about">
      <motion.div
        className="about__image-wrapper"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <img src={profileImg} alt="Ritratto di Alex Rossi" className="about__image" />
      </motion.div>
      <motion.div
        className="about__content"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p>
          Sono un front-end developer con base a Milano, appassionato di design minimalista e tecnologie
          sostenibili. Lavoro con team multidisciplinari per creare esperienze digitali accessibili e
          coinvolgenti.
        </p>
        <p>
          Credo che ogni progetto debba bilanciare estetica, performance e impatto ambientale. Per questo
          motivo, integro principi di eco-design e performance budgeting in ogni interfaccia che costruisco.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
