import { React, useState, useEffect } from 'react'

import { Container, Header, ImgLogo, Nav, Menu, MenuItem, Main, LeftScreenMain, RightScreenMain, Title, SubTitle, TextMain, ButtonMain,
ImageMain, DivHelpChatBot, HelpText, HelpImage, DivUx, TopContentUx, TitleUxDesign, TextUx, TextContentUx, ImagesContentUx, ImageUx1, 
BottomContentUx, CardsUx, TextCard, SpanCard, DivAccessibility, TopContentAccessibility, VideoContentAccessibility, TextContentAccessibility, 
TitleAccessibility, TextAccessibility, ImgAccessibility, BottomContentAccessibility, TipCard, ImgTipCard, TipContent, TitleTip, TextTip,
ImgSetaCima, DivChatBot, TextContentChatBot, TitleChatBot, LeftContentChatBot, TextChatBot, RightContentChatBot, ImgChatBot, Curiosity, Alert, ImgAlert, ContentAlert, TextAlert, ImgSetaDireita, Link} from './styles'

import Logo from '../../images/logo.png'
import SetaCimaGif from '../../images/setacima.png'
import SetaDireitaGif from '../../images/setadireita.png'
import Hackathon from '../../images/hackathon.png'
import SetaCima from '../../images/seta.png'
import UX1 from '../../images/imgux1.jpg'
import UX2 from '../../images/imgux2.jpg'
import ImgAcessibilidade from '../../images/acessibilidade.jpg'
import Libras from '../../images/libras.png'
import Lua from '../../images/lua.png'
import Robo from '../../images/robo.jpg'
import Alerta from '../../images/alerta.png'
import RoboIcon from '../../images/roboicon.png'

