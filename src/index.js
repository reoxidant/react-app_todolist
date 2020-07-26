import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./header/header";
import ContentApp from "./content-app/content-app";
import './index.css';

ReactDOM.render(
    (
        <div>
            <Header/>
            <ContentApp/>
        </div>
    ), document.getElementById('root'));