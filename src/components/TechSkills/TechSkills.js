import s from './TechSkills.module.css';

function TechSkills({ label, icon }) {
  return (
    <li className={s.item}>
      <img src={icon} alt={label} width="40" />
      <span className={s.text}>{label}</span>
    </li>
  );
}

export default TechSkills;
