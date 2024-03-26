"use client"
import { SessionProvider } from "next-auth/react";

export default function ProviderOauth ({children}){
    return (
        <SessionProvider>
        {children}
        </SessionProvider>
        )
}