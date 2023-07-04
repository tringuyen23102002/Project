import { AppContext } from "../../Components/Appcontext";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import "./checkout.css"
import emailjs from "emailjs-com";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
export default function Checkout() {
    const { cart } = useContext(AppContext);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_apx64gn', 'template_iftzaww', e.target, "qX2sZR-82nTYU2KgN")
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      };
    let totalPrice = 0;
        return (
            <div>
            <Header />
            <div className="checkout-info">
            <Container>
            
            <div className="row">

            <div className="col-md-7 col-md-5-toggle">
            <div className="card">
                <div className="card-header">
                    <h4>Shipping Address & Infomation</h4>
                </div>
                <div className="card-body">
                    <div className="row" onSubmit={sendEmail}>
                        <form onSubmit={(e) => sendEmail(e)}>
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label> First Name</label>
                                <input type="text" name="firstname" className="form-control" />
                                <small className="text-danger"></small>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label> Last Name</label>
                                <input type="text" name="lastname" className="form-control" />
                                <small className="text-danger"></small>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label> Phone Number</label>
                                <input type="number" name="phone" className="form-control" />
                                <small className="text-danger"></small>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label> Email Address</label>
                                <input type="email" name="email" className="form-control" />
                                <small className="text-danger"></small>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group mb-3">
                                <label> Full Address</label>
                                <textarea rows="3" name="address" className="form-control"></textarea>
                                <small className="text-danger"></small>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group mb-3">
                                <label>City</label>
                                <input type="text" name="city" className="form-control" />
                                <small className="text-danger"></small>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group mb-3">
                                <label>State</label>
                                <input type="text" name="state"  className="form-control" />
                                <small className="text-danger"></small>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group mb-3">
                                <label>Zip Code</label>
                                <input type="text" name="zipcode"  className="form-control" />
                                <small className="text-danger"></small>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group text-end">
                                <button type="submit" className="btn btn-primary mx-1" >Place Order</button>
                                <button type="submit" className="btn btn-primary mx-1" >Pay by Razorpay</button>
                                <button type="submit" className="btn btn-warning mx-1" >Pay Online</button>

                            </div>
                        </div>
                        </form>
                    </div>

                </div>
            </div>
            </div>

            <div className="col-md-5">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th width="50%">Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map( (item, idx) => {
                            totalPrice += item.price * item.qty;
                            return (
                                <tr key={idx}>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.price * item.qty}</td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td colSpan="2" className="text-end fw-bold">Grand Total</td>
                            <td colSpan="2" className="text-end fw-bold">{totalPrice}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            </div>
            </Container>
            </div>
            <Footer />
        </div>
        )
}
       