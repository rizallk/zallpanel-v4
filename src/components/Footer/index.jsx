import { Link } from 'react-router-dom';
import './style.scss';
import { config } from '../../config';

const Footer = () => {
  return (
    <div className="footer text-muted">
      Made with{' '}
      {config.themeMode === 'primary'
        ? '💙'
        : config.themeMode === 'success'
        ? '💚'
        : '❤️'}{' '}
      by <Link to="https://rizallk.vercel.app">Rizall Kadamong</Link>
    </div>
  );
};

export default Footer;
