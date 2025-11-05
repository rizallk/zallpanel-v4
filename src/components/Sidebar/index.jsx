import Menu from './Menu';
import './style.scss';
import Profile from './Profile';
import { useContext } from 'react';
import { SidebarContext } from '../../App';

const Sidebar = () => {
  const { openSidebarMobile, sidebarMinimized } = useContext(SidebarContext);

  return (
    <div className={`sidebar-wrapper ${openSidebarMobile ? 'open' : ''}`}>
      <div
        className={`sidebar p-3 d-flex flex-column bg-white ${
          sidebarMinimized ? 'minimized' : ''
        }`}
      >
        <div>
          <div
            className={`logo-desktop ${sidebarMinimized ? 'minimized' : ''}`}
          >
            <img
              className={sidebarMinimized ? 'minimized' : ''}
              src="/images/zallogo-gradient.png"
            />
            <h3 className={`title ${sidebarMinimized ? 'minimized' : ''}`}>
              ZallPanel
            </h3>
          </div>
        </div>
        <Profile sidebarMinimized={sidebarMinimized} />
        <Menu sidebarMinimized={sidebarMinimized} />
      </div>
    </div>
  );
};

export default Sidebar;
