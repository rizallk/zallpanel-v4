import { Card, Col, Row } from 'react-bootstrap';
import BgOverlay from '../../components/BgOverlay';
import Sidebar from '../../components/Sidebar';
import NavbarCustom from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const SinglePage = () => {
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
                    Single Page
                  </li>
                </>
              }
            />
            <div className="content">
              <Card className="border-0 shadow">
                <Card.Header className="header-custom">
                  <h4 className="m-0">Single Page</h4>
                </Card.Header>
                <Card.Body>
                  <p className="text-center">
                    Fill this page with whatever content you want.
                  </p>
                </Card.Body>
              </Card>
            </div>
            <Footer />
          </main>
        </Col>
      </Row>
    </>
  );
};

export default SinglePage;
