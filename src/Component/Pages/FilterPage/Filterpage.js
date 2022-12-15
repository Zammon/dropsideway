import React, { useEffect, useState } from 'react';
//React imoport
import { useParams, Link, useLocation } from 'react-router-dom';
//React-Router-Dom import
import { api } from '../../../ModuleUrl';
//Model URL import
import axios from 'axios';
//Axios import
import Selectfilter from '../../Tools/SelectFillter/Selectfillter';
//Compotent import
import './Filterpage.css'
import Cardpost from '../../Tools/CardPost/Cardpost';
//CSS import
export default function Filterpage(){
    
    const { pathname } = useLocation();
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [pathname])
    
    const { area, typeitem, typeposts } = useParams();
    const filterSearch = async ()=> {
        var data;
        var urls;
        if(area!=="-"&&typeitem!=="-"&&typeposts!=="-"){
            data = await axios.get(`https://${api}/api/Home/get/GetFilterSearch?area=${area}&typeitem=${typeitem}&typepost=${typeposts}`)
        } else if (area!=="-"&&typeitem!=="-"){
            data = await axios.get(`https://${api}/api/Home/get/GetFilterSearch?area=${area}&typeitem=${typeitem}`)
        } else if (area!=="-"&&typeposts!=="-"){
            data = await axios.get(`https://${api}/api/Home/get/GetFilterSearch?area=${area}&typepost=${typeposts}`)
        } else if (typeitem!=="-"&&typeposts!=="-"){
            data = await axios.get(`https://${api}/api/Home/get/GetFilterSearch?typeitem=${typeitem}&typepost=${typeposts}`)
        } else if (area!=="-"){
            data = await axios.get(`https://${api}/api/Home/get/GetFilterSearch?area=${area}`)
        } else if (typeitem!=="-"){
            data = await axios.get(`https://${api}/api/Home/get/GetFilterSearch?typeitem=${typeitem}`)
        } else if (typeposts!=="-"){
            data = await axios.get(`https://${api}/api/Home/get/GetFilterSearch?typepost=${typeposts}`)
        } 
        setCardPosts(data);
        console.log(data);
    }
        /* Call api */
      

        /* Set Search */
        const [statusSearch,setStatusSearch] = useState(false);
    
        /* Set get return filters */
        const[filterPost, setFilterPost] = useState("-");
        const[filterArea, setFilterArea] = useState("-");
        const[filterItems, setFilterItems] = useState("-");
        // ---------------------------------------------------------------------------------------------
        
        // Set object from api
        const [typePost, setTypePost] = useState();
        const [typeArea, setTypeArea] = useState();
        const [typeItems, setTypeItems] = useState();
        const [cardPosts, setCardPosts] = useState();
        
        useEffect(()=>{
        filterSearch();
        },[area, typeitem, typeposts])
        
        /* Map CardPosts */
        const mapCardPost = cardPosts&&cardPosts.data.map((e,i)=>{
            return <Cardpost key={i} id={ cardPosts && e.idPost} title={ cardPosts && e.title} img={cardPosts && e.nameImage } type={cardPosts && e.type } tag={cardPosts && e.tagsPost} area={ cardPosts && e.areaLost} date={ cardPosts && e.datePost} time={ cardPosts && e.timePost}/>
        });

        // Set path api
        const typepost = async () => {
            const data = await axios.get(`https://${api}/api/Filters/find/FindType/ประเภทโพส`);
            setTypePost(data);
            console.log(data);
        }
      
        const typearea = async () => {
            const data = await axios.get(`https://${api}/api/Filters/find/FindType/บริเวณพื้นที่พบเจอของหาย`);
          setTypeArea(data);
          console.log(data);
        }
      
        const typeitems = async () => {
            const data = await axios.get(`https://${api}/api/Filters/find/FindType/ประเภทสิ่งของหาย`);
          setTypeItems(data);
          console.log(data);
        }
        
        useEffect(()=>{
                typearea();
                typeitems();
                typepost();
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