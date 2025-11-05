import { useContext } from 'react';
import { SidebarContext } from '../../App';
import './style.scss';

const BgOverlay = () => {
  const { openSidebarMobile, setOpenSidebarMobile } =
    useContext(SidebarContext);

  if (openSidebarMobile) {
    document.body.classList.add('overflow');
  } else {
    document.body.classList.remove('overflow');
  }

  return (
    <div
      className={`bg-overlay ${openSidebarMobile ? 'overlay' : ''}`}
      onClick={() => setOpenSidebarMobile(false)}
    ></div>
  );
};

export default BgOverlay;
