import React, { useEffect, useState } from 'react';
//React imoport
import './Homepage.css';
//CSS import
import Selectfilter from '../../Tools/SelectFillter/Selectfillter';
import Cardpost from '../../Tools/CardPost/Cardpost';
import Footer from '../../Tools/Footer/Footer';
//Component import
import imgs from '../../Models/Slideimg';
import dpu from '../../../Images/dpuSlide_01.png'
//Model import

export default function Homepage(){
    /* Silde Home */
    const [slides, setSlide] = useState(0);
    const [Slideimages, setSlideimage] = useState();
    /* Map Slide */
    const mapImages = imgs.map((m,i)=>{
         return <ImagesSlide key={i} img={m.image} />
     })
    const mapPoint = imgs.map((m,i)=>{
        return <PointSlide key={i} num={i}/>
    })

    useEffect(()=>{

    },[]) 

    

    /* slide image component */
    function ImagesSlide(props){
        const { img } = props;
        return(
            <div className='area-item-slide-image'>
                <img className='items-slide-image' src={img}/>
            </div>
        )
    }
    /* slide point component */
    function PointSlide(props) {
        return(
            <div className={`${slides===props.num?"pointers-homapage-active":"pointers-homapage-none-active"}`} onClick={()=>{setSlide(props.num)}}></div>
        )
    }

    return(
    <>
     <div className="container-center">
        {/* Slide + Filter (Top)*/}
        <div className='contain-item-top-homepage'>
            
            <div className="area-slide-homepage">
                <div className="slide-homepage">
                    <div className="area-images-slideshow-homepage" style={{ transform: `translate3d(${slides*-1314}px, 0, 0)`}}>
                        {mapImages}
                    </div>
                </div>
                <div className="area-pointer-homepage">
                    {mapPoint}
                </div>
            </div>
            
            <div className="area-filter-homepage">
                <div className='area-filter-item-homepage'>
                    <Selectfilter title="บริเวณที่พบของหาย"/>
                    <Selectfilter title="ประเภทของหาย"/>
                    <Selectfilter title="ประเภทโพสส์"/>
                    <button className='filter-item-button-homepage'>
                        ค้นหา
                    </button>
                </div>
            </div>

        </div>
        {/* Content (Bottom) */}
        <div className='area-content-homepage'>
            <Cardpost />
            <Cardpost />
            <Cardpost />
            <Cardpost />
            <Cardpost />
            <Cardpost />
            <Cardpost />
            <Cardpost />
        </div>
     </div>
     <Footer />
     </>
     )
};