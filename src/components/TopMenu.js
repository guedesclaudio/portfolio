import styled from "styled-components";
import { useState } from "react";
import SideBar from "./SideBar";
import Logo from "./Logo";

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
                    <ion-icon name="logo-github"></ion-icon>
                    <ion-icon name="logo-linkedin"></ion-icon>
                    <ion-icon name="albums-outline"></ion-icon>
                </Icons>
                <HiddenMenu>
                    <ion-icon name="menu-outline" onClick = {openSideBar}></ion-icon>
                </HiddenMenu>
            </Container>
            <SideBar displaySideBar = {displaySideBar} animationSideBar = {animationSideBar}/>
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