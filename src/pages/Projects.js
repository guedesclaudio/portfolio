import styled from "styled-components";
import projectsData from "../services.js/projectsData";

function ProjectBox({
    name, 
    description,
    category,
    repository,
    deploy,
    stacks
}) {

    if (deploy === "") {

    }

    return (
        <Project>
            <ProjectBody>
                <Name>{name}</Name>
                <Description>{description}</Description>
                <Category>{category}</Category>
                <Repository>
                    <a href = {`https://github.com/guedesclaudio/${repository}`} target = "_blank">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                    {deploy ? 
                    <a href = {deploy} target = "_blank">
                        <ion-icon name="arrow-redo-circle-outline"></ion-icon>
                    </a> : ""}
                </Repository>
            </ProjectBody>
            <Stacks>
                <Stack>
                    {stacks}
                </Stack>
            </Stacks>
        </Project>
    )
}

export default function Projects() {

    return (
        <Container>
            <ProjectsList>
                {projectsData.map((value, index) => 
                <ProjectBox key = {index} name = {value.name} description = {value.description} 
                category = {value.category} repository = {value.repository} deploy = {value.deploy} stacks = {value.stacks}/>)}
            </ProjectsList>
        </Container>
    )
}

const Container = styled.div`
    width: 80vw;
    margin: 140px auto;
    background-color: none;
    border-radius: 5px;
    height: 600px;

    @media (max-width: 600px) {
        width: 96vw;
    }
`
const ProjectsList = styled.div`
    overflow-y: scroll;
    height: 800px;
`
const Project = styled.div`
    background-color: grey;
    opacity: 0.8;
    border: 1px solid white;
    width: 100%;
    min-height: 200px;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ProjectBody = styled.div`
    border-right: 1px solid white;
    width: 80%;
    padding-right: 20px;
`
const Name = styled.h1`
    color: white;
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 10px;
    font-weight: bold;

    @media (max-width: 600px) {
        font-size: 20px;
    }
`
const Description = styled.h2`
    color: white;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 10px;

    @media (max-width: 600px) {
        font-size: 16px;
    }

`
const Category = styled.p`
    color: white;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 10px;

    @media (max-width: 600px) {
        font-size: 16px;
    }

`
const Repository = styled.p`
    font-size: 30px;
    width: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
        font-size: 22px;
        width: 50px;
    }

    && ion-icon {
        color: white;
    }
`
const Stacks = styled.div`
    width: 30%;
    min-height: 130px;
    margin-left: 20px;
    box-sizing: border-box;
`
const Stack = styled.p`
    color: white;
    font-size: 18px;
    line-height: 24px;
    height: 100px;
    font-family: 'Roboto', sans-serif;
    

    @media (max-width: 600px) {
        font-size: 12px;
        line-height: 14px;
    }
`