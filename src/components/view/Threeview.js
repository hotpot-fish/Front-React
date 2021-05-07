import React from 'react';
import PaperFrame from "../resultframe";
import SearchHead from "../head/searchhead";
import lo from "../../asserts/logo.png"
import {Logo} from "../tool/logo";
import ThreeFrame from "../threeframe";

const logo_info={
    img_src:lo,
}
export default class ThreeView extends React.Component {
    render()
    {
        return(
            <div>
                <SearchHead logo={<Logo logo={logo_info} />}
                />
                <ThreeFrame />
            </div>
        );
    }
}