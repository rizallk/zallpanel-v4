import { ProgressBar } from 'react-bootstrap';
import './style.scss';

const ProgressBarCustom = () => {
  return (
    <div className="d-flex flex-column w-100 progress-bar">
      <div className="d-flex align-items-center mb-2">
        <span>Bootstrap 5</span>
        <div className="d-block w-100">
          <ProgressBar animated striped now={100} />
        </div>
      </div>
      <div className="d-flex align-items-center w-100 mb-2">
        <span>SCSS</span>
        <div className="d-block w-100">
          <ProgressBar animated striped variant="success" now={80} />
        </div>
      </div>
      <div className="d-flex align-items-center w-100 mb-2">
        <span>JavaScript</span>
        <div className="d-block w-100">
          <ProgressBar animated striped variant="info" now={65} />
        </div>
      </div>
      <div className="d-flex align-items-center w-100 mb-2">
        <span>ReactJS</span>
        <div className="d-block w-100">
          <ProgressBar animated striped variant="warning" now={100} />
        </div>
      </div>
      <div className="d-flex align-items-center w-100 mb-2">
        <span>Font Awesome</span>
        <div className="d-block w-100">
          <ProgressBar animated striped variant="danger" now={40} />
        </div>
      </div>
    </div>
  );
};

export default ProgressBarCustom;
