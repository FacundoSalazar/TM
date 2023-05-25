import { Route, Routes } from "react-router-dom"
import { HomeRouter } from "./HomeRouter"
import { Login } from "../pages/login/Login"


export const ManagerRouter = () => {
    return(
        <>
            <Routes>
                <Route path="/*" element={<HomeRouter />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<>Register</>}/>
            </Routes>
        </>
    )
}