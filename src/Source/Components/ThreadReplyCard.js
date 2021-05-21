/*
writer : DJW
date   : 2021/5/20
 **/
import React from 'react';
import "../../CSS/ThreadReplyCard_CSS.css"
import SearchHead from "./searchhead";
import {Logo} from "./logo";
import ThreadsBoard from "../Containers/ThreadsBoard";
import {Card, Layout, Dropdown, Menu, Button} from "antd";
import {Link} from "react-router-dom";
import {DownOutlined} from '@ant-design/icons'


function cards(ptr, props) {
    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item
                </a>
            </Menu.Item>
        </Menu>
    );
    const d = props.map((item) => {
            return (
                <Card bordered={true} className="ThreadRepluCard" key={item.id}>

                    {/*头像部分*/}
                    <div className="ReplierAvatar_div">
                        <div className="ReplierAvatar">
                            <img style={{borderRadius: 5}} src={ptr.state.replier_mess[item.replier].replierAvatar}></img>
                        </div>
                        <div className="ReplierMess">
                            <p className="replierMess" id="ReplierName">{item.replier}</p>
                            <p className="replierMess" id="ReplierStatus">{ptr.state.replier_mess[item.replier].status}</p>
                            <p className="replierMess"
                               id="ReplierPostNum">{ptr.state.replier_mess[item.replier].postNum}</p>
                        </div>

                    </div>

                    {/*内容部分*/}
                    <div className="ReContent">

                        <div className="REContentHeader">
                            <div className="ReplyDate"><p className="replyDate">{item.reply_time}</p></div>
                            <div className="Menu">
                                <Dropdown overlay={menu} placement="bottomRight">
                                    <div className="itemButton"><DownOutlined   style={{fontSize:"20px"}}  /></div>
                                </Dropdown>
                            </div>

                        </div>
                        <div className="ReplicationMes">
                            <div className="ThreadTitle"><Link to={"/thread/" + item.id} className="ThreadTitleLink">
                                <p>{item.title}</p></Link></div>
                            <div className="Tags">
                                <div className="Tag-Item Type">{item.Type}</div>
                                <div className="Tag-Item Acess">{item.Access}</div>
                                <div className="Tag-Item Replication">{item.Replication} replies</div>
                            </div>
                        </div>
                        <div className="REContentFooter"></div>
                    </div>


                    {/*/!*评论者部分*!/*/}
                    {/*<div className="Replier_Mes">*/}
                    {/*    <div className="Replier_Avatar_div">*/}
                    {/*        <img style={{borderRadius: 5}} src={item.replierAvatar}></img>*/}
                    {/*    </div>*/}
                    {/*    <div className="Replication_Mes">*/}
                    {/*        <div className="ReplierName"><p>{item.replier}</p></div>*/}
                    {/*        <div className="ReplierDate"><p>{item.date}</p></div>*/}
                    {/*    </div>*/}

                    {/*</div>*/}


                </Card>
            )
        }
    )
    return (
        <div>{d}</div>
    )

}

export default class ThreadReplyCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reply: this.props.Reply,
            // replier_mess  stores user info
        }
    }

    componentWillMount() {
        let repliermess = {};
        for (let i = 0; i < this.state.reply.length; i++) {
            console.log("i:" + i)
            console.log("sss", repliermess)
            console.log("bbb", repliermess[this.state.reply[i]["replier"]])
            if (repliermess[this.state.reply[i]["replier"]] == undefined) {
                console.log("enter")
                repliermess[this.state.reply[i]["replier"]] = this.getReplierMes(this.state.reply[i]["replier"]);
            }
        }
        this.setState({
            replier_mess: repliermess
        })
        console.log("eeend", this.state.replier_mess)
        console.log("sss", repliermess)
    }


    getReplierMes = (name) => {
        //request for replier message named by name
        return (
            {
                status: "online",
                replierAvatar: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                postNum: 1234
            }
        )
    }


    render() {
        let that = this
        return (

            <div>
                {
                    cards(that, that.state.reply)
                }
            </div>
        );
    }

}