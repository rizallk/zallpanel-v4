import { useContext } from 'react';
import { SidebarContext } from '../../App';
import { node } from 'prop-types';
import './style.scss';
import Menu from './Menu';
import Notification from './Notification';

const NavbarCustom = ({ breadcrumb }) => {
  const { setOpenSidebarMobile, sidebarMinimized, setSidebarMinimized } =
    useContext(SidebarContext);

  return (
    <>
      <nav className="navbar-custom">
        <div className="left">
          <div
            className="sidebar-toggle-desktop"
            onClick={() => {
              setSidebarMinimized(sidebarMinimized ? false : true);
              localStorage.setItem(
                'sidebar-minimized',
                sidebarMinimized ? false : true
              );
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className="sidebar-toggle-mobile"
            onClick={() => setOpenSidebarMobile(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb desktop ps-3">{breadcrumb}</ol>
          </nav>
        </div>
        <div className="logo-mobile">
          <img src="/images/zallogo-gradient.png" alt="" />
        </div>
        <div className="right">
          <p className="text-muted m-0 pe-3">
            Hello <u>User!</u>
          </p>
          <Notification />
          <Menu />
        </div>
      </nav>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mobile ps-3">{breadcrumb}</ol>
      </nav>
    </>
  );
};

NavbarCustom.propTypes = {
  breadcrumb: node,
};

export default NavbarCustom;
