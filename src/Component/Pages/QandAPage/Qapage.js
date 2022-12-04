import React,{useEffect} from "react";
import Footer from "../../Tools/Footer/Footer";
//React import
import './Qapage.css'
//CSS import
import { useLocation } from "react-router-dom";

export default function Qapage() {
    
    const { pathname } = useLocation();
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [pathname])
    
    return(
        <>
            <div className="container-center">
                <div className="area-content-qandaage">
                    QandA: Questions and answers
                </div>
            </div>
            <Footer />
        </>
        
    )
}