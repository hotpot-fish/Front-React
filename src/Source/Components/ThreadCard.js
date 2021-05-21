/*
writer : DJW
date   : 2021/5/15
 **/
import React from 'react';
import reactDom from 'react';
import "../../CSS/ThreadCard_CSS.css";
import {Card} from 'antd';
import { Link } from 'react-router-dom';

function cards(props) {
    const d = props.map((item) => {
            return (
                <Card bordered={true} className="ThreadCard" key={item.id}>

                    {/*头像部分*/}
                    <div className="Avatar_div">
                        <img style={{borderRadius: 5}} src={item.posterAvatar}></img>
                    </div>

                    {/*内容部分*/}
                    <div className="ThreadMes">
                        <div className="ThreadTitle"><Link to={"/thread/"+item.id} className="ThreadTitleLink" ><p>{item.title}</p></Link></div>
                        <div className="Tags">
                            <div className="Tag-Item Type">{item.Type}</div>
                            <div className="Tag-Item Acess">{item.Access}</div>
                            <div className="Tag-Item Replication">{item.Replication} replies</div>
                        </div>
                    </div>

                    {/*评论者部分*/}
                    <div className="Replier_Mes">
                        <div className="Replier_Avatar_div">
                            <img style={{borderRadius: 5}} src={item.replierAvatar}></img>
                        </div>
                        <div className="Replication_Mes">
                            <div className="ReplierName"><p>{item.replier}</p></div>
                            <div className="ReplierDate"><p>{item.date}</p></div>
                        </div>

                    </div>


                </Card>
            )
        }
    )
    return (
        <div>{d}</div>
    )

}


export default class ThreadCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            threads: props.Threads
        }
    }

    render() {
        let that=this
        return (
            <div>
                {
                    cards(that.state.threads)
                }
            </div>

        )
    }
}
