import { useRouter } from "next/router"
import { useEffect } from "react"

export default function NotFound() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    },[])
 
    return (
        <div className="items-center content-center text-center">
            <div className="text-2xl font-bold block">404</div>
        </div>
    )
}