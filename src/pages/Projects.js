import styled from "styled-components";

function ProjectBox({
    name, 
    description,
    category,
    repository,
    deploy,
    stacks
}) {
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
                    <a href = {deploy} target = "_blank">
                        <ion-icon name="arrow-redo-circle-outline"></ion-icon>
                    </a>
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

    const projectsData = [
        {name: "My Wallet", description: "Aplicação web para controle de finanças pessoais", 
        category: "Full-stack", repository: "my-wallet", deploy: "https://my-wallet-taupe.vercel.app/", 
        stacks: "HTML 5, CSS3, JavaScript, React, Node.js, Express, MongoDB, Mongo Atlas, Vercel, Heroku, Git, Linux"},
        {name: "TrackIt", description: "Aplicação web para gerenciamento de tarefas diárias", 
        category: "Front-end", repository: "trackIt", deploy: "https://track-it-sable.vercel.app/", 
        stacks: "HTML 5, CSS3, JavaScript, React, Vercel, Git, Linux"},
        {name: "CineFlex", description: "Aplicação web para sessões de cinema", 
        category: "Front-end", repository: "cineflex", deploy: "https://cineflex-chi.vercel.app/", 
        stacks: "HTML 5, CSS3, JavaScript, React, Vercel, Git, Linux"},
        {name: "BoardCamp", description: "Aplicação web para gerenciamento de aluguéis de jogos", 
        category: "Back-end", repository: "boardcamp", deploy: "", 
        stacks: "Node.js, Express, PostgreSQL, Git, Linux"},
        {name: "Instagram", description: "Clone da página principal do Instagram", 
        category: "Front-end", repository: "instagram-react", deploy: "https://instagram-react-two.vercel.app/", 
        stacks: "HTML 5, CSS3, JavaScript, React, Vercel, Git, Linux"},
        {name: "Bate Papo Uol", description: "Aplicação web inspirada na antiga sala de bate-papo Uol", 
        category: "Back-end", repository: "bate-papo-uol-api", deploy: "", 
        stacks: "Node.js, Express, Git, Linux"},
        {name: "Driven Eats", description: "Aplicação web mobile para fast-food", 
        category: "Front-end", repository: "projeto3-driveneats", deploy: "https://guedesclaudio.github.io/projeto3-driveneats/", 
        stacks: "HTML 5, CSS3, JavaScript, Git, Linux"},
        {name: "Globo.com", description: "Clone da página principal do Globo.com", 
        category: "Front-end", repository: "projeto1-globe.com", deploy: "https://guedesclaudio.github.io/projeto1-globe.com/", 
        stacks: "HTML 5, CSS3"},
        {name: "BuzzQuizz", description: "Aplicação web realizada em equipe com o intuito de criar um site de quizzes", 
        category: "Front-end", repository: "projeto6_buzzquizz", deploy: "https://guedesclaudio.github.io/projeto6_buzzquizz/", 
        stacks: "HTML 5, CSS3, JavaScript, Git, Linux"},
    ]

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