import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./SearchFilter.css";
import Cardpost from "../../Tools/CardPost/Cardpost";
import { TYPES_FILTER } from "../../../Contexts/Enums/Filters";
import AxiosFetch from "../../../Contexts/Fetchs/AxiosFetch";
import FetchSearch from "../../../Contexts/Fetchs/FetchSearch";

export function CustomTags(props) {
  const { name, type } = props;
  if (type === TYPES_FILTER.AREA) {
    return (
      <div className="tags-posts-postpage" style={{ backgroundColor: "#ffff" }}>
        <Link style={{ color: "#B9B9B9" }} to={`/search/filter/${name}/-/-`}>
          {name}
        </Link>
      </div>
    );
  }
  if (type === TYPES_FILTER.TAGS) {
    return (
      <div className="tags-posts-postpage" style={{ backgroundColor: "#ffff" }}>
        <Link style={{ color: "#B9B9B9" }} to={`/search/filter/-/${name}/-`}>
          {name}
        </Link>
      </div>
    );
  }
}

export default function SearchFilter() {
  const { search } = useParams();
  const [pageIndex, setPageIndex] = useState(0);
  const [cards, setCard] = useState({
    lengthTitle: 0,
    lengthTag: 0,
    lengthArea: 0,
    titlePosts: [],
    tagPosts: [],
    areaPost: [],
  });
  const [tags, setTags] = useState({
    tags: [],
    area: [],
  });

  const handleClick = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPageIndex((prevPageIndex) => prevPageIndex + 1);
      return;
    }
  };
  const fetchTags = async () => {
    const area = await AxiosFetch.get(
      `DropsidewayWebsite/Findtype/บริเวณพื้นที่พบเจอของหาย`
    );
    const category = await AxiosFetch.get(
      `DropsidewayWebsite/Findtype/ประเภทสิ่งของหาย`
    );
    setTags({area: [area.data.nameItemFilter], tags: [category.data.nameItemFilter]});
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchTags();
    FetchSearch(setCard, search, pageIndex);
  }, []);

  useEffect(() => {
    FetchSearch(setCard, search, pageIndex);
  }, [search]);

  return (
    <div
      className="container-center"
      style={{
        overflow: "hidden",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#F5F5F5",
        padding: "154px 0px 50px 0px",
      }}
    >
      <div className="tags-category-searchfilterpage">
        <div className="title-tags-category-searchfilterpage">
          แท็ก และ หมวดหมู่ :
        </div>
        <div className="area-tags-category-searchfilterpage">
          {tags?.area.map((data) => {
            let tags = [];
            for (let i = 0; i < 5; i++) {
              tags.push(<CustomTags name={data[i]} type="area" />);
            }
            return tags;
          })}
          {tags?.tags.map((data) => {
            let tags = [];
            for (let i = 0; i < 4; i++) {
              tags.push(<CustomTags name={data[i]} type="tags" />);
            }
            return tags;
          })}
        </div>
      </div>
      <div className="title-search-post-searchfilterpage">
        {`คำค้นหา: ${search}`}
      </div>
      {cards.lengthTitle === 0 &&
      cards.lengthArea === 0 &&
      cards.lengthTag === 0 ? (
        <div
          style={{
            display: "flex",
            minHeight: "500px",
            color: "#7C7C7C",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {`ไม่พบเนื้อหาเกี่ยวกับ "${search}"`}
        </div>
      ) : (
        <>
          {cards?.lengthTitle !== 0 ? (
            <>
              <div className="rows-title-searchfilterpage">
                <div className="">
                  {`โพสต์ที่เกี่ยวข้อง (${cards.lengthTitle})`}
                </div>
                {/* <Link to=''>
                                {`ดูเพิ่มเติม`}
                            </Link> */}
              </div>
              <div className="search-post-searchfilterpage">
                {cards?.titlePosts?.map((data, index) => {
                  return (
                    <Cardpost
                      key={index}
                      id={data && data.idPost}
                      title={data && data.title}
                      img={data && data.image}
                      type={data && data.type}
                      tag={data && data.tag}
                      area={data && data.area}
                      date={data && data.date}
                      time={data && data.time}
                    />
                  );
                })}
              </div>
            </>
          ) : (
            <></>
          )}
          {cards?.lengthTag !== 0 ? (
            <>
              <div className="rows-title-searchfilterpage">
                <div className="">
                  {`แท็กหรือหมวดหมู่ที่เกี่ยวข้อง (${cards.lengthTag})`}
                </div>
                {/* <Link to=''>
                                {`ดูเพิ่มเติม`}
                            </Link> */}
              </div>
              <div className="tags-post-searchfilterpage">
                {cards?.tagPosts?.map((data, index) => {
                  return (
                    <Cardpost
                      key={index}
                      id={data && data.idPost}
                      title={data && data.title}
                      img={data && data.image}
                      type={data && data.type}
                      tag={data && data.tag}
                      area={data && data.area}
                      date={data && data.date}
                      time={data && data.time}
                    />
                  );
                })}
              </div>
            </>
          ) : (
            <></>
          )}
          {cards?.lengthArea !== 0 ? (
            <>
              <div className="rows-title-searchfilterpage">
                <div className="">
                  {`พื้นที่เกี่ยวข้อง (${cards.lengthArea})`}
                </div>
                {/* <Link to=''>
                                {`ดูเพิ่มเติม`}
                            </Link> */}
              </div>
              <div className="area-post-searchfilterpage">
                {cards?.areaPosts?.map((data, index) => {
                  return (
                    <Cardpost
                      key={index}
                      id={data && data.idPost}
                      title={data && data.title}
                      img={data && data.image}
                      type={data && data.type}
                      tag={data && data.tag}
                      area={data && data.area}
                      date={data && data.date}
                      time={data && data.time}
                    />
                  );
                })}
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}
