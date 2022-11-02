import { cilSend } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CHeader,
  CHeaderText,
  CHeaderToggler,
  
} from "@coreui/react";
import React from "react";

const Header = () => {
  return (
    <CHeader className="bg-info" position="sticky">
      <CHeaderToggler>
        <CIcon className="text-white" size="xxl" icon={cilSend}/>
      </CHeaderToggler>
      <CHeaderText className="text-white">Tourino</CHeaderText>
    </CHeader>
  );
};
export default Header;
