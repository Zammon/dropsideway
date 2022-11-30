import React from "react";
//React import
import './Selectfilter.css'
//CSS import

export default function Selectfilter(props) {
    const { title } = props;

    return(
        <div className="container-selectfilter">
            <div className="title-selectfilter">
                {title}
            </div>
            <select className="select-selectfilter">
                
            </select>
        </div>
    )
}