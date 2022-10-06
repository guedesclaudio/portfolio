import styled from "styled-components";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

export default function Contact() {

    const {icon} = useContext(UserContext)

    const [text, setText] = useState("")

    function MouseMove(value) {
        setText(value)
    }

    function mouseLeave() {
        setText("")
    }

    return (
        <>
            <Container>
                <a href = "https://github.com/guedesclaudio" target = "_blank" 
                onMouseMove = {() => MouseMove("GitHub")} onMouseLeave = {mouseLeave}>
                    <ion-icon name="logo-github"></ion-icon>
                </a>
                <a href = "https://www.linkedin.com/in/claudio-guedes-0144b91a5/" target = "_blank" 
                onMouseMove = {() => MouseMove("LinkedIn")} onMouseLeave = {mouseLeave}>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href = "mailto:cgsarmentosilva@gmail.com" target = "_blank"
                onMouseMove = {() => MouseMove("Gmail")} onMouseLeave = {mouseLeave}>
                    <ion-icon name="mail-outline"></ion-icon>
                </a>
                <a href = "" onMouseMove = {() => MouseMove("GeekHunter")} onMouseLeave = {mouseLeave} 
                onClick = {() => alert("GeekHunter ainda não está disponível")}>
                    <ion-icon name="globe-outline"></ion-icon>
                </a>  
            </Container>
            <Text>
                {text}
            </Text>
        </>
    )
}

const Container = styled.div`
    margin: 140px auto;
    width: 20vw;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    && ion-icon {
        font-size: 50px;
        color: black;
        cursor: pointer;
    }

    @media (max-width: 460px) {
        && ion-icon {
            font-size: 40px;
        }
        width: 80vw;
    }
`
const Text = styled.div`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
`