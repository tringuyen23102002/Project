import "./shop.css"
import Header from "../../Components/header/Header";
import { Link } from "react-router-dom";
import Footer from "../../Components/footer/Footer";
import banner_shop from "./banner_shop.png";
import Section6 from "../section6/Section6";
import { Container } from "react-bootstrap";
export default function Shop() {
    return (
        <div>
            <Header />
            <div className="main_shop">
                <div className="banner_shop">
                    <img src={banner_shop} />
                </div>
                <div className="shop_product">
                    <Container>
                    <div className="shop_title">
                        <h3>All Figures</h3>
                    </div>
                    </Container>
                    <Section6 />
                </div>
            </div>
            <Footer />
        </div>
    )
}