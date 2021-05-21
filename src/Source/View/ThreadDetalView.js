/*
writer : DJW
date   : 2021/5/20
 **/
import React from 'react';
import "../../CSS/ThreadDetail_CSS.css"
import ThreadCard from "../Components/ThreadCard";
import {Button, Layout} from "antd";
import {Logo} from "../Components/logo";
import SearchHead from "../Components/searchhead";
import ThreadReplyChain from "../Containers/ThreadReplyChain";
import lo from "../../Pic/logo.png";
const logo_info={
    img_src:lo,
}
export default class ThreadDetalView extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            threadID:this.props.match.params.id,
            thread:this.props.Thread   //static here ,no need to implement after ajax completed
        }
    }

    componentWillMount() {
        //Request for thread message by id
        this.setState({
            thread:{
                id: 4,
                title: "Third paper paper paper paper paper paper paper paper paper",
                Type: "News",
                Access: "Scret",
                Replication: 100,
                posterAvatar: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                replier: "WZR",
                replierAvatar: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                date: "3 years ago"
            }
        })
    }

    render() {
        return(
            <div>
                <SearchHead logo={<Logo logo={logo_info} />}/>
                <ThreadReplyChain Thread={this.state.thread}></ThreadReplyChain>
                <Layout style={{textAlign: 'center',marginTop:"127px",bottom:0}}>Footer here</Layout>

            </div>
        )
    }
}