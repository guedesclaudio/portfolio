import styled from "styled-components";

export default function Panel() {
    
    return (
        <Container>
            <PanelLeft>
                <img src = "https://www.hrconnect.cl/wp-content/uploads/2017/12/Picture1-768x506.png"/>
            </PanelLeft>
            <PanelRight>
                <Title>Olá, pessoal</Title>
                <SubTitle>Meu nome é Cláudio Guedes</SubTitle>
                <Description>
                    Sou desenvolvedor full stack com experiência em aplicações web utilizando principalmente React e Node.js. Possuo 
                    prática em testes automatizados, arquitetura de software e metodologias ágeis. 
                </Description>
                <Description>
                    Estou concluindo o curso de Oceanografia na UERJ, e foi lá que surgiu a minha paixão por programação.
                    Graças a Oceanografia pude ter uma boa base em áreas como Física, Cálculo, Estatística, Lógica de programação e Fundamentos da Computação. 
                    Sendo assim pude usar esses conhecimentos na minha nova caminhada e decidi ingressar na formação Full Stack da Driven Education (9-10
                    meses), a qual estou prestes a me formar. 
                </Description>
            </PanelRight>
        </Container>
    )
}

const Container = styled.div`
    margin: 140px auto 40px auto;
    width: 80vw;
    height: 500px;
    background-color: #F6F1F0;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1070px) {
        width: 80vw;
        height: 100%;
    }
`
const PanelLeft = styled.div`
    width: 49%;
    height: 100%;

    && img {
        width: 100%;
        height: 100%;
        border-radius: 5px 0px 0px 5px;
    }

    @media (max-width: 1070px) {
        display: none;
        padding: 10px;
    }
`
const PanelRight = styled.div`
    width: 49%;
    height: 100%;

    @media (max-width: 1070px) {
        width: 100%;
    }
`
const Title = styled.h1`
    font-size: 40px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: black;
    padding: 20px;

    @media (max-width: 1565px) {
        font-size: 30px;
    }
`
const SubTitle = styled.h2`
    font-size: 30px;
    font-family: 'Roboto', sans-serif;
    color: grey;
    padding: 20px;

    @media (max-width: 1565px) {
        font-size: 24px;
    }
`
const Description = styled.p`
    margin-top: 0px;
    line-height: 25px;
    font-size: 20px;
    padding: 10px 10px 0px 20px;
    font-family: 'Roboto', sans-serif;
    color: grey;

    @media (max-width: 1565px) {
        font-size: 18px;
    }
`
