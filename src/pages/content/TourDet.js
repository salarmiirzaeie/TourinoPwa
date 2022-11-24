import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import DetHeader from "../../components/DetHeader";
import DetFooter from "../../components/DetFooter";
import { JoinedusersSm } from "../../components/JoinedusersSm";
import { TouMap } from "../../components/TouMap";

import { formDate } from "../../utils/helpers";
import { getPost } from "../../services/postServices";
import {
  CCard,
  CCardImage,
  CCardText,
  CCarousel,
  CCarouselItem,
  CListGroup,
  CListGroupItem,
  CSpinner,
  CModal,
  CModalBody,
  CButton,
  CModalTitle,
} from "@coreui/react";
const TourDet = () => {
  const Height = window.innerHeight;
  const Width = window.innerWidth;
  const [visible, setVisible] = useState(false);

  const [pos, setposition] = useState({ mode: true});

  const params = useParams();
  const [post, setpost] = useState({});
  const [creator, setcreator] = useState({});

  const navigate = useNavigate();
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
        setpost(res.data);
        setcreator(res.data.user);
      }
    });
  }, []);
  return (
    <div  className="wrapper d-flex flex-column min-vh-100 bg-light">
      <DetHeader pos={pos} title={post.title} />
      <div className="body flex-grow-1">
        {post.thumbnail ? (
          <div className="testimonial-group">
            <div className="row m-0">
              {post.thumbnail.map((name, i) => (
                <img
                  onClick={() => setVisible(!visible)}
                  key={i}
                  alt="d"
                  style={{ width: "100%", height: Height / 2.75 }}
                  className="d-block col px-0"
                  src={`http://localhost:3333/uploads/thumbnails/${name}`}
                />
              ))}
            </div>

            <CModal
              fullscreen
              visible={visible}
              onClose={() => setVisible(false)}
            >
              <CModalBody  className="bg-black p-0">
                <div style={{marginBlock:220}} className="testimonial-group">
                  <div className="row m-0">
                    {post.thumbnail.map((name, i) => (
                      <img
                        onClick={() => setVisible(!visible)}
                        key={i}
                        alt="d"

                        style={{ width: "100%", height: Height / 2.75 }}
                        className="d-block col px-0"
                        src={`http://localhost:3333/uploads/thumbnails/${name}`}
                      />
                    ))}
                  </div>
                </div>
              </CModalBody>
            </CModal>
          </div>
        ) : (
          <CSpinner />
        )}
        <div className="bg-white" style={{ marginTop: -15, height: "900px" }}>
          <CListGroup className="rounded-4">
            <CListGroupItem className="justify-content-between d-flex">
              <CCardText className="text-dark m-0">عنوان</CCardText>
              <p className="m-0"> {post.title}</p>
            </CListGroupItem>
            <CListGroupItem className="justify-content-between d-flex">
              <CCardText className="text-dark m-0">ظرفیت</CCardText>
              <p className="m-0"> {post.capacity}</p>
            </CListGroupItem>
            <CListGroupItem className="justify-content-between d-flex">
              <CCardText className="text-dark m-0">تاریخ</CCardText>
              <p className="m-0"> {formDate(post.date)}</p>
            </CListGroupItem>
            <CListGroupItem className="justify-content-between d-flex">
              <CCardText className="text-dark m-0">مدت زمان</CCardText>
              <p className="m-0"> {post.durationTime}</p>
            </CListGroupItem>
            <CListGroupItem className="justify-content-between d-flex">
              <CCardText className="text-dark m-0">قیمت</CCardText>
              <p className="m-0"> {post.price}</p>
            </CListGroupItem>
            <CListGroupItem className="justify-content-between d-flex">
              <CCardText className="text-dark m-0">میزبان</CCardText>
              <p
                onClick={() => navigate(`/CampProfile/${creator._id}`)}
                className="badge m-0 bg-info"
              >
                {creator.name}
              </p>
            </CListGroupItem>
            <CListGroupItem className="justify-content-between d-flex">
              <CCardText className="text-dark m-0">افرادعضوشده</CCardText>

              <JoinedusersSm />
            </CListGroupItem>
            <CListGroupItem style={{ height: "150px" }}>
              <CCardText className="text-dark m-0">درباره</CCardText>
            </CListGroupItem>
          </CListGroup>
          <div
            className="d-flex bg-warning rounded-2 p-0 m-3"
            style={{ justifyContent: "space-between", height: "150px" }}
          ></div>
        </div>
      </div>
      <DetFooter />
    </div>
  );
};
export default TourDet;
