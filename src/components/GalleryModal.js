import React from 'react'
import {
    CCard,
    CCardImage,
    CCardText,
    CCarousel,
    CCarouselItem,
    CListGroup,
    CListGroupItem,
    CSpinner,
    CModal,
    CModalBody,
    CButton,
    CModalTitle,
  } from "@coreui/react";
export const GalleryModal = (data) => {
    const Height = window.innerHeight;
  return (
    <CModal
    fullscreen
    visible={data.data.visible}
    // onClose={() => setVisible(false)}
  >
    <CModalBody  className="bg- p-0">
      <div style={{marginBlock:220}} className="testimonial-group">
        <div className="row m-0">
          {data.data.thumbnail?? data.data.thumbnail.map((name, i) => (
            <img
              key={i}
              alt="d"

              style={{ width: "100%", height: Height / 2.75 }}
              className="d-block col px-0"
              src={`http://localhost:3333/uploads/thumbnails/${name}`}
            />
          ))}
        </div>
      </div>
    </CModalBody>
  </CModal>  )
}
