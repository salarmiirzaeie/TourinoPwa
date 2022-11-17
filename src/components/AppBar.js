import React from "react";
import { CFooter, CNav, CNavItem, CNavLink } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilCompass, cilHome, cilListRich, cilUser } from "@coreui/icons";
import { useLocation } from "react-router-dom";

const AppBar = () => {
  const location = useLocation();
  return (
    <CFooter position="sticky" className="d-md-none p-0 rounded-3 bg-white">
      <CNav variant="pills" className="w-100" layout="fill">
        <CNavItem>
        <CNavLink
            style={{
              backgroundColor:
                location.pathname === "/Profile" ? "skyblue" : "white",
            }}
            href="/#/Profile"
            className={location.pathname === "/Profile" ?"text-center text-white":"text-center text-dark"}
          >
            <CIcon size="lg" icon={cilUser} />
          </CNavLink>
          
        </CNavItem>
        <CNavItem className="">
          <CNavLink
            style={{
              backgroundColor:
                location.pathname === "/Explore" ? "skyblue" : "white",
            }}
            href="/#/Explore"
            className={location.pathname === "/Explore" ?"text-center text-white":"text-center text-dark"}
          >
            <CIcon size="lg" icon={cilCompass} />
          </CNavLink>
        </CNavItem>

        <CNavItem>
        <CNavLink
            style={{
              backgroundColor:
                location.pathname === "/Index" ? "skyblue" : "white",
            }}
            href="/#/Index"
            className={location.pathname === "/Index" ?"text-center text-white":"text-center text-dark"}
          >
            <CIcon size="lg" icon={cilHome} />
          </CNavLink>
       
        </CNavItem>
      </CNav>
    </CFooter>
  );
};

export default React.memo(AppBar);
