import { BsHeartFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import s from './Footer.module.css';

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.wrapper}>
        © 2021 | Developed with
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            times: [0, 0.5, 1],
            loop: Infinity,
          }}
          className={s.heart}
        >
          <BsHeartFill color="#ff6b08" />
        </motion.div>
        by GoIT Student - Yermakova A.
      </div>
    </footer>
  );
}

export default Footer;
