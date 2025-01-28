import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
export default function BlogPosts({ infos }) {
  return (
    <section>
      <Container
        className="d-flex"
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <h4 style={{ fontWeight: "bolder" }}>از بلاگ ما</h4>
        <p style={{ fontSize: ".9rem", color: "rgba(0,0,0,0.5)" }}>
          آخرین به روزرسانی ما را از دست ندهید
        </p>
        <Row className="justify-content-center">
          {infos.map((val) => (
            <Col
              as={"a"}
              href="#"
              style={{ textDecoration: "none" }}
              className="p-4"
              lg={4}
              sm={11}
            >
              <Image
                style={{ width: "100%", height: "17rem" ,objectFit:"cover"}}
                src={val.img}
                alt={val.title}
              />
              <ul
                style={{
                  listStylePosition: "inside",
                  display: "flex",
                  marginTop: "1rem",
                  justifyContent: "center",
                }}
              >
                <li
                  style={{
                    color: "rgba(0,0,0,0.4)",
                    listStyle: "none",
                    fontSize: ".8rem",
                  }}
                >
                  {val.category}
                </li>
                <li
                  style={{
                    color: "rgba(0,0,0,0.4)",
                    marginRight: "10px",
                    fontSize: ".8rem",
                  }}
                >
                  توسط {val.author}
                </li>
              </ul>
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  color: "black",
                }}
              >
                {val.title}
              </h5>
              <p
                style={{
                  color: "rgba(0,0,0,0.6)",
                  marginTop: "2rem",
                  fontSize: ".9rem",
                }}
              >
                {val.description}
              </p>
              <a
                className="BlogPosts__a text-warning"
                style={{
                  textDecoration: "none",
                  fontSize: ".8rem",
                  fontWeight: "bolder",
                  position: "relative",
                }}
                href={val.link}
              >
                ادامه مطلب
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
