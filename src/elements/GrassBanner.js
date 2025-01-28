import React from "react";
import { Container } from "react-bootstrap";
export default function GrassBanner() {
  return (
    <section>
      <Container
        style={{
          backgroundImage: "url(./images/banner5-h11.png)",
          height: "16rem",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h6
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          باغبانی و مراقبت از چمن
        </h6>
        <span
          style={{
            display: "block",
            width: "11rem",
            height: "3rem",
            backgroundImage: "url(./images/vector1-h11.png)",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
            textAlign: "left",
            lineHeight: "2.5",
            paddingLeft: "1rem",
            color: "#fff",
            fontSize: ".9rem",
            fontWeight: "700",
          }}
        >
          از 100000 تومان
        </span>
      </Container>
    </section>
  );
}
