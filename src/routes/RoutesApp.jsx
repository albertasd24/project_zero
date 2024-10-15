import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import { Stadisticas } from "../pages/Stadisticas"
import {LayoutDashboard} from "../pages/layouts/LayoutDashboard"

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/estadisticas" element={<LayoutDashboard />} />
                <Route path="/dashboard" element={<Stadisticas />} />
            </Routes>
        </BrowserRouter>
    )
}

export { RoutesApp }