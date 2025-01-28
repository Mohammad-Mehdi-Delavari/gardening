import React from "react";
import { Row, Col, Button, Card, Container, CardGroup } from "react-bootstrap";

export default function Products({ md, infos ,add}) {
  return (
    <Container className=" mt-5">
      <Row>
        <CardGroup>
          {infos.map((val) => (
            <Col xl={md} lg={3} md={4} sm={12}>
              <a className="card__col" href={val.link}>
                <Card
                  bsPrefix="card__section"
                  border="dark"
                  className="border-opacity-10"
                >
                  <Card.Img 
                  style={{
                      width: "80%",
                      height: "50%",
                      objectFit:"contain"
                    }}
                  variant="top" src={val.img} />
                  <Card.Body
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <h6 className="card__category">{val.category}</h6>
                    <h5 className="card__title">{val.title}</h5>
                    <Card.Text bsPrefix="card__price" className="text-warning">
                      {val.price} تومان
                    </Card.Text>
                    <Button onClick={(e)=> {
                      val.category=1
                      add(val)}} className="btn-warning text-white">
                      اضافه کردن به سبد خرید
                    </Button>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </CardGroup>
      </Row>
    </Container>
  );
}
