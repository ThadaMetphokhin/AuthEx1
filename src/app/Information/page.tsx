"use client"
import Navbar from '@/app/Component/Navbar'
import { useSession } from 'next-auth/react'
export default function Information() {
    const { data: session, status } = useSession()
    return (
        <>
            <Navbar session={session} status={status} />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <p>ข้อมูลทั่วไป</p>
            </main>
        </>
    )
}