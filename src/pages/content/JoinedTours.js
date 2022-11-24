import { CSpinner } from "@coreui/react";
import React, { useEffect, useState } from "react";
import DefaultHeader from "../../components/DefaultHeader";
import { TourCard } from "../../components/TourCard";

import { joineds } from "../../services/dashboardServices";

const JoinedTours = () => {
  const [posts, setposts] = useState([])
  useEffect(() => {
    joineds().then((res) => {
        if (res.status===200) {
      setposts(res.data);

        }
    });
  }, []);
  return (
    <>
      <DefaultHeader name=" تورهای من" />
      <div style={{ paddingTop: 65 }}>
        {posts.length !== 0 ? (
          posts.map((post, i) => <TourCard data={post} key={i} />)
        ) : (
          <div className="h-100 w-100">
            <p style={{ justifyContent: "center", textAlign: "center" }}>
              No Data
            </p>
          </div>
        )}
      </div>
    </>
  );
};
export default JoinedTours;
