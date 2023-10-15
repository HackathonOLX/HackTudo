import styled from "styled-components";

export const Container = styled.div`

    .toggle-container {
      display: inline-block;
      position: relative;
    }

    .toggle-container input[type="checkbox"] {
      display: none;
    }

    .toggle-slider {
      width: 42px;
      height: 22px;
      background-color: #ccc;
      border-radius: 20px;
      position: relative;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .toggle-slider:before {
      content: "";
      width: 18px;
      height: 18px;
      background-color: white;
      border-radius: 50%;
      position: absolute;
      left: 2px;
      top: 2px;
      transition: transform 0.3s;
    }

    .toggle-container input[type="checkbox"]:checked + .toggle-slider {
      background-color: #525252; 
    }

    .toggle-container input[type="checkbox"]:checked + .toggle-slider:before {
      transform: translateX(20px);
    }

`;

export const ImgSetaCima = styled.img`

    position: fixed;
    right: 0;
    z-index: 2;
    margin-top: 5rem;
    margin-right: 3.3rem;
    animation: positionSetaCima .7s linear infinite;

`;

export const ImgSetaDireita = styled.img`

    width: 3rem;
    position: fixed;
    right: 0;
    z-index: 2;
    margin-top: 20.5rem;
    margin-right: 3.3rem;
    animation: positionSetaDireita .7s linear infinite;

`;

export const Link = styled.a`

    text-decoration: none;
    color: black;

`;

export const Header = styled.header`
    
    padding: 2.5rem 3.5rem 1.5rem;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    background-color: white;
    z-index: 1;
    transition: all .3s;

`;

export const ImgLogo = styled.img`

    width: 5.5rem;
    cursor: pointer;

`;

export const Nav = styled.nav`


`;

export const Menu = styled.ul`

    list-style: none;
    display: flex;
    align-items: center;
    gap: 2.5rem;

`;

export const MenuItem = styled.li`

    font-size: 1.1rem;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        color: #6E0AD6;
    }

`;

export const Main = styled.main`
    padding-top: 14rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
`;

export const LeftScreenMain = styled.div`

`;

export const RightScreenMain = styled.div`

    width: 20rem;
    position: relative;

`;

export const Title = styled.h2`

    text-transform: uppercase;
    color: #6E0AD6;
    font-size: 4rem;

`;

export const SubTitle = styled.h4`

    margin-top: -1.5rem;
    color: #F28000;
    font-size: 1.7rem;

`;

export const TextMain = styled.p`

    width: 25rem;
    text-align: justify;

`;

export const ButtonMain = styled.button`

    margin-top: 1rem;
    background-color: #F28000;
    border: .01rem solid black;
    font-family: "Poppins";
    color: white;
    padding: .5rem 2rem;
    border-radius: .5rem;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background-color: #E37800;
    }

`;


export const ImageMain = styled.img`

    top: 0;
    margin-top: -11rem;
    position: absolute;
    width: 23rem;
    animation: position 3s linear infinite;
`;

export const DivUx = styled.div`
   
   margin-top: 18rem;
   padding: 2.5rem 10rem 5rem;

   @media screen and (max-width: 800px) {

    padding: 2.5rem 1rem;

   }

`;

export const TopContentUx = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 800px) {

        display: block;
        text-align: center;

    }

`;

export const TextContentUx = styled.div`



`;

export const ImagesContentUx = styled.div`

    display: flex;
    gap: 2rem;

`;

export const TitleUxDesign = styled.h2`

    font-size: 4rem;
    letter-spacing: .2rem;
    color: #F28000;

    @media screen and (max-width: 800px) {

        font-size: 2rem;
        letter-spacing: .1rem;

    }

`;

export const TextUx = styled.p`

    width: 28.6rem;
    text-align: justify;

    @media screen and (max-width: 800px) {

        margin: 0 auto 1rem;
        width: 20rem;
        font-size: .9rem;
        text-align: justify;

    }

`;

export const ImageUx1 = styled.img`

    width: 20rem;
    border-radius: 1rem;

    @media screen and (max-width: 800px) {

        margin: 0 auto;
        width: 10rem;
        text-align: center;

    }

`;

export const BottomContentUx = styled.div`

    margin-top: 5rem;

    @media screen and (max-width: 800px) {

        margin-top: 2rem;

    }

`;

export const CardsUx = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 800px) {

        display: block;

    }

`;

