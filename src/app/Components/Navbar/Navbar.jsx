import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <nav className=" text-black p-4">
    <div className="container mx-auto flex items-center justify-between">
      <div className="flex items-center">
      <Image
      src="/logo.png"
      height={26}
      width={65}
      >
      </Image>
      </div>

      {/* Links */}
      <div className="flex-1 flex justify-end space-x-9 font-semibold">
        <Link href="/Home" className="hover:text-gray-300">
          HOME
        </Link>
        <Link href="/About" className="hover:text-gray-300">
          ABOUT
        </Link>
        <Link href="/Feature" className="hover:text-gray-300">
          FEATURE
        </Link>
        <Link href="/Service" className="hover:text-gray-300">
          SERVICE
        </Link>
        <Link href="/Contact" className="hover:text-gray-300">
          CONTACT
        </Link>
      </div>
    </div>
  </nav>
  )
}

export default page