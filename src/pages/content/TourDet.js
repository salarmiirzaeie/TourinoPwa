import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import DetHeader from "../../components/DetHeader";
import DetFooter from "../../components/DetFooter";
import {JoinedusersSm} from "../../components/JoinedusersSm";
import {TouMap} from "../../components/TouMap";

import { formDate } from "../../utils/helpers";
import { getPost } from "../../services/postServices";
import {
  CCard,
  CCardImage,
  CCardText,
  CCarousel,
  CCarouselItem,
  CSpinner,
} from "@coreui/react";
const TourDet = () => {
  const Height = window.innerHeight;
  const [pos, setposition] = useState({ mode: true, title: "" });
  const params = useParams();
  const [post, setpost] = useState({});
  const [creator, setcreator] = useState({});

const navigate=useNavigate()
  const listenScrollEvent = () => {
    if (window.scrollY <= Height / 2.5 - 15) {
      setposition({ mode: true, title: "" });
    } else if (window.scrollY >= Height / 2.5 - 15) {
      setposition({ mode: false, title: post.title });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    getPost(params.id).then((res) => {
      if (res.status === 200) {
        console.log(res.data.post);
        setpost(res.data.post);
        setcreator(res.data.post.user)
      }
    });
  }, []);
  return (
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <DetHeader pos={pos} />
      <div className="body flex-grow-1">
        {post.thumbnail ? (
          <CCarousel  transition="slide"  controls>
            {post.thumbnail.map((name, i) => (
              <CCarouselItem key={i}>
                <img
                  style={{ height: Height / 2.5 }}
                  alt="thumbnails"
                  className="d-block w-100"
                  src={`http://localhost:3333/uploads/thumbnails/${name}`}
                />
              </CCarouselItem>
            ))}
          </CCarousel>
        ) : (
          <CSpinner />
        )}
        <CCard
          style={{
            marginTop: -15,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 10,
          }}
        >
          <div
            className="d-flex  p-0"
            style={{ justifyContent: "space-between" }}
          >
            <CCardText className="text-dark">عنوان</CCardText>

            {post.title}
          </div>
          <hr className="my-2" />
          <div
            className="d-flex   p-0"
            style={{ justifyContent: "space-between" }}
          >
            <CCardText className="text-dark my-1">ظرفیت</CCardText>

            <p className=" my-2">{post.capacity}</p>
          </div>
          <hr className="my-2" />
          <div
            className="d-flex  p-0"
            style={{ justifyContent: "space-between" }}
          >
            <CCardText className="text-dark my-1">تاریخ</CCardText>

            <p className="my-1">{formDate(post.date)}</p>
          </div>
          <hr className="my-2" />
          <div
            className="d-flex  p-0"
            style={{ justifyContent: "space-between" }}
          >
            <CCardText className="text-dark my-1">مدت زمان</CCardText>

            <p className="my-1">{post.durationTime}</p>
          </div>
          <hr className="my-2" />
          <div
            className="d-flex  p-0"
            style={{ justifyContent: "space-between" }}
          >
            <CCardText className="text-dark my-1">میزبان</CCardText>

            <p onClick={()=>navigate(`/CampProfile/${creator._id}`)} className="my-1  badge bg-info">{creator.name}</p>
          </div>
          <hr className="my-2" /><div
            className="d-flex  p-0"
            style={{ justifyContent: "space-between" }}
          >
            <CCardText className="text-dark my-1">افرادعضوشده</CCardText>
            <JoinedusersSm/>

            {/* <p className="my-1">{post.durationTime}</p> */}
          </div>
          <hr className="my-2" />
          <div
            className="d-flex  p-0"
            style={{ justifyContent: "space-between",height:"150px" }}
          >
            <CCardText className="text-dark my-1">درباره</CCardText>

            <p className="my-1">{post.durationTime}</p>
          </div>
          <hr className="my-2" />
          <div
            className="d-flex bg-warning rounded-2 p-0"
            style={{ justifyContent: "space-between",height:"150px" }}
          >
           {/* <TouMap/> */}
          </div>
         
        </CCard>
      </div>
      <DetFooter />
    </div>
  );
};
export default TourDet;
