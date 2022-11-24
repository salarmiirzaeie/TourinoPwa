import { CCardImage } from "@coreui/react";
import React from "react";

const Popular = () => {
  const Height = window.innerHeight;
  const width = window.innerWidth;

  return (
    <div className="testimonial-group">
      <div className="row">
        <div
          className="col-xs-4"
          style={{ height: Height / 3.5, width: width / 1.8 }}
        >

          <CCardImage 
            className="d-block h-100 "
            src={`http://localhost:3333/uploads/thumbnails/0SJd1RMcX_7IUDGemhl_Beleave.jpg`}
          />
        </div>
        <div
          className="col-xs-4"
          style={{ height: Height / 3.5, width: width / 1.8 }}
        >
          <CCardImage
            className="d-block h-100"
            src={`http://localhost:3333/uploads/thumbnails/0SJd1RMcX_7IUDGemhl_Beleave.jpg`}
          />
        </div>
        <div
          className="col-xs-4"
          style={{ height: Height / 3.5, width: width / 1.8 }}
        >
          <CCardImage
            className="d-block h-100"
            src={`http://localhost:3333/uploads/thumbnails/0SJd1RMcX_7IUDGemhl_Beleave.jpg`}
          />
        </div>
        <div
          className="col-xs-4"
          style={{ height: Height / 3.5, width: width / 1.8 }}
        >
          <CCardImage
            className="d-block h-100"
            src={`http://localhost:3333/uploads/thumbnails/0SJd1RMcX_7IUDGemhl_Beleave.jpg`}
          />
        </div>
      </div>
    </div>
  );
};
export default Popular;
