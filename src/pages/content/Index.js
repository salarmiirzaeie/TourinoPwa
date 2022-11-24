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
  CCardText,
  CCol,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Category } from "../../components/Category";
import Header from "../../components/Header";
import Popular from "../../components/Popular";
import PopularCompanies from "../../components/PopularCompanies";

const Index = () => {
  const Height = window.innerHeight;
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <CCard
        style={{
          height: Height / 4,
          backgroundColor: "skyblue",
          justifyContent: "center",
        }}
      >
        <CInputGroup
          style={{
            width: "85%",
            alignSelf: "center",
            borderBlockColor: "white",
          }}
          className="mt-3 shadow"
        >
          <CFormInput
            style={{ borderLeftColor: "white" }}
            placeholder="جستجو..."
            aria-label="Username"
            aria-describedby="basic-addon1"
            onFocus={() => navigate("/SearchPage/b")}
          />
          <CInputGroupText
            style={{ borderRightColor: "white" }}
            className="bg-white"
          >
            <CIcon icon={cilSearch} />
          </CInputGroupText>
        </CInputGroup>
      </CCard>
      <CCard
        style={{
          backgroundColor: "#ffffff",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginTop: -20,
        }}
      >
        <CCardBody>
          <Category />
        </CCardBody>
        <CCardBody className="pt-0 pb-4">
          <CCardText className="text-dark">محبوبترین تورها</CCardText>
          <Popular />
        </CCardBody>
        <CCardBody className="pt-0">
          <CCardText className="text-dark">محبوبترین کمپ ها</CCardText>

          <PopularCompanies />

         
        
        </CCardBody>
      </CCard>
    </div>
  );
};
export default Index;
