import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import UserContext from "../contexts/UserContext";


export default function ButtonProjects() {

    const navigate = useNavigate()
    const {
        setDisplaySideBar, 
        setAnimationSideBar,
        setIcon
    } = useContext(UserContext)

    function onPage(route) {
        setIcon("menu-outline")
        setAnimationSideBar("hidden 0.5s")
        setTimeout(() => setDisplaySideBar("none"), 500)
        navigate(route)
    }

    return (
        <Container>
            <Button onClick = {() => onPage("/projects")}>Ver projetos</Button>
            <Button onClick = {() => onPage("/contact")}>Contato</Button>
        </Container>
    )
}
const Container = styled.div`   
    width: 420px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    @media (max-width: 600px) {
        width: 210px;
    }
`
const Button = styled.div`
    width: 200px;
    height: 40px;
    border-radius: 20px;
    background-color: black;
    color: white;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px auto 20px auto;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;

    &&:hover {
        background-color: white;
        color: black;
    }

    @media (max-width: 600px) {
        margin-top: 10px;
        font-size: 16px;
    }
`