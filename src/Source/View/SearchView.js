import React from 'react';
import PaperFrame from "../Containers/resultframe";
import SearchHead from "../Components/searchhead";
import lo from "../../Pic/logo.png"
import {Logo} from "../Components/logo";
import TwoFrame from "../Containers/twoframe";
import "../../CSS/SearchHead_CSS.css"
import {Breadcrumb, Layout, Menu, Button} from "antd";

const {Header, Content, Footer} = Layout;
const logo_info = {
    img_src: lo,
}
export default class SearchView extends React.Component {
    render() {
        return (


            <div>
                <Layout className="layout">

                    <SearchHead logo={<Logo logo={logo_info}/>}/>

                    <Content style={{padding: '0 50px'}}>
                        <PaperFrame/>
                    </Content>

                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>

                </Layout>,
            </div>
        );
    }
}


