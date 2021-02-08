import { techSkills } from './techSkills';
import TechSkills from '../../components/TechSkills';
import Contacts from '../../components/Contacts';
import myPhoto from '../../img/photo.jpg';
import PropTypes from 'prop-types';
import s from './HomeView.module.css';

function HomeView() {
  return (
    <main className={s.main}>
      <img
        src={myPhoto}
        width="250"
        alt="Anastasiia Yermakova"
        className={s.photo}
      />
      <h1 className={s.name}>Anastasiia Yermakova</h1>
      <p className={s.info}>
        Hi 👋. Almost a year ago, I decided to move into the IT industry and
        enrolled in the Fullstack web developer course from GoIT. At the moment,
        the frontend is fully trained. So, I started looking for a job for the
        position of <b>Frontend Web Developer</b>. I want to be in a good team,
        where I could improve my skills and use them for interesting tasks. I am
        a fast learner, responsible, ready for hard tasks.
      </p>
      <h2 className={s.title}>Tech Skills</h2>
      <ul className={s.list}>
        {techSkills.map(({ id, label, icon }) => (
          <TechSkills key={id} label={label} icon={icon} />
        ))}
      </ul>
      <h2 className={s.title}>Contacts</h2>
      <Contacts />
    </main>
  );
}

HomeView.propTypes = {
  techSkills: PropTypes.arrayOf(PropTypes.object),
};

export default HomeView;
