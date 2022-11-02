import React from 'react'
import {  CFooter, CNav, CNavItem, CNavLink } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilHome, cilListRich, cilUser } from '@coreui/icons'
import { useLocation } from 'react-router-dom'

const AppBar = () => {
  const location = useLocation()
  return (
    <CFooter position="sticky" className="d-md-none p-0 rounded-3 bg-white">
      <CNav variant="pills" className="w-100" layout="fill">
        <CNavItem>
          <CNavLink active={location.pathname==='/profile'?true:false} href='/#/profile' className="text-center">
          <CIcon icon={cilUser} />
          </CNavLink>
        </CNavItem>
        <CNavItem className="">
          <CNavLink active={location.pathname==='/Explore'?true:false} href='/#/Explore' className="text-center">
            <CIcon icon={cilListRich} />
          </CNavLink>
        </CNavItem>
        
        <CNavItem>
        <CNavLink active={location.pathname==='/Index'?true:false}   href='/#/Index' className="text-center rounded-3">
            <CIcon icon={cilHome} />

          </CNavLink>
        </CNavItem>
      </CNav>
    </CFooter>
  )
}

export default React.memo(AppBar)
