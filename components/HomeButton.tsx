import classNames from "classnames"
import { useRouter } from "next/router"
import commons from  '../styles/commons.module.css'

interface Props {
    additionalClassname?: string
}

 const HomeButton:React.FC<Props> = ({additionalClassname}) => {
    const router = useRouter()
    return <button className={classNames(commons.button, additionalClassname && commons[additionalClassname])} onClick={() => router.push('/')}>Home</button>
}

export default HomeButton