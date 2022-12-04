import React, { useEffect, useState } from "react";
//React import
import './Cardpost.css'
//CSS import
import { CutDate, CutTime } from "../../../Services/CutdatetimeService";
import { Link } from "react-router-dom";
//Services import
import {BsFillCalendarDateFill} from "react-icons/bs"
import {BiTime} from "react-icons/bi"

export default function Cardpost(props) {
    const {id, title, img, area, type, tag, date, time } = props
    const [typepost, setTypepst ] = useState();

    useEffect(()=>{
        if(type==="ตามหาเจ้าของ"){
        setTypepst(true);
        }else if (type==="ตามหาของหาย"){
        setTypepst(false);
        }
    },[type]);
    

    return(
    <>
        <Link className="navlink-text-none" to={`/post/${id}`}>
            <div className="container-card-post">
                <div className="image-card-post">
                    <img className="images-full object-fit" src={img} />
                </div>
                <div className="title-card-post">
                    {title}
                </div>
                <div className="place-card-post">
                    <div className="area-lostlocation-card-post">
                        <div className="title-text-card-post">
                            บริเวณ: 
                        </div>
                        <div className="tags-card-post">
                            {area}
                        </div>
                    </div>
                    {/* <div className="area-tagpost-card-post">
                        <div className="title-text-card-post">
                        แท็ก:
                        </div>
                        <div className="tags-card-post">
                            {tag}
                        </div>
                    </div> */}
                </div>
                <div className="area-card-post">
                    <div className={`area-type-card-post ${typepost?"meet":"find"}`}>
                        {type}
                    </div>
                    <div className="area-date-time-card-post">
                        <div className="date-card-post">
                            <div className="icons-date-card-post">
                                <BsFillCalendarDateFill size="13px" fill='#A5A5A5' />
                                :
                            </div>
                            <div className="text-date-card-post">
                                {CutDate(date)}
                            </div>
                        </div>
                        <div className="time-card-post">
                            <div className="icons-time-card-post">
                                <BiTime size="16px" fill='#A5A5A5' />
                                :
                            </div>
                            <div className="text-time-card-post">
                               {CutTime(time)} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </>
        
    )
};
