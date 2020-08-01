import React from 'react';
import './app.css';
import HeaderApp from "../header-app/header-app";
import ContentApp from "../content-app/content-app";

const App = () => {
    return(
        <div>
            <HeaderApp/>
            <ContentApp/>
        </div>
    );
}

export default App;