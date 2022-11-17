import { cilArrowBottom, cilArrowCircleBottom, cilSend } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CHeader, CHeaderText } from "@coreui/react";
import React from "react";

const LoginHeader = () => {
  return (
    <CHeader
      className={" text-white d-flex   w-100 position-fixed"}
      style={{
        justifyContent: "center",
        zIndex: 10,
      }}
      // position={pos.pos}
    >
      <CHeaderText onClick={()=>console.log("first")} className="text-dark"> <CIcon size="sm" icon={cilArrowBottom}/>فارسی</CHeaderText>
    </CHeader>
  );
};
export default LoginHeader;
