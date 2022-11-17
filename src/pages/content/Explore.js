import { CCol } from "@coreui/react";
import React, { useEffect, useState } from "react";
import ExploreHeader from "../../components/ExploreHeader";
import { TourCard } from "../../components/TourCard";
import { getIndex } from "../../services/postServices";

const Explore = () => {
  const [posts, setpots] = useState([]);
  useEffect(() => {
    getIndex().then((res) => {
      setpots(res.data.posts);
    });
  }, []);
  return (
    <div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <ExploreHeader />
        <div style={{paddingTop:40}} className="body flex-grow-1">
          <CCol>
            {posts.map((post, i) => (
              <TourCard key={i} data={post} />
            ))}
          </CCol>
        </div>
      </div>
    </div>
  );
};
export default Explore;
