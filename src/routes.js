import React from 'react'


const Index=React.lazy(()=>import('./pages/content/Index'))
const Profile=React.lazy(()=>import('./pages/content/Profile'))
const Categories=React.lazy(()=>import('./pages/content/Categories'))
const Explore=React.lazy(()=>import('./pages/content/Explore'))
const TourDet=React.lazy(()=>import('./pages/content/TourDet'))


const routes = [
   { path: '/', exact: true, name: 'Home' },
   { path: '/Index',exact: true, name: 'Index', element: Index },
   { path: '/profile', exact: true,name: 'profile', element: Profile },
   { path: '/Categories', exact: true,name: 'Categories', element: Categories },
   { path: '/Explore', exact: true,name: 'Explore', element: Explore },
   { path: '/TourDet/:id', exact: true,name: 'TourDet', element: TourDet },


]

export default routes
