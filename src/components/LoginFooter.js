import { CCard, CCardBody, CCardText } from "@coreui/react";
import React from "react";

export const LoginFooter = (mode) => {
  return (
    <CCard>
      <CCardBody>
        {mode.mode === "Login" ? (
          <CCardText className="text-center text-dark">
            حساب ندارید؟
            <a className="text-black text-decoration-none" href="/#/Register">
              ثبت نام .
            </a>
          </CCardText>
        ) : (
          <CCardText className="text-center text-dark">
            حساب دارید؟
            <a className="text-black text-decoration-none" href="/#/Login">
              ورود .
            </a>
          </CCardText>
        )}
      </CCardBody>
    </CCard>
  );
};
