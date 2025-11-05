import { Card, Col, Row } from 'react-bootstrap';
import BgOverlay from '../../components/BgOverlay';
import Sidebar from '../../components/Sidebar';
import NavbarCustom from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import BackToTop from '../../components/BackToTop';

const CustomCards = () => {
  return (
    <>
      <BgOverlay />
      <Row className="m-0">
        <Col md="auto" className="p-0">
          <Sidebar />
        </Col>
        <Col className="p-0">
          <main className="main-wrapper">
            <NavbarCustom
              breadcrumb={
                <>
                  <li className="breadcrumb-item" aria-current="page">
                    <Link to="/">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Custom Cards
                  </li>
                </>
              }
            />
            <div className="content">
              <Card className="border-0 shadow">
                <Card.Header className="header-custom">
                  <h4 className="m-0">Custom Cards</h4>
                </Card.Header>
                <Card.Body>
                  <Card className="border-0 shadow mb-3 text-muted">
                    <Card.Header className="header-custom">
                      .header-custom{' '}
                      <span className="text-primary">primary</span> ||{' '}
                      <span className="text-success">success</span> ||{' '}
                      <span className="text-danger">danger</span>
                    </Card.Header>
                    <Card.Body>
                      <p>.border-0 shadow mb-3</p>
                    </Card.Body>
                    <Card.Footer className="footer-custom">
                      .footer-custom
                    </Card.Footer>
                  </Card>
                  <Card className="border-custom border-primary shadow mb-3">
                    <Card.Body>
                      <p className="text-muted">
                        .border-custom border-primary shadow mb-3
                      </p>
                    </Card.Body>
                  </Card>
                  <Card className="border-custom border-success shadow mb-3">
                    <Card.Body>
                      <p className="text-muted">
                        .border-custom border-success shadow mb-3
                      </p>
                    </Card.Body>
                  </Card>
                  <Card className="border-custom border-warning shadow mb-3">
                    <Card.Body>
                      <p className="text-muted">
                        .border-custom border-warning shadow mb-3
                      </p>
                    </Card.Body>
                  </Card>
                  <Card className="border-custom border-info shadow mb-3">
                    <Card.Body>
                      <p className="text-muted">
                        .border-custom border-info shadow mb-3
                      </p>
                    </Card.Body>
                  </Card>
                  <Card className="border-custom border-danger shadow mb-3">
                    <Card.Body>
                      <p className="text-muted">
                        .border-custom border-danger shadow mb-3
                      </p>
                    </Card.Body>
                  </Card>
                </Card.Body>
              </Card>
            </div>
            <Footer />
          </main>
        </Col>
      </Row>
      <BackToTop />
    </>
  );
};

export default CustomCards;
