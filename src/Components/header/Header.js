import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import cart from './icon/cart.png';
import menu from './icon/menu.png';
import close from './icon/close.png';
import search from './icon/search.png';
import { useState, useEffect } from 'react';
import Logo from './icon/Logo.png';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../Appcontext';
export default function Header(props) {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const { quanlity } =useContext(AppContext)
  const menuToggle = () => {
    setToggle(!toggle);
  };
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={isSticky ? 'sticky-header' : ''}>
      <div className="menu" onClick={menuToggle}>
        <img src={menu} alt="" width="24" />
      </div>
      <div className="logo">
        <h1>
          <Link to="/Project">
            <img src={Logo} />
          </Link>
        </h1>
        <nav>
          <ul className={toggle ? 'toggle' : ''}>
            <li>
              <NavLink exact to="/Project" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Shop" activeClassName="active">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" activeClassName="active">
                About
              </NavLink>
            </li>
            <li className="close" onClick={menuToggle}>
              <img src={close} alt="" width="24" />
            </li>
          </ul>
        </nav>
      </div>
      <div className="nav-cart">
        <nav>
          <div className='search'>
            <input placeholder='Search' /><img src={search}
            className='searchbg'/>
            </div>
          <Link to="/cart">
          <span>{quanlity}</span>
          <img src={cart} alt="" width="24"  />
          
          </Link>
        </nav>
      </div>
    </header>
  );
}