export const TextCard = styled.p`

    width: 100%;
    text-align: center;
    border: .01rem solid black;
    padding: 1rem;
    border-radius: 1rem;
    transition: all .3s;

    &:hover {
        transform: translateY(-1rem);
        box-shadow: #6E0AD6 2px 2px, #7918DE 7px 7px, #882CE8 10px 10px, #953CF1 10px 10px, #A752FF 10px 10px;    
    }

    @media screen and (max-width: 800px) {

        font-size: .8rem;
        margin-bottom: 1rem;

    }

`;

export const SpanCard = styled.span`

    color: #6E0AD6;

`;

export const DivAccessibility = styled.div`

    margin-top: 5rem;
    padding: 2.5rem 10rem 5rem;

    @media screen and (max-width: 800px) {

        padding: 2.5rem 1rem;

    }

`;

export const TopContentAccessibility = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;

    @media screen and (max-width: 800px) {
        display: block;
    }

`;

export const VideoContentAccessibility = styled.div`

    display: flex;
    align-items: center;

`;

export const TextContentAccessibility = styled.div`


`;

export const ImgAccessibility = styled.img`

    width: 30rem;
    border-radius: 1rem 5rem;

    @media screen and (max-width: 800px) {

        margin: 0 auto 1rem;
        width: 15rem;

    }

`;

export const TitleAccessibility = styled.h2`

    font-size: 4rem;
    letter-spacing: .2rem;
    color: #F28000;

    @media screen and (max-width: 800px) {

        margin: 0 auto;
        font-size: 2rem;
        letter-spacing: .1rem;
        text-align: center;

    }

`;

export const TextAccessibility = styled.p`

    width: 34.5rem;
    text-align: justify;

    @media screen and (max-width: 800px) {

        margin: 0 auto;
        font-size: .8rem;
        width: 20rem;

    }

`;

export const BottomContentAccessibility = styled.div`

    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 800px) {

        display: block;

    }

`;

export const TipCard = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    gap: 1rem;
    border: .01rem solid black;
    width: 25rem;
    border-radius: 1rem;
    cursor: pointer;

    @media screen and (max-width: 800px) {

        margin: 0 auto 1rem;
        width: 23rem;

    }

`;

export const ImgTipCard = styled.img`

    width: 4rem;
    border: .01rem solid black;
    border-radius: 50%;
    padding: .2rem;
    transition: all .3s;

    &:hover {
        transform: rotate(360deg);
    }

    @media screen and (max-width: 800px) {

        width: 2rem;

    }

`;

export const TipContent = styled.div`

`;

export const TitleTip = styled.h4`

    color: #6E0AD6;

    @media screen and (max-width: 800px) {

        font-size: .9rem;

    }

`;

export const TextTip = styled.p`

    width: 18rem;
    font-size: .9rem;
    text-align: justify;

    @media screen and (max-width: 800px) {

        font-size: .7rem;
    
    }

`;

export const DivChatBot = styled.div`

    width: 100%;
    margin-top: 5rem;
    padding: 2.5rem 10rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LeftContentChatBot = styled.div`



`;

export const TextContentChatBot = styled.div`



`;

export const TitleChatBot = styled.h2`

    font-size: 4rem;
    letter-spacing: .2rem;
    color: #F28000;

`;

export const TextChatBot = styled.p`

    width: 35rem;
    text-align: justify;

`;

export const RightContentChatBot = styled.div`

    width: 30rem;

    .tip3 {
        margin-top: 2rem;
        width: 30rem;
        justify-content: start;
        gap: .5rem;

        p {
            width: 100%;
        }
    }

`;

export const ImgChatBot = styled.img`

    width: 23.2rem;
    border-radius: 1rem;

`;

export const Curiosity = styled.p`

    margin-top: 2rem;
    width: 35rem;
    text-align: center;
    border: .01rem solid black;
    padding: 1rem;
    border-radius: 1rem;
    transition: all .3s;

    &:hover {
        transform: translateX(1rem);
        box-shadow: #6E0AD6 5px 5px, #7918DE 10px 10px, #882CE8 15px 15px, #953CF1 20px 20px, #A752FF 25px 25px;    
    }

`;

export const Alert = styled.div`

    margin-top: 1.2rem;
    width: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    gap: 1rem;
    border: .01rem solid black;
    border-radius: 1rem;

`;

export const ImgAlert = styled.img`

    width: 4rem;
    border: .01rem solid black;
    border-radius: 50%;
    padding: .2rem;
    transition: all .3s;

    &:hover {
        transform: rotate(360deg);
    }

`;

export const ContentAlert = styled.div`



`;

export const TextAlert = styled.p`

    font-size: .9rem;
    text-align: justify;

`;