import styled from "styled-components";

export const Container = styled.div`

    .toggle-container {
      display: inline-block;
      position: relative;
    }

    /* Oculte a checkbox */
    .toggle-container input[type="checkbox"] {
      display: none;
    }

    /* Estilize o botão deslizante */
    .toggle-slider {
      width: 42px;
      height: 22px;
      background-color: #ccc;
      border-radius: 20px;
      position: relative;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    /* Estilize o círculo deslizante */
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

    /* Estilize a checkbox quando estiver marcada */
    .toggle-container input[type="checkbox"]:checked + .toggle-slider {
      background-color: #525252; /* Cor quando ativado */
    }

    .toggle-container input[type="checkbox"]:checked + .toggle-slider:before {
      transform: translateX(20px);
    }

`;

export const Header = styled.header`
    
    padding: 2.5rem 3.5rem;
    display: flex;
    justify-content: space-between;

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

`;

export const Main = styled.main`

    margin-top: 5rem;
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
    background-color: transparent;
    border: .01rem solid black;
    font-family: "Poppins";
    padding: .5rem 2rem;
    border-radius: .5rem;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background-color: #6E0AD6;
        color: white;
    }

`;


export const ImageMain = styled.img`

    top: 0;
    margin-top: -11rem;
    position: absolute;
    width: 23rem;
    animation: position 3s linear infinite;
`;

export const DivHelpChatBot = styled.div`

    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 3.5rem;
    border: .01rem solid black;
    border-bottom: none;
    border-radius: .5rem .5rem 0 0;
    display: flex;
    align-items: center;
    gap: .5rem;
    padding: .4rem 1.6rem;
    cursor: pointer;

`;

export const HelpText = styled.p`

    font-size: 1rem;

`;

export const HelpImage = styled.img`

    width: 1.2rem;

`;