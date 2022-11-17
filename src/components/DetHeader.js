import {
  cilBackspace,
  cilListFilter,
  cilSend,
  cilArrowRight,
  cilBookmark,
  cilOptions,
  cilArrowLeft,
  cil4k,
  cilSave,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CCardHeader,
  CHeader,
  CHeaderText,
  CHeaderToggler,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { isSaved, saveTour } from "../services/dashboardServices";

const DetHeader = (pos) => {
  const navigate = useNavigate();
  const params = useParams();
  const[saved,setsaved]=useState(false)
  useEffect(() => {
    isSaved({postId:params.id}).then((res) => {
      setsaved(res.data)
    });
  });
  return (
    <CHeader
      className={
        pos.pos.mode
          ? "bg-transparent d-flex p-2 text-white w-100 position-fixed"
          : "bg-white text-dark d-flex p-2 w-100 position-fixed"
      }
      style={{
        justifyContent: "space-between",
        zIndex: 10,
        borderBottomColor: "transparent",
      }}
      // position={pos.pos}
    >
      <div>
        <CIcon
          onClick={() => {
            saveTour({ postId: params.id }).then((res) => {
              alert(res.data.message);
            });
          }}
          size="xl"
          className={"bg-warning"}
          icon={saved?cilSave:cilBookmark}
        />
        <CIcon size="xl" icon={cilOptions} />
      </div>
      {!pos.pos.mode ? <CHeaderText>{pos.pos.title}</CHeaderText> : ""}
      <CIcon onClick={() => navigate(-1)} size="xl" icon={cilArrowLeft} />
    </CHeader>
  );
};
export default DetHeader;
