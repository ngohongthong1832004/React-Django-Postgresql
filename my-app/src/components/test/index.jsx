
import { Outlet } from "react-router-dom";


const TestRootPage = ({children}) => {
    return (
        <div>
            <h1>heeloo</h1>
            <h2>{children}</h2>
            <h3><Outlet /></h3>
        </div>
    )

}

export default TestRootPage;