import { BsHeartFill } from 'react-icons/bs';
import { accentColor } from '../../assets/stylesVariables';
import { Wrapper, Copy, Heart } from './Footer.style';

function Footer() {
  return (
    <Wrapper>
      <Copy>
        © 2021 | Developed with
        <Heart
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            times: [0, 0.5, 1],
            loop: Infinity,
          }}
        >
          <BsHeartFill color={accentColor} />
        </Heart>
        by Yermakova A.
      </Copy>
    </Wrapper>
  );
}

export default Footer;
