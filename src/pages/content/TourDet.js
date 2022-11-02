import React from "react";
import { useParams } from "react-router-dom";

const TourDet = () => {
  const params = useParams();

  console.log(params.id);
  return <div>TourDet</div>;
};
export default TourDet;
