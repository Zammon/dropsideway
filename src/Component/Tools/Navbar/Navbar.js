import React, { useState } from "react";
//React import
import './Navbar.css'
//CSS import
import { BiSearch } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'
//React-icons import
import { NavLink, useParams } from "react-router-dom";
//React-Router-Dom import
import { logodpu } from "../../Models/Slideimg";
//Model import
export default function Navbar() {
    const [statushover, setStatusHover] = useState(false);
    //Animetion CSS
    
    function getEnter(event) {
        if(event.key === 'Enter') {
            console.log("Enter เข้าได้");
        }
    }

    return(
        <div className="container-navbar">
            <div className="contain-area-navbar">
                <div className="contain-item-top-navbar">
                    
                    <div className="area-logo-navbar">
                       <img className="images-full" src={logodpu} />
                    </div>
                    
                    <div className="area-search-navbar">
                        <div className="area-icon-search-navbar">
                            <BiSearch fill="#ffffff" />
                            {/* <img className="images-full" src="" /> */}
                        </div>
                        <input className="area-input-navbar font-noto" placeholder="ค้นหา คุณกำลังมองหาอะไร, คุณทำของหายแถวไหน" onKeyPress={(e)=>getEnter(e)}/>
                    </div>
                    
                    <div className="area-login-navbar">
                        {/* เดิมทีเอาไว้ใส่ส่วนที่เป็นล็อคอินตอน Design */}
                    </div>

                </div>
                <div className="contain-item-bottom-navbar">
                    <div className="area-menu-navbar">
                        <NavLink to="/" className={({isActive})=>isActive?"navlink-set navlink-text-none menu-navbar-focus":"navlink-set navlink-text-none"}>
                            <div className="menu-navbar">
                                <div className="menu-texts-navbar">
                                    หน้าหลัก
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/qanda" className={({isActive})=>isActive?"navlink-set navlink-text-none menu-navbar-focus":"navlink-set navlink-text-none"}>
                        <div className="menu-navbar" onMouseMove={()=>{setStatusHover(true)}} onMouseLeave={()=>{setStatusHover(false)}}>
                            <div className="menu-texts-navbar">
                                วิธีการใช้งาน
                            </div>
                            <div className={`area-menu-icon-navbar ${statushover?"area-menu-icon-turn-on-navbar":"area-menu-icon-turn-off-navbar"}`}>
                                <IoIosArrowDown />
                            </div>
                            <div className=""></div>
                        </div>
                        </NavLink>
                        <NavLink to="/map" className={({isActive})=>isActive?"navlink-set navlink-text-none menu-navbar-focus":"navlink-set navlink-text-none"}>
                        <div className="menu-navbar">
                            <div className="menu-texts-navbar">
                                แผนที่มหาวิทยาลัย
                            </div>
                        </div>
                        </NavLink>
                        <NavLink to="/contact" className={({isActive})=>isActive?"navlink-set navlink-text-none menu-navbar-focus":"navlink-set navlink-text-none"}>
                        <div className="menu-navbar">
                            <div className="menu-texts-navbar">
                                ช่องทางติดต่อ
                            </div>
                        </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}