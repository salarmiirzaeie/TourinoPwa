import { CCol, CFooter } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { isJoined, joinTour, unjoinTour } from "../services/dashboardServices";
const DetFooter = () => {
  const params = useParams();
  const postId = params.id;
  const logedin = useSelector((state) => state.profileModeState);

  const data = { postId: postId };
  const [joined, setJoined] = useState(false);
  useEffect(() => {
    if (logedin) {
      isJoined({ postId: params.id }).then((res) => {
        if (res.status === 200) {
          setJoined(res.data);
        }
      });
    }
   
  },[joined]);
  return (
    <CFooter position="sticky" className=" px-0 py-0">
      {/* <CCol xs={2} className="d-grid gap-2  p-0">
        <button className="bg-white btn d-md-block">
          <CIcon className="p-0 text-danger" size="lg" icon={cilHeart} />
        </button>
      </CCol> */}
      <CCol xs={12} className="d-grid gap-2  p-0">
        {joined ? (
          <button
            onClick={() => {
              unjoinTour(data).then((res) => {
                if (res.status === 200) {
                  setJoined(false);
                }

              });
            }}
            className="btn text-white btn btn-dark d-md-block"
          >
            عضوشده
            <BsCheck />
          </button>
        ) : (
          <button
            onClick={() => {
              joinTour(data).then((res) => {
                if (res.status === 200) {
                  setJoined(true);
                }
              });
            }}
            style={{ backgroundColor: "skyblue" }}
            className="btn text-white d-md-block"
          >
            پیوستن
          </button>
        )}
      </CCol>
    </CFooter>
  );
};
export default DetFooter;
