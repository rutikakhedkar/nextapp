"use server"

import axios from "axios";
import { redirect } from "next/navigation";
import { clearSession, setSession } from "../_lib/session";

const API_URL = process.env.API_URL || 'http://127.0.0.1:3002';

export const loginAction = async (formData: FormData) => {
  try {
    const email = formData.get('email');
    const password = formData.get('password');

    const res = await axios.get(`${API_URL}/users`, {
      params: { email, password }
    });

    const user = res.data[0];

    if (!user) {
      throw new Error('Invalid credentials');
    }
    await setSession(user);

    // ✅ Perform redirect — let Next.js handle it naturally
    redirect('/contact')
    
  } catch (error: any) {
    // 👇 Ignore NEXT_REDIRECT (it's expected)
    if (error?.digest?.startsWith("NEXT_REDIRECT")) throw error;

    console.log("Login error:", error);
    throw new Error("Login failed");
  }
};


export const logoutAction = async () => {
  try {
    // Clear session cookie
    await clearSession();
    
  } catch (error) {
    console.log("Logout error:", error);
    throw new Error("Logout failed");
  }

  
}