/*
writer : DJW
date   : 2021/5/15
 **/

import React from 'react';
import "../../CSS/ThreadsBoard_CSS.css"
import { Layout} from 'antd';
import ThreadCard from "../Components/ThreadCard";

const { Content} = Layout;
export default class ThreadsBoard extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Content style={{ padding: '0 50px' }}>
                    <div className="PageHead">

                    </div>

                    <div className="site-layout-content">
                        <div className="ContentHead">

                        </div>

                        <ThreadCard></ThreadCard>
                        {/*<Card  bordered={true} className="ThreadCard">*/}

                        {/*    <div className="Avatar">*/}
                        {/*        <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"></img>*/}
                        {/*    </div>*/}
                        {/*    <div className="ThreadMes">*/}
                        {/*        <div className="ThreadTitle"><p>First Thread</p></div>*/}
                        {/*        <div className="Tags">*/}
                        {/*            <div className="Tag-Item Type">News</div>*/}
                        {/*            <div className="Tag-Item Acess">Secret</div>*/}
                        {/*            <div className="Tag-Item Replication">0 replies</div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</Card>*/}

                        {/*<Card  bordered={true} className="ThreadCard">*/}
                        {/*    <p>Card content</p>*/}
                        {/*    <p>Card content</p>*/}
                        {/*    <p>Card content</p>*/}
                        {/*</Card>*/}
                        {/*<Card  bordered={true} className="ThreadCard">*/}
                        {/*    <p>Card content</p>*/}
                        {/*    <p>Card content</p>*/}
                        {/*    <p>Card content</p>*/}
                        {/*</Card>*/}
                    </div>
                </Content>
            </div>
        )
    }


}