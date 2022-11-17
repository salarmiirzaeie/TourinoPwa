import { CButton, CCard, CCardBody, CCardText } from '@coreui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Nologin = () => {
    const Height = window.innerHeight;
    const navigate=useNavigate()

  return (
    <CCard
    style={{
      height: Height - 48,
      justifyContent: "center",
    }}
  >
    <CCard style={{ alignSelf: "center" }}>
      <CCardBody style={{textAlign:'center'}}>
        <CCardText>لطفاواردحساب کاربری خودشوید.</CCardText>
        <button onClick={()=>navigate('/Login')} className="btn btn-skyblue m-1">
          ورود
        </button>
        <CButton  onClick={()=>navigate('/Register')}  className="btn btn-success m-1">
          ثبت نام
        </CButton>
      
      </CCardBody>
    </CCard>
    
  </CCard>  )
}
