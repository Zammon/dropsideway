import React, { useEffect, useState, useRef } from "react";
//React imoport
import "./Postpage.css";
//URL import
import { IoIosArrowDown } from "react-icons/io";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { CutTime, CutDate } from "../../../Services/CutdatetimeService";
import ShowPosts from "../../Tools/ShowPosts/ShowPosts";
import { BsImageAlt } from "react-icons/bs";
import FetchPost from "../../../Contexts/Fetchs/FetchPosts";
import { TYPE_POST } from "../../../Contexts/Enums/Filters";

export default function Postpage() {
  const { id } = useParams();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [targetPost, setTargetPost] = useState();
  const [targetImages, setTargetImages] = useState(0);
  const [type, setType] = useState();
  const [zoome, setZoome] = useState(false);
  const [typepost, setTypepost] = useState();
  const [style, setStyle] = useState();
  const [showfullscel, setShowFullScel] = useState(false);
  const navigate = useNavigate();
  const imageEsc = useRef(null);

  useEffect(() => {
    FetchPost(setTargetPost, setType, id);
  }, []);

  useEffect(() => {
    if (type === TYPE_POST.MEETITEM) {
      setTypepost(true);
    } else if (type === TYPE_POST.LOSTITEM) {
      setTypepost(false);
    }
  }, [type]);

  function ImagesIndex(props) {
    const { index, target } = props;
    return (
      <>
        <div
          className={`${
            targetImages === index
              ? "image-index-target-postpage"
              : "image-index-postpage"
          }`}
        >
          {target ? (
            <img
              className="images-full object-fit"
              src={target}
              alt=""
              onClick={() => {
                setTargetImages(index);
              }}
            />
          ) : (
            ""
          )}
        </div>
      </>
    );
  }

  function TypePosts(props) {
    return (
      <div className={`type-posts-postpage ${typepost ? "meet" : "find"}`}>
        {props.type}
      </div>
    );
  }

  function Tags(props) {
    return <div className="tags-posts-postpage">{props.nametag}</div>;
  }

  function hadleOnKeyDown(event) {
    imageEsc.current.click();
    if (event.key === "Escape") {
      setShowFullScel(false);
    }
  }

  return (
    <>
      {" "}
      {showfullscel && targetPost && targetPost.data.images[targetImages] ? (
        <div
          ref={imageEsc}
          className="area-show-postpage"
          tabIndex={0}
          onKeyDown={hadleOnKeyDown}
          onMouseEnter={() => {
            imageEsc.current.focus();
          }}
        >
          <ShowPosts
            imgindex={targetPost && targetPost.data.images[targetImages]}
          />
          <div
            className="back-drop"
            onClick={() => setShowFullScel(false)}
          ></div>
        </div>
      ) : (
        ""
      )}
      <div className="container-center" style={{ height: "100vh" }}>
        <div className="container-postpage">
          {/* Left content */}
          <div className="item-left-postpage">
            {/* Return back to page */}
            <div
              className="item-left-button-return-postpage"
              onClick={() => {
                navigate(-1);
              }}
            >
              <div className="area-icon-arrow">
                <IoIosArrowDown size="15px" fill="#737373" />
              </div>
              <div className="area-return-text">กลับไปหน้าก่อนหน้า</div>
            </div>
            {/* Area images post */}
            <div className="item-right-area-imge-postpage">
              {targetPost && targetPost.data.images[targetImages] ? (
                <div
                  className="area-image-target-postpage"
                  onMouseEnter={() => setZoome(true)}
                  onMouseLeave={() => setZoome(false)}
                  onClick={() => setShowFullScel(true)}
                >
                  {zoome ? (
                    <div
                      className={`show-zoome-${style ? "off" : "on"}-postpage`}
                      onMouseEnter={() => setStyle(true)}
                      onMouseLeave={() => setStyle(false)}
                    >
                      ดูเพิ่มเติม
                    </div>
                  ) : (
                    ""
                  )}
                  <img
                    className="images-full object-fit"
                    src={targetPost && targetPost.data.images[targetImages]}
                    alt=""
                  />
                </div>
              ) : (
                <div className="area-image-target-postpage">
                  <BsImageAlt size={50} color="#5F5F5F" />
                </div>
              )}
              <div className="area-images-postpage">
                <ImagesIndex
                  index={0}
                  target={targetPost && targetPost.data.images[0]}
                />
                <ImagesIndex
                  index={1}
                  target={targetPost && targetPost.data.images[1]}
                />
                <ImagesIndex
                  index={2}
                  target={targetPost && targetPost.data.images[2]}
                />
                <ImagesIndex
                  index={3}
                  target={targetPost && targetPost.data.images[3]}
                />
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="item-right-postpage">
            <div className="area-tag-type-postpage">
              <TypePosts type={targetPost && targetPost.data.type} />
              <Tags nametag={targetPost && targetPost.data.categoryItem} />
              <Tags nametag={targetPost && targetPost.data.tag} />
              <div className="overflow-blur-color"></div>
            </div>
            <div className="area-title-postpage">
              {targetPost && targetPost.data.title}
            </div>
            <div className="area-dis-postpage">
              {targetPost && targetPost.data.directory}
            </div>
            <div className="area-date-time-postpage">
              <div className="area-icon-date-time-postpage">
                <BsFillCalendarDateFill size="19px" fill="#A5A5A5" />
              </div>
              <div className="area-text-date-time-postpage">
                {CutDate(targetPost && targetPost.data.date)}
              </div>
              <div className="area-icon-date-time-postpage">
                <BiTime size="22px" fill="#A5A5A5" />
              </div>
              <div className="area-text-date-time-postpage">
                {CutTime(targetPost && targetPost.data.time)}
              </div>
            </div>
            <div className="area-user-postpage">
              <div className="area-user-name-postpage">
                <div className="area-user-name-title-postpage">
                  ชื่อผู้รายงาน :
                </div>
                <div className="area-user-username-postpage">{id}</div>
              </div>
            </div>
            <div className="area-lost-postpage">
              <div className="area-lost-top-postpage">
                <div className="icon-top-postpage">
                  <FaMapMarkerAlt fill="#A5A5A5" />
                </div>
                <div className="text-top-postpage">บริเวณพบเจอของหาย</div>
                <div className="tags-top-postpage">
                  <Tags nametag={targetPost && targetPost.data.area} />
                </div>
              </div>
              <div className="area-lost-bottom-postpage">
                <div className="area-detail-arealost-postpage">
                  {targetPost && targetPost.data.directoryArea}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
