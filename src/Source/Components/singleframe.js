import {Link} from "react-router-dom";
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp} from "@fortawesome/free-solid-svg-icons";
export default class Paper extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            numLines: null,
            maxHeight: 0,
            showOpenDetail: false
        };
    }

    render(){
        return(

            <div className="column is-three-fifths">
                <div>
                    <Link to={"/bookdetail"}>
                        <div>
                            <p style={{color:'#1E90FF',fontSize:'20px'}}>{this.props.paper.name}</p>
                        </div>
                    </Link>
                    <div>
                        <p style={{color:'#696969',fontSize:'10px'}}>{this.props.paper.author}</p>
                        <div className="a" style={{color:'#696969',fontSize:'15px',WebkitBoxOrient: 'vertical',WebkitLineClamp:2}}>{this.props.paper.spec_intro}</div>
                    </div>
                    <nav className="is-right">
                        <div className={"columns"}>
                            <div className={"column is 20%"}>
                                <a className="level-item">
                                <span className="icon is-small"><FontAwesomeIcon icon={faFilePdf} /></span>
                                <p style={{color:'#696969',fontSize:'10px'}}>View PDF</p>
                                </a>
                            </div>
                            <div className={"column is is-one-fifth"}>
                                <a className="level-item">
                                    <span className="icon is-small"><FontAwesomeIcon icon={faBookmark} /></span>
                                    <p style={{color:'#696969',fontSize:'10px'}}>Save</p>
                                </a>
                            </div>
                            <div className={"column is is-one-fifth"}>
                                <a className="level-item">
                                    <span className="icon is-small"><FontAwesomeIcon icon={faBell} /></span>
                                    <p style={{color:'#696969',fontSize:'10px'}}>Alter</p>
                                </a>
                            </div>
                            <div className={"column"}>
                                <a className="level-item">
                                    <span className="icon is-small"><FontAwesomeIcon icon={faThumbsUp} /></span>
                                    <p style={{color:'#696969',fontSize:'10px'}}>Research Feed</p>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        );
    }
}