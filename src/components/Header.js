import { cilAlarm, cilBadge, cilBell, cilSend } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CHeader, CHeaderText } from "@coreui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate()
  return (
    <CHeader
      className={" text-white d-flex px-3   w-100 position-fixed"}
      style={{
        justifyContent: "space-between",
        zIndex: 10,
        borderBottomColor: "transparent",
        backgroundColor:'skyblue'
      }}
      // position={pos.pos}
    >
      <CIcon onClick={()=>navigate('/Direct')} size="xl" icon={cilSend} />
      <CHeaderText className="text-white">Tourino</CHeaderText>
    </CHeader>
  );
};
export default Header;
