import Header from "../../Components/header/Header";
import { Link } from "react-router-dom";
import Footer from "../../Components/footer/Footer";
import "./Home.css";
import React, { useEffect, useState } from 'react'
import ImageSlider from "./ImageSlider";
import Slide1 from "./imgs/Slide1.png";
import Slide2 from "./imgs/Slide2.png";
import Slide3 from "./imgs/Slide3.png";
import Slide4 from "./imgs/Slide4.png";
import Lumine from "./imgs/Lumine.png";
import Aether from "./imgs/Aether.png";
import Pro_left from "./imgs/Pro_left.png";
import Pro_right from "./imgs/Pro_right.png";
import pic_1 from "./imgs/pic_1.png";
import pic_2 from "./imgs/pic_2.png";
import pic_3 from "./imgs/pic_3.png";
import pic_4 from "./imgs/pic_4.png";
import pic_5 from "./imgs/pic_5.png";
import pic_6 from "./imgs/pic_6.png";
import pic_7 from "./imgs/pic_7.png";
import pic_8 from "./imgs/pic_8.png";
import pic_9 from "./imgs/pic_9.png";
import pic_10 from "./imgs/pic_10.png";
import pic_11 from "./imgs/pic_11.png";
import pic_12 from "./imgs/pic_12.png";
import pic_13 from "./imgs/pic_13.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Context from "../../Components/Context/Context";
import Section6 from "../section6/Section6";
import { AppContext } from "../../Components/Appcontext";
export default function Project() {
    const slides = [
        { url: Slide1, title: 'Slide 1' },
        { url: Slide2, title: 'Slide 2' },
        { url: Slide3, title: 'Slide 3' },
        { url: Slide4, title: 'Slide 4' },
    ];
    const { productItems } = Context;
    const [cartItems, setCartItems] = useState([AppContext]);
    
    return (

        <div className="">
            <Header />
            <main>
               
            <ImageSlider slides={slides} />
                <Container>
                <div className="section1">
                <Container fluid="md">
                    <Row className="row-cols-1 row-cols-md-2">
                    <Col>
                        <div className="cont-1">
                        <div className="info">
                            <h3>Collection</h3>
                            <h5>Lumine Fi   gure</h5>
                            <p>
                            Lumine figure from Tiponafie, if you are looking for the best place to buy Aether figure.
                            Tiponafie is the best place.
                            </p>
                            <div className="shopcart-wrapper">
                            <Link className="shopcart" to="/product_detail">Shop now</Link>
                            </div>
                        </div>
                        <div className="pro-1">
                            <img src={Lumine} alt="Lumine Figure" />
                        </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="cont-1">
                        <div className="info">
                            <h3>Collection</h3>
                            <h5>Aether Figure</h5>
                            <p>
                            Lumine figure from Tiponafie, if you are looking for the best place to buy Aether figure.
                            Tiponafie is the best place.
                            </p>
                            <div className="shopcart-wrapper">
                            <Link className="shopcart" to="/product_detail">Shop now</Link>
                            </div>
                        </div>
                        <div className="pro-1">
                            <img src={Aether} alt="Aether Figure" />
                        </div>
                        </div>
                    </Col>
                    </Row>
                </Container>
                </div>



                <div className="section2">
                    <div className="title">
                        <h3>Hot Selling Now</h3>
                        <p>Top order for this month</p>
                    </div>
                    <div className="product">
                        <div className="product-left">
                        <div className="pro">
                            <img src={Pro_left} alt="Product Left" />
                        </div>
                        </div>
                        <div className="product-right">
                        <div className="pro">
                            <div className="s1">
                            <img src={pic_1} alt="Product 1" />
                            <div className="s1-content">
                                <p>Nezuko figure</p>
                                <h5>$50</h5>
                                <button className="Buy">Add to Cart</button>
                            </div>
                            </div>
                            <div className="s1">
                            <img src={pic_2} alt="Product 2" />
                            <div className="s1-content">
                                <p>Nezuko figure</p>
                                <h5>$50</h5>
                                <button className="Buy">Add to Cart</button>
                            </div>
                            </div>
                            <div className="s1">
                            <img src={pic_3} alt="Product 3" />
                            <div className="s1-content">
                                <p>Nezuko figure</p>
                                <h5>$50</h5>
                                <button className="Buy">Add to Cart</button>
                            </div>
                            </div>
                            <div className="s1">
                            <img src={pic_4} alt="Product 4" />
                            <div className="s1-content">
                                <p>Nezuko figure</p>
                                <h5>$50</h5>
                                <button className="Buy">Add to Cart</button>
                            </div>
                            </div>
                            <div className="s1">
                            <img src={pic_5} alt="Product 5" />
                            <div className="s1-content">
                                <p>Nezuko figure</p>
                                <h5>$50</h5>
                                <button className="Buy">Add to Cart</button>
                            </div>
                            </div>
                            <div className="s1">
                            <img src={pic_6} alt="Product 6" />
                            <div className="s1-content">
                                <p>Nezuko figure</p>
                                <h5>$50</h5>
                                <button className="Buy">Add to Cart</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>


                <div className="section3">
                    <div className="title">
                        <h3>New Collection</h3>
                        <p>Select if you chose and want it</p>
                    </div>
                    <div className="product">
                    <div className="product-left1">
                        <div className="pro">
                            <img src={Pro_right} alt="Product Left" />
                        </div>
                        </div>
                    <div className="product-right">
                        <div className="pro">
                            <div className="s1">
                                <img src={pic_7} alt="Product 1" />
                                <div className="s1-content">
                                    <p>Nezuko figure</p>
                                    <h5>$50</h5>
                                    <button className="Buy">Add to Cart</button>
                                </div>
                            </div>
                            <div className="s1">
                            <img src={pic_8} alt="Product 2" />
                            <div className="s1-content">
                                <p>Nezuko figure</p>
                                <h5>$50</h5>
                                <button className="Buy">Add to Cart</button>
                            </div>
                            </div>
                            <div className="s1">
                            <img src={pic_9} alt="Product 3" />
                            <div className="s1-content">
                                <p>Nezuko figure</p>
                                <h5>$50</h5>
                                <button className="Buy">Add to Cart</button>
                            </div>
                            </div>
                            <div className="s1">
                            <img src={pic_10} alt="Product 4" />
                            <div className="s1-content">
                                <p>Nezuko figure</p>
                                <h5>$50</h5>
                                <button className="Buy">Add to Cart</button>
                            </div>
                            </div>
                            <div className="s1">
                            <img src={pic_11} alt="Product 5" />
                            <div className="s1-content">
                                <p>Nezuko figure</p>
                                <h5>$50</h5>
                                <button className="Buy">Add to Cart</button>
                            </div>
                            </div>
                            <div className="s1">
                            <img src={pic_12} alt="Product 6" />
                            <div className="s1-content">
                                <p>Nezuko figure</p>
                                <h5>$50</h5>
                                <button className="Buy">Add to Cart</button>
                            </div>
                            </div>
                       
                        </div>
                        </div>
                        <div className="product-left">
                        <div className="pro">
                            <img src={Pro_right} alt="Product Left" />
                        </div>
                        </div>
                    </div>
                    </div>
                </Container>
                <div class="section4">
                <div class="section4">
                    <div class="info4">
                        <Container>
                        <div class="action">
                            <div class="left4">
                            <div class="pro4">
                                <img src={pic_13} alt="Scale Figure" />
                            </div>
                            </div>
                            <div class="right4">
                            <div class="content4">
                                <h1>Scale Figure</h1>
                                <h4>Scale down to standard proportions with the finest detail of all</h4>
                                <button class="btn4">Find out more</button>
                            </div>
                            </div>
                        </div>
                        </Container>
                    </div>
                    </div>
                </div>

                <div className="section5">
                        <div>
                            <Container>
                                <div className="title5">
                                    <h3>Shop Exclusives</h3>
                                    <p>Select if you chose and want it</p>
                                </div>
                            </Container>
                            <Section6 productItems={productItems} cartItems={cartItems} />
                            <Container>
                                <div className="btn5">
                                    <Link to="shop" className="CTA_5">
                                            View more
                                    </Link>
                                </div>
                            </Container>
                            
                        </div>
                        
                </div>
            </main>
              <Footer />  
        </div>
    );
}