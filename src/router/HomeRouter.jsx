import { Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Home } from "../pages/home/Home"
import { Lobbys } from "../pages/lobbys/Lobbys"

export const HomeRouter = () => {
    return(
        <>

            <Navbar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/lobbys/*" element={<Lobbys />} />
                    <Route path="/comunidad" element={<>comunidad</>} />
                    <Route path="/perfil/*" element={<>perfil</>} />
                </Routes>
            </div>
        </>
    )
}