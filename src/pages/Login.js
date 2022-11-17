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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginFooter } from "../components/LoginFooter";
import LoginHeader from "../components/LoginHeader";
import { login } from "../services/userServices";
import { profile } from "../state-management/action/profileAction";
import { profileMode } from "../state-management/action/profileModeAction";
const Login = () => {
  const Height = window.innerHeight;
  const dispatch = useDispatch();
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
          <Formik
            initialValues={{ email: "", password: "" }}
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
              login(values).then((res) => {
                setTimeout(async () => {
                  if (res.status === 207) {
                    await localStorage.setItem("token", res.data.token);
                    await dispatch(profileMode(true));
                    await dispatch(profile(res.data));
                    navigate("/Profile");
                  } else {
                    alert("خطا", res.data.message, "error");
                  }
                  setSubmitting(false);
                }, 400);
              });
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
                  type="email"
                  name="email"
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
                  placeholder="رمزعبور"
                  autoComplete="current-password"
                  name="password"
                />
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="btn text-white btn-skyblue w-100"
                >
                  ورود
                </button>
              </CForm>
            )}
          </Formik>
        </div>
      </CCard>
      <LoginFooter mode="Login" />
    </>
  );
};
export default Login;
