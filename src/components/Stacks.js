import styled from "styled-components";

function Stack({source, name}) {

    return (
        <StackIcon>
            <img src = {source}/>
            <p>{name}</p>
        </StackIcon>
    )
}

export default function Stacks() {

    const stacks = [
        {source: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
        name : "HTML 5"},
        {source: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
        name : "CSS 3"},
        {source: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        name : "JavaScript"},
        {source: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        name : "TypeScript"},
        {source: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        name : "React"},
        {source: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
        name : "Node.js"},
        {source: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
        name : "MongoDB"},
        {source: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
        name : "PostgreSQL"},
        {source: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
        name : "Git"},
        {source: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
        name : "Linux"}
    ]

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