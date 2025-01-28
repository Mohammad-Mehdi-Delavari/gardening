import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
export default function ProductsBox({ infos, category, products }) {

  return (
    <section className="ProductsBox__section" style={{ paddingTop: "2rem" }}>
      <Container
        style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}
        className="mt-5"
      >
        <Row>
          <Col
            lg={2}
            md={12}
            style={{ borderLeft: "1px solid rgba(0,0,0,0.1)" }}
          >
            <h3
              style={{
                borderBottom: "1px solid rgba(0,0,0,0.1)",
                fontSize: "1.5rem",
              }}
              className="pb-3"
            >
              {infos.title}
            </h3>
            <ul
              style={{
                listStyle: "none",
                color: "rgba(0,0,0,0.5)",
                padding: "0",
              }}
            >
              {category.map((val, index) => (
                <li
                  className="mt-2 mb-3 ProductsBox__li"
                  style={{
                    fontSize: "0.8rem",
                  }}
                >
                  <a key={index} className="productsBox__a" href={val.link}>
                    {val.title}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
          <Col style={{ paddingTop: "2rem", paddingBottom: "2rem" }} md={7}>
            <Container fluid className="d-flex">
              <Row className="justify-content-evenly">
                {products.map((val) => (
                  <Col
                    lg={5}
                    sm={12}
                    style={{
                      height: "6rem",
                      borderBottom: "1px solid rgba(0,0,0,0.1)",
                    }}
                    className="d-flex"
                  >
                    <Col lg={4}>
                      <Image
                        style={{ width: "100%", height: "80%" }}
                        src={val.img}
                      />
                    </Col>
                    <Col lg={8} style={{ width: "85%", marginRight: "0.5rem" }}>
                      <h5
                        style={{
                          fontSize: "0.9rem",
                          marginTop: "0.9rem",
                          lineHeight: "2",
                        }}
                      >
                        {val.title}
                      </h5>
                      <h6
                        style={{ fontSize: "0.8rem" }}
                        className="text-warning"
                      >
                        {val.price} تومان
                      </h6>
                    </Col>
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>

          <Col
            sm={0}
            lg={3}
            className="position-relative d-lg-block d-sm-none d-none"
            style={{
              backgroundImage: `url(${infos.img})`,
              objectFit: "contain",
              backgroundRepeat: "no-repeat",
              marginBottom:"2rem"
            }}
          >
            <h4 className="pt-5 text-white" style={{ marginRight: "1rem" ,fontSize:"1.5rem"}}>
              {infos.tag}
            </h4>
            <h5
              className="mt-5 text-white text-bg-warning"
              style={{
                width: "6rem",
                textAlign: "center",
                fontSize: ".9rem",
                padding: "0.2rem 0",
                marginRight: "1rem",
              }}
            >
              {infos.category}
            </h5>
            <h5
              className="mt-5 text-success text-bg-light"
              style={{
                width: "8rem",
                textAlign: "center",
                fontSize: ".9rem",
                padding: "0.2rem 0",
                marginRight: "1rem",
              }}
            >
              {infos.price}
            </h5>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
