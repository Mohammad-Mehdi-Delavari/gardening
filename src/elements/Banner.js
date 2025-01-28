import React from "react";
import { Container, Row, Col, Image, CardGroup } from "react-bootstrap";
export default function Banner() {
  return (
    <section className="mt-5">
      <Container style={{ position: "relative", marginBottom: "2rem" }}>
        <Row className="justify-content-center">
          <CardGroup style={{ padding: "0rem" }}>
            <Col
              lg={6}
              sm={12}
              md={11}
              
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                justifyContent: "space-evenly",
                height: "11rem",
                marginBottom: "2rem",
                backgroundImage: "url(./images/banner3-h11.jpg)",
                objectFit: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* <Image
                style={{
                  width: "100%",
                  right: "0",
                  top: "0",
                  bottom: "0",
                  left: "0",
                  minHeight: "100%",
                  position: "absolute",
                  zIndex: "-1",
                }}
                src="./images/banner3-h11.jpg"
              /> */}
              <h4
                className="text-bg-light"
                style={{
                  marginTop: ".5rem",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              >
                تجهیزات آبیاری
              </h4>
              <h5
                className="text-bg-light"
                style={{
                  borderRadius: "5px",
                  padding: "5px",
                  fontSize: ".9rem",
                }}
              >
                ابزاری برای آبیاری حیاط شما
              </h5>
              <a className="btn btn-success" href="#">
                همین حالا بخرید
              </a>
            </Col>
            <Col
              lg={6}
              sm={12}
              md={11}
              
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                justifyContent: "space-evenly",
                height: "11rem",
                backgroundImage: "url(./images/banner4-h11.jpg)",
                objectFit: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* <Image
                style={{
                  width: "100%",
                  right: "0",
                  top: "0",
                  bottom: "0",
                  left: "0",
                  minHeight: "100%",
                  position: "absolute",
                  zIndex: "-1",
                }}
                src="./images/banner4-h11.jpg"
              /> */}
              <h4
                className="text-bg-light"
                style={{
                  marginTop: ".5rem",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              >
                کاشت باغ
              </h4>
              <h5
                className="text-bg-light"
                style={{
                  borderRadius: "5px",
                  padding: "5px",
                  fontSize: ".9rem",
                }}
              >
                اشکالات حیاط خود را رایگان نگه دارید
              </h5>
              <a className="btn btn-success" href="#">
                همین حالا بخرید
              </a>
            </Col>
          </CardGroup>
        </Row>
      </Container>
    </section>
  );
}
