/*
writer : DJW
date   : 2021/5/15
 **/

import React from 'react';
import "../../CSS/ThreadsBoard_CSS.css"
import {Button, Layout} from 'antd';
import ThreadCard from "../Components/ThreadCard";

const {Content} = Layout;
export default class ThreadsBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            threads:this.props.Threads
        }
    }

    render() {
        return (
            <div>
                <Content >
                    <div className="PageHead">
                        {/*顶部title部分*/}
                        <p className="PageHead-Title">Team-Salt</p>
                    </div>


                    {/*content部分*/}
                    <div className="site-layout-content">
                        {/*留一片头部*/}
                        <div className="ContentHead">留一片头部</div>
                        {/*卡片部分*/}
                        <ThreadCard Threads={this.state.threads}></ThreadCard>
                        {/*底部分页*/}
                    </div>

                    {/*showmore*/}
                    <div className={"showButton-div"}>
                        <Button className={"showButton"}>show more</Button>
                    </div>
                </Content>

            </div>
        )
    }
}