import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import DetHeader from "../../components/DetHeader";
import DetFooter from "../../components/DetFooter";

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
  const [pos, setposition] = useState({mode:true,title:''});
  const params = useParams();
  const [post, setpost] = useState({});

  const listenScrollEvent = () => {
    if (window.scrollY <= Height / 2.5-15) {
      setposition({mode:true,title:''});
    } else if (window.scrollY >= Height / 2.5-15) {
      setposition({mode:false,title:post.title});
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    getPost(params.id).then((res) => {
      if (res.status===200) {
        setpost(res.data.post);

      }
    });
  }, []);
  return (
      <div  className="wrapper d-flex flex-column min-vh-100 bg-light">
        <DetHeader pos={pos}/>
        <div className="body flex-grow-1">
          {post.thumbnail ? (
            <CCarousel transition="slide" pause={"hover"} controls>
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
            }}
          >
            <CCardText>dd</CCardText>
            <hr/>
            <hr/>
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
          </CCard>
        </div>
        <DetFooter />
      </div>
  );
};
export default TourDet;
