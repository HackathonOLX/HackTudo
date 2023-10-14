import { React, useState, useEffect } from 'react'
import { Container, Header, ImgLogo, Nav, Menu, MenuItem, Main, LeftScreenMain, RightScreenMain, Title, SubTitle, TextMain, ButtonMain,
ImageMain, DivHelpChatBot, HelpText, HelpImage, DivUx, TopContentUx, TitleUxDesign, TextUx, TextContentUx, ImagesContentUx, ImageUx1, BottomContentUx, CardsUx, TextCard, SpanCard } from './styles'
import Logo from '../../images/logo.png'
import Hackathon from '../../images/hackathon.png'
import SetaCima from '../../images/seta.png'
import UX1 from '../../images/imgux1.jpg'
import UX2 from '../../images/imgux2.jpg'

export function App() {
  const [mounted,setMounted] = useState(false)
    
    useEffect(() => {
        
        if(mounted){

          const body = document.body;
          const check = document.querySelector(".toggle-slider");
          const btnInit = document.querySelector(".bnt-init");
          const divHelpChatBox = document.querySelector(".help-chat-box");
          const card1 = document.querySelector(".card1");
          const card2 = document.querySelector(".card2");
          const card3 = document.querySelector(".card3");

          check.onclick = () => {
            body.classList.toggle("darkmode");
            divHelpChatBox.classList.toggle("darkmode-buttons");
            card1.classList.toggle("darkmode-cards");
            card2.classList.toggle("darkmode-cards");
            card3.classList.toggle("darkmode-cards");

          }
            
        }

        else{
            setMounted(true);
        }

  },[mounted])


  return (
    <Container>
    <DivHelpChatBot className='help-chat-box'>
      <HelpText>Precisa de Ajuda?</HelpText>
      <HelpImage src={SetaCima}></HelpImage>
    </DivHelpChatBot>
      <Header>
        <ImgLogo src={Logo}></ImgLogo>
        <Nav>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>UX Design</MenuItem>
            <MenuItem>Acessibilidade</MenuItem>
            <MenuItem>ChatBot</MenuItem>
            <MenuItem>     
              <label className="toggle-container">
                <input type="checkbox" />
                <div className="toggle-slider"></div>
              </label>
            </MenuItem>
          </Menu>
        </Nav>
      </Header>
      <Main>
        <LeftScreenMain>
          <Title>HackTudo</Title>
          <SubTitle>Inovações Tecnológicas</SubTitle>
          <TextMain>Este projeto é uma celebração da criatividade, colaboração e resolução de problemas, onde convidamos 
            você a embarcar em uma jornada que desafia os limites da inovação.</TextMain>
          <ButtonMain className='bnt-init'>Vamos Começar</ButtonMain>
        </LeftScreenMain>
        <RightScreenMain>
          <ImageMain src={Hackathon}></ImageMain>
        </RightScreenMain>
      </Main>
      <DivUx>
        <TopContentUx>
          <TextContentUx>
            <TitleUxDesign>UX DESIGN</TitleUxDesign>
            <TextUx>O UX é muito importante porque trabalha para que os clientes se sintam bem sempre. As consequências disso é que dessa forma naturalmente os 
              clientes permanecem mais tempo com os serviços, são mais receptivos a upgrades e novas compras, propagam a marca para conhecidos e colaboram 
              para a melhora dos produtos e serviços.</TextUx>
          </TextContentUx>
          <ImagesContentUx>
            <ImageUx1 src={UX1}></ImageUx1>
            <ImageUx1 src={UX2}></ImageUx1>
          </ImagesContentUx>
        </TopContentUx>
        <BottomContentUx>
          <CardsUx>
            <TextCard className='card1'><SpanCard>Satisfação do Usuário:</SpanCard> O principal objetivo do UX Design é melhorar a satisfação do usuário, 
              tornando a interação de produto ou serviço mais agradável e eficiente.</TextCard>
            <TextCard className='card2'><SpanCard>Retenção de Usuários:</SpanCard> Produtos com boa experiência do usuário tendem a manter os usuários 
              mais tempo, reduzindo a taxa de abandono e aumentando a fidelidade.</TextCard>
            <TextCard className='card3'><SpanCard>Eficiência:</SpanCard> Uma boa experiência do usuário pode tornar as tarefas mais eficientes e rápidas, 
              economizando muito tempo e esforço para os usuários.</TextCard>
          </CardsUx>
        </BottomContentUx>
      </DivUx>
    </Container>
  )
}