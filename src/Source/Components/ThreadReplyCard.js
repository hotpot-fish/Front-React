/*
writer : DJW
date   : 2021/5/20
 **/
import React from 'react';
import "../../CSS/ThreadReplyCard_CSS.css"
import SearchHead from "./searchhead";
import {Logo} from "./logo";
import ThreadsBoard from "../Containers/ThreadsBoard";
import {Layout} from "antd";


export default class ThreadReplyCard extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            reply:this.props.Reply,

        }
    }

    componentWillMount() {
        let repliermess= {};
        for (let i=0;i<this.state.reply.length;i++){
            console.log("i:"+i)
            console.log("sss",repliermess)
            console.log("bbb",repliermess[this.state.reply[i]["replier"]])
            if(repliermess[this.state.reply[i]["replier"]]==undefined){
                console.log("enter")
                repliermess[this.state.reply[i]["replier"]] = this.getReplierMes(this.state.reply[i]["replier"]);
            }
        }
        this.setState({
            replier_mess:repliermess
        })
        console.log("eeend",this.state.replier_mess)
        console.log("sss",repliermess)
    }

    getReplierMes=(name)=>{
        //request for replier message named by name
        return(
            {
                replierAvatar: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                postNum:1234
            }
        )
    }

    render()
    {
        return(
            <div>

            </div>
        );
    }

}