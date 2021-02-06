import { BsHeartFill } from 'react-icons/bs';
import s from './Footer.module.css';

function Footer() {
  return (
    <footer className={s.footer}>
      <div>
        © 2021 | Developed with by <BsHeartFill color="#ff6b08" /> GoIT Student
        - Yermakova A.
      </div>
    </footer>
  );
}

export default Footer;
