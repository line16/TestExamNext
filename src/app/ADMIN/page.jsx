"use client"
import React from 'react'
import AdminNavbar from '../Components/Navbar/AdminNavnbar'
import Login from '../ADMIN/Login/page'

const pageAdmin = () => {
  return (
    <div>
        <AdminNavbar/>
        <h1 className='text-center font-semibold text-3xl'>Welcome to Admin!</h1>
        <Login/>
    </div>
  )
}

export default pageAdmin