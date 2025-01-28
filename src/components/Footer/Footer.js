import React from "react";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#252525", paddingTop: "5rem" }}>
      <Container style={{ borderBottom: "1px solid rgba(255,255,255,0.5)" }}>
        <Row className="justify-content-evenly">
          <Col
            style={{
              marginBottom: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            xl={3}
            md={6}
          >
            <h4
              className="text-light"
              style={{
                fontSize: ".9rem",
                fontWeight: "bolder",
                marginBottom: "2rem",
              }}
            >
              تماس با ما
            </h4>
            <p style={{ fontSize: ".9rem",margin:"0", color: "rgba(255,255,255,0.5)" }}>
              اگر سئوالی دارید از ما بپرسید
            </p>
            <a
              style={{
                fontSize: ".9rem",
                color: "rgb(255, 193, 7)",
                textDecoration: "none",
              }}
              href="#"
            >
              support@example.com
            </a>
          </Col>
          <Col
            style={{
              marginBottom: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            xl={2}
            md={6}
          >
            <h4
              className="text-light"
              style={{
                fontSize: ".9rem",
                fontWeight: "bolder",
                marginBottom: "2rem",
              }}
            >
              آدرس فروشگاه
            </h4>
            <p style={{ fontSize: ".9rem", color: "rgba(255,255,255,0.5)" }}>
              تهران میدان آزادی
            </p>
            <p style={{ fontSize: ".9rem", color: "rgba(255,255,255,0.5)" }}>
              شنبه – چهارشنبه: 8 تا 16
            </p>
            <p style={{ fontSize: ".9rem", color: "rgba(255,255,255,0.5)" }}>
              پنجشنبه: 9 تا 14
            </p>
          </Col>
          <Col
            style={{
              marginBottom: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderLeft: "1px solid rgba(255,255,255,0.5)" 
            }} 
            xl={2}
            md={6}
          >
            <h4
              className="text-light"
              style={{
                fontSize: ".9rem",
                fontWeight: "bolder",
                marginBottom: "2rem",
              }}
            >
              دسته بندی ها
            </h4>
            <a
              style={{
                display: "block",
                textDecoration: "none",
                marginBottom: ".5rem",
                fontSize: ".9rem",
                color: "rgba(255,255,255,0.5)",
              }}
              href="#"
            >
              مردانه
            </a>
            <a
              style={{
                display: "block",
                textDecoration: "none",
                marginBottom: ".5rem",
                fontSize: ".9rem",
                color: "rgba(255,255,255,0.5)",
              }}
              href="#"
            >
              زنانه
            </a>
            <a
              style={{
                display: "block",
                textDecoration: "none",
                marginBottom: ".5rem",
                fontSize: ".9rem",
                color: "rgba(255,255,255,0.5)",
              }}
              href="#"
            >
              لوازم جانبی
            </a>
            <a
              style={{
                display: "block",
                textDecoration: "none",
                marginBottom: ".5rem",
                fontSize: ".9rem",
                color: "rgba(255,255,255,0.5)",
              }}
              href="#"
            >
              کالکشن
            </a>
            <a
              style={{
                display: "block",
                textDecoration: "none",
                marginBottom: ".5rem",
                fontSize: ".9rem",
                color: "rgba(255,255,255,0.5)",
              }}
              href="#"
            >
              سایر
            </a>
          </Col>
          <Col
            style={{
              marginBottom: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            xl={3}
            md={6}
          >
            <h4
              className="text-light"
              style={{
                fontSize: ".9rem",
                fontWeight: "bolder",
                marginBottom: "2rem",
              }}
            >
              خبرنامه
            </h4>
            <p style={{ fontSize: ".9rem", color: "rgba(255,255,255,0.5)" }}>
              برای عضویت در خبرنامه ما، ایمیل خود را وارد کنید.
            </p>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="ایمیل"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <Button variant="warning" type="submit">
                عضویت
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col xl={6}
          md={6}>
            <p>© 2024 – تمامی حقوق متعلق به رز آبی است.</p>
          </Col>
          <Col xl={3}
          md={6}></Col>
        </Row>
      </Container>
      <Container  style={{ paddingTop: "3rem" }}>
        <Row>
          <Col xl={6}
          md={6} className="mb-3">
            <p style={{ fontSize: ".9rem", color: "rgba(255,255,255,0.5)" }}>
              © 2020 – تمامی حقوق متعلق به من است.
            </p>
          </Col>
          <Col xl={3}
          md={6}>
            <a href="#">
              <FaFacebookSquare className="Footer__icon" />
            </a>
            <a href="#">
              <FaTwitter className="Footer__icon" />
            </a>
            <a href="#">
              <FaLinkedin className="Footer__icon" />
            </a>
            <a href="#">
              <FaInstagram className="Footer__icon" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
