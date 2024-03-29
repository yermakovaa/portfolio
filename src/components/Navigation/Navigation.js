import { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { Nav, Link, LinkResume, MenuBtn } from './Navigation.style';

function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const menuToggle = () => {
    setIsOpenMenu(prev => !prev);
  };

  return (
    <>
      <MenuBtn>
        {isOpenMenu ? (
          <MdClose size="40" onClick={menuToggle} />
        ) : (
          <MdMenu size="40" onClick={menuToggle} />
        )}
      </MenuBtn>
      <Nav menuToggle={isOpenMenu}>
        <Link exact to="/" onClick={menuToggle}>
          Home
        </Link>

        <Link to="/projects" onClick={menuToggle}>
          Projects
        </Link>

        <LinkResume
          href="https://yer-resume.netlify.app/"
          target="_blank"
          rel="noreferrer"
          onClick={menuToggle}
        >
          Resume
        </LinkResume>
      </Nav>
    </>
  );
}

export default Navigation;
