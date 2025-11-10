import LoginForm from '@/app/_components/LoginForm'
import React from 'react'
import Link  from 'next/link'


export default function loginpage() {
  return (
    <div className='max-w-md mx-auto bg-white p-8 riunded-lg shadow-md'>
        <h1 className='text-2xl text-center font-bold mb-6'>Login</h1>
        <LoginForm/>
        <p className='text-center mt-2'>Don't have an account? <Link href='/' className="text-blue-600 hover:underline">Register</Link></p>
    </div>
  )
}
