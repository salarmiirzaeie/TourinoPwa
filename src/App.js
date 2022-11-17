import React, {  Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Direct from './pages/content/Direct'
import TourDet from './pages/content/TourDet'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./pages/Login'))
const Register = React.lazy(() => import('./pages/Register'))

const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Routes>
          {/* <Route path="*" name="Home" element={<HomeLayout />} /> */}
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/TourDet/:id" name="TourDet Page" element={<TourDet />} />
          <Route exact path="/Direct" name="Direct Page" element={<Direct />} />

          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
