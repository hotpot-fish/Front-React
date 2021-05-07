import React from 'react';
import './App.css';
import login from "./components/login";
import SearchView from "./components/view/SearchView";
import TwoView from "./components/view/Twoview";
import ThreeView from "./components/view/Threeview";
import {HashRouter, Route} from "react-router-dom";
import {Switch} from "react-router";


export default class App extends React.Component {
  render() {
    return (
        <HashRouter>
          <Switch>
            <Route exact path={"/"} component={SearchView}/>
              <Route path={"/2"} component={login} />
              <Route path={"/3"} component={ThreeView} />
          </Switch>
        </HashRouter>
    );
  }
}