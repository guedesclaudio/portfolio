import styled from "styled-components";
import { Link } from "react-router-dom"

export default function ButtonProjects() {

    return (
        <Container>
            <Link to = {"/projects"}>
                <Button>Ver projetos</Button>
            </Link>
            <Link to = {"/contact"}>
                <Button>Contato</Button>
            </Link>
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