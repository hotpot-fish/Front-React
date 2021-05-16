import React from 'react';
import './App.css';
import login from "./Source/Containers/login";
import SearchView from "./Source/View/SearchView";
import TwoView from "./Source/View/Twoview";
import ThreeView from "./Source/View/Threeview";
import {HashRouter, Route,Redirect} from "react-router-dom";
import {Switch} from "react-router";
import HomePage from "./Source/View/HomePage";

export default class App extends React.Component {
  render() {
    return (
        <HashRouter>
          <Switch>

              <Route exact  path={"/1"} component={SearchView}/>
              <Route exact path={"/2"} component={login} />
              <Route exact path={"/3"} component={ThreeView} />
              <Route exact  path={"/"} component={HomePage} />
              <Redirect from={"/*"} to={"/"}></Redirect>
          </Switch>
        </HashRouter>
    );
  }
}