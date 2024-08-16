import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import { Stadisticas } from "../pages/Stadisticas"

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/estadisticas" element={<Stadisticas />} />
            </Routes>
        </BrowserRouter>
    )
}

export { RoutesApp }