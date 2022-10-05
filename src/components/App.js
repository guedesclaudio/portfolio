import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopMenu from "../components/TopMenu"
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import "../reset/reset.css"

export default function App() {

    return (
        <BrowserRouter>
            <TopMenu/>
            <Routes>
                <Route path = "/home" element = {<Home/>}/>
                <Route path = "/projects" element = {<Projects/>}/>
                <Route path = "/contact" element = {<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}