import React, { useEffect, useRef, useState } from 'react';
//React imoport
import './Homepage.css';
//CSS import
import Selectfilter from '../../Tools/SelectFillter/Selectfillter';
import Cardpost from '../../Tools/CardPost/Cardpost';
import Footer from '../../Tools/Footer/Footer';
//Component import
import imgs from '../../Models/Slideimg';
import dpu from '../../../Images/dpuSlide_01.png'
import { Link } from 'react-router-dom';
import { api } from '../../../ModuleUrl'
//Model import
import axios from 'axios';
//Axios import

export default function Homepage(){
    /* Set get return filters */
    const[filterPost, setFilterPost] = useState("");
    const[filterArea, setFilterArea] = useState("");
    const[filterItems, setFilterItems] = useState("");
    // ---------------------------------------------------------------------------------------------
    // Set object from api
    const [typePost, setTypePost] = useState();
    const [typeArea, setTypeArea] = useState();
    const [typeItems, setTypeItems] = useState();
    const [cardPosts, setCardPosts] = useState();
    // Set path api
    const typepost = async () => {
        const data = await axios.get(`https://${api}/api/Filters/Find/FindType/ประเภทโพส`);
        setTypePost(data);
        console.log(data);
    }
  
    const typearea = async () => {
        const data = await axios.get(`https://${api}/api/Filters/Find/FindType/บริเวณพื้นที่พบเจอของหาย`);
      setTypeArea(data);
      console.log(data);
    }
  
    const typeitems = async () => {
        const data = await axios.get(`https://${api}/api/Filters/Find/FindType/ประเภทสิ่งของหาย`);
      setTypeItems(data);
      console.log(data);
    }
    
    const cardpostItems = async () =>{
        const data = await axios.get(`https://${api}/api/Home/get/GetCardPostAll`);
        setCardPosts(data);
        console.log(data);
    }

    useEffect(()=>{
        typearea();
        typeitems();
        typepost();
        cardpostItems();
    },[]);
    // ---------------------------------------------------------------------------------------------
    /* Map Component */
        const mapCardPost = cardPosts&&cardPosts.data.map((e,i)=>{
            return <Cardpost key={i} id={ cardPosts && e.idPost} title={ cardPosts && e.title} img={cardPosts && e.nameImage } type={cardPosts && e.type } area={ cardPosts && e.areaLost} date={ cardPosts && e.datePost} time={ cardPosts && e.timePost}/>
        });
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
    /* Set time out to slide */
    const timeouts = useRef(null)
    function resettime() {
        if(timeouts.current){
            clearTimeout(timeouts.current);
        }
    };

    useEffect(()=>{
        timeouts.current = setTimeout(
            ()=>setSlide((previndex)=> previndex === imgs.length - 1 ? 0:previndex + 1),3000
        );
        return ()=> resettime()
    },[slides]) 

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
                    <Selectfilter title="บริเวณที่พบของหาย" item={typeArea && typeArea} OnChange={setFilterArea}/>
                    <Selectfilter title="หมวดหมู่ของหาย" item={typeItems && typeItems} OnChange={setFilterItems}/>
                    <Selectfilter title="ประเภทโพสส์" item={typePost && typePost} OnChange={setFilterPost}/>
                    <Link to="/search/filter/type" className='navlink-text-none'>
                        <button className='filter-item-button-homepage'>
                            ค้นหา
                        </button>
                    </Link> 
                </div>
            </div>

        </div>
        {/* Content (Bottom) */}
        <div className='area-content-homepage'>
            {mapCardPost}
        </div>
     </div>
     <Footer />
     </>
     )
};