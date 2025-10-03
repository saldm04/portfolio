import { motion } from 'framer-motion';

const Hobbies = ({ hobbies }) => {
  return (
    <section id="hobbies" className="section hobbies">
      <div className="section__header">
        <h2>Hobbies & Passioni</h2>
        <p>Attività che alimentano la mia creatività e il mio equilibrio.</p>
      </div>
      <div className="hobbies__grid">
        {hobbies.map((hobby, index) => (
          <motion.figure
            key={hobby.title}
            className="hobby-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <img src={hobby.image} alt={hobby.title} className="hobby-card__image" />
            <figcaption>
              <h3>{hobby.title}</h3>
              <p>{hobby.description}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
