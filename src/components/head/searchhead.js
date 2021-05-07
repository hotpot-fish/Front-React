import React from 'react';
import { Link } from 'react-router-dom';


class SearchBar extends React.Component{
    constructor(props) {
        super(props);
    }

    render()
    {
        return(
            <div className="columns">
                <div className="column">
                </div>
                <div className="column">
                    <div className={"field is-grouped"}>
                        <input className="input is-danger is-inverted" type="text"  style={{width: '40rem'}} placeholder="search papers from all fields of science"/>
                        <button className="button is-danger">Search</button>
                    </div>
                </div>
                <div className="column">
                </div>
            </div>
        );
    }
}


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
