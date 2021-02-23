import PropTypes from 'prop-types';
import s from './MainWrapper.module.css';

function MainWrapper({ children }) {
  return <main className={s.main}>{children}</main>;
}

MainWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainWrapper;
