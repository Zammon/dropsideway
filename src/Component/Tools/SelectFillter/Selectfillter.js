import React from "react";
//React import
import './Selectfilter.css'
//CSS import

export default function Selectfilter(props) {
    const { title, item, OnChange } = props;

    return(
        <div className="container-selectfilter">
            <div className="title-selectfilter">
                {title}
            </div>
            <select className="select-selectfilter">
                <option value={item}>{`[เลือก${title}]`}</option>
                {item && item.data.nameItemFilter.map((e,i)=>{
                    return <option key={i} value={item && e}>{item && e}</option>
                })}
            </select>
        </div>
    )
}