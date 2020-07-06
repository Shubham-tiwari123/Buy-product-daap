import React, {Component} from "react";
import "./App.css";
import {BrowserRouter,Route} from 'react-router-dom'
import Home from "./components/Home";
import ItemBill from "./components/ItemBill";

class App extends Component {

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div className="App">
                        <Route exact path='/' component={Home} />
                        <Route path='/bill' component={ItemBill}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
