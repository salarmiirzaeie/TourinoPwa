import { CCol } from "@coreui/react";
import React, { useEffect, useState } from "react";
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
    <CCol>
      {posts.map((post,i) => (
        <TourCard key={i} data={post} />
      ))}
    </CCol>
  );
};
export default Explore;
