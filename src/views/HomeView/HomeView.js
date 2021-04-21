import { techSkills } from './techSkills';
import TechSkills from '../../components/TechSkills';
import Contacts from '../../components/Contacts';
import myPhoto from '../../img/photo.jpg';
import PropTypes from 'prop-types';
import s from './HomeView.module.css';

function HomeView() {
  return (
    <>
      <img
        className={s.photo}
        src={myPhoto}
        width="250"
        alt="Anastasiia Yermakova"
      />
      <h1 className={s.name}>Anastasiia Yermakova</h1>
      <p className={s.info}>
        Hi 👋. I'm a Frontend (React) Developer and looking for an interesting
        job with a good team, where I could improve my skills and use them for
        interesting tasks. I'm a fast learner, responsible, ready for hard
        tasks.
      </p>
      <h2 className={s.title}>Tech Skills</h2>
      <ul className={s.list}>
        {techSkills.map(({ id, label, icon }) => (
          <TechSkills key={id} label={label} icon={icon} />
        ))}
      </ul>
      <h2 className={s.title}>Contacts</h2>
      <Contacts />
    </>
  );
}

HomeView.propTypes = {
  techSkills: PropTypes.arrayOf(PropTypes.object),
};

export default HomeView;
