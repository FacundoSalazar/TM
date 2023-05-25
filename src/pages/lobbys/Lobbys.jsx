import { Route, Routes } from "react-router-dom"

export const Lobbys = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<>Lista de todos los lobbys</>} />
                <Route path="crear" element={<>Crear lobby</>} />
            </Routes>
        </>
    )
}