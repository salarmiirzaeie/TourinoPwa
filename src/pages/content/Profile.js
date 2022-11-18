import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCol,
  CForm,
  CFormInput,
  CFormTextarea,
  CPopover,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Nologin } from "../../components/Nologin";
import ProfileHeader from "../../components/ProfileHeader";
import { Formik } from "formik";
import { editProfile, userProfile } from "../../services/userServices";

const Profile = () => {
  const Height = window.innerHeight;
  const logedin = useSelector((state) => state.profileModeState);
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    userProfile().then((res) => {
      // console.log(res.data);
      if (res.status===200) {
        setProfile(res.data);

      }
    });
  });
  if (logedin) {
    return (
      <div>
        <ProfileHeader setedit={() => setEditMode(true)} />
        <CCard
          style={{ height: Height / 4, backgroundColor: "skyblue" }}
        ></CCard>
        {editMode ? (
          <Formik
            initialValues={{
              name: profile.name,
              email: profile.email,
              description: profile.description,
              // profilePhoto: file,
              phoneNumber: profile.phoneNumber,
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
              console.log(values)
              editProfile(values).then((res) => {
                setTimeout(async () => {
                  console.log(res.data)
                  if (res.status === 200) {
                    
                    navigate(0);
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
                <CCard
                  style={{
                    backgroundColor: "#ffffff",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    marginTop: -20,
                  }}
                >
                  <img
                    style={{
                      width: Height / 4,
                      height: Height / 4,
                      borderRadius: "50%",
                      marginTop: -Height / 9,
                      alignSelf: "center",
                    }}
                    alt="ProfilePhoto"
                    className="d-block"
                    src={`http://localhost:3333/uploads/${profile.profilePhotos}`}
                  />

                  <CCardBody>
                    <div
                      className="d-flex pb-3"
                      style={{ justifyContent: "space-between" }}
                    >
                      <CCardText className="my-1 mx-1">نام</CCardText>

                      <CFormInput
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                    </div>
                    <div
                      className="d-flex  py-3"
                      style={{ justifyContent: "space-between" }}
                    >
                      <CCardText className="my-1 mx-1">ایمیل</CCardText>

                      <CFormInput
                        type="text"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        // disabled={editMode}
                      />
                    </div>
                    <div
                      className="d-flex py-3"
                      style={{ justifyContent: "space-between" }}
                    >
                      <CCardText className="my-1 mx-1">تلفن </CCardText>

                      <CFormInput
                        type="text"
                        name="phoneNumber"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phoneNumber}
                        // disabled={editMode}
                      />
                    </div>
                    <div
                      className="d-flex  pt-3"
                      style={{ justifyContent: "space-between" }}
                    >
                      <CCardText className="my-1 mx-1">درباره</CCardText>

                      <CFormTextarea
                        style={{ height: "150px" }}
                        type="text"
                        name="description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                        // disabled={editMode}
                      />
                    </div>
                    <div
                      className="d-flex pt-2"
                      style={{ justifyContent: "space-between",
                      
                     }}
                    >
                      <CButton onClick={()=>setEditMode(false)} className="btn w-50 btn-danger">لغو</CButton>
                      <CButton onClick={handleSubmit} className="btn  btn-skyblue border-0  w-50">ثبت</CButton>

                    </div>
                  </CCardBody>
                </CCard>
              </CForm>
            )}
          </Formik>
        ) : (
          <CCard
            style={{
              backgroundColor: "#ffffff",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              marginTop: -20,
            }}
          >
            <img
              style={{
                width: Height / 4,
                height: Height / 4,
                borderRadius: "50%",
                marginTop: -Height / 9,
                alignSelf: "center",
              }}
              alt="ProfilePhoto"
              className="d-block"
              src={`http://localhost:3333/uploads/${profile.profilePhotos}`}
            />

            <CCardBody>
              <div
                className="d-flex  p-2"
                style={{ justifyContent: "space-between" }}
              >
                <CCardText className="text-dark">نام</CCardText>

                {profile.name}
                {/* <CCardText>نام</CCardText> */}
              </div>
              <hr />
              <div
                className="d-flex  p-2"
                style={{ justifyContent: "space-between" }}
              >
                <CCardText className="text-dark"> تلفن</CCardText>

                {profile.phoneNumber}
                {/* <CCardText>نام</CCardText> */}
              </div>{" "}
              <hr />
              <div
                className="d-flex  p-2"
                style={{ justifyContent: "space-between" }}
              >
                <CCardText className="text-dark">ایمیل</CCardText>

                {profile.email}
                {/* <CCardText>نام</CCardText> */}
              </div>
              <hr />
              <div className="p-2" style={{ height: "150px" }}>
                <CCardText className="text-dark">درباره</CCardText>
                <p >
                {profile.description}

                </p>

                {/* <CCardText>نام</CCardText> */}
              </div>
              <hr />
            </CCardBody>
          </CCard>
        )}
      </div>
    );
  } else {
    return <Nologin />;
  }
};
export default Profile;
