
import Header from "./Header";
import commons from  '../../styles/commons.module.css'

const Layout:React.FC = ({children}) => {
    return (
        <>
          <Header />
          <div className={commons.main}>{children}</div>
        </>
      )
}

export default Layout