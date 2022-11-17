import { CSpinner } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCampTours } from '../services/postServices'
import { TourCard } from './TourCard'

export const CampTours = () => {
    const params=useParams()
    const[tours,settours]=useState([])
    useEffect(()=>{
        getCampTours(params.id).then((res)=>{
            if (res.status===200) {
                settours(res.data)
            }
        })
    })
   
  return (
    <>
    {tours.length!==0?tours.map((post,i)=>(
<TourCard key={i} data={post}/>

    )):<CSpinner/>}

    </>
  )
}
