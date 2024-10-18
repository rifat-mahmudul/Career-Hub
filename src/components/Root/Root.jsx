import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"


function Root() {
    return (
        <div>
            <Header></Header>
            <div className="min-h-[calc(100vh-260px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Root
