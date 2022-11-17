import {
  CButton,
  CCard,
  CCardBody,
  CCardText,
  CForm,
  CFormInput,
} from "@coreui/react";
import { Formik } from "formik";

import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginFooter } from "../components/LoginFooter";
import LoginHeader from "../components/LoginHeader";
import { register } from "../services/userServices";
const Register = () => {
  const Height = window.innerHeight;
  const navigate = useNavigate();
  return (
    <>
      <LoginHeader />
      <CCard
        style={{
          height: Height - 50,
          justifyContent: "center",
        }}
      >
        <div style={{ alignSelf: "center", width: "80%" }}>
          {/* <CCardText style={{fontSize:"40px"}} className='text-center'>Tourino</CCardText> */}
          <Formik
            initialValues={{
              email: "",
              password: "",
              name: "",
              confirmPassword: "",
              type: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                values.type = "tourist";
                register(values).then((res) => {
                  if (res.status === 201) {
                    navigate("/Login");
                  } else {
                    alert("خطا", res.data.message, "error");
                  }
                });

                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,

              errors,

              touched,

              handleChange,

              handleBlur,

              handleSubmit,

              isSubmitting,

              /* and other goodies */
            }) => (
              <CForm>
                <CFormInput
                  className="mb-3"
                  placeholder="نام"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="name"
                  value={values.name}
                  autoComplete="name"
                />
                <CFormInput
                  className="mb-3"
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="ایمیل"
                  autoComplete="mail"
                />
                <CFormInput
                  className="mb-3"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  type="password"
                  id="password"
                  placeholder="رمزعبور"
                  autoComplete="current-password"
                  name="password"
                />
                <CFormInput
                  className="mb-3"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="confirmPassword"
                  type="password"
                  placeholder="تکراررمزعبور"
                  autoComplete="new-password"
                  value={values.confirmPassword}
                />
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn text-white btn-skyblue w-100"
                >
                  ثبت نام
                </button>
              </CForm>
            )}
          </Formik>
        </div>
      </CCard>
      <LoginFooter mode="Register" />
    </>
  );
};
export default Register;
