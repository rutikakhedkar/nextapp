"use client"
import React from 'react'
import { loginAction } from '../actions/auth'


export default function LoginForm() {
  return (
   <form action={loginAction} className='flex justify-center flex-col gap-4 w-64 mx-auto mt-10'>
    <label>Email</label>
    <input name="email" type="email" placeholder="email" className='border px-2 py-1 rounded-md'/>
    <label>Password</label>
    <input name="password" type="password" placeholder="password" className='border px-2 py-1 rounded-md'/>
    <button type="submit" className='bg-blue-500 cursor-pointer text-white px-4 py-1 rounded-md'>Login</button>
   </form>
  )
}
