import { Row, Col, Card, Table, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import LineChart from '../../components/LineChart';
import Hero from '../../components/Hero';
import PieChart from '../../components/PieChart';
import ProgressBarCustom from '../../components/ProgressBar';
import BgOverlay from '../../components/BgOverlay';
import Sidebar from '../../components/Sidebar';
import NavbarCustom from '../../components/Navbar';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';
import './style.scss';
import { config } from '../../config';

const dataTable = [
  {
    name: 'Patricia P. Harrison',
    email: 'PatriciaPHarrison@dayrep.com',
    phone: '985-819-0681',
    city: 'LA',
    status: 'Pending',
    badgeBg: 'primary',
  },
  {
    name: 'Jose M. Gaskins',
    email: 'JoseMGaskins@armyspy.com',
    phone: '772-460-5847',
    city: 'Fort Pierce',
    status: 'Inactive',
    badgeBg: 'warning',
  },
  {
    name: 'Milton C. Mabry',
    email: 'MiltonCMabry@armyspy.com',
    phone: '660-277-4147',
    city: 'Huntsville',
    status: 'Active',
    badgeBg: 'success',
  },
  {
    name: 'Jason G. Payton',
    email: 'JasonGPayton@teleworm.us',
    phone: '973-952-6449',
    city: 'Whippany',
    status: 'Outdated',
    badgeBg: 'danger',
  },
  {
    name: 'Verna K. Schafer',
    email: 'VernaKSchafer@teleworm.us',
    phone: '573-846-5552',
    city: 'Manchester',
    status: 'Active',
    badgeBg: 'success',
  },
];

const Dashboard = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.amount');
    const incrementConstant = 1;
    const speed = 110;

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute('value');
        counter.storedValue = counter.storedValue || counter.innerText - 0;
        const count = +counter.storedValue;
        const inc = incrementConstant / (speed / target);
        if (count < target) {
          counter.storedValue = count + inc;
          counter.innerText = Math.round(counter.storedValue);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }, []);

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
                    <Link>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </>
              }
            />
            <Hero />
            <div className="content dashboard">
              <Row>
                <Col md={6}>
                  <Card
                    className={`border-custom ${config.themeMode} shadow mb-3`}
                  >
                    <Card.Header
                      className={`header-custom ${config.themeMode}`}
                    >
                      Graphics Today
                    </Card.Header>
                    <Card.Body>
                      <LineChart />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Row>
                    <Col xl={6}>
                      <Card
                        className={`border-custom border-${
                          config.themeMode === 'success' ? 'primary' : 'success'
                        } shadow mb-3`}
                      >
                        <Card.Body>
                          <div className="icon">
                            <i
                              className={`text-${
                                config.themeMode === 'success'
                                  ? 'primary'
                                  : 'success'
                              } fas fa-users fa-sm fa-fw fa-3x`}
                            ></i>
                            <small className="text-muted">People</small>
                          </div>
                          <span className="amount" value="102">
                            0
                          </span>
                        </Card.Body>
                      </Card>
                      <Card className="border-custom border-warning shadow mb-3">
                        <Card.Body>
                          <div className="icon">
                            <i className="text-warning fas fa-shopping-cart fa-sm fa-fw fa-3x"></i>
                            <small className="text-muted">Cart</small>
                          </div>
                          <span className="amount" value="12">
                            0
                          </span>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xl={6}>
                      <Card className="border-custom border-info shadow mb-3">
                        <Card.Body>
                          <div className="icon">
                            <i className="text-info fas fa-inbox fa-sm fa-fw fa-3x"></i>
                            <small className="text-muted">Inbox</small>
                          </div>
                          <span className="amount" value="25">
                            0
                          </span>
                        </Card.Body>
                      </Card>
                      <Card
                        className={`border-custom border-${
                          config.themeMode === 'danger' ? 'primary' : 'danger'
                        } shadow mb-3`}
                      >
                        <Card.Body>
                          <div className="icon">
                            <i
                              className={`text-${
                                config.themeMode === 'danger'
                                  ? 'primary'
                                  : 'danger'
                              } fas fa-envelope fa-sm fa-fw fa-3x`}
                            ></i>
                            <small className="text-muted">Mail</small>
                          </div>
                          <span className="amount text" value="76">
                            0
                          </span>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col md={8}>
                  <Card className="border-0 shadow mb-3">
                    <Card.Header
                      className={`header-custom ${config.themeMode}`}
                    >
                      Orders Today
                    </Card.Header>
                    <Card.Body>
                      <div className="d-flex flex-column w-100">
                        <Table responsive striped>
                          <thead>
                            <tr>
                              <th className="text-center">No</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Phone</th>
                              <th>City</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {dataTable.map((d, i) => {
                              i++;
                              return (
                                <tr key={i}>
                                  <td className="text-center">{i}</td>
                                  <td>{d.name}</td>
                                  <td>{d.email}</td>
                                  <td>{d.phone}</td>
                                  <td>{d.city}</td>
                                  <td>
                                    <Badge pill bg={d.badgeBg}>
                                      {d.status}
                                    </Badge>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                        <div className="m-auto">
                          <div className="mt-3 overflow-auto pagination p-1">
                            <nav aria-label="Page navigation example">
                              <ul className="pagination">
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    Previous
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    1
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    2
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    3
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card className="border-0 shadow mb-3">
                    <Card.Header
                      className={`header-custom ${config.themeMode}`}
                    >
                      Progress Bar
                    </Card.Header>
                    <Card.Body>
                      <ProgressBarCustom />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="border-0 shadow mb-3">
                    <Card.Header
                      className={`header-custom ${config.themeMode}`}
                    >
                      My Pie
                    </Card.Header>
                    <Card.Body>
                      <div className="d-flex flex-column w-100">
                        <PieChart />
                      </div>
                    </Card.Body>
                  </Card>
                  <Card className="border-0 shadow mb-3">
                    <Card.Header
                      className={`header-custom ${config.themeMode}`}
                    >
                      Find Me!
                    </Card.Header>
                    <Card.Body>
                      <div className="d-flex flex-column">
                        <Link to="https://www.facebook.com/rizall.kadamong.1/">
                          <div className="d-flex align-items-center mb-3">
                            <i className="fab fa-facebook fa-fw fa-lg me-1"></i>
                            Rizall Kadamong
                          </div>
                        </Link>
                        <Link to="https://github.com/rizallk">
                          <div className="d-flex align-items-center mb-3">
                            <i className="fab fa-github fa-fw fa-lg me-1"></i>
                            rizallk
                          </div>
                        </Link>
                        <Link to="https://www.linkedin.com/in/rizall-kadamong/">
                          <div className="d-flex align-items-center mb-3">
                            <i className="fab fa-linkedin fa-fw fa-lg me-1"></i>
                            Rizall Kadamong
                          </div>
                        </Link>
                        <Link to="https://rizallk.vercel.app">
                          <div className="d-flex align-items-center mb-3">
                            <i className="fas fa-link fa-fw fa-lg me-1"></i>
                            My Portfolio
                          </div>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              {/* <Row>
                <Col md={8}>
                  
                </Col>
                <Col md={4}>
                  
                </Col>
              </Row> */}
            </div>
            <Footer />
          </main>
        </Col>
      </Row>
      <BackToTop />
    </>
  );
};

export default Dashboard;
