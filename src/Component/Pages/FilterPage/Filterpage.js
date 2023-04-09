import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import Selectfilter from '../../Tools/SelectFillter/Selectfillter';
import './Filterpage.css'
import Cardpost from '../../Tools/CardPost/Cardpost';
import FetchFilter from '../../../Contexts/Fetchs/FetchFilter';
import FetchFindFilter from '../../../Contexts/Fetchs/FetchFilterType';
export default function Filterpage(){
    
    const { pathname } = useLocation();
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [pathname])
    
    const { area, typeitem, typeposts } = useParams();
    const [statusSearch,setStatusSearch] = useState(false);
    const[filterPost, setFilterPost] = useState("-");
    const[filterArea, setFilterArea] = useState("-");
    const[filterItems, setFilterItems] = useState("-");
        
    const [typePost, setTypePost] = useState();
    const [typeArea, setTypeArea] = useState();
    const [typeItems, setTypeItems] = useState();
    const [cardPosts, setCardPosts] = useState();
        
        useEffect(()=>{
        FetchFilter( setCardPosts, area, typeitem, typeposts);
        },[area, typeitem, typeposts])
        
        const mapCardPost = cardPosts&&cardPosts.data.map((e,i)=>{
            return <Cardpost key={i} id={ cardPosts && e.idPost} title={ cardPosts && e.title} img={cardPosts && e.image } type={cardPosts && e.type } tag={cardPosts && e.tag} area={ cardPosts && e.area} date={ cardPosts && e.date} time={ cardPosts && e.time}/>
        });
        
        useEffect(()=>{
            FetchFindFilter('ประเภทโพสต์', setTypePost);
            FetchFindFilter('บริเวณพื้นที่พบเจอของหาย', setTypeArea);
            FetchFindFilter('ประเภทสิ่งของหาย', setTypeItems);
        },[]);
        
        useEffect(()=>{
        if(filterPost!=="-"||filterItems!=="-"||filterArea!=="-") {
            setStatusSearch(true);
        } else {
                setStatusSearch(false);
        }
        },[filterPost,filterItems,filterArea])
    
    return(
    <div className='container-center'>
        <div className="area-filter-filterpage">
            <div className='area-filter-item-filterpage'>
                <Selectfilter title="บริเวณที่พบของหาย" item={typeArea && typeArea} changvalue={filterArea} OnChange={setFilterArea}/>
                <Selectfilter title="หมวดหมู่ของหาย" item={typeItems && typeItems} changvalue={filterItems} OnChange={setFilterItems}/>
                <Selectfilter title="ประเภทโพสส์" item={typePost && typePost} changvalue={filterPost} OnChange={setFilterPost}/>
                <Link to={`${statusSearch?`/search/filter/${filterArea}/${filterItems}/${filterPost}`:""}`} className='navlink-text-none'>
                    <button className={`${statusSearch?'filter-item-button-filterpage':'filter-item-button-none-filterpage'}`}>ค้นหา</button>
                </Link>
            </div>
        </div>
        {cardPosts && mapCardPost.length!==0 ? <div className={`area-content-filterpage ${mapCardPost.length<=8?"rows-2":""}`}>{mapCardPost}</div>:<div className='area-content-null-filterpage'> No missing items about  <div className='text-about-filterpage'> "{`${area!=="-"?area:""} ${typeitem!=="-"?typeitem:""} ${typeposts!=="-"?typeposts:""}`}"</div></div>}
    </div>
    )
};