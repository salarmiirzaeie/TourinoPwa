import { CNav, CNavItem, CNavLink, CRow } from "@coreui/react";
import React, { useState } from "react";

const ExploreHeader = ({ settab }) => {
  const [tab, stab] = useState(1);

  return (
    <div className="">
      <CNav
        style={{
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          backgroundColor: "skyblue",
          zIndex: 20,
        }}
        className="justify-content-center w-100 position-fixed"
      >
        <div className="w-100 row">
          <CNavItem  className={ tab === 1?"col-4 px-0":"col-4"}>
            <CNavLink
              onClick={() => {
                settab(1);
                stab(1);
              }}
              style={{
                backgroundColor: tab === 1 ? "white" : "skyblue",
              }}
              className={
                tab === 1 ? "text-center text-dark rounded-2  px-0" : "text-center  text-white  px-0"
              }
            >
              جدیدترین ها
            </CNavLink>
          </CNavItem>
          <CNavItem className="col-4 px-0">
            <CNavLink
              onClick={() => {
                settab(2);
                stab(2);
              }}
              style={{
                backgroundColor: tab === 2 ? "white" : "skyblue",
              }}
              className={
                tab === 2 ? "text-center text-dark rounded-2 px-0" : "text-center  text-white  px-0"
              }            >
              ارزان ترین ها
            </CNavLink>
          </CNavItem>
          <CNavItem className={ tab === 3?"col-4 px-0":"col-4"}>
            <CNavLink
              onClick={() => {
                settab(3);
                stab(3)
              }}
              style={{
                backgroundColor: tab === 3 ? "white" : "skyblue",
              }}
              className={
                tab ===3 ? "text-center text-dark rounded-2 px-0" : "text-center  text-white  px-0"
              }            >
              محبوب ترین ها
            </CNavLink>
          </CNavItem>
        </div>
      </CNav>
    </div>
  );
};
export default ExploreHeader;
