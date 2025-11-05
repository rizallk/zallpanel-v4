import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menu">
      <div className="dropdown">
        <i
          className="fas fa-user dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></i>
        <ul className="dropdown-menu">
          <li>
            <NavLink
              to="/menu"
              className={`dropdown-item ${({ isActive }) =>
                isActive ? 'active' : ''}`}
            >
              <i className="fas fa-fw fa-user fa-sm"></i>
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={`dropdown-item ${({ isActive }) =>
                isActive ? 'active' : ''}`}
            >
              <i className="fas fa-fw fa-list-ul fa-sm"></i>
              <span>To do list</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={`dropdown-item ${({ isActive }) =>
                isActive ? 'active' : ''}`}
            >
              <i className="fas fa-fw fa-cogs fa-sm"></i>
              <span>Activity Log</span>
            </NavLink>
          </li>
          <hr />
          <li>
            <NavLink
              to="/menu"
              className={`dropdown-item ${({ isActive }) =>
                isActive ? 'active' : ''}`}
            >
              <i className="fas fa-fw fa-sign-out-alt fa-sm"></i>
              <span>Logout</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
