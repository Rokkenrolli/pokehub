import { useRouter } from "next/router"
import commons from  '../styles/commons.module.css'

 const HomeButton = () => {
    const router = useRouter()
    return <button className={commons.button} onClick={() => router.push('/')}>Home</button>
}

export default HomeButton