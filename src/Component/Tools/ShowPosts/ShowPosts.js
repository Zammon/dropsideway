import React from "react";
//React import
import "./ShowPosts.css"
//CSS import

export default function ShowPosts(props) {
    const { imgindex, close } = props;
    return(
        <>
                <div className="area-showposts">
                    <img className="images-full" src={imgindex} />
                </div>
        </>
    )
}