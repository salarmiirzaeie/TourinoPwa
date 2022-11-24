import {
  cilArrowLeft,
  cilArrowRight,
  cilFilter,
  cilListFilter,
  cilListHighPriority,
  cilListRich,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CCard,
  CCol,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CListGroup,
  CListGroupItem,
  CModal,
  CModalBody,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { BsListNested, BsListTask, BsSortAlphaDown, BsSortDown } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { TourCard } from "../../components/TourCard";
import { getIndex, searchTour } from "../../services/postServices";

const SearchPage = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [sort, setSort] = useState("مرتبط ترین");

  const [posts, setpots] = useState([]);
  const params = useParams();
  const [parsm, setparam] = useState(params.text);
  const sorting = (res) => {
    const date = (a) => new Date(a);

    if (res === 1) {
      posts.sort((a, b) => date(a.createdAt) - date(b.createdAt));
    }
    if (res === 2) {

      posts.sort((a, b) => a.price - b.price);
    }
    if (res === 3) {

      posts.sort((a, b) => b.capacity - a.capacity);
    }
  };
  // const searchTour = (res) => {
  //   console.log(posts);
  //   const tourss = posts.filter((q) => (q.title = "ق"));
  //   setpots(tourss);
  // };
  useEffect(() => {
    getIndex().then((res) => {
      if (parsm !== "b") {
        setpots(res.data.posts.filter((q) => q.type === parsm.toString()));
      } else {
        setpots(res.data.posts);
      }
    });
  }, []);

  return (
    <div>
      <CCard style={{ zIndex: 20 }} className="position-fixed  w-100">
        <CInputGroup
          style={{
            width: "100%",
            alignSelf: "center",
            borderBlockColor: "white",
          }}
          className="p-1"
        >
          <CFormInput
            placeholder="جستجو..."
            onChange={(q) => {
              if (q.currentTarget.value !== "") {
                searchTour({ text: q.currentTarget.value });
              }
            }}
            autoFocus={true}
          />
          <CInputGroupText onClick={() => navigate(-1)} className="bg-white">
            <CIcon icon={cilArrowLeft} />
          </CInputGroupText>
        </CInputGroup>
        <div className="w-100 d-flex py-0  px-2">
          <CIcon icon={cilFilter} />

          <p   onClick={() => {
                sorting(3);
                console.log("first")

              }}  className="p-0 mx-2">فیلترها</p>
          {/* <CIcon icon={cilListRich} /> */}
          <BsSortDown/>

          <p className="p-0 mx-2" onClick={() => setVisible(!visible)}>
             {sort}
          </p>
        </div>
      </CCard>

      <div style={{ paddingTop: 90 }}>
        {posts
          .map((post, i) => (
            <TourCard key={i} data={post} />
          ))}
      </div>
      <CModal fullscreen visible={visible} onClose={() => setVisible(false)}>
        <CModalBody className=" p-0">
          <CListGroup>
            <CListGroupItem
              onClick={() => {
                sorting(1);
                setSort("ارزانترین")

                setVisible(false);
              }}
            >
              جدیدترین
            </CListGroupItem>
            <CListGroupItem
              onClick={() => {
                sorting(2);
                setSort("محبوبترین")

                setVisible(false);

              }}
            >
              ارزان ترین
            </CListGroupItem>
            <CListGroupItem
              onClick={() => {
                sorting(3);
                setSort("جدیدترین")

                setVisible(false);

              }}
            >
              محبوب ترین
            </CListGroupItem>
          </CListGroup>
        </CModalBody>
      </CModal>
    </div>
  );
};
export default SearchPage;
