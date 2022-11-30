import React, { useState } from "react";
//React import
import './Navbar.css'
//CSS import
import { BiSearch } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'
//React-icons import
import { useParams } from "react-router-dom";
//React-Router-Dom import


export default function Navbar() {
    const [statushover, setStatusHover] = useState(false);
    //Animetion CSS


    return(
        <div className="container-navbar">
            <div className="contain-area-navbar">
                <div className="contain-item-top-navbar">
                    <div className="area-logo-navbar">
                       <img className="images-full" src="logoDPU.png" />
                    </div>
                    <div className="area-search-navbar">
                        <div className="area-icon-search-navbar">
                            <BiSearch fill="#ffffff" />
                            {/* <img className="images-full" src="" /> */}
                        </div>
                        <input className="area-input-navbar" placeholder="ค้นหา คุณกำลังมองหาอะไร, คุณทำของหายแถวไหน"/>
                    </div>
                    <div className="area-login-navbar">
                        {/* เดิมทีเอาไว้ใส่ส่วนที่เป็นล็อคอินตอน Design */}
                    </div>
                </div>
                <div className="contain-item-bottom-navbar">
                    <div className="area-menu-navbar">
                        <div className="menu-navbar">
                            <div className="menu-texts-navbar">
                                หน้าหลัก
                            </div>
                        </div>
                        <div className="menu-navbar" onMouseMove={()=>{setStatusHover(true)}} onMouseLeave={()=>{setStatusHover(false)}}>
                            <div className="menu-texts-navbar">
                                Q&A
                            </div>
                            <div className={`area-menu-icon-navbar ${statushover?"area-menu-icon-turn-on-navbar":"area-menu-icon-turn-off-navbar"}`}>
                                <IoIosArrowDown  />
                            </div>
                            <div className=""></div>
                        </div>
                        <div className="menu-navbar">
                            <div className="menu-texts-navbar">
                                แผนที่มหาวิทยาลัย
                            </div>
                        </div>
                        <div className="menu-navbar">
                            <div className="menu-texts-navbar">
                                ช่องทางติดต่อ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}