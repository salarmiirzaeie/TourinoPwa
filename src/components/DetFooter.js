import { cilHeart } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CCol, CFooter } from "@coreui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { joinTour } from "../services/dashboardServices";

const DetFooter = () => {
  const userId = useSelector((state) => state.profileState.userId)
  const params = useParams()
  const postId=params.id
  const data={postId,userId}

  return (
    <CFooter position="sticky" className="p-0 px-0">
      <CCol xs={2} className="d-grid gap-2  p-0">
        <button className="bg-white btn d-md-block">
          <CIcon className="p-0 text-danger" size="lg" icon={cilHeart} />
        </button>
      </CCol>
      <CCol xs={10} className="d-grid gap-2  p-0">
        <button
          onClick={() => {
            joinTour(data).then((res) => {
              alert(res.data.message);
            });
          }}
          style={{ backgroundColor: "skyblue" }}
          className="btn text-white d-md-block"
        >
          پیوستن
        </button>
      </CCol>
    </CFooter>
  );
};
export default DetFooter;
