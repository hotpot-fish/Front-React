import React from "react";
class Logo extends React.Component{
    constructor(props) {
        super(props);
    }

    render()
    {
        return(
            <div className="media" >
                    <figure className="image is-64x64">
                        <img  src={this.props.logo.img_src}
                              alt="Placeholder image"  />
                    </figure>
            </div>
        );
    }
}

export {Logo}