import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TopMenu from "../components/TopMenu"
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import UserContext from "../contexts/UserContext";
import "../reset/reset.css"

export default function App() {

    const [displaySideBar, setDisplaySideBar] = useState("none")
    const [animationSideBar, setAnimationSideBar] = useState("none")
    const [icon, setIcon] = useState("menu-outline")

    return (
        <UserContext.Provider value = {{
            displaySideBar, setDisplaySideBar,
            animationSideBar, setAnimationSideBar,
            icon, setIcon
        }}>
            <BrowserRouter>
                <TopMenu/>
                <Routes>
                    <Route path = "/" element = {<Home/>}/>
                    <Route path = "/projects" element = {<Projects/>}/>
                    <Route path = "/contact" element = {<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}