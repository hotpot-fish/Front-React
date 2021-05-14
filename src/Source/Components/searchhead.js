import React from 'react';
import { Link } from 'react-router-dom';
import {Button,Menu} from 'antd'
import "../../CSS/searchhead.css"
import {SearchOutlined} from '@ant-design/icons'
class SearchBar extends React.Component{
    constructor(props) {
        super(props);
    }

    render()
    {
        return(
            <div className="columns" >
                <div calss="container navbar" style={{width: '40rem' ,height:'45px'}}>
                        <ul calss="nav">
                            <li class="nav-cell">
                                <a href="/">
                                    Threads
                                </a>
                            </li>
                            <li class="nav-cell">
                                <a href="/categories/">
                                    Categories
                                </a>
                            </li>
                            <li className="nav-cell">
                                <a href="/categories/">
                                    Categories
                                </a>
                            </li>
                            <li className="nav-cell">
                                <a href="/categories/">
                                    Categories
                                </a>
                            </li>
                        </ul>
                </div>
                <div className="search_div" >
                        <input className="input is-danger is-inverted" type="text"  style={{width: '60%' ,height:'45px'}} placeholder="search papers from all fields of science"/>
                        <Button  id="SearchButton"  type="primary" shape="round" icon={<SearchOutlined />}   danger>Search</Button>
                </div>
            </div>
        );
    }
};


export default class SearchHead extends React.Component{

    render()
    {
        return(
            <div className="block ">
                <section className="hero is-white ter">
                    <div className="hero-head ">
                        <nav className="navbar has-shadow">
                            <div className="container">
                                <div className="navbar-brand">
                                    {this.props.logo}
                                </div>
                                <div className={"navbar-item is-expanded"}>
                                    <SearchBar/>
                                </div>
                                <div id="navbarMenuHeroA" className="navbar-menu">
                                    <div className="navbar-end">
                                        <a className="navbar-item">
                                            <Link to={"/2"}>
                                                <span>Sign in</span>
                                            </Link>
                                        </a>
                                        <span className="navbar-item">
                                            <Link to={"/3"}>
                                                <a className="button is-danger is-outlined">
                                                    <span>Creat free account</span>
                                                </a>
                                            </Link>
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>

                </section>
            </div>
        );
    }
}
