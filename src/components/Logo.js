import styled from "styled-components";
import { Link } from "react-router-dom"

export default function Logo() {

    return (
        <Link to = {"/"}>
            <Title>&lt; claudioguedes /&gt;</Title>
        </Link> 
    )
}

const Title = styled.h1`
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    margin-left: 20px;

    @media (max-width: 400px) {
        font-size: 24px;
    }
`