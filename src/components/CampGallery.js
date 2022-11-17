import { CCol, CRow } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCampGallery } from "../services/postServices";

export const CampGallery = () => {
    const width = window.innerWidth;

  const params = useParams();
  const [photos, setphotos] = useState([]);
  useEffect(() => {
    getCampGallery(params.id).then((res) => {
      if (res.status === 200) {
        setphotos(res.data);
      }
    });
  });
  return (
    <div className="row w-100 m-0">
      {photos.map((photo, i) => (
        <div style={{height:width/3}} className="p-0 col-4" sty xs={4}>
          <img
            alt="5"
            src={`http://localhost:3333/uploads/thumbnails/${photo.name}`}
            className="h-100 w-100"
          />
        </div>
      ))}
    </div>
  );
};
