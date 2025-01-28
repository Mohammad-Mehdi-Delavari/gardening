import { useState, useEffect } from "react";
import { Offcanvas, Button, Row, Col, Image } from "react-bootstrap";
import { CiShoppingBasket } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
function CartCanvas({ products, newPros }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addHandel = (ind) => {
    let item = [...products];
    item[ind].category = item[ind].category + 1;
    newPros(item);
  };
  const removeHandel = (ind) => {
    let item = [...products];
    item[ind].category = item[ind].category - 1;
    if (item[ind].category == 0) {
      item = products.filter((val, index) => ind != index);
    }

    newPros(item);
  };

  return (
    <>
      <Button
        variant="light"
        style={{ position: "relative" }}
        onClick={handleShow}
      >
        <CiShoppingBasket className="topBar__icon" />
        <span className="count">{products.length}</span>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>سبد خرید</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row>
            {products.map((val, index) => (
              <Col
                sm={12}
                style={{
                  height: "6rem",
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                }}
                className="d-flex"
              >
                <Col xs={5}>
                  <Image
                    style={{ width: "100%", height: "80%" }}
                    src={val.img}
                  />
                </Col>
                <Col xs={5} style={{ width: "85%", marginRight: "0.5rem" }}>
                  <h5
                    style={{
                      fontSize: "0.9rem",
                      marginTop: "0.9rem",
                      lineHeight: "2",
                    }}
                  >
                    {val.title}
                  </h5>
                  <h6 style={{ fontSize: "0.8rem" }} className="text-warning">
                    {val.price} تومان
                  </h6>
                </Col>
                <Col className="d-flex" style={{ alignItems: "center" }} xs={2}>
                  <Button variant="success" onClick={() => addHandel(index)}>
                    <FaTrashAlt />
                  </Button>
                  <input
                    type="text"
                    disabled
                    value={val.category}
                    style={{ width: "30px" }}
                  />
                  <Button variant="danger" onClick={() => removeHandel(index)}>
                    <FaTrashAlt />
                  </Button>
                </Col>
              </Col>
            ))}
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartCanvas;
