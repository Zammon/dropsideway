import React,{useEffect} from 'react';
import Footer from '../../Tools/Footer/Footer';
//React imoport
import './Contactpage.css'
//CSS import
import { useLocation } from 'react-router-dom';


export default function Contactpage(){
    
    const { pathname } = useLocation();
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [pathname])
    
    return(
        <>
            <div className='container-center'>
                <div className='area-content-contactpage'>
                    ContactPage.
                </div>
            </div>
            <Footer />
        </>
    )
};