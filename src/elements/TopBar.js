import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  InputGroup,
  Form,
  Button,
  Nav,
} from "react-bootstrap";

import { IoSearch } from "react-icons/io5";
import { CiUser, CiHeart } from "react-icons/ci";
import CartCanvas from "./CartCanvas";
export default function TopBar({ cartPros,newCartPros }) {
  
  return (
    <Container className="topBar__container d-lg-block d-sm-none d-none" fluid>
      <Row className="topBar__section">
        <Navbar expand="lg" className="topBar__nav">
          <Col className="topBar__col" md={3}>
            <Navbar.Brand
              className="topBar__nav-brand text-warning"
              href="#home"
            >
              <p className="topBar__nav-brand">GARDENING</p>
            </Navbar.Brand>
          </Col>
          <Col className="topBar__col" md={5}>
            <InputGroup className="topBar__search mb-3">
              <InputGroup.Text>
                <IoSearch className="text-warning " />
              </InputGroup.Text>
              <Form.Control
                className="topBar__search-input"
                id="basic-url"
                type="search"
                aria-describedby="basic-addon3"
              />
              <Button
                variant="warning"
                className="topBar__search-btn text-white"
                type="submit"
              >
                جستجو
              </Button>
            </InputGroup>
          </Col>
          <Col md={3} className="topBar__col">
            <a className="topBar__icon-link" href="#">
              <CiUser className="topBar__icon" />
            </a>
            <a className="topBar__icon-link" href="#">
              <CiHeart className="topBar__icon" />
            </a>
            <CartCanvas products={cartPros} newPros={newCartPros}/>
          </Col>
        </Navbar>
      </Row>
      <Row>
        <Nav activeKey="/home" className="bg-warning">
          <Col className="nav__col">
            <Nav.Item>
              <Nav.Link bsPrefix="nav__item" className="nav-item" href="#">
                صفحه اصلی <span> </span>
              </Nav.Link>
              <Nav.Link bsPrefix="nav__item" className="nav-item" href="#">
                درباره ما<span> </span>
              </Nav.Link>
              <Nav.Link bsPrefix="nav__item" className="nav-item" href="#">
                فروشگاه<span> </span>
              </Nav.Link>
              <Nav.Link bsPrefix="nav__item" className="nav-item" href="#">
                بلاگ<span> </span>
              </Nav.Link>
              <Nav.Link bsPrefix="nav__item" className="nav-item" href="#">
                تماس با ما<span> </span>
              </Nav.Link>
            </Nav.Item>
          </Col>
        </Nav>
      </Row>
    </Container>
  );
}
