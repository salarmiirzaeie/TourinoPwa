import {
  CCard,
  CCardImage,
  CCardText,
  CCol,
  CRow,
  CSpinner,
} from "@coreui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const TourCard = (data) => {
  const Height = window.innerHeight;
const navigate=useNavigate()
  return (
    <CCard  onClick={() => navigate(`/TourDet/${data.data._id}`)} style={{ height: Height / 5.5 }}>
      <CRow className="p-1 d-flex flex-fill">
        <CCol className="d-flex flex-column" xs={7} md={7} xl={7}>
          <CCardText style={{flex:0.6}} className="">{data.data.title}</CCardText>

          <CCardText style={{flex:0.35}} className="">dd</CCardText>
          <CCardText className="text-end">
            {data.data.capacity - data.data.joinedUsers.length}نفرباقی مانده
          </CCardText>
        </CCol>
        <CCol
          style={{ paddingRight: "0px" }}
          className="d-flex flex-column"
          xs={5}
          md={5}
          xl={5}
        >
          {data.data.thumbnail ? (
            <CCardImage
              className="d-flex flex-fill"
              alt="thumbnail"
              src={`http://localhost:3333/uploads/thumbnails/${data.data.thumbnail[0]}`}
            />
          ) : (
            <CSpinner />
          )}
        </CCol>
      </CRow>
    </CCard>
  );
};
