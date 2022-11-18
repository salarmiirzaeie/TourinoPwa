import { cilHeart } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CCol, CFooter } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { BsCheck, BsMarkdown } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { isJoined, joinTour } from "../services/dashboardServices";

const DetFooter = () => {
  const userId = useSelector((state) => state.profileState.userId);
  const params = useParams();
  const postId = params.id;
  const data = { postId: postId };
  const [joined, setJoined] = useState(false);
  useEffect(() => {
    isJoined({ postId: params.id }).then((res) => {
      if (res.status === 200) {
        setJoined(res.data);
      }
    });
  });
  return (
    <CFooter position="sticky" className="p-0 px-0">
      {/* <CCol xs={2} className="d-grid gap-2  p-0">
        <button className="bg-white btn d-md-block">
          <CIcon className="p-0 text-danger" size="lg" icon={cilHeart} />
        </button>
      </CCol> */}
      <CCol xs={12} className="d-grid gap-2  p-0">
        {joined ? (
          <button
            // onClick={() => {
            //   setJoined(true)
            //   joinTour(data).then((res) => {
            //     alert(res.data.message);
            //   });
            // }}
            className="btn text-white btn btn-dark d-md-block"
            disabled={true}
          >
            عضوشده
            <BsCheck/>
          </button>
        ) : (
          <button
            onClick={() => {
              setJoined(true)
              joinTour(data).then((res) => {
                // alert(res.data.message);
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
