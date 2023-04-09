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
                    <div className="area-top-contant-contactpage">
                        <div className="area-top-contant-left-contactpage">
                            <div className="title-contant-contactpage">
                                ช่องทางติดต่อ
                            </div>
                            <div className="detail-contant-contactpage">
                                มหาวิทยาลัยธุรกิจบัณฑิตฯ<br/>
                                254 ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330<br/>
                                โทรศัพท์ 0 2215 3555, 0 2218 2000<br/>
                                อีเมล pr@chula.ac.th
                            </div>
                        </div>
                        <div className="area-top-contant-right-contactpage">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.520587600584!2d100.54861305451527!3d13.87002315757528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29cb53bf756c5%3A0x843963509fe7ac0d!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LiY4Li44Lij4LiB4Li04LiI4Lia4Lix4LiT4LiX4Li04LiV4Lii4LmM!5e0!3m2!1sth!2sth!4v1678533888094!5m2!1sth!2sth" 
                            title='Map_DPU'
                            width="600" 
                            height="450" 
                            style={{border: 0}} 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"/>
                        </div>
                    </div>
                    <div className="area-bottom-contant-contactpage">
                        <div className="area-bottom-contant-left-contactpage">
                            <div className="title-contant-contactpage">
                                ติดต่อผ่านทางโซเชียลมีเดีย
                            </div>
                            <div className="detail-contant-contactpage">
                                <ul>
                                    <li>Facebook <a href='#'>คลิ๊กที่นี่</a></li>
                                    <li>Instargram <a href='#'>คลิ๊กที่นี่</a></li>
                                    <li>Line <a href='#' >คลิ๊กที่นี่</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="area-bottom-contant-right-contactpage">
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdpu.ac.th%2F%3Flocale%3Dth_TH&tabs=timeline&width=495&height=70&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                            title='test'
                            width="495" 
                            height="70" 
                            style={{border: 'none',overflow:'hidden'}} 
                            frameborder="0" 
                            allowfullscreen="true" 
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};