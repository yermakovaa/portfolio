import { FiMail } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

import s from './Contacts.module.css';

function Contacts() {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <a className={s.link} href="mailto:yermak1037@gmail.com">
          <FiMail size="40" className={s.icon} />
        </a>
      </li>
      <li className={s.item}>
        <a className={s.link} href="https://github.com/yermakovaa/">
          <AiFillGithub size="40" className={s.icon} />
        </a>
      </li>
      <li className={s.item}>
        <a className={s.link} href="https://www.linkedin.com/in/yermakovaa/">
          <FaLinkedin size="40" className={s.icon} />
        </a>
      </li>
    </ul>
  );
}

export default Contacts;
