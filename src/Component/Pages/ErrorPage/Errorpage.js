import React,{useEffect} from "react";
//React import
import './Errorpage.css'
//CSS import
import { useLocation } from "react-router-dom";

export default function Errorpage() {
    
    const { pathname } = useLocation();
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [pathname])

    return(
        <>
            <div className="container-center">
                <div className="area-content-errorpage">
                    <div className="area-text-errorpage">
                        <div className="header-errorpage">
                            Error 404
                        </div>
                        <div className="detail-errorpage">
                            ไม่พบเนื้อหาที่กำลังค้นหาภายในเว็บไซต์
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}