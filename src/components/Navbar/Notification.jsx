const Notification = () => {
  return (
    <div className="menu">
      <div className="dropdown">
        <i
          className="fas fa-bell dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></i>
        <ul className="dropdown-menu notification">
          <li className="px-3 py-1">
            <div className="d-flex">
              <i className="fas fa-fw fa-stream"></i>
              <div className="message ps-3">
                <div>First notification</div>
                <div>
                  <small className="text-muted">09:31 06/08/2023</small>
                </div>
              </div>
            </div>
          </li>
          <li className="px-3 py-1">
            <div className="d-flex">
              <i className="fas fa-fw fa-stream"></i>
              <div className="message ps-3">
                <div>Second notification</div>
                <div>
                  <small className="text-muted">12:10 18/05/2023</small>
                </div>
              </div>
            </div>
          </li>
          <li className="px-3 py-1">
            <div className="d-flex">
              <i className="fas fa-fw fa-stream"></i>
              <div className="message ps-3">
                <div>Third notification</div>
                <div>
                  <small className="text-muted">20:32 12/01/2023</small>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Notification;
