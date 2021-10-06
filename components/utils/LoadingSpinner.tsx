import classNames from "classnames"
import commons from "../../styles/commons.module.css"

interface SpinnerProps {
    additionalClassname?:string
}

const LoadingSpinner:React.FC<SpinnerProps> = ({additionalClassname = ""}) => {

return<div className={classNames(commons.spinner, {[additionalClassname]:additionalClassname})}></div>
}

export default LoadingSpinner