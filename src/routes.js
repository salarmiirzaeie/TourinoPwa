import React from 'react'


const Index=React.lazy(()=>import('./pages/content/Index'))
const Profile=React.lazy(()=>import('./pages/content/Profile'))
const Categories=React.lazy(()=>import('./pages/content/Categories'))
const Explore=React.lazy(()=>import('./pages/content/Explore'))
const SearchPage=React.lazy(()=>import('./pages/content/SearchPage'))
const Setting=React.lazy(()=>import('./pages/content/Setting'))
const CampProfile=React.lazy(()=>import('./pages/content/CampProfile'))
const SavedsPage=React.lazy(()=>import('./pages/content/SavedsPage'))
const joinedTours=React.lazy(()=>import('./pages/content/JoinedTours'))




const routes = [
   { path: '/', exact: true, name: 'Home' },
   { path: '/Index',exact: true, name: 'Index', element: Index },
   { path: '/profile', exact: true,name: 'profile', element: Profile },
   { path: '/Categories', exact: true,name: 'Categories', element: Categories },
   { path: '/Explore', exact: true,name: 'Explore', element: Explore },
   { path: '/SearchPage/:text', exact: true,name: 'SearchPage', element: SearchPage },
   { path: '/Setting', exact: true,name: 'Setting', element: Setting },
   { path: '/CampProfile/:id', exact: true,name: 'CampProfile', element: CampProfile },
   { path: '/SavedsPage', exact: true,name: 'SavedsPage', element: SavedsPage },
   { path: '/joinedTours', exact: true,name: 'joinedTours', element: joinedTours },



]

export default routes
