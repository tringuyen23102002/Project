import React, { useState, useRef, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DetailsThumb from "../../Components/DetailsThumb";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import p1 from "./imgs/p1.png";
import p2 from "./imgs/p2.png";
import p3 from "./imgs/p3.png";
import p4 from "./imgs/p4.png";
import p5 from "./imgs/p5.png";
import pro1 from './imgs/pro1.png'
import pro2 from './imgs/pro2.png'
import pro3 from './imgs/pro3.png'
import pro4 from './imgs/pro4.png'
import Pro_1 from "./imgs/Pro_1.png"
import Pro_2 from "./imgs/Pro_2.png"
import Pro_3 from "./imgs/Pro_3.png"
import Pro_4 from "./imgs/Pro_4.png"
import "./product_detail.css";
import { AppContext } from "../../Components/Appcontext";
export default function ProductDetail() {
  const [cart, setCart] = useState([]);
  const {addCart} = useContext(AppContext)
  const [showCart, setShowCart] = useState(false);
  const [products, setProducts] = useState([
    {
      id: "9",
      title: "Genshin impact Lumine Figure",
      src: [p1, p2, p3, p4, p5],
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      price: 400,
      colors: ["red", "black", "crimson", "teal"],
      count: 1,
    },
  ]);
  const [index, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const myRef = useRef();

  // const addToCart = (data) => {
  //   setCart([...cart, { ...data, quantity: 1 }]);
  // };

  // const handleShow = (value) => {
  //   setShowCart(value);
  // };

  const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < 3) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  useEffect(() => {
    if (myRef.current) {
      const images = myRef.current.children;
      images[index].className = "active";
    }
  }, [index]);

  return (
    <div className="app">
      <Header count={cart.length}  />
      {products.map((item) => (
        <Container key={item.id}>
          <div className="details" key={item.id}>
            <div className="big-img">
              <DetailsThumb
                images={item.src}
                tab={handleTab}
                myRef={myRef}
              />
              <img src={item.src[index]} alt="" />
            </div>

            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
              </div>

              <p>{item.content}</p>
              <div className="price">
                <span>${item.price}</span>
              </div>
              <div className="input-group">
                <div className="quantity">
                  <button
                    type="-"
                    onClick={handleDecrement}
                    className="input-group-text"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="form"
                    value={quantity}
                    readOnly
                  />
                  <button
                    type="+"
                    onClick={handleIncrement}
                    className="input-group-text"
                  >
                    +
                  </button>
                </div>
                <div className="cart">
                  <button
                    className="btn-cart"
                    onClick={() => (addCart(item.id))}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
              <div
                style={{
                  background: '#CFCFCF',
                  height: '1px',
                }}
              />
              <div className="detail">
                <p><span className="title">Detail</span></p>
                <p>Character: Lumine</p>
                <p>Color: White, Yellow, Blue</p>
                <p>Size: 86x128</p>
                <p>Series: U-NOA QULUTS</p>
                <p>Creator: Mihoyo</p>
                <p>Release: 12/12/2021</p>
                <p>Country/Region of Origin: Vietnam</p>
              </div>
            </div>
          </div>
          <div
            className="s1"
            style={{
              background: '#CFCFCF',
              height: '1px',
            }}
          />

          <div className="other_item">
            <div className="detail_title"><h3>Other Figure</h3></div>
            <div className="other_product">
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
                          <button className="buy" onClick={()=> (addCart(item.id))}>Add to cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={3} sm={6} xs={6}>
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
                        <button className="buy">Add to cart</button>
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
                        <button className="buy">Add to cart</button>
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
                        <button className="buy">Add to cart</button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      ))}
      <Footer />
    </div>
  );
}
