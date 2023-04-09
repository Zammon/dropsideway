import React from "react";
import './Footer.css'
import logo from '../../../Images/Dropsideway_Logo.png';

export default function Footer() {
    return(
        <div className="container-footer">
            <div className="contain-area-footer">
                <div className="contain-item-top-footer">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        }}>
                        <div className="area-icon-logo">
                            <img className="images-full" src={logo} alt="" />
                        </div>
                        <div className="area-name-website">
                                DropSideWay <br/>
                            <div className="copylight-footer">
                                ©DropSideWay
                            </div>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: '100%',
                        height: 'auto',
                        margin: '0 0 0 100px'
                    }}>
                        <div className="link-detail-footer">
                            <div className="title-footer">
                                หน้าหลัก
                            </div>
                            <ul>
                                <li>
                                    <a href="../search/filter/-/-/ตามหาของหาย">ค้นหาของหาย</a>
                                </li>
                                <li>
                                    <a href="../search/filter/-/-/ตามหาเจ้าของ">ค้นหาเจ้าของ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="link-detail-footer">
                            <div className="title-footer">
                                วิธีใช้งาน
                            </div>
                            <ul>
                                <li>
                                    <a href="/qanda">วิธีการใช้งานเว็บไซต์</a>
                                </li>
                                <li>
                                    <a href="/qanda">เจอของตกหล่นตามหาเจ้าของไม่เจอ ทำอย่างไร?</a>
                                </li>
                                <li>
                                    <a href="/qanda">ทำของหายจะตามหาของได้อย่างไร?</a>
                                </li>
                            </ul>
                        </div>
                        <div className="link-detail-footer">
                            <div className="title-footer">
                                แผนที่
                            </div>
                            <ul>
                                <li>
                                    <a href="../map">แผนที่มหาวิทยาลัยธุรกิจฯ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="link-detail-footer">
                            <div className="title-footer">
                                ช่องทางติดต่อ
                            </div>
                            <ul>
                                <li>
                                    <a href="/contact">ติดต่อ</a>
                                </li>
                                <li>
                                    <a href="#">facebook</a>
                                </li>
                                <li>
                                    <a href="#">instargram</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}