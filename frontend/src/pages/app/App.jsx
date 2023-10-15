import { React, useState, useEffect } from 'react'

import { Container, Header, ImgLogo, Nav, Menu, MenuItem, Main, LeftScreenMain, RightScreenMain, Title, SubTitle, TextMain, ButtonMain,
ImageMain, DivUx, TopContentUx, TitleUxDesign, TextUx, TextContentUx, ImagesContentUx, ImageUx1, 
BottomContentUx, CardsUx, TextCard, SpanCard, DivAccessibility, TopContentAccessibility, VideoContentAccessibility, TextContentAccessibility, 
TitleAccessibility, TextAccessibility, ImgAccessibility, BottomContentAccessibility, TipCard, ImgTipCard, TipContent, TitleTip, TextTip,
ImgSetaCima, DivChatBot, TextContentChatBot, TitleChatBot, LeftContentChatBot, TextChatBot, RightContentChatBot, ImgChatBot, Curiosity, Alert, ImgAlert, ContentAlert, TextAlert, ImgSetaDireita, Link, TextTipMobile, TextTipNoMobile} from './styles'

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
    <ImgSetaCima src={SetaCimaGif} alt='Seta para cima' className='seta-cima hide'></ImgSetaCima>
    <ImgSetaDireita src={SetaDireitaGif} alt='Seta para baixo' className='seta-direita hide'></ImgSetaDireita>
      <Header className='header'>
        <Link href='#'><ImgLogo src={Logo}></ImgLogo></Link>
        <Nav>
          <Menu>
            <Link href='#home'><MenuItem>Home</MenuItem></Link>
            <Link href='#ux-design'><MenuItem>UX Design</MenuItem></Link>
            <Link href='#accessibility'><MenuItem>Acessibilidade</MenuItem></Link>
            <Link href='#chatbot'><MenuItem>ChatBot</MenuItem></Link>
            <MenuItem tabIndex={0}>     
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
          <ImageMain src={Hackathon} alt='Imagem tecnológica do Hackathon OLX'></ImageMain>
        </RightScreenMain>
      </Main>
      <DivUx id='ux-design'>
        <TopContentUx>
          <TextContentUx>
            <TitleUxDesign lang='en-us'>UX DESIGN</TitleUxDesign>
            <TextUx>O UX é extremamente importante porque trabalha para que os clientes se sintam bem sempre. As consequências disso é que dessa forma, naturalmente, os clientes permanecem mais tempo com os serviços, são mais receptivos a upgrades e novas compras, propagam a marca para conhecidos e colaboram para a melhora dos produtos e serviços. Pensando em toda a experiência do cliente, o nosso time promoveu estratégias com base e foco no usuário da aplicação. Por isso, trabalhamos aspectos muito importantes de Acessibilidade e a Implementação de um Chatbot como alavanca para uma melhor experiência de todos os públicos. Esperamos que curtam o nosso desenvolvimento.</TextUx>
          </TextContentUx>
          <ImagesContentUx>
            <ImageUx1 src={UX1} alt='Imagem de uma mesa de escritório com um notebook, mouse, um teclado, um tablet e mais alguns objetos como grampeador e um porta-canetas.'></ImageUx1>
            <ImageUx1 src={UX2} alt='Imagem da mesa de escritório da imagem anterior mas com uma pessoa utilizando o tablet.'></ImageUx1>
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
            <ImgAccessibility src={ImgAcessibilidade} alt='Imagem de um muro com uma placa indicando ser uma passagem acessível para pessoas com necessidades especiais.'></ImgAccessibility>
          </VideoContentAccessibility>
          <TextContentAccessibility>
            <TitleAccessibility>ACESSIBILIDADE</TitleAccessibility>
            <TextAccessibility>Sem dúvidas, é extremamente importante que a nossa aplicação na WEB seja o mais acessível possível, por isso, o nosso grupo se atentou para corresponder com os requisitos de acessibilidade voltados para Libras e textos alternativos em imagens para os leitores de tela, Responsividade e Adequação da cor da tela. A intenção é fazer com que todos os públicos se sintam confortáveis ao utilizar a plataforma, independente do dispositivo, de necessidades especiais e até de preferências. A ferramenta VLibras traduz automaticamente conteúdos digitais em diversos suportes, como textos, áudios e vídeos para a Língua Brasileira de Sinais (Libras) através de tradução automática e uso de um Avatar 3D, tornando a nossa aplicação acessível para pessoas surdas. A responsividade faz com que diversos dispositivos possam acessar o nosso conteúdo sem distorção das informações e funcionalidades. Já o botão de troca de tema, atende tanto pessoas que preferem um tema claro e brilhante, ideal para uso diurno, quanto as pessoas que amam um tema mais escuro e aconchegante, perfeito para uso noturno.</TextAccessibility>
          </TextContentAccessibility>
        </TopContentAccessibility>
        <BottomContentAccessibility>
          <TipCard className='tip1' tabIndex={0}>
            <ImgTipCard src={Libras} alt='Ícone de uma mão indicando libras'></ImgTipCard>
            <TipContent>
              <TitleTip>Dica:</TitleTip>
              <TextTip>Para acessar o vLibras, basta clicar no ícone de "libras" no canto direito dessa página e seguir as instruções!<br/><span style={{color: '#6E0AD6', fontWeight: 'bold'}}>Obs: Clique na imagem ao lado.</span></TextTip>
            </TipContent>
          </TipCard>
          <TipCard className='tip2' tabIndex={0}>
            <ImgTipCard src={Lua} alt='Ícone de lua'></ImgTipCard>
            <TipContent>
              <TitleTip>Dica:</TitleTip>
              <TextTipNoMobile>Para alterar a página para o tema escuro, basta clicar no botão ao lado do menu no canto superior direito!<br/><span style={{color: '#6E0AD6', fontWeight:'bold'}}>Obs: Clique na imagem ao lado.</span></TextTipNoMobile>
              <TextTipMobile>Para alterar a página para o tema escuro, basta clicar no botão de menu no canto superior direito, e clicar no último botão do menu! </TextTipMobile>
            </TipContent>
          </TipCard>
        </BottomContentAccessibility>
      </DivAccessibility>
      <DivChatBot id='chatbot'>
        <LeftContentChatBot>
          <TextContentChatBot>
            <TitleChatBot>CHATBOT</TitleChatBot>
            <TextChatBot>A implementação de um chatbot na plataforma da OLX forneceria maior suporte ao cliente e praticidade para responder a perguntas comuns. Isso ajuda a melhorar a eficiência e a disponibilidade do atendimento ao cliente, pois o chatbot tem como principais benefícios para a empresa: Redução de custos, Otimização do atendimento, Agilidade na solução de dúvidas frequentes, Satisfação dos clientes, Potencial de coleta de dados e Redução no tempo de espera. Um chatbot bem configurado pode trazer todos esses benefícios para a OLX, e utilizando técnicas de Big Data e Algoritmo ao nosso favor, a tendência é que a fidelização dos nossos clientes seja cada vez maior.</TextChatBot>
            <Curiosity className='curiosity1'>
              <SpanCard>Curiosidade:</SpanCard> A automatização de processos é um dos principais ganhos da aplicação de inteligência artificial em empresas. Tarefas repetitivas e burocráticas podem ser facilmente informatizadas e realizadas por sistemas inteligentes.
            </Curiosity>
            <Curiosity className='curiosity2'>
            <SpanCard>Curiosidade:</SpanCard> Por meio da análise de dados, processamento veloz e preciso de informações, a inteligência artificial é usada para avaliação de indicadores de desempenho e geração de relatórios de performance. Esses recursos são essenciais para enxergar pontos de melhoria, e obter insights.
            </Curiosity>
          </TextContentChatBot>
        </LeftContentChatBot>
        <RightContentChatBot>
          <ImgChatBot src={Robo} alt='Imagem do robô do filme Wall-e segurando e observando uma plantinha pequena.'></ImgChatBot>
          <Alert className='alert'>
            <ImgAlert src={Alerta} alt='Ícone de uma placa de alerta'></ImgAlert>
            <ContentAlert>
              <TitleTip>ALERTA:</TitleTip>
              <TextAlert>A inteligência artificial não está aqui para te prejudicar, muito pelo contrário. A tecnologia segue evoluindo com o decorrer dos
                anos, e a inteligência artificial é mais um desses avanços da tecnologia.
              </TextAlert>
            </ContentAlert>
          </Alert>
          <TipCard className='tip3'>
            <ImgTipCard src={RoboIcon} alt='Ícone de um robô'></ImgTipCard>
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