/*
writer : DJW
date   : 2021/5/15
 **/
import React from 'react';
import lo from "../../Pic/logo.png";
import SearchHead from "../Components/searchhead";
import {Logo} from "../Components/logo";
import ThreadsBoard from "../Containers/ThreadsBoard";

const logo_info={
    img_src:lo,
}

export default class HomePage extends React.Component {
    render()
    {
        return(
            <div>
                <SearchHead logo={<Logo logo={logo_info} />}
                />
                <ThreadsBoard></ThreadsBoard>
            </div>
        );
    }
}