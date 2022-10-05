import TopMenu from "../components/TopMenu"
import styled from "styled-components"

function Stack({source, name}) {

    return (
        <StackIcon>
            <img src = {source}/>
            <p>{name}</p>
        </StackIcon>
    )
}

export default function Home() {

    const stacks = [
        {source: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
        name : "HTML 5"},
        {source: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
        name : "CSS 3"},
        {source: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        name : "JavaScript"},
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
        name : "Linux"},
    ]

    return (
        <>
            <TopMenu/>
            <Panel>
                <PanelLeft>
                    <img src = "https://www.hrconnect.cl/wp-content/uploads/2017/12/Picture1-768x506.png"/>
                </PanelLeft>
                <PanelRight>
                    <Title>Olá, pessoal</Title>
                    <SubTitle>Meu nome é Cláudio Guedes</SubTitle>
                    <Description>
                        Sou desenvolvedor full stack júnior
                        Tenho experiência com aplicações web (SPA e Api Rest) utilizando principalmente React, Node.js, MongoDB e PostgreSQL. 
                    </Description>
                    <Description>
                        Estou em uma evolução contínua e sempre em busca de novos conhecimentos. Meus próximos desafios são aprender TypeScript e AWS.
                    </Description>
                </PanelRight>
            </Panel>
            <Stacks>
                {stacks.map((value, index) => <Stack key = {index} source = {value.source} name = {value.name}/>)}
            </Stacks>
            <Button>Ver projetos</Button>
        </>
    )
}

const Panel = styled.div`
    margin: 140px auto 40px auto;
    width: 80vw;
    height: 500px;
    background-color: #F6F1F0;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`
const PanelLeft = styled.div`
    width: 48%;
    height: 100%;

    && img {
        height: 100%;
        border-radius: 5px 0px 0px 5px;
    }
`
const PanelRight = styled.div`
    width: 48%;
    height: 100%;
`
const Title = styled.h1`
    font-size: 40px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: black;
    margin-top: 20px;
`
const SubTitle = styled.h2`
    margin-top: 20px;
    font-size: 30px;
    font-family: 'Roboto', sans-serif;
    color: grey;
`
const Description = styled.p`
    margin-top: 20px;
    margin-right: 10px;
    line-height: 40px;
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    color: grey;
`
const Stacks = styled.div`
    margin: 0 auto;
    min-height: 100px;
    width: 80vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`
const StackIcon = styled.div`
    background-color: #F6F1F0;
    border-radius: 5px;
    box-shadow: 1px 1px 1px grey;
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
    margin: 40px auto 0 auto;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;

    &&:hover {
        background-color: white;
        color: black;
    }
`