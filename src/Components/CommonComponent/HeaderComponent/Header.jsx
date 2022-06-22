import React, { Fragment } from "react";
import "./Header.scss";
import logo from "../../../Assets/finallogo.png"
import search from "../../../Assets/search.png"
import user from "../../../Assets/user.png";
import bag from "../../../Assets/bag.png";
import menubtn from "../../../Assets/menubtn.png";


class Header extends React.Component {
    state = { flag: false }
    render() {

        return (
            <>
                <header>
                    <img src={logo} alt="Venia" className="logo" />
                    <nav className="navbar-desktop">
                        <ul className="nav__link">
                            <li><a href="/">Women</a></li>
                            <li><a href="#">Men</a></li>
                            <li><a href="#">Smart Gear</a></li>
                            <li><a href="#">Accessories</a></li>
                        </ul>
                    </nav>
                    <div className="search">
                        <div><img src={search} alt="taste of fruit" className="srch" /></div>
                        <label className="lab-1">Search</label>
                        <div><img src={user} alt="taste of fruit" className="signin" /></div>
                        <label className="lab-2">Sign In</label>
                        <div><img src={bag} alt="taste of fruit" className="s-bag" /></div>
                    </div>
                </header>

                <div className="clickme" onClick={() => {
                    this.setState({ flag: !this.state.flag })

                }}><img src={menubtn} alt="Menu" className="menu-btn" />
                </div>
                {this.state.flag ? <nav className="navbar-mobile" id="menu-div">
                    <ul className="nav__link">
                        <li><a href="/">Women</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Smart Gear</a></li>
                        <li><a href="#">Accessories</a></li>
                    </ul>
                </nav> : ""}

            </>

        );

    }
}

export default Header;