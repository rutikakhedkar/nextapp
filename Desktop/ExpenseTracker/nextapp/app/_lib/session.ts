"use server"

import { cookies } from "next/headers";

export const setSession = async (user: any) => {
  (await cookies()).set({
    name: "session",
    value: JSON.stringify(user),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/", // optional but recommended
  });
};

export const getSession = async () => {
  const cookie = (await cookies()).get("session");
  if (!cookie) return null;
  return JSON.parse(cookie.value);
};

export const clearSession = async () => {
  (await cookies()).delete("session");
};
