import React, { useState } from "react";
//React import
import './Cardpost.css'
//CSS import

export default function Cardpost(props) {
    const { title, area, type, date, time } = props
    const [ typepost, setTypepst ] = useState(); 

    if(type==="Find"){
        setTypepst(true);
    }else if (type==="Meet"){
        setTypepst(false);
    }

    return(
        <div className="container-card-post">
            <div className="image-card-post">
                <img src="" />
            </div>
            <div className="title-card-post">
                ตามหาเจ้าของ
            </div>
            <div className="place-card-post">
                เขต: พญาไท แขวง: สามเสนใน กรุงเทพฯ
            </div>
            <div className="area-card-post">
                <div className="area-type-card-post find">
                    ตามหาของหาย
                </div>
                <div className="area-date-time-card-post">
                    29/11/2565 10:00
                </div>
            </div>
        </div>
    )
};
