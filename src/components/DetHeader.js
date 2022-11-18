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
  cilShare,
  cilShareAll,
  cilShareAlt,
} from "@coreui/icons";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

import CIcon from "@coreui/icons-react";
import {
  CCardHeader,
  CHeader,
  CHeaderText,
  CHeaderToggler,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { isSaved, saveTour, unSaveTour } from "../services/dashboardServices";

const DetHeader = (pos) => {
  const navigate = useNavigate();
  const params = useParams();
  const [saved, setsaved] = useState(false);
  useEffect(() => {
    isSaved({ postId: params.id }).then((res) => {
      setsaved(res.data);
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
      <CIcon size="xl" icon={cilShareAlt} />

        {saved ? (
          <BsBookmarkFill
            onClick={() => {

              unSaveTour({ postId: params.id }).then((res) => {
              });
              setsaved(false);

            }}
            size="25px"
            className="mb-3"
          />
        ) : (
          <BsBookmark
            onClick={() => {

              saveTour({ postId: params.id }).then((res) => {
              });
              setsaved(true);

            }}
            className="mb-3"
            size="25px"
          />
        )}

      </div>
      {!pos.pos.mode ? <CHeaderText>{pos.pos.title}</CHeaderText> : ""}
      <CIcon onClick={() => navigate(-1)} size="xl" icon={cilArrowLeft} />
    </CHeader>
  );
};
export default DetHeader;
