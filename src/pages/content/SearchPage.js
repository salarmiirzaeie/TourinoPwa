import { cilArrowRight } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CFormInput, CInputGroup, CInputGroupText } from '@coreui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

 const SearchPage = () => {
    const navigate=useNavigate()

  return (
    <div>
        <CInputGroup
          style={{
            width: "100%",
            alignSelf: "center",
            borderBlockColor: "white",
          }}
          className="mt-3"
        >
            <CInputGroupText
            onClick={()=>navigate(-1)}
            style={{ borderRightColor: "white" }}
            className="bg-white"
          >
            <CIcon icon={cilArrowRight} />
          </CInputGroupText>
          <CFormInput
            style={{ borderLeftColor: "white" }}
            placeholder="جستجو..."
            aria-label="Username"
            aria-describedby="basic-addon1"
            autoFocus={true}

          />
          
        </CInputGroup>
    </div>
  )
}
export default SearchPage