import React from 'react';
import './App.css';
import login from "./Source/Containers/login";
import SearchView from "./Source/View/SearchView";
import TwoView from "./Source/View/Twoview";
import ThreeView from "./Source/View/Threeview";
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