import { CCardImage, CRow, CSpinner } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPopularCamps } from "../services/postServices";

const PopularCompanies = () => {
  const Height = window.innerHeight;
  const width = window.innerWidth;
  const navigate = useNavigate();
  const [camps, setcamps] = useState([]);
  useEffect(() => {
    getPopularCamps().then((res) => {
      setcamps(res.data);
    });
  });

  return (
    <div className="testimonial-group">
      <div style={{height:Height/8}} className="row">
        {camps.length !== 0 ? (
          camps.map((post, i) => (
            <div               key={i}
            className="col-3  mx-1">
            <img 
              onClick={() => navigate(`/CampProfile/${post.id}`)}
              alt="s"
              style={{
               height:Height/9,
               width:Height/9,
                borderRadius: "50%",

                
              }}
              src={`http://localhost:3333/uploads/${post.photo}`}
            />
            </div>
          ))
        ) : (
          <CSpinner />
        )}
        
      </div>
    </div>
  );
};
export default PopularCompanies;
