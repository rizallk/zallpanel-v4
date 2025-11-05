import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
import { bool } from 'prop-types';
import { useContext, useEffect } from 'react';
import { SidebarContext } from '../../App';

const Menu = ({ sidebarMinimized }) => {
  const {
    dropdownActive,
    setDropdownActive,
    setOpenSidebarMobile,
    menuScrollTo,
    setMenuScrollTo,
  } = useContext(SidebarContext);

  // Handle Click untuk menu dropdown
  const handleClick = (event) => {
    const active = event.target.id;

    if (active === dropdownActive) {
      setDropdownActive('');
    } else {
      setDropdownActive(active);
    }
  };

  // Closed sidebar mobile and dropdown menu when click a menu (except submenu)
  const handleMenuClosedClick = () => {
    setTimeout(() => {
      setOpenSidebarMobile(false);
      setDropdownActive('');
    }, 10);
  };

  const handleSubmenuClosedClick = () => {
    setTimeout(() => {
      setOpenSidebarMobile(false);
    }, 10);
  };

  const onScroll = (e) => {
    setMenuScrollTo(Math.round(e.target.scrollTop));
  };

  useEffect(() => {
    document.querySelector('.menu').scrollTo(0, menuScrollTo);
  }, []);

  return (
    <div
      className={`menu h-100 bg-white shadow ${
        sidebarMinimized ? 'minimized' : ''
      }`}
      onScroll={onScroll}
    >
      <ul>
        <p className="section-name">
          <span className={`icon ${sidebarMinimized ? 'minimized' : ''}`}>
            M
          </span>
          <span className={`label ${sidebarMinimized ? 'minimized' : ''}`}>
            Main Menu
          </span>
        </p>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={handleMenuClosedClick}
          >
            <i className="icon fas fa-fw fa-tachometer-alt"></i>
            <span className={`label ${sidebarMinimized ? 'minimized' : ''}`}>
              Dashboard
            </span>
          </NavLink>
        </li>
        <p className="section-name">
          <span className={`icon ${sidebarMinimized ? 'minimized' : ''}`}>
            I
          </span>
          <span className={`label ${sidebarMinimized ? 'minimized' : ''}`}>
            Interface
          </span>
        </p>
        <Dropdown
          id="1"
          label="Components"
          icon="fa-cog"
          handleClick={handleClick}
          dropdownActive={dropdownActive}
          sidebarMinimized={sidebarMinimized}
        >
          <li>
            <NavLink
              to="https://getbootstrap.com/docs/5.3/components/alerts/#examples"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="icon fa-fw fas fa-exclamation-triangle"></i>
              <span className={`label ${sidebarMinimized ? 'minimized' : ''}`}>
                Alerts
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://getbootstrap.com/docs/5.3/components/buttons/#variants"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="icon fas fa-fw fa-minus-square"></i>
              <span className={`label ${sidebarMinimized ? 'minimized' : ''}`}>
                Buttons
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://getbootstrap.com/docs/5.3/components/card/#example"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="icon fas fa-fw fa-list"></i>
              <span className={`label ${sidebarMinimized ? 'minimized' : ''}`}>
                Cards
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/custom-cards"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={handleSubmenuClosedClick}
            >
              <i className="icon fas fa-fw fa-list"></i>
              <span className={`label ${sidebarMinimized ? 'minimized' : ''}`}>
                Custom Cards
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="icon fas fa-fw fa-ellipsis-h"></i>
              <span className={`label ${sidebarMinimized ? 'minimized' : ''}`}>
                More
              </span>
            </NavLink>
          </li>
        </Dropdown>
        <Dropdown
          id="2"
          label="Utilities"
          icon="fa-wrench"
          handleClick={handleClick}
          dropdownActive={dropdownActive}
          sidebarMinimized={sidebarMinimized}
        >
          <li>
            <NavLink
              to="https://getbootstrap.com/docs/5.3/utilities/colors/#colors"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="icon fas fa-fw fa-palette"></i>
              <span className={`label ${sidebarMinimized ? 'minimized' : ''}`}>
                Colors
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://getbootstrap.com/docs/5.3/utilities/borders/#border"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="icon fas fa-fw fa-border-style"></i>
              <span className={`label ${sidebarMinimized ? 'minimized' : ''}`}>
                Borders
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://getbootstrap.com/docs/5.3/utilities/flex/#enable-flex-behaviors"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="icon fab fa-fw fa-buromobelexperte"></i>
              <span className={`label ${sidebarMinimized ? 'minimized' : ''}`}>
                Flex
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="icon fas fa-fw fa-ellipsis-h"></i>
              <span className={`label ${sidebarMinimized ? 'minimized' : ''}`}>
                More
              </span>
            </NavLink>
          </li>
        </Dropdown>
        <p className="section-name">
          <span className={`icon ${sidebarMinimized ? 'minimized' : ''}`}>
            A
          </span>
          <span className={`label ${sidebarMinimized ? 'minimized' : ''}`}>
            Addons
          </span>
        </p>
        <Dropdown
          id="3"
          label="Pages"
          icon="fa-folder"
          handleClick={handleClick}
          dropdownActive={dropdownActive}
          sidebarMinimized={sidebarMinimized}
        >
          <li>
            <NavLink
              to="/donate"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={handleSubmenuClosedClick}
            >
              <i className="icon fas fa-fw fa-file-alt"></i>
              <span className={`label ${sidebarMinimized ? 'minimized' : ''}`}>
                Donate
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/premium"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={handleSubmenuClosedClick}
            >
              <i className="icon fas fa-fw fa-file-alt"></i>
              <span className={`label ${sidebarMinimized ? 'minimized' : ''}`}>
                Premium
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://getbootstrap.com/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="icon fab fa-fw fa-bootstrap"></i>
              <span className={`label ${sidebarMinimized ? 'minimized' : ''}`}>
                Bootstrap 5
              </span>
            </NavLink>
          </li>
        </Dropdown>
        <li>
          <NavLink
            to="https://www.chartjs.org/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <i className="icon fas fa-fw fa-chart-area"></i>
            <span className={`label ${sidebarMinimized ? 'minimized' : ''}`}>
              Charts
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="https://fontawesome.com/v5/search"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <i className="icon fas fa-fw fa-icons"></i>
            <span className={`label ${sidebarMinimized ? 'minimized' : ''}`}>
              Icons
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="https://getbootstrap.com/docs/5.3/content/tables/#overview"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <i className="icon fas fa-fw fa-table"></i>
            <span className={`label ${sidebarMinimized ? 'minimized' : ''}`}>
              Tables
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

Menu.propTypes = {
  sidebarMinimized: bool,
};

export default Menu;