export function App() {
  const [mounted,setMounted] = useState(false)
    
    useEffect(() => {
        
        if(mounted){

          const body = document.body;
          const header = document.querySelector(".header");
          const check = document.querySelector(".toggle-slider");
          const btnInit = document.querySelector(".bnt-init");
          const divHelpChatBox = document.querySelector(".help-chat-box");
          const card1 = document.querySelector(".card1");
          const card2 = document.querySelector(".card2");
          const card3 = document.querySelector(".card3");
          const tip1 = document.querySelector(".tip1");
          const tip2 = document.querySelector(".tip2");
          const tip3 = document.querySelector(".tip3");
          const alert = document.querySelector(".alert");
          const curiosity1 = document.querySelector(".curiosity1");
          const curiosity2 = document.querySelector(".curiosity2");
          const setaCima = document.querySelector(".seta-cima");
          const setaDireita = document.querySelector(".seta-direita");

          check.onclick = () => {
            body.classList.toggle("darkmode");
            header.classList.toggle("darkmode");
            divHelpChatBox.classList.toggle("darkmode-buttons");
            card1.classList.toggle("darkmode-cards");
            card2.classList.toggle("darkmode-cards");
            card3.classList.toggle("darkmode-cards");
            tip1.classList.toggle("darkmode-cards");
            tip2.classList.toggle("darkmode-cards");
            tip3.classList.toggle("darkmode-cards");
            alert.classList.toggle("darkmode-cards");
            curiosity1.classList.toggle("darkmode-cards");
            curiosity2.classList.toggle("darkmode-cards");


          }

          tip2.onclick = () => {
            setaCima.classList.remove("hide")
            setTimeout(function() {
              setaCima.classList.add("hide");
            }, 2000);
          }

          tip1.onclick = () => {
            setaDireita.classList.remove("hide");
            setTimeout(function() {
              setaDireita.classList.add("hide");
            }, 2000);
          }
            
        }

        else{
            setMounted(true);
        }

  },[mounted])


  return (
    <Container>
    <ImgSetaCima src={SetaCimaGif} className='seta-cima hide'></ImgSetaCima>
    <ImgSetaDireita src={SetaDireitaGif} className='seta-direita hide'></ImgSetaDireita>
    <DivHelpChatBot className='help-chat-box'>
      <HelpText>Precisa de Ajuda?</HelpText>
      <HelpImage src={SetaCima}></HelpImage>
    </DivHelpChatBot>
      <Header className='header'>
        <Link href='https://www.olx.com.br/' target='_blank'><ImgLogo src={Logo}></ImgLogo></Link>
        <Nav>
          <Menu>
            <Link href='#home'><MenuItem>Home</MenuItem></Link>
            <Link href='#ux-design'><MenuItem>UX Design</MenuItem></Link>
            <Link href='#accessibility'><MenuItem>Acessibilidade</MenuItem></Link>
            <Link href='#chatbot'><MenuItem>ChatBot</MenuItem></Link>
            <MenuItem>     
              <label className="toggle-container">
                <input type="checkbox" />
                <div className="toggle-slider"></div>
              </label>
            </MenuItem>
          </Menu>
        </Nav>
      </Header>
      <Main id='home'>
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
      <DivUx id='ux-design'>
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
      <DivAccessibility id='accessibility'>
        <TopContentAccessibility>
          <VideoContentAccessibility>
            <ImgAccessibility src={ImgAcessibilidade}></ImgAccessibility>
          </VideoContentAccessibility>
          <TextContentAccessibility>
            <TitleAccessibility>ACESSIBILIDADE</TitleAccessibility>
            <TextAccessibility>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsum iusto voluptates libero inventore sunt non corporis 
              quaerat. Neque praesentium cupiditate saepe explicabo velit, ut ducimus dolorem dolore vel provident. Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Unde porro corporis est corrupti, sed itaque, nisi quod atque harum ea magnam alias assumenda? Aspernatur similique 
              deserunt iste quo magni minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem quisquam laborum ratione voluptatibus 
              excepturi qui similique fugit, hic debitis voluptatem asperiores assumenda amet aspernatur nesciunt repellendus velit reprehenderit culpa.</TextAccessibility>
          </TextContentAccessibility>
        </TopContentAccessibility>
        <BottomContentAccessibility>
          <TipCard className='tip1'>
            <ImgTipCard src={Libras}></ImgTipCard>
            <TipContent>
              <TitleTip>Dica:</TitleTip>
              <TextTip>Para acessar o vLibras, basta clicar no ícone de "libras" no canto direito dessa página e seguir as instruções!</TextTip>
            </TipContent>
          </TipCard>
          <TipCard className='tip2'>
            <ImgTipCard src={Lua}></ImgTipCard>
            <TipContent>
              <TitleTip>Dica:</TitleTip>
              <TextTip>Para alterar a página para o tema escuro, basta clicar no botão ao lado do menu no canto superior direito!</TextTip>
            </TipContent>
          </TipCard>
        </BottomContentAccessibility>
      </DivAccessibility>
      <DivChatBot id='chatbot'>
        <LeftContentChatBot>
          <TextContentChatBot>
            <TitleChatBot>CHATBOT</TitleChatBot>
            <TextChatBot>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo consequatur minima eveniet dicta ipsa minus 
              repellat adipisci repellendus quia officia. Voluptatibus illo quas eum maiores sunt sit non voluptate temporibus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quia debitis consectetur itaque vero vel earum, 
              doloribus eos assumenda facilis suscipit. Reprehenderit illum a nisi dolore dolorem quisquam quaerat similique.</TextChatBot>
            <Curiosity className='curiosity1'>
              <SpanCard>Curiosidade:</SpanCard> Assistentes virtuais de voz, como Siri da Apple, Amazon Alexa e Google Assistant, usam tecnologias de IA para 
              reconhecimento de fala e processamento de linguagem natural para interagir com os usuários.
            </Curiosity>
            <Curiosity className='curiosity2'>
            <SpanCard>Curiosidade:</SpanCard> Muitas empresas agora usam chatbots para fornecer suporte ao cliente e responder a perguntas comuns. Isso 
            ajuda a melhorar a eficiência e a disponibilidade do atendimento ao cliente.
            </Curiosity>
          </TextContentChatBot>
        </LeftContentChatBot>
        <RightContentChatBot>
          <ImgChatBot src={Robo}></ImgChatBot>
          <Alert className='alert'>
            <ImgAlert src={Alerta}></ImgAlert>
            <ContentAlert>
              <TitleTip>ALERTA:</TitleTip>
              <TextAlert>A inteligência artificial não está aqui para te prejudicar, muito pelo contrário. A tecnologia segue evoluindo com o decorrer dos
                anos, e a inteligência artificial é mais um desses avanços da tecnologia.
              </TextAlert>
            </ContentAlert>
          </Alert>
          <TipCard className='tip3'>
            <ImgTipCard src={RoboIcon}></ImgTipCard>
            <TipContent>
              <TitleTip>Dica:</TitleTip>
              <TextTip>Para acessar o ChatBot, basta clicar no ícone de "robô" no canto inferior direito dessa página e realizar o que você precisa!</TextTip>
            </TipContent>
          </TipCard>
        </RightContentChatBot>
      </DivChatBot>
    </Container>
  )
}