import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Components/Appcontext";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import { Container } from "react-bootstrap";
import "./Cart.css";
import ic_remove from "../../imgs/ic_remove.png";
import trash from "../../imgs/Trash.png";
import Add from "../../imgs/Add.png";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const { cart, delete1, changqty } = useContext(AppContext);
  const navigate = useNavigate();
  const totalPrice = cart.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  return (
    <div className="cart-items">
      <Header />
      <div className="cartbg">
      <Container className="shopping-cart">
        <div className="cart-list">
          <div className="cart-items-header">
            <h3>Shopping Cart</h3>
          </div>
          {cart.map((item) => (
            <div key={item.id} className="cart-items-list">
              <div className="cart-info">
                <div className="cart-info-left">
                  <img
                    className="cart-items-image"
                    src={item.src}
                    src1={item.index}
                    alt={item.id}
                  />
                  <div className="cart-item-info">
                    <p className="item-info">{item.title}</p>
                    <p>{item.content}</p>
                    <div className="qty">
                      <button
                        className="quantity"
                        onClick={() => changqty(item.id, -1)}
                      >
                        <img src={ic_remove} />
                      </button>
                      <span className="qty-number">{item.qty}</span>
                      <button
                        className="quantity"
                        onClick={() => changqty(item.id, +1)}
                      >
                        <img src={Add} />
                      </button>
                    </div>
                    <div className="total-per">
                      <h4>${item.qty * item.price}</h4>
                    </div>
                  </div>
                </div>
                <div className="cart-info-right">
                  <button className="filter" onClick={() => delete1(item.id)}>
                    <img src={trash} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button className="back" onClick={() => navigate("/shop")}>Back to shop</button>
        </div>
        <div className="total-info">
          <div className="total-header">
            <h3>Summary</h3>
          </div>
          <div className="total-content">
           
              <p>Subtotal</p>
           
            
              <p>${totalPrice}</p>
           
          </div>
          <div className="total-content">
            <p> Delivery & Handing</p>
            <p>$0</p>
          </div>
          <div className="total-price">   
              <p>Total: </p>        
              <p className="p-price">${totalPrice}</p>
          </div>
          <Link to="/checkout">
            <div className="checkout">
              <button>Check out</button>
            </div>
          </Link>
        </div>
      </Container>
      </div>
      
      <Footer />
    </div>
  );
}
