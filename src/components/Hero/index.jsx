import { Col, Row } from 'react-bootstrap';
import './style.scss';
import { config } from '../../config';
import { Link } from 'react-router-dom';

const Hero = () => {
  function getDayName(date = new Date(), locale = 'en-US') {
    return date.toLocaleDateString(locale, { weekday: 'long' });
  }

  function getMonthName(date = new Date(), locale = 'en-US') {
    return date.toLocaleDateString(locale, { month: 'long' });
  }

  const date = new Date().getDate();
  const year = new Date().getFullYear();

  return (
    <div className="hero">
      <div
        className={`alert alert-${config.themeMode} alert-custom`}
        role="alert"
      >
        <Row>
          <Col>
            <h4 className="alert-heading">
              <b>Welcome to ZallPanel!</b>
            </h4>
            <h5 className="alert-heading">
              <i>Admin Dashboard Template</i>
            </h5>
            <hr />
            <p>
              You can use this free version of the template for personal or
              commercial use.
              <br />
              Donate <Link to="/donate">here</Link> to support the developer!
            </p>
            <hr />
            <p className="mb-0">
              ZallPanel - Admin Dashboard Template Version 4 w/ Bootstrap 5
            </p>
          </Col>
          <Col md="auto text-end d-none d-md-block text-white" className="ms-3">
            <h1>{getDayName()},</h1>
            <h5>
              {date} {getMonthName()} {year}
            </h5>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Hero;
