import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Navigation.css'
import Headerbar from "./components/Headerbar/Headerbar.js";
import AccurateHome from './pages/AccurateHome.js'
import About from './pages/About.js'
import RentSoftware from './pages/RentSoftware.js'
import Accurateerp from './pages/AccurateERP.js'
import Networking from "./pages/Networking.js";
import LINUX from './pages/LINUX'
import InnovPage from './pages/InnovPage.js'



export default function Navigation() {
    return (
        <BrowserRouter>
            <Headerbar />
            <div className="pagess">
                <Routes>
                    {/* <Route path="/" element={<Home/>}></Route> */}
                    
                    <Route path="/" element={<AccurateHome />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/accurateERP" element={<Accurateerp />}></Route>
                    <Route path="/software" element={<RentSoftware />}></Route>
                    <Route path="/network" element={<Networking />}></Route>
                    <Route path="/LINUX" element={<LINUX />}></Route>
                    <Route path="/InnovPage" element={<InnovPage />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}