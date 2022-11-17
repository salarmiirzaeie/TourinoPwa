import { CCard, CCardText } from '@coreui/react'
import React from 'react'
import DefaultHeader from '../../components/DefaultHeader'

 const Setting = () => {
  const Height = window.innerHeight;

  return (
    <div>
      <DefaultHeader name={'Setting'}/>
      <CCard>
        <CCardText>cc</CCardText>
        <hr/>
        <CCardText>cc</CCardText>
        <hr/>
        <CCardText>cc</CCardText>

        
      </CCard>
    </div>
  )
}
export default Setting