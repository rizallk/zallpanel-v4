import { Button, Card, Col, Row } from 'react-bootstrap';
import BgOverlay from '../../components/BgOverlay';
import Sidebar from '../../components/Sidebar';
import NavbarCustom from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import BackToTop from '../../components/BackToTop';

const Donate = () => {
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
                    Donate
                  </li>
                </>
              }
            />
            <div className="content">
              <Card className="border-0 shadow">
                <Card.Header className="header-custom">
                  <h4 className="m-0">Donate</h4>
                </Card.Header>
                <Card.Body>
                  <p>
                    Buy me a cup or some coffee, so i can happily continue
                    coding!
                    <br />
                  </p>
                  <Link to="https://trakteer.id/rizall-kadamong">
                    <Button variant={config.themeMode}>
                      https://trakteer.id/rizall-kadamong
                    </Button>
                  </Link>
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

export default Donate;
