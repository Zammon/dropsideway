import React,{useEffect} from "react";
import Footer from "../../Tools/Footer/Footer";
//React import
import './Qapage.css'
//CSS import
import { useLocation } from "react-router-dom";
import { CustomListNumber } from "../../Tools/CustomListNumber/CustomListNumber";

export default function Qapage() {
    
    const { pathname } = useLocation();
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [pathname])
    
    const howToUseWebsite = [
        {
            title:'ผู้ใช้งานเลือกดูรายการของหายได้จากหน้าหลักโดยรายการที่จะแสดงในหน้าหลักจะเป็นโพสต์ล่าสุดที่มีคนโพสต์ไว้'
        },
        {
            title:'หากอยากดูเป็นข้อมูลเฉพาะสามารถเลือกตัวค้นหารายการได้ โดยเลือกใส่กระเภทสิ่งของ พื้นที่ หรือ ประเภทโพสต์ได้'
        },
        {
            title:'ค้นหารายการจากจากแถบ เซิร์ช โดยพิมพ์ชื่อที่ต้องการค้นหา'
        },
        {
            title:'หากเจอรายการของหายแล้วต้องการติดต่อรับคืนสามารถดูขั้นตอนที่ “ขั้นตอนการดำเนินการติดต่อขอรับของ”'
        },
        {
            title:'หากเจอของตกหล่นและต้องการตามหาเจ้าของดูขั้นตอนได้ที่ “เจอของตกหล่นตามหาเจ้าของไม่เจอ ทำอย่างไร"'
        },
        {
            title:'หากทำของหล่นหายและหาไม่เจอ ดูขั้นตอนได้ที่“ทำของหายจะตามหาของได้อย่างไร”'
        },
    ]

    const howToDoWhenMeet = [
        {
            title: 'ถ่ายรูปสิ่งของที่เก็บได้ พร้อมทั้งบันทึกเวลา และสถาณที่พบสิ่งของ'
        },
        {
            title: 'นำสิ่งของที่เก็บได้มาติดต่อเจ้าหน้าที่บริเวณใต้อาคาร 7 เพื่อโพสต์ลงบนเว็บไซต'
        },
        {
            title: 'รับเอกสารไปกรอกระบุรรายละเอียดต่างๆเช่น สถาณที่ เวลา ประเภทสิ่งของ'
        },
        {
            title: 'นำสิ่งของและเอกสารมายื่นให้เจ้าหน้าที่ตรวจสอบ'
        },
        {
            title: 'เจ้าหน้าที่ตรวจสอบโพสต์ที่มีคนลงตามหาของที่ตัวเองทำหาย ตรงกับสิ่งของที่เจอไหม'
        },
        {
            title: 'หากสิ่งของตรงกับรายการของที่เจอ เจ้าหน้าที่จะทำการติดต่อเจ้าของให้มารับคืน'
        },
        {
            title: 'หากไม่ใช่เจ้าหน้าที่ทำการโพสต์ลงบนเว็บไซต์ โดยทำการถ่ายรูปสิ่งของระบุรายละเอียดต่างๆให้ชัดเจน และระบุสถาณที่ที่พบเจอ'
        },
        {
            title: 'เสร็จสิ้นรอเจ้าของมาติดต่อขอรับคืน'
        },
    ]

    const stepToTakeItem = [
        {
            title: 'ตรวจสอบสิ่งของที่อยู่บนเว็บไซต์ให้ละเอียด หากมั่นใจตัวเองเป็นเจ้าของสามารถมารับได้ที่อาคาร 7'
        },
        {
            title: 'ติดต่อเจ้าหน้าที่ ใต้อาคาร 7 เพื่อขอรับของคืน'
        },
        {
            title: 'หากมีหลักฐานระบุความเป็นเจ้าของให้นำมาด้วย หากไม่มีจะพอจารณาโดยเจ้าหน้าท'
        },
        {
            title: 'หากเป็นเจ้าของตัวจริงเจ้าหน้าที่จะคืนสิ่งของให้กับเจ้าของ'
        },
        {
            title: 'เจ้าหน้าที่ทำการตรวจสอบโพสต์และยืนยันมีเจ้าของมารับคืนแล้ว พร้อมกับถ่ายรูปการมอบของเพื่อเป็นหลักฐาน'
        },
    ]

    const lostMyItemHowTo = [
        {
            title: 'เข้าเว็บไซต์แจ้งของหายและตามหาของหาย'
        },
        {
            title: 'เลือกดูรายการของหายจากโพสต์หน้าหลัก หรือจะค้นหาเป็นสถาณที่ หรือประเภท'
        },
        {
            title: 'เลือกดูรายการที่อยู่ในเว็บไซต์'
        },
        {
            title: 'หากเจอรายการของการที่เป็นของตัวเองติดต่อรับคืนได้ที่ใต้อาคาร 7'
        },
        {
            title: 'หากไม่เจอให้ติดต่อเจ้าหน้าที่ ใต้อาคาร 7 และนำเอกสารไปกรอกระบุรายละเอียดต่างๆ และช่องทางการติดต่อกับ'
        },
        {
            title: 'เจ้าหน้าที่จะทำการโพสต์ตามหาของหาย พร้อมกับรายละเอียดที่ระบุไว้เบื้องต้น'
        },
    ]

    return(
        <>
            <div className="container-center">
                <div className="area-content-qandapage">
                    <div className="rows-howto-qandapage">
                        <div className="title-howto-qandapage">
                            วิธีการใช้งานเว็บไซต์
                        </div>
                        <div className="detail-howto-qandapage">
                            <ol>
                                {
                                    howToUseWebsite.map((data, index)=>{
                                        return <CustomListNumber key={index} title={data.title} />;
                                    })
                                }
                            </ol>
                        </div>
                    </div>
                    <div className="rows-howto-qandapage">
                        <div className="title-howto-qandapage">
                            เจอของตกหล่นตามหาเจ้าของไม่เจอ ทำอย่างไร
                        </div>
                        <div className="detail-howto-qandapage">
                            <ol>
                                {
                                    howToDoWhenMeet.map((data, index)=>{
                                        return <CustomListNumber key={index} title={data.title} />;
                                    })
                                }
                            </ol>
                        </div>
                    </div>
                    <div className="rows-howto-qandapage">
                        <div className="title-howto-qandapage">
                            ทำของหายจะตามหาของได้อย่างไร
                        </div>
                        <div className="detail-howto-qandapage">
                            <ol>
                                {
                                    lostMyItemHowTo.map((data, index)=>{
                                        return <CustomListNumber key={index} title={data.title} />;
                                    })
                                }
                            </ol>
                        </div>
                    </div>
                    <div className="rows-howto-qandapage">
                        <div className="title-howto-qandapage">
                            ขั้นตอนการดำเนินการติดต่อขอรับของ
                        </div>
                        <div className="detail-howto-qandapage">
                            <ol>
                                {
                                    stepToTakeItem.map((data, index)=>{
                                        return <CustomListNumber key={index} title={data.title} />;
                                    })
                                }
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
        
    )
}