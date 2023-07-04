import Header from "../../Components/header/Header"
import Footer from "../../Components/footer/Footer"
import { AppContext } from "../../Components/Appcontext"
import "./detail.css"
import ic_remove from "../../imgs/ic_remove.png";
import Add from "../../imgs/Add.png";
import { Container } from "react-bootstrap"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react"
import { useParams } from "react-router-dom"
import pro1 from './imgs/pro1.png'
import pro2 from './imgs/pro2.png'
import pro3 from './imgs/pro3.png'
import pro4 from './imgs/pro4.png'
import Pro_1 from "./imgs/Pro_1.png"
import Pro_2 from "./imgs/Pro_2.png"
import Pro_3 from "./imgs/Pro_3.png"
import Pro_4 from "./imgs/Pro_4.png"
export default function Detail() {
    const { id } = useParams();
    const { changqty, products, addCart } = useContext(AppContext)
    
    // Tìm sản phẩm với id tương ứng trong danh sách products
    const product = products.find(item => item.id === parseInt(id));

    if (!product) {
        return <div>Không tìm thấy sản phẩm</div>;
    }

    return (
        <div>
            <Header />
            <div className="details-content">
                <Container>
                    <div className="details">
                        <div className="big-img">
                            <img src={product.src} alt={product.id} />
                        </div>
                        <div className="box">
                            <div className="row">
                                <h2>{product.title}</h2>
                            </div>
                            <p>{product.content}</p>
                            <div className="price">
                                <span>${product.price}</span>
                            </div>
                            <div className="input-group">
                                <div className="qty">
                                    <button
                                        className="quantity"
                                        onClick={() => changqty(product.id, -1)}
                                    >
                                        <img src={ic_remove} />
                                    </button>
                                    <span className="qty-number">{product.count}</span>
                                    <button
                                        className="quantity"
                                        onClick={() => changqty(product.id, +1)}
                                    >
                                        <img src={Add} />
                                    </button>
                                </div>
                                <div className="cart">
                                <button
                                    className="btn-cart"
                                    onClick={() => (addCart(product.id))}
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
                </Container>
            </div>
            <div className="other_item">
            <div className="detail_title"><h3>Other Figure</h3></div>
            <div className="other_product">

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
                          <button className="buy" onClick={()=> (addCart(product.id))}>Add to cart</button>
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
              </Container>
            </div>
          </div>
            <Footer />
        </div>
    )
}
