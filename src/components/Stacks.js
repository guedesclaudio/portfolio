import styled from "styled-components";
import { stacks } from "../services.js/stacks";

function Stack({source, name}) {

    return (
        <StackIcon>
            <img src = {source}/>
            <p>{name}</p>
        </StackIcon>
    )
}

export default function Stacks() {
    return (
        <Container>
            {stacks.map((value, index) => <Stack key = {index} source = {value.source} name = {value.name}/>)}
        </Container>
    )
}

const Container = styled.div`
    margin: 0 auto 20px auto;
    min-height: 100px;
    width: 50vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 460px) {
        width: 80vw;
        
    }
`
const StackIcon = styled.div`
    background-color: none;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    color: grey;
    width: 90px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    && img {
        width: 36px;
    }

    && p {
        margin-top: 10px;
    }

`