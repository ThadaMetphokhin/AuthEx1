"use client"
import Image from "next/image";
import Navbar from '@/app/Component/Navbar'
import { useSession, signIn } from "next-auth/react"
export default function Home() {
  const { data: session, status } = useSession()
  return (
    <>
    <Navbar session={session} status={status}/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <p>Test Login For Facebook</p>
    </main>
    </>

  );
}
