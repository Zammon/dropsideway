import React, { useEffect, useRef, useState } from 'react';
import './Homepage.css';
import Selectfilter from '../../Tools/SelectFillter/Selectfillter';
import Cardpost from '../../Tools/CardPost/Cardpost';
import Footer from '../../Tools/Footer/Footer';
import { imgs } from '../../Models/Slideimg';
import { Link, useLocation } from 'react-router-dom';
import FetchListCard, { PushFetchListCard } from '../../../Contexts/Fetchs/FetchListCard';
import FetchFindFilter from '../../../Contexts/Fetchs/FetchFilterType';
export default function Homepage(){
    const { pathname } = useLocation();
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [pathname])
    
    const [pageIndex, setPageIndex] = useState(0);
    const [statusSearch,setStatusSearch] = useState(false);
    const[filterPost, setFilterPost] = useState("-");
    const[filterArea, setFilterArea] = useState("-");
    const[filterItems, setFilterItems] = useState("-");
    const [typePost, setTypePost] = useState();
    const [typeArea, setTypeArea] = useState();
    const [typeItems, setTypeItems] = useState();
    const [cardPosts, setCardPosts] = useState([]);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight)
        {
          setPageIndex(prevPageIndex => prevPageIndex + 1);
          return;
        }
    };

    useEffect(()=>{
        FetchFindFilter('ประเภทโพสต์', setTypePost)
        FetchFindFilter('บริเวณพื้นที่พบเจอของหาย', setTypeArea)
        FetchFindFilter('ประเภทสิ่งของหาย', setTypeItems)
        FetchListCard(setCardPosts, pageIndex);
        const test = window.addEventListener('scroll', handleScroll);
        return () => test;
    },[]);

    useEffect(()=>{
        if(!cardPosts || pageIndex===0) return;
        PushFetchListCard(setCardPosts, pageIndex)
    },[pageIndex])

    useEffect(()=>{
       if(filterPost!=="-"||filterItems!=="-"||filterArea!=="-") {
        setStatusSearch(true);
       } else {
        setStatusSearch(false);
       }
    },[filterPost,filterItems,filterArea])

    const mapCardPost = cardPosts&&cardPosts?.map((e,i)=>{
        return <Cardpost key={i} id={ cardPosts && e.idPost} title={ cardPosts && e.title} img={cardPosts && e.image } type={cardPosts && e.type } tag={cardPosts && e.tag} area={ cardPosts && e.area} date={ cardPosts && e.date} time={ cardPosts && e.time}/>
    });

    const [slides, setSlide] = useState(0);

    const mapImages = imgs?.map((m,i)=>{
         return <ImagesSlide key={i} img={m.image} />
     })

    const mapPoint = imgs?.map((m,i)=>{
        return <PointSlide key={i} num={i}/>
    })

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

    function ImagesSlide(props){
        const { img } = props;
        return(
            <div className='area-item-slide-image'>
                <img className='items-slide-image' src={img}/>
            </div>
        )
    }
    
    function PointSlide(props) {
        return(
            <div className={`${slides===props.num?"pointers-homapage-active":"pointers-homapage-none-active"}`} onClick={()=>{setSlide(props.num)}}></div>
        )
    }

    return(
    <>
     <div className="container-center" style={{flexDirection: "column", marginTop: '154px'}}>
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
                    <Selectfilter title="บริเวณที่พบของหาย" item={typeArea && typeArea} changvalue={filterArea} OnChange={setFilterArea}/>
                    <Selectfilter title="หมวดหมู่ของหาย" item={typeItems && typeItems} changvalue={filterItems} OnChange={setFilterItems}/>
                    <Selectfilter title="ประเภทโพสส์" item={typePost && typePost} changvalue={filterPost} OnChange={setFilterPost}/>
                    <Link to={`${statusSearch?`/search/filter/${filterArea}/${filterItems}/${filterPost}`:""}`} className='navlink-text-none'>
                        <button className={`${statusSearch?"filter-item-button-active-homepage":"filter-item-button-none-homepage"}`}>ค้นหา</button>
                    </Link>
                </div>
            </div>

        </div>
        {/* Content (Bottom) */}
        {cardPosts&&cardPosts?.length!==0 ? 
            <div className='area-content-homepage'>{mapCardPost}</div>
            :
            <div className='area-content-null-homepage'>No missing items.</div>
        }
     </div>
     <Footer />
     </>
     )
};