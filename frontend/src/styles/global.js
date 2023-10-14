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

    body {
        font-family: "Poppins";
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