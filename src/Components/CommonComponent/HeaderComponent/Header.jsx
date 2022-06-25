import React, { Fragment } from "react";
import "./Header.scss";
import logo from "../../../Assets/finallogo.png"
import search from "../../../Assets/search.png"
import user from "../../../Assets/user.png";
import bag from "../../../Assets/bag.png";
import menubtn from "../../../Assets/menubtn.png";
import { Link } from "react-router-dom";

class Header extends React.Component {
    state = { flag: false }
    render() {

        return (
            <>
                <header>
                    <Link style={{ textDecoration: 'none', color: "#1B252C" }} to={`/adobereactassignment`}>

                        <img src={logo} alt="Venia" className="logo" />
                    </Link>
                    <nav className="navbar-desktop">
                        <ul className="nav__link">
                            <li><a href="/adobereactassignment">Women</a></li>
                            <li>Men</li>
                            <li>Smart Gear</li>
                            <li>Accessories</li>
                        </ul>
                    </nav>
                    <div className="search">
                        <div><img src={search} alt="search" className="srch" /></div>
                        <label className="lab-1">Search</label>
                        <div><img src={user} alt="user" className="signin" /></div>
                        <label className="lab-2">Sign In</label>
                        <div><img src={bag} alt="bag" className="s-bag" /></div>
                    </div>
                </header>

                {/* mobile header start */}
                <div className="main-mobile-section-header">
                <div className="clickme" onClick={() => {
                    this.setState({ flag: !this.state.flag })

                }}><img src={menubtn} alt="Menu" className="menu-btn" />
                </div>
                {this.state.flag ? <nav className="navbar-mobile" id="menu-div">
                    <ul className="nav__link">
                        <li><a href="/adobereactassignment">Women</a></li>
                        <li>Men</li>
                        <li>Smart Gear</li>
                        <li>Accessories</li>
                    </ul>
                </nav> : ""}
                <div className="mobile-logo">
                <Link style={{ textDecoration: 'none', color: "#1B252C" }} to={`/adobereactassignment`}>

                <img src={logo} alt="Venia" className="mobile-logo" />
                </Link>
                </div>
                <div className="mob-icon">
                <div><img src={search} alt="search" className="srch" /></div>
                <div><img src={bag} alt="bag" className="s-bag" /></div>
                </div>
            </div>

            </>

        );

    }
}

export default Header;