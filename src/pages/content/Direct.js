import {
  cilAirplaneMode,
  cilBusAlt,
  cilLibraryBuilding,
  cilSearch,
  cilTerrain,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCol,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Category } from "../../components/Category";
import DirectHeader from "../../components/DirectHeader";
import Header from "../../components/Header";
import { Nologin } from "../../components/Nologin";
import Popular from "../../components/Popular";
import PopularCompanies from "../../components/PopularCompanies";

const Direct = () => {
  const Height = window.innerHeight;
  const logedin = useSelector((state) => state.profileModeState);
  if (logedin) {
    return (
      <>
        <DirectHeader />
        <div style={{ paddingTop: 60 }}>
          <CCard>
            <div className="row w-100 ">
              <div className="col-9 pt-2 px-3"> cd</div>
              <div className="col-3  p-0">
                <img className="rounded-circle"
                style={{height:Height/9,width:Height/9,margin:5}}
                  src={`http://localhost:3333/uploads/thumbnails/0SJd1RMcX_7IUDGemhl_Beleave.jpg`}
                  alt="pf"
                />
              </div>
            </div>
          </CCard>
          <CCard>
            <div className="row w-100 ">
              <div className="col-9 pt-2 px-3"> cd</div>
              <div className="col-3  p-0">
                <img className="rounded-circle"
                style={{height:Height/9,width:Height/9,margin:5}}
                  src={`http://localhost:3333/uploads/thumbnails/0SJd1RMcX_7IUDGemhl_Beleave.jpg`}
                  alt="pf"
                />
              </div>
            </div>
          </CCard>  <CCard>
            <div className="row w-100 ">
              <div className="col-9 pt-2 px-3"> cd</div>
              <div className="col-3  p-0">
                <img className="rounded-circle"
                style={{height:Height/9,width:Height/9,margin:5}}
                  src={`http://localhost:3333/uploads/thumbnails/0SJd1RMcX_7IUDGemhl_Beleave.jpg`}
                  alt="pf"
                />
              </div>
            </div>
          </CCard>  <CCard>
            <div className="row w-100 ">
              <div className="col-9 pt-2 px-3"> cd</div>
              <div className="col-3  p-0">
                <img className="rounded-circle"
                style={{height:Height/9,width:Height/9,margin:5}}
                  src={`http://localhost:3333/uploads/thumbnails/0SJd1RMcX_7IUDGemhl_Beleave.jpg`}
                  alt="pf"
                />
              </div>
            </div>
          </CCard>  <CCard>
            <div className="row w-100 ">
              <div className="col-9 pt-2 px-3"> cd</div>
              <div className="col-3  p-0">
                <img className="rounded-circle"
                style={{height:Height/9,width:Height/9,margin:5}}
                  src={`http://localhost:3333/uploads/thumbnails/0SJd1RMcX_7IUDGemhl_Beleave.jpg`}
                  alt="pf"
                />
              </div>
            </div>
          </CCard>  <CCard>
            <div className="row w-100 ">
              <div className="col-9 pt-2 px-3"> cd</div>
              <div className="col-3  p-0">
                <img className="rounded-circle"
                style={{height:Height/9,width:Height/9,margin:5}}
                  src={`http://localhost:3333/uploads/thumbnails/0SJd1RMcX_7IUDGemhl_Beleave.jpg`}
                  alt="pf"
                />
              </div>
            </div>
          </CCard>
        </div>
      </>
    );
  } else return <Nologin />;
};
export default Direct;
