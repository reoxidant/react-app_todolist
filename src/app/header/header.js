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
            <div className="search-actions-bar">
                <div className="field-search">
                    <input id="input-search" type="text"/>
                    <label htmlFor="input-search" className="fa fa-search input-icon"/>
                </div>
                <button id="add-new-item-btn">
                    <i className="fa fa-plus" aria-hidden="true"/>
                </button>
            </div>
        </header>
    )
}

export default Header;