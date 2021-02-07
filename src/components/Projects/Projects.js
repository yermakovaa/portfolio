import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import propTypes from 'prop-types';
import s from './Projects.module.css';

function Projects({ label, link, preview, info, tech, repo }) {
  return (
    <li className={s.item}>
      <div className={s.imgContainer}>
        <img className={s.img} src={preview} alt={label} loading="lazy" />
      </div>
      <div className={s.wrapper}>
        <h3 className={s.name}>{label}</h3>
        <p className={s.info}>{info}</p>
        <ul className={s.tech}>
          {tech.map(({ id, name }) => (
            <li className={s.techItem} key={id}>
              {name}
            </li>
          ))}
        </ul>
        <a className={s.link} href={repo} target="_blank" rel="noreferrer">
          <AiFillGithub size="40" />
        </a>
        <a className={s.link} href={link} target="_blank" rel="noreferrer">
          <FiExternalLink size="40" />
        </a>
      </div>
    </li>
  );
}

Projects.propTypes = {
  info: propTypes.string,
  label: propTypes.string,
  link: propTypes.string,
  preview: propTypes.string,
  repo: propTypes.string,
  tech: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string,
    }),
  ),
};

export default Projects;
