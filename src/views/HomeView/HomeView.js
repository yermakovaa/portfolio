import TechSkills from '../../components/TechSkills';
import Contacts from '../../components/Contacts';
import myPhoto from '../../img/photo.jpeg';
import PropTypes from 'prop-types';
import s from './HomeView.module.css';

function HomeView({ techSkills, contacts }) {
  return (
    <main className={s.main}>
      <img
        className={s.photo}
        src={myPhoto}
        width="250"
        alt="Anastasiia Yermakova"
      />
      <h1 className={s.name}>Anastasiia Yermakova</h1>
      <p className={s.info}>
        Hey 👋. Looking for a job for the position of{' '}
        <b>Frontend Web Developer</b>. I want to be in a good team, where I
        could improve my skills and use them for interesting tasks. I am a fast
        learner, responsible, ready for hard tasks.
      </p>
      <h2 className={s.title}>Tech Skills</h2>
      <ul className={s.list}>
        {techSkills.map(({ id, label, icon }) => (
          <TechSkills key={id} label={label} icon={icon} />
        ))}
      </ul>
      <h2 className={s.title}>Contacts</h2>
      <ul>
        {contacts.map(({ id, label, link, text, icon }) => (
          <Contacts
            key={id}
            label={label}
            link={link}
            text={text}
            icon={icon}
          />
        ))}
      </ul>
    </main>
  );
}

HomeView.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  techSkills: PropTypes.arrayOf(PropTypes.object),
};

export default HomeView;
