import styled from "styled-components";
import projectsData from "../services.js/projectsData";
import { ProjectBox } from "../components/ProjectBox";

export default function Projects() {

    return (
        <Container>
            <ProjectsList>
                {projectsData.map((value, index) => 
                <ProjectBox key = {index} name = {value.name} description = {value.description} 
                category = {value.category} repository = {value.repository} deploy = {value.deploy} stacks = {value.stacks} obs = {value.obs}/>)}
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
