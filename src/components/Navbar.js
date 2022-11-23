import React from "react";
import { Link } from "react-router-dom";
import './css/Navbar.css';
import Logo from '../assets/img/logo.svg'
import Search from '../assets/img/search.svg'

const Navbar = () => {
    return (
        <div>
            <div className="fixbag">
            
            </div>
            <nav>
                <div>
                    <img src={Logo} alt="logo" />
                </div>
                <div className="center">
                    <Link to='/'>Главная</Link>
                    <Link to='/Shop'>Магазин</Link>
                    <Link to='/Mypage'>Моё</Link>
                    <Link to='/Tvshow'>Телеканалы</Link>
                    <img className="search" src={Search} alt="search" />
                </div>
                <div>
                    <h1>User</h1>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;