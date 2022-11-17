import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CSpinner } from "@coreui/react";
import routes from "../routes";
import Index from "../pages/content/Index";
const AppContent = () => {
  return (
    <div>
      <Suspense fallback={<CSpinner  color="success" />}>
        <Routes>
          {routes.map((route, idx) => {
                  return (
                    route.element && (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        element={<route.element />}
                      />
                    )
                  )
                })}

          <Route path="*" element={<Index/>} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default React.memo(AppContent);
