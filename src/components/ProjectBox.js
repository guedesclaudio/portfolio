import styled from "styled-components"

export function ProjectBox({
    name, 
    description,
    category,
    repository,
    deploy,
    stacks,
    obs
}) {

    return (
        <Project>
            <ProjectBody>
                <Name>{name}</Name>
                <Description>{description}</Description>
                <Category>{category}</Category>
                <Category>{obs}</Category>
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