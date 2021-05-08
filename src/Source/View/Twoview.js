import React from 'react';
import PaperFrame from "../Containers/resultframe";
import SearchHead from "../Components/searchhead";
import lo from "../../Pic/logo.png"
import {Logo} from "../Components/logo";
import TwoFrame from "../Containers/twoframe";

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