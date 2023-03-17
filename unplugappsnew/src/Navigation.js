import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Navigation.css'
import AccurateHome from './pages/AccurateHome.js'
import About from './pages/About.js'
import InnovPage from './pages/InnovPage.js'
import Headerbar from "./components/Headerbar/Headerbar.js";


export default function Navigation() {
    return (
        <BrowserRouter>
            <Headerbar />
            <div className="pagess">
                <Routes>
                    {/* <Route path="/" element={<Home/>}></Route> */}
                    <Route path="/About" element={<About />}></Route>
                    <Route path="/" element={<AccurateHome />}></Route>
                    <Route path="/InnovPage" element={<InnovPage />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}