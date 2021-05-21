/*
writer : DJW
date   : 2021/5/20
 **/
import React from 'react';
import "../../CSS/ThreadReplyChain_CSS.css"
import ThreadCard from "../Components/ThreadCard";
import {Button,Icon} from "antd";
import {Content} from "antd/es/layout/layout";
import {TagsOutlined,EyeInvisibleOutlined,MessageOutlined} from"@ant-design/icons"
import ThreadReplyCard from "../Components/ThreadReplyCard";
export default class ThreadReplyChain extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            thread:this.props.Thread
        }
    }

    componentWillMount() {
        //request for replies
        this.setState({
            reply:[
                {
                    id:0,
                    replier:"WZR",
                    reply_time:"2022/04/07",
                    edit_time:3,
                    likers_name:["DJW","ZRX"],
                    content:"I am happy to announce that Misago Docker is now available, making it much easier and faster to setup Misago site!\n" +
                        "\n" +
                        "I've timed it: it took me 24 minutes to get new Digital Ocean droplet, point domain to it, and setup Misago with https, caching, 301 redirect from www to non-www and crontab. And most of that time was spent waiting for things to get downloaded and installed by setup tool.\n" +
                        "\n" +
                        "In addition to Misago itself, this setup provides logging, backup & restore facilities, optional integrations with Sentry, Mailgun or Mailjet, and wizards for configuration, so no settings.py editing is required.\n" +
                        "\n" +
                        "Setup guide has been updated accordingly and show how to use Misago Docker to setup site on Digital Ocean."
                },
                {
                    id:1,
                    replier:"WZ",
                    reply_time:"2022/04/07",
                    edit_time:3,
                    likers_name:["DJW","ZRX"],
                    content:"I am happy to announce that Misago Docker is now available, making it much easier and faster to setup Misago site!\n" +
                        "\n" +
                        "I've timed it: it took me 24 minutes to get new Digital Ocean droplet, point domain to it, and setup Misago with https, caching, 301 redirect from www to non-www and crontab. And most of that time was spent waiting for things to get downloaded and installed by setup tool.\n" +
                        "\n" +
                        "In addition to Misago itself, this setup provides logging, backup & restore facilities, optional integrations with Sentry, Mailgun or Mailjet, and wizards for configuration, so no settings.py editing is required.\n" +
                        "\n" +
                        "Setup guide has been updated accordingly and show how to use Misago Docker to setup site on Digital Ocean."
                }
            ]
        })
    }

    render() {
        return(
            <div>
                <Content >
                    <div className="ThreadHead">
                        {/*顶部title部分*/}
                        <div className="Title_div">
                            {this.state.thread.title}
                        </div>
                        <div className="Tags_div">
                            <div className="Reply_Tag_Item"><TagsOutlined className="Icons" />{this.state.thread.Type} </div>
                            <div className="Reply_Tag_Item"><EyeInvisibleOutlined  className="Icons" />{this.state.thread.Access}</div>
                            <div className="Reply_Tag_Item"><MessageOutlined className="Icons" />{this.state.thread.Replication} replies</div>
                        </div>

                    </div>


                    {/*content部分*/}
                    <div className="site-layout-content">
                        {/*留一片头部*/}
                        <div className="ContentHead">留一片头部</div>
                        <ThreadReplyCard Reply={this.state.reply}></ThreadReplyCard>
                        {/*卡片部分*/}
                        {/*<ThreadCard Threads={this.state.threads}></ThreadCard>*/}
                        {/*底部分页*/}
                    </div>

                {/*    /!*showmore*!/*/}
                {/*    <div className={"showButton-div"}>*/}
                {/*        <Button className={"showButton"}>show more</Button>*/}
                {/*    </div>*/}
                </Content>

            </div>
        )
    }
}