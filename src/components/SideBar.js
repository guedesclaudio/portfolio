import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom"

export default function SideBar({displaySideBar, setDisplaySideBar, animationSideBar, setAnimationSideBar}) {

    const navigate = useNavigate()

    function open (value) {
        navigate(value)
        setAnimationSideBar("hidden 0.5s")
        setTimeout(() => setDisplaySideBar("none"), 500)
    }

    return (
        <Container displaySideBar = {displaySideBar} animationSideBar = {animationSideBar}>
            <Options>
                <Option onClick = {() => open("/home")}>Home</Option>
                <Option onClick = {() => open("/projects")}>Projetos</Option>
                <a href = "https://github.com/guedesclaudio" target = "_blank">
                    <Option>GitHub</Option>
                </a>
                <a href = "https://www.linkedin.com/in/claudio-guedes-0144b91a5/" target = "_blank">
                    <Option>LinkedIn</Option>
                </a>
                <Option onClick = {() => open("/contact")}>Contato</Option>
            </Options>
        </Container>
    )
}

const Container = styled.div`
    background-color: black;
    opacity: 0.7;
    position: fixed;
    top: 0;
    right: 0;
    width: 40vw;
    height: 100vh;
    z-index: 2;
    display: ${(props) => props.displaySideBar};
    animation: ${(props) => props.animationSideBar};

    @keyframes show {
        from {
            margin-right: -1000px;
        }
        to {
            margin-right: 0px;
        }
    }
    @keyframes hidden {
        from {
            margin-right: 0px;
        }
        to {
            margin-right: -1000px;
        }
    }
`
const Options = styled.div`
    margin-top: 60px;
`
const Option = styled.p`
    font-family: 'Roboto', sans-serif;
    width: 40vw;
    color: white;
    font-size: 18px;
    text-align: center;
    margin-top: 20px;
    cursor: pointer;
`