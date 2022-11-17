
import {
 
  CNav,
  CNavItem,
  CNavLink,
  CRow,
} from "@coreui/react";
import React from "react";

const ExploreHeader = () => {
  return (
    <div className="">
      <CNav style={{borderBottomLeftRadius:15,borderBottomRightRadius:15,backgroundColor:'skyblue',zIndex:20 }} className="justify-content-center w-100 position-fixed">
        <div className="w-100 row" style={{justifyContent:'space-between'}}>
        <CNavItem  className="col-3">
          <CNavLink className="text-white" href="#">
            Active
          </CNavLink>
        </CNavItem>
        <CNavItem className="col-3">
          <CNavLink className="text-white" href="#">Link</CNavLink>
        </CNavItem>
        <CNavItem className="col-3">
          <CNavLink className="text-white" href="#">Link</CNavLink>
        </CNavItem>
        {/* <CNavItem className="col-3">
          <CNavLink className="text-white" href="#">
            Disabled
          </CNavLink>
        </CNavItem> */}
        </div>

      </CNav>
    </div>
  );
};
export default ExploreHeader;
