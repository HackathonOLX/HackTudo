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
`;