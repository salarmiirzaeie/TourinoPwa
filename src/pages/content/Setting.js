import { CButton, CCard, CCardText, CListGroup, CListGroupItem } from "@coreui/react";
import React, { useState } from "react";
import DefaultHeader from "../../components/DefaultHeader";

const Setting = () => {
  const Height = window.innerHeight;

  return (
    <div>
      <DefaultHeader name={"Setting"} />
      <div style={{ paddingTop: 65 }}>
        <CListGroup>
          <CListGroupItem className="justify-content-between d-flex">
            <p className="m-0">ss</p>
            <p className="m-0">dd</p>
          </CListGroupItem>
          <CListGroupItem className="justify-content-between d-flex">
            <p className="m-0">ss</p>
            <p className="m-0">dd</p>
          </CListGroupItem> <CListGroupItem className="justify-content-between d-flex">
            <p className="m-0">ss</p>
            <p className="m-0">dd</p>
          </CListGroupItem>
          <CListGroupItem className="justify-content-between d-flex">
            <p className="m-0">ss</p>
            <p className="m-0">dd</p>
          </CListGroupItem> <CListGroupItem className="justify-content-between d-flex">
            <p className="m-0">ss</p>
            <p className="m-0">dd</p>
          </CListGroupItem> <CListGroupItem className="justify-content-between d-flex">
            <p className="m-0">ss</p>
            <p className="m-0">dd</p>
          </CListGroupItem>
        </CListGroup>
       
      </div>
    </div>
  );
};
export default Setting;
