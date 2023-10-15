import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    .root {
        font-size: 62.5%;
    }

    .hide {
        display: none;
    }

    .darkmode {
        background-color: #1c1b22;
        color: #D8D8D8;
        border-color: white;
    }

    .darkmode-buttons {
        color: #D8D8D8;
        border-color: white;

        &:hover {
        background-color: #FF9D2F;
        border: none;
        }
    }

    .darkmode-cards {
        border-color: white;
    }

    body {
        font-family: "Poppins";
        transition: all .3s;
    }

    @keyframes position {
    0% {
        margin-top: -11rem;
    }

    25% {
        margin-top: -9rem;
    }

    50% {
        margin-top: -7rem;
    }

    75% {
        margin-top: -9rem;
    }

    100% {
        margin-top: -11rem;
    }
}

    @keyframes positionSetaCima {
    0% {
        margin-top: 5rem;
    }

    25% {
        margin-top: 6rem;
    }

    50% {
        margin-top: 7rem;
    }

    75% {
        margin-top: 6rem;
    }

    100% {
        margin-top: 5rem;
    }
}

    @keyframes positionSetaDireita {
    0% {
        margin-right: 3.3rem;
    }

    25% {
        margin-right: 4.3rem;
    }

    50% {
        margin-right: 5.3rem;
    }

    75% {
        margin-right: 4.3rem;
    }

    100% {
        margin-right: 3.3rem;
    }
}
`;