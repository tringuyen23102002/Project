
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { RxDot, RxDotFilled } from 'react-icons/rx';
import Shop from "../product/Product";
import Slide1 from "./imgs/Slide1.png";
import Slide2 from "./imgs/Slide2.png";
import Slide3 from "./imgs/Slide3.png";
import Slide4 from "./imgs/Slide4.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { MdSignalWifiConnectedNoInternet4 } from "react-icons/md";


const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slider = {
        height: "100%",
        position: "relative",
        objectFit: "contain",
    };
    const slide = {
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
        
    };
    const leftArrow = {
        position: "absolute",
        top: "50%",
        left: "8px",
        transform: "translate(0, -50%)",
        borderRadius: "50px",
        background: "#FFF",
        fontSize: "24px",
        color: "#000",
        zIndex: 1,
        cursor: "pointer",
        fontWeight: "bold",
        width: "48px",
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: "0.8",
    };
    
    const rightArrow = {
        position: "absolute",
        top: "50%",
        right: "8px",
        transform: "translate(0, -50%)",
        borderRadius: "50px",
        background: "#FFF",
        fontSize: "24px",
        color: "#000",
        zIndex: 1,
        cursor: "pointer",
        fontWeight: "bold",
        width: "48px",
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: "0.8",
    };
    const goToPrevious = () => {
        const isFistSlide = currentIndex === 0;
        const newIndex = isFistSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    const dotsContainer = {
        position: "absolute",
        bottom: "2px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
    };
    const dots = {
        margin: "0 3px",
        width: "24px",
        height: "24px",
        cursor: "pointer",
        lineHeight: "24px",
        fontSize: "32px",
        color: "#B5004C",
        background: "transparent",
        verticalAlign: "middle",
    };
    const activeDot = {
        lineHeight: "36px",
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "48px",
        width: "36px",
        color: "#B5004C",
        background: "transparent",
        textAlign: "center",
        verticalAlign: "middle",
        paddingTop: "8px",
    };
    const btn = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px 12px',
        gap: '10px',
        background: '#DC206F',
        borderRadius: '50px',
        position: 'absolute',
        width: '184px',
        height: '44px',
        left: '170px',
        top: '412px',
        color: '#FFF',
        cursor: 'pointer'
      };
      var heroData = [
  {
    id: 1,
    image: Slide1,
  },
  {
    id: 2,
    image: Slide2,
    
   
  },
  {
    id: 3,
    image: Slide3,
   
    
  },
  { 
    id: 4,
    image: Slide4,
  }
];
    return (
        
            <section id="home" className="hero-block">
       <Carousel>
          {heroData.map(hero => (
            <Carousel.Item key={hero.id}>
              <img
                className="d-block w-100"
                src={hero.image}
                alt={"slide " + hero.id}
              />
                           
            </Carousel.Item>
          ))}
      </Carousel>
      
    </section>
            
            
        
    );
};

export default ImageSlider;