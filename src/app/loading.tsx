import '@/app/SignIn/Loadersignin.css'
export default function Loading() {
    // Or a custom loading skeleton component
    return (
    <>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="loader"></div>
        </main>
    </>)
}