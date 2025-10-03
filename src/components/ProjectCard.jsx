import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';

const ProjectCard = ({ title, description, image, github, demo, index }) => {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <img src={image} alt={`Anteprima del progetto ${title}`} className="project-card__image" />
      <div className="project-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-card__links">
          <a href={github} target="_blank" rel="noreferrer" className="project-card__link">
            <FaGithub aria-hidden="true" />
            <span>Code</span>
          </a>
          <a href={demo} target="_blank" rel="noreferrer" className="project-card__link">
            <HiOutlineExternalLink aria-hidden="true" />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
