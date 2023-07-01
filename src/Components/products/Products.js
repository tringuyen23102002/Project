import { Link } from 'react-router-dom';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Pro_1 from './imgs/Pro_1.png';
import Pro_2 from './imgs/Pro_2.png';
import Pro_3 from './imgs/Pro_3.png';
import Pro_4 from './imgs/Pro_4.png';
import Pro_5 from './imgs/Pro_5.png';
import Pro_6 from './imgs/Pro_6.png';
import Pro_7 from './imgs/Pro_7.png';
import Pro_8 from './imgs/Pro_8.png';
import pro1 from './imgs/pro1.png'
import pro2 from './imgs/pro2.png'
import pro3 from './imgs/pro3.png'
import pro4 from './imgs/pro4.png'
import pro5 from './imgs/pro5.png'
import pro6 from './imgs/pro6.png'
import pro7 from './imgs/pro7.png'
import pro8 from './imgs/pro8.png'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Products.css';


export default function Products() {
  return (
    <div className="products-wrapper">
      <Container>
        <Row className="cards">
          <Col md={3} sm={6} xs={6}>
            <div className='card-grid'>
              <div className="card">
                <div className="pro_img">
                  <img src={Pro_1} alt="Product 1" className='img_font' />
                  <img src={pro1} className='img_hover' />
                </div>
                <div className="info_product">
                  <div className="info">
                    <p>Denji figure</p>
                    <h5>$128</h5>
                  </div>
                  <div className="product">
                    <Link to="/Shop"><button className="buy">Add to cart</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} sm={6}  xs={6}>
            <div className="card">
              <div className="pro_img">
                <img src={Pro_2} alt="Product 2" />
                <img src={pro2} className='img_hover' />
              </div>
              <div className="info_product">
                <div className="info">
                  <p>Denji figure</p>
                  <h5>$128</h5>
                </div>
                <div className="product">
                <Link to="/Shop"><button className="buy">Add to cart</button></Link>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className="card">
              <div className="pro_img">
                <img src={Pro_3} alt="Product 3" />
                <img src={pro3} className='img_hover' />
              </div>
              <div className="info_product">
                <div className="info">
                  <p>Denji figure</p>
                  <h5>$128</h5>
                </div>
                <div className="product">
                <Link to="/Shop"><button className="buy">Add to cart</button></Link>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className="card">
              <div className="pro_img">
                <img src={Pro_4} alt="Product 4" />
                <img src={pro4} className='img_hover' />
              </div>
              <div className="info_product">
                <div className="info">
                  <p>Denji figure</p>
                  <h5>$128</h5>
                </div>
                <div className="product">
                <Link to="/Shop"><button className="buy">Add to cart</button></Link>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className="card">
              <div className="pro_img">
                <img src={Pro_5} alt="Product 1" />
                <img src={pro5} className='img_hover' />
              </div>
              <div className="info_product">
                <div className="info">
                  <p>Denji figure</p>
                  <h5>$128</h5>
                </div>
                <div className="product">
                <Link to="/Shop"><button className="buy">Add to cart</button></Link>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className="card">
              <div className="pro_img">
                <img src={Pro_6} alt="Product 1" />
                <img src={pro6} className='img_hover' />
              </div>
              <div className="info_product">
                <div className="info">
                  <p>Denji figure</p>
                  <h5>$128</h5>
                </div>
                <div className="product">
                <Link to="/Shop"><button className="buy">Add to cart</button></Link>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className="card">
              <div className="pro_img">
                <img src={Pro_7} alt="Product 1" />
                <img src={pro7} className='img_hover' />
              </div>
              <div className="info_product">
                <div className="info">
                  <p>Denji figure</p>
                  <h5>$128</h5>
                </div>
                <div className="product">
                <Link to="/Shop"><button className="buy">Add to cart</button></Link>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className="card">
              <div className="pro_img">
                <img src={Pro_8} alt="Product 1" />
                <img src={pro8} className='img_hover' />
              </div>
              <div className="info_product">
                <div className="info">
                  <p>Denji figure</p>
                  <h5>$128</h5>
                </div>
                <div className="product">
                <Link to="/Shop"><button className="buy">Add to cart</button></Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}