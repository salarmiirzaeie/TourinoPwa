import {
  cilAirplaneMode,
  cilBusAlt,
  cilLibraryBuilding,
  cilTerrain,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CCol, CRow } from "@coreui/react";
import React from "react";
import desert from "../assets/images/desert.jpg";
import jungle from "../assets/images/jungle.jpg";
import sea from "../assets/images/sea.jpg";
import offroad from "../assets/images/offroad.jpg";
import mountain from "../assets/images/mountain.jpg";
import historical from "../assets/images/historical.jpg";
import { useNavigate } from "react-router-dom";

export const Category = () => {
  const Height = window.innerHeight;
const navigate=useNavigate()
  return (
    <>
      <CRow className="text-white ">
        <CCol>
          <img onClick={()=>navigate("/SearchPage/desert")}
            className="w-100   rounded-3"
            style={{ height: Height / 10 }}
            alt="d"
            src={desert}
          />
          <p className="text-white rounded-3 m-0 text-center bg-dark shadow">
            کویر گردی
          </p>
        </CCol>

        <CCol>
          <img onClick={()=>navigate("/SearchPage/sea")}
            className="w-100 rounded-3 "
            style={{ height: Height / 10 }}
            alt="d"
            src={sea}
          />
          <p className="text-white rounded-3 text-center m-0 bg-dark shadow">دریا</p>
        </CCol>
        <CCol>
          <img onClick={()=>navigate("/SearchPage/forest")}
            className="w-100 rounded-3 "
            style={{ height: Height / 10 }}
            alt="d"
            src={jungle}
          />
          <p className="text-white rounded-3 m-0 text-center shadow bg-dark">
            طبیعت گردی
          </p>
        </CCol>
      </CRow>
      <CRow className="text-white mt-3">
        <CCol>
          <img onClick={()=>navigate("/SearchPage/offroad")}
            className="w-100 rounded-3 "
            style={{ height: Height / 10 }}
            alt="d"
            src={offroad}
          />
          <p className="text-white rounded-3 m-0 text-center shadow bg-dark">
            آفرودسواران
          </p>
        </CCol>
        <CCol>
          <img onClick={()=>navigate("/SearchPage/historical")}
            className="w-100 rounded-3 "
            style={{ height: Height / 10 }}
            alt="d"
            src={historical}
          />
          <p className="text-white rounded-3 text-center shadow bg-dark">
            اماکن تاریخی
          </p>
        </CCol>
        <CCol>
          <img onClick={()=>navigate("/SearchPage/mountain")}
            className="w-100 rounded-3 "
            style={{ height: Height / 10 }}
            alt="d"
            src={mountain}
          />
          <p className="text-white rounded-3 shadow text-center m-0 bg-dark">
            کوهنوردی
          </p>
        </CCol>
      </CRow>
    </>
  );
};
