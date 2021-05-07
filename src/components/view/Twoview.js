import React from 'react';
import PaperFrame from "../resultframe";
import SearchHead from "../head/searchhead";
import lo from "../../asserts/logo.png"
import {Logo} from "../tool/logo";
import TwoFrame from "../twoframe";

const logo_info={
    img_src:lo,
}
export default class TwoView extends React.Component {
    render()
    {
        return(
            <div>
                <SearchHead logo={<Logo logo={logo_info} />}
                />
                <TwoFrame/>
            </div>
        );
    }
}