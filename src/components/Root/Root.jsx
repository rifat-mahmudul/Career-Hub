import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"


function Root() {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Root
