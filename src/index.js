import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from "./Components/Counter";
import {overmind} from './Others/OvermindHelper'
import {Provider} from "overmind-react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Nothing from "./Components/Nothing";

ReactDOM.render(
    <React.StrictMode>
        <Provider value={overmind}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Counter}/>
                    <Route exact path="/nothing/" component={Nothing}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
