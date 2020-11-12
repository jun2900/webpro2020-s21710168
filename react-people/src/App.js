import React from "react";
import List from './components/List'
import {human} from './utils/human'
import "./App.css"

const App = () => {
    return (
        <div className ="app">
            <h1>React People</h1>
            <List data={human}/>
        </div>
    );
};

export default App;
