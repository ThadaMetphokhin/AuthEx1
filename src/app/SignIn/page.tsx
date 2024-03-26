"use client"
//session
import { useSession, signIn } from "next-auth/react"
import { usePathname } from "next/navigation"
import Navbar from '@/app/Component/Navbar'
import '@/app/SignIn/Facebookbutton.css'
import '@/app/SignIn/Githubbutton.css'
import { useRouter } from "next/navigation"
import { useEffect } from "react"
const Signin = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  useEffect(()=>{
    if(status==="authenticated"){
      router.push('/')
    }
  },[status])
  
  return (
    <>
      <Navbar session={session} status={status}/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          
          <br></br>
          <button className="btn-facebook" onClick={() => signIn("facebook")}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
              <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
            </svg>
            Continue with Facebook</button>

          <button className="btn-github" onClick={() => signIn("github")}>
            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g  id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <rect fill="none" height="24" width="24"></rect> <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path> </g></svg>
            Continue with Github
          </button>
        </div>

      </main>

    </>
  )
}
export default Signin