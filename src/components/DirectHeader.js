import { cilArrowLeft, cilArrowRight, cilPlus, cilSend } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CHeader, CHeaderText } from "@coreui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const DirectHeader = () => {
  const navigate=useNavigate()
  return (
    <CHeader
      className={" text-white d-flex px-2   w-100 position-fixed"}
      style={{
        justifyContent: "space-between",
        zIndex: 10,
        borderBottomColor: "transparent",
        backgroundColor:'skyblue'
      }}
      // position={pos.pos}
    >
      <CIcon onClick={()=>navigate('/')} size="xl" icon={cilPlus} />
      <CIcon onClick={()=>navigate('-1')} size="xl" icon={cilArrowLeft} />


    </CHeader>
  );
};
export default DirectHeader;
