import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../redux/actions/authAction";
import { AiOutlinePoweroff } from "react-icons/ai";
const Topnav = () => {
  const { auth } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  const { pathname } = useLocation();
  const expand = "md";
  return (
    <Row className="">
      <Navbar fixed="top" key={expand} expand={expand} className="px-5 mb-3">
        <Navbar.Brand>MENU.IO</Navbar.Brand>
        {auth ? (
          <>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Dashboard
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    className={"" + pathname === "/homepage" ? " active" : ""}
                    href="/homepage"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    className={"" + pathname === "/products" ? " active" : ""}
                    href="/products"
                  >
                    Products
                  </Nav.Link>
                  <Nav.Link
                    className={"" + pathname === "/categories" ? " active" : ""}
                    href="/categories"
                  >
                    Categories
                  </Nav.Link>
                  <Nav.Link
                    className={"" + pathname === "/dashboard" ? " active" : ""}
                    href="/dashboard"
                  >
                    Dashboard
                  </Nav.Link>

                  {/* <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
                <Button
                  variant=" trasparent"
                  className="ms-2 logout"
                  onClick={handleLogout}
                >
                  Logout
                  <AiOutlinePoweroff className="ms-2" />
                </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </>
        ) : (
          <></>
        )}
      </Navbar>
    </Row>
  );
};

export default Topnav;
