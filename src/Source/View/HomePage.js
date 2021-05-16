/*
writer : DJW
date   : 2021/5/15
 **/
import React from 'react';
import lo from "../../Pic/logo.png";
import SearchHead from "../Components/searchhead";
import {Logo} from "../Components/logo";
import ThreadsBoard from "../Containers/ThreadsBoard";
import {Pagination,Layout} from "antd";

const logo_info={
    img_src:lo,
}

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            threads:[
                {
                    id: 0,
                    title: "First",
                    Type: "News",
                    Access: "Scret",
                    Replication: 100,
                    posterAvatar: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                    replier: "WZR",
                    replierAvatar: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                    date: "1 years ago"
                },
                {
                    id: 1,
                    title: "Second",
                    Type: "News",
                    Access: "Scret",
                    Replication: 100,
                    posterAvatar: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                    replier: "WZR",
                    replierAvatar: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                    date: "2 years ago"
                },
                {
                    id: 2,
                    title: "Third",
                    Type: "News",
                    Access: "Scret",
                    Replication: 100,
                    posterAvatar: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                    replier: "WZR",
                    replierAvatar: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                    date: "3 years ago"
                },
                {
                    id: 3,
                    title: "Third",
                    Type: "News",
                    Access: "Scret",
                    Replication: 100,
                    posterAvatar: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                    replier: "WZR",
                    replierAvatar: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                    date: "3 years ago"
                },
                {
                    id: 4,
                    title: "Third",
                    Type: "News",
                    Access: "Scret",
                    Replication: 100,
                    posterAvatar: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                    replier: "WZR",
                    replierAvatar: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                    date: "3 years ago"
                }
            ]
        }
    }

    render()
    {
        return(
            <div>
                <SearchHead logo={<Logo logo={logo_info} />}/>
                <ThreadsBoard Threads={this.state.threads}></ThreadsBoard>
                {/*<Pagination defaultCurrent={1} total={50} />*/}
                <Layout style={{textAlign: 'center',marginTop:"127px",bottom:0}}>Footer here</Layout>
            </div>
        );
    }
}