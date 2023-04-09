import React,{useEffect} from 'react';
import Footer from '../../Tools/Footer/Footer';
import './Mappage.css'
import { useLocation } from 'react-router-dom';
import mapImage from '../../../Images/map.webp';
import { Faculty } from './itemsMap';

export default function Mappage(){  
    const { pathname } = useLocation();
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [pathname])

    return(
        <>
            <div className='container-center' style={{}}>
                <div className='area-content-mappage' style={{padding: '0 50px'}}>
                    <div className='area-title-mappage'>แผนที่ภายในมหาวิทยาลัยธุรกิจฯ</div>
                    { mapImage ?
                    <>
                        <img className='images-full' src={mapImage} alt=''/>
                        <div className='area-detail-map-mappage'>
                            {Faculty?.map((data, index)=>{
                                return(
                                <div key={index} className='area-faculty-mappage'>
                                    <div className='area-image-icon-faculty'>
                                        <img className='full-images' src={data.imgae} alt=''/>   
                                    </div>
                                    <div className='area-text-title-mappage'>
                                        <div className='title-text-map-mappage'>
                                            {data.label}
                                        </div>
                                        <div className='detail-text-map-mappage'>
                                            {data.biling}
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </>
                    :
                    <></>
                    }
                </div>
            </div>
            <Footer />
        </>
    )
};