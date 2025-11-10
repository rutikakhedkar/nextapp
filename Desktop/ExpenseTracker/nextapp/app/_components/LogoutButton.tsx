"use client" 

import { useRouter } from 'next/navigation';
import { logoutAction } from '../actions/auth';

export default function LogoutButton() {
  const router = useRouter();
    const handleLogout= async()=>{
      try{
        await logoutAction();
        router.push('/login');
        router.refresh();
      }catch(err){
        console.log("Logout failed:", err);
      }  
    }
  return (
     <button onClick={handleLogout} className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Logout
              </button>
  )
}
