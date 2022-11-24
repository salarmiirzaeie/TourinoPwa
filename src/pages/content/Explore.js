import { CCol } from "@coreui/react";
import React, { useEffect, useState } from "react";
import ExploreHeader from "../../components/ExploreHeader";
import { TourCard } from "../../components/TourCard";
import { getIndex } from "../../services/postServices";

const Explore = () => {
  const [posts, setpots] = useState([]);
  const sorting = (res) => {
    const date =(a)=> new Date(a);

    if (res===1) {
      posts.sort((a, b) => date(a.createdAt) - date(b.createdAt));

    }
    if (res===2) {
      posts.sort((a, b) => a.price - b.price);

    }if (res===3) {
      posts.sort((a, b) => b.capacity - a.capacity);

    }
  };
  const [tab, settab] = useState(1);
  useEffect(() => {
    getIndex().then((res) => {
      setpots(res.data.posts);
    });
  }, []);
  return (
    <div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <ExploreHeader
          settab={(res) => {
            settab(res);
            sorting(res)
          }}
        />
        <div style={{ paddingTop: 40 }} className="body flex-grow-1">
          <div
            // style={{ height: "900px" }}
            className="tab-content w-100 mt-1 bg-white"
            id="pills-tabContent"
          >
            <div
              className={
                tab === 1 ? "tab-pane fade show active" : "tab-pane fade"
              }
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              style={{ alignItems: "center" }}
            >
              <CCol>
                {posts.map((post, i) => (
                  <TourCard key={i} data={post} />
                ))}
              </CCol>
            </div>
            <div
              className={
                tab === 2 ? "tab-pane fade show active" : "tab-pane fade"
              }
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <CCol>
                {posts.map((post, i) => (
                  <TourCard key={i} data={post} />
                ))}
              </CCol>
            </div>
            <div
              className={
                tab === 3 ? "tab-pane fade show active" : "tab-pane fade"
              }
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <CCol>
                {posts.map((post, i) => (
                  <TourCard key={i} data={post} />
                ))}
              </CCol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Explore;
