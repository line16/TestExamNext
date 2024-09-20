"use client"
import React from 'react'
import AdminNavbar from '../Components/Navbar/AdminNavnbar'
import Link from 'next/link'

const pageAdmin = () => {
  return (
    <div className='text-left'>
        <AdminNavbar/>
        <h1 className='text-center font-semibold text-3xl'>Welcome to Admin!</h1>
        <p>a little overview of the admin</p>

        <div className="flex flex-col font-semibold w-5/12">
            <Link href="/ADMIN" className=" text-gray-700 hover:text-rose-300">
              AdminHOME
            </Link>
            <Link href="/ADMIN/AdminAbout" className="text-gray-700 hover:text-rose-300">
              AdminABOUT
            </Link>
            <Link href="/ADMIN/AdminTreatments" className=" text-gray-700 hover:text-rose-300">
              AdminSERVICE
            </Link>
            <Link href="/Contact" className=" text-gray-700 hover:text-rose-300">
              AdminCONTACT
            </Link>
            <Link href="/" className=" text-gray-700 hover:text-rose-300">BACK TO PUBLIC</Link>
          
          </div>
    </div>
  )
}

export default pageAdmin