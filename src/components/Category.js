import { cilAirplaneMode, cilBusAlt, cilLibraryBuilding, cilTerrain } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCol, CRow } from '@coreui/react'
import React from 'react'

export const Category = () => {
  return (
    <CRow className="text-white ">
    <CCol>
      <div style={{ borderRadius: 7 }} className="bg-primary p-2">
        <CIcon className="w-100" icon={cilAirplaneMode} size="xxl" />
      </div>
    </CCol>
    <CCol>
      <div style={{ borderRadius: 7 }} className="bg-info p-2">
        <CIcon
          className="w-100"
          style={{ justifyContent: "center" }}
          icon={cilLibraryBuilding}
          size="xxl"
        />
      </div>
    </CCol>
    <CCol>
      <div style={{ borderRadius: 7 }} className="bg-warning p-2">
        <CIcon className="w-100" icon={cilBusAlt} size="xxl" />
      </div>
    </CCol>
    <CCol>
      <div style={{ borderRadius: 7 }} className="bg-danger p-2">
        <CIcon className="w-100" icon={cilTerrain} size="xxl" />
      </div>
    </CCol>
  </CRow>  )
}
