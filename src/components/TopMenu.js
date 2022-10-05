import styled from "styled-components";
import { useState } from "react";
import SideBar from "./SideBar";
import Logo from "./Logo";
import { Link } from "react-router-dom"

export default function TopMenu() {

    const [displaySideBar, setDisplaySideBar] = useState("none")
    const [animationSideBar, setAnimationSideBar] = useState("none")

    function openSideBar() {
        if (displaySideBar === "none") {
            setDisplaySideBar("flex")
            setAnimationSideBar("show 0.5s")
            return
        }
        setAnimationSideBar("hidden 0.5s")
        setTimeout(() => setDisplaySideBar("none"), 500)
    }

    return (
        <>
            <Container>
                <Logo/>
                <Icons>
                    <a href = "https://github.com/guedesclaudio" target = "_blank">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                    <a href = "https://www.linkedin.com/in/claudio-guedes-0144b91a5/" target = "_blank">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                    <Link to = {"/contact"}>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </Link>
                    <Link to = {"/projects"}>
                        <ion-icon name="albums-outline"></ion-icon>
                    </Link>  
                </Icons>
                <HiddenMenu>
                    <ion-icon name="menu-outline" onClick = {openSideBar}></ion-icon>
                </HiddenMenu>
            </Container>
            <SideBar displaySideBar = {displaySideBar} setDisplaySideBar = {setDisplaySideBar} 
            animationSideBar = {animationSideBar} setAnimationSideBar = {setAnimationSideBar}/>
        </>
    )
}

const Container = styled.div`
    background-color: #2b2b25;
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
`
const Icons = styled.div`
    width: 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;

    && ion-icon {
        color: white;
        font-size: 24px;
        cursor: pointer;
    }

    @media (max-width: 460px) {
        display: none;
        
    }
`
const HiddenMenu = styled.div`
    display: none;
    color: white;
    font-size: 24px;
    margin-right: 20px;

    @media (max-width: 460px) {
        display: flex;
    }
`