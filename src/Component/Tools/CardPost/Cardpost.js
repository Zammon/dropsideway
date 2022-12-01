import React, { useEffect, useState } from "react";
//React import
import './Cardpost.css'
//CSS import
import { CutDate, CutTime } from "../../../Services/CutdatetimeService";
//Services import

export default function Cardpost(props) {
    const {id, title, img, area, type, date, time } = props
    const [typepost, setTypepst ] = useState(); 
    
    useEffect(()=>{
        if(type==="ตามหาเจ้าของ"){
        setTypepst(true);
        }else if (type==="ตามหาของ"){
        setTypepst(false);
        }
    },[]);
    

    return(
        <div className="container-card-post">
            <div className="image-card-post">
                <img className="images-full" src={img} />
            </div>
            <div className="title-card-post">
                {title}
            </div>
            <div className="place-card-post">
                {area}
            </div>
            <div className="area-card-post">
                <div className={`area-type-card-post ${typepost?"meet":"find"}`}>
                {type}
                </div>
                <div className="area-date-time-card-post">
                    <div className="date-card-post">
                        {CutDate(date)}
                    </div>
                    <div className="time-card-post">
                        {CutTime(time)}
                    </div>
                </div>
            </div>
        </div>
    )
};
