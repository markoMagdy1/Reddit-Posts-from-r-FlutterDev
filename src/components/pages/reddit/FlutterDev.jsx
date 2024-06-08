import React from 'react'
import {  NavLink, Outlet } from 'react-router-dom';
import '../reddit/flutterDev.css';

export const FlutterDev = () => {

  return (
    <div className=''>
        <h1 className='my-5'>Reddit Posts from r/FlutterDev</h1>
        <div className="row outl  flutter-header">
            <NavLink  to="hot" className="col ">Hot</NavLink >
            <NavLink  to="new" className="col">New</NavLink >
            <NavLink  to="raising" className="col">Rising</NavLink >
        </div>
        <div className="outlet">
            <Outlet />
        </div>

    </div>
  )
}
