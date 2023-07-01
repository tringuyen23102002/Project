import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";
import { AppContext } from "../../Components/Appcontext";
export default function Product() {
  const { addCart, products } = useContext(AppContext)
 
  return (
    <React.Fragment>
      <div className="products-wrapper">
        
        <Container>
          <Row className="cards">
            {products.map((productItem, productIndex) => {
              return (
                <Col md={3} sm={6} xs={6} key={productIndex}>
                  <div className='card-grid'>
                    <div className="card">
                      <div className="pro_img">
                        <Link to={`/shop/${productItem.id}`}>
                        <img src={productItem.src} className='img_font' />
                        <img src={productItem.src1} className='img_hover' />
                        </Link>
                      </div>
                      <div className="info_product">
                        <div className="info">
                          <p>{productItem.title}</p>
                          <span>${productItem.price}</span>
                        </div>
                        <div className="product">
                          <button className="buy" onClick={() => addCart(productItem.id)}>Add To Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
