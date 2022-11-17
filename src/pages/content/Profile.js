import { CButton, CCard, CCardBody, CCardHeader, CCardText, CCol, CPopover } from "@coreui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Nologin } from "../../components/Nologin";
import ProfileHeader from "../../components/ProfileHeader";

const Profile = () => {
  const Height = window.innerHeight;
  const logedin = useSelector((state) => state.profileModeState);
  const profile = useSelector((state) => state.profileState);
  const navigate=useNavigate()
  if (logedin) {
    return (
      <div>
        <ProfileHeader />
        <CCard
          style={{ height: Height / 4, backgroundColor: "skyblue" }}
        ></CCard>
        <CCard
          style={{
            height: Height / 1.38,
            backgroundColor: "#ffffff",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            marginTop: -20,
          }}
        >
          <img
            style={{
              width: Height / 4,
              height: Height / 4,
              borderRadius: "50%",
              marginTop: -Height / 9,
              alignSelf: "center",
            }}
            alt="ProfilePhoto"
            className="d-block"
            src={`http://localhost:3333/uploads/${profile.profilePhoto}`}
          />

          <CCardBody>
            {profile.name}
            <hr />
            {profile.email}
            <hr />
            xx
            <hr />
            xx
            <hr />
          </CCardBody>
        </CCard>
        
              
      </div>
    );
  } else {
    return (
      <Nologin/>
    );
  }
};
export default Profile;
