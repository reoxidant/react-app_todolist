import React from "react";
import logo from "./logo.png";
import './header.css';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logotype"/>
                <span>Todolist</span>
            </div>
            <div className="actions-bar">
                <div className="field-search">
                    <input id="search" type="text"/>
                    <label htmlFor="search" className="fa fa-search input-icon"></label>
                </div>
                <button id="add-button">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
            </div>
        </header>
    )
}

export default Header;