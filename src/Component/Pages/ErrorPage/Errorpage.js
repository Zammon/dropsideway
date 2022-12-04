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
                    Error 404 That's an error.
                </div>
            </div>
        </>
    )
}