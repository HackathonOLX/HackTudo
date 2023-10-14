import { React, useState, useEffect } from 'react'
import { Container, Header, ImgLogo, Nav, Menu, MenuItem, Main, LeftScreenMain, RightScreenMain, Title, SubTitle, TextMain, ButtonMain,
ImageMain, DivHelpChatBot, HelpText, HelpImage } from './styles'
import Logo from '../../images/logo.png'
import Hackathon from '../../images/hackathon.png'
import SetaCima from '../../images/seta.png'

export function App() {
  const [mounted,setMounted] = useState(false)
    
    useEffect(() => {
        
        if(mounted){

          const body = document.body;
          const check = document.querySelector(".toggle-slider");
          const btnInit = document.querySelector(".bnt-init");
          const divHelpChatBox = document.querySelector(".help-chat-box");

          check.onclick = () => {
            body.classList.toggle("darkmode");
            divHelpChatBox.classList.toggle("darkmode-buttons");
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
    </Container>
  )
}