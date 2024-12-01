import clsx from 'clsx';
import css from './Logo.module.css';

const Logo = ({ onPage }) => {
  return (
    <div className={clsx(css.logo, css[onPage])}>
      <h2 className={css.titleLogo}>AQUATRACK</h2>
    </div>
  );
};

export default Logo;
