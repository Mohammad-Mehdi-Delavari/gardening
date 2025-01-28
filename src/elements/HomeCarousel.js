import React from "react";
import { Carousel, Container,Row,Col } from "react-bootstrap";

export default function HomeCarousel() {
  return (
    <Container fluid className="mt-5">
      <Carousel sm={12} xs={12} fluid controls={false} data-bs-theme="dark" fade>
        <Carousel.Item interval={2000} pause="hover" touch={true}>
          <img
            style={{ width: "100%", height: "100%" }}
            src="./images/rev_sliderhome11_2.jpg"
            alt=""
          />
          <Carousel.Caption>
            <img
              style={{width:"50%",height:"50%", marginBottom: "5%" }}
              src="./images/rev_sliderhome11_1.png"
              alt=""
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          // style={{
          //   backgroundImage: "url(./images/rev_sliderhome11_2.jpg)",
          //   objectFit: "contain",
          //   backgroundRepeat: "no-repeat",
          // }}
          interval={2000}
          pause="hover"
          touch={true}
        >
          <img
            style={{ width: "100%", height: "90%" }}
            src="./images/rev_sliderhome11_3.jpg"
            alt=""
          />
          <Carousel.Caption>
            <img
              style={{ width:"50%",height:"50%", marginBottom: "5%" }}
              src="./images/rev_sliderhome11.png"
              alt=""
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
