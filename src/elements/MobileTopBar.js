import React from "react";
import { Container,Nav,Navbar } from "react-bootstrap";
import { CiShoppingBasket } from "react-icons/ci";
import CartCanvas from "./CartCanvas";
export default function MobileTopBar({cartPros,newCartPros}) {

  return (
      <Navbar expand="lg" className="topBar__container d-lg-none">
        <Container >
        <CartCanvas products={cartPros} newPros={newCartPros}/>

          <Navbar.Brand href="#home">
            <p className="topBar__nav-brand">GARDENING</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link bsPrefix="nav__item1" className="nav-item" href="#">
                 صفحه اصلی <span> </span>
              </Nav.Link>
              <Nav.Link bsPrefix="nav__item1" className="nav-item" href="#">
                درباره ما<span> </span>
              </Nav.Link>
              <Nav.Link bsPrefix="nav__item1" className="nav-item" href="#">
                فروشگاه<span> </span>
              </Nav.Link>
              <Nav.Link bsPrefix="nav__item1" className="nav-item" href="#">
                بلاگ<span> </span>
              </Nav.Link>
              <Nav.Link bsPrefix="nav__item1" className="nav-item" href="#">
                تماس با ما<span> </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
