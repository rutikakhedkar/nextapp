import React from 'react'
import Link  from 'next/link'
import LogoutButton from './LogoutButton';
import { getSession } from '../_lib/session';


 const Navbar=async()=> {
    const session = await getSession(); 
  
  return (
     <nav className="bg-white shadow-sm">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          Contact Manager
        </Link>
        <div className="flex items-center space-x-4">
          {session ? (
            <>
              <Link href="/contact" className="text-gray-600 hover:text-gray-800">
                Contacts
              </Link>
              <LogoutButton />
             
            </>
          ) : (
            <>
              <Link href="/login" className="text-gray-600 hover:text-gray-500">
                Login
              </Link>
              <Link href="/register" className="text-gray-600 hover:text-gray-500">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
