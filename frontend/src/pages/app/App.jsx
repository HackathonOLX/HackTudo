import { React } from 'react'
import { Container, Header, ImgLogo, Nav, Menu, MenuItem, Main, LeftScreenMain, RightScreenMain, Title, SubTitle, TextMain, ButtonMain,
ImageMain, DivHelpChatBot, HelpText, HelpImage } from './styles'
import Logo from '../../images/logo.png'
import Hackathon from '../../images/hackathon.png'
import SetaCima from '../../images/seta.png'

export function App() {

  return (
    <Container>
    <DivHelpChatBot>
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
              <label class="toggle-container">
                <input type="checkbox" />
                <div class="toggle-slider"></div>
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
          <ButtonMain>Vamos Começar</ButtonMain>
        </LeftScreenMain>
        <RightScreenMain>
          <ImageMain src={Hackathon}></ImageMain>
        </RightScreenMain>
      </Main>
    </Container>
  )
}