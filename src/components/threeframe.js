import React from 'react';
import { Steps } from 'element-react';

import 'element-theme-default';


export default class ThreeFrame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Steps space={400} style={{width:'2700px'}}>
                    <Steps.Step  icon="time"
                                 title={"1990"}
                                 description={
                                     <div className="navbar-item has-dropdown is-hoverable is-centered">
                                         <a className="navbar-link">
                                             idea
                                         </a>
                                         <div className="navbar-dropdown is-boxed">
                                             <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
                                                 Overview
                                             </a>
                                             <a className="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
                                                 Modifiers
                                             </a>
                                             <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                                                 Columns
                                             </a>
                                             <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
                                                 Layout
                                             </a>
                                             <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
                                                 Form
                                             </a>
                                         </div>
                                     </div>}>

                    </Steps.Step>
                    <Steps.Step  icon="time"
                                 title={"2000"}
                                 description={
                                     <div className="navbar-item has-dropdown is-hoverable is-centered">
                                         <a className="navbar-link">
                                             idea
                                         </a>
                                         <div className="navbar-dropdown is-boxed">
                                             <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
                                                 Overview
                                             </a>
                                             <a className="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
                                                 Modifiers
                                             </a>
                                             <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                                                 Columns
                                             </a>
                                             <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
                                                 Layout
                                             </a>
                                             <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
                                                 Form
                                             </a>
                                         </div>
                                     </div>}>

                    </Steps.Step>
                    <Steps.Step  icon="time"
                                 title={"2010"}
                                 description={
                                     <div className="navbar-item has-dropdown is-hoverable is-centered">
                                         <a className="navbar-link">
                                             idea
                                         </a>
                                         <div className="navbar-dropdown is-boxed">
                                             <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
                                                 Overview
                                             </a>
                                             <a className="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
                                                 Modifiers
                                             </a>
                                             <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                                                 Columns
                                             </a>
                                             <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
                                                 Layout
                                             </a>
                                             <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
                                                 Form
                                             </a>
                                         </div>
                                     </div>}>

                    </Steps.Step>
                </Steps>
        )
    }

}