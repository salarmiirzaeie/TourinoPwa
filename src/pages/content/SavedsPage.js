import { CSpinner } from '@coreui/react';
import React, { useEffect, useState } from 'react'
import DefaultHeader from '../../components/DefaultHeader'
import {TourCard} from '../../components/TourCard'

import { saveds } from '../../services/dashboardServices';

 const SavedsPage = () => {
  const[posts,setposts]=useState([])
    useEffect(() => {
        saveds().then((res) => {
          setposts(res.data);
        });
      }, []);
  return (
    <>
    <DefaultHeader name="ذخیره شده ها"/>
    <div style={{paddingTop:65}}>
        {posts.length!==0?posts.map((post,i)=>(
          <TourCard data={post} key={i}/>
          

        )):<CSpinner/>}

    </div>
    </>
  )
}
export default SavedsPage