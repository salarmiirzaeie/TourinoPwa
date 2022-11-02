import { CCard } from "@coreui/react";
import React from "react";
import Header from "../../components/Header";
import Popular from "../../components/Popular";

const Index = () => {
  return (
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <Header />
      <div className="body flex-grow-1">
        <CCard className="bg-white px-1">
          <Popular />
        </CCard>
      </div>
    </div>
  );
};
export default Index;
