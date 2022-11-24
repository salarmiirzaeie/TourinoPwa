import {
  cilAirplaneMode,
  cilBusAlt,
  cilLibraryBuilding,
  cilSearch,
  cilTerrain,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCol,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CModal,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CampGallery } from "../../components/CampGallery";
import { CampTours } from "../../components/CampTours";
import DefaultHeader from "../../components/DefaultHeader";
import { getUser } from "../../services/postServices";

const CampProfile = () => {
  const params = useParams();
  const Height = window.innerHeight;
  const [vis1, setvis1] = useState(true);
  const [pos, setposition] = useState(false);
  const [camp, setcamp] = useState({});
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    getUser(params.id).then((res) => {
      setcamp(res.data);
    });
  }, []);
  const listenScrollEvent = () => {
    if (window.scrollY <= Height / 5) {
      setposition(false);
    } else if (window.scrollY >= Height / 5) {
      setposition(true);
    }
  };
  return (
    <div>
      <DefaultHeader name={pos ? camp.name : ""} />
      <CCard
        style={{
          height: Height / 3,
          backgroundColor: "skyblue",
          justifyContent: "center",
          borderBottom: 0,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
        }}
      >
        <div
          className="bg-white row rounded-2"
          style={{
            width: "90%",
            alignSelf: "center",
            marginTop: "30px",
            height: Height / 5.5,
          }}
        >
          <div className="col-7 bg-white rounded-2">s</div>
          <div
            style={{ marginTop: "-10px", marginBottom: "10px" }}
            className="col-5 p-0"
          >
            <img
              className="w-100 h-100 rounded-2"
              alt="pf"
              src={`http://localhost:3333/uploads/${camp.photo}`}
            />
          </div>
        </div>
        {/* <CModal visible size="lg">
<img               src={`http://localhost:3333/uploads/${camp.photo}`}
 alt="d"/>
      </CModal> */}
      </CCard>
      <CNav
        variant="pills"
        style={{
          backgroundColor: "skyblue",
          justifyContent: "space-between",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          marginTop: pos ? -Height / 4 : 0,
          position: pos ? "fixed" : "initial",
          zIndex: 5,
        }}
        className={"w-100"}
        layout="fill"
      >
        <CNavItem>
          <CNavLink
            onClick={() => setvis1(true)}
            style={{
              backgroundColor: vis1 ? "white" : "skyblue",
            }}
            className={
              vis1 ? "text-center text-dark " : "text-center text-white"
            }
          >
            x
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            onClick={() => setvis1(false)}
            style={{
              backgroundColor: !vis1 ? "white" : "skyblue",
            }}
            className={
              !vis1 ? "text-center text-dark" : "text-center  text-white"
            }
          >
            x
          </CNavLink>
        </CNavItem>
      </CNav>

      <div
        // style={{ height: "900px" }}
        className="tab-content w-100 mt-1 bg-white"
        id="pills-tabContent"
      >
        <div
          className={vis1 ? "tab-pane fade show active" : "tab-pane fade"}
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          style={{ alignItems: "center" }}
        >
          <CampGallery />
        </div>
        <div
          className={!vis1 ? "tab-pane fade show active" : "tab-pane fade"}
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <CampTours />
        </div>
      </div>
    </div>
  );
};
export default CampProfile;
