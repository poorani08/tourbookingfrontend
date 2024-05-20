import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';

import Home from '../pages/Home';
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import Thankyou from '../pages/Thankyou';
import ProtectedRoute from './protectedroute';
import AdminDashboard from '../pages/admin';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/tours/:id' element={<TourDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/thank-you' element={<Thankyou/>}/>
        <Route path='/tours/search' element={<SearchResultList/>}/>
        <Route 
        path="/admin-dashboard" 
        element={
          // <ProtectedRoute adminOnly={true}>
            <AdminDashboard />
          // </ProtectedRoute>
        } 
      />
    
    </Routes>
    
  )
}

export default Routers