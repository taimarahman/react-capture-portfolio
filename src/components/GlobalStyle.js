import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }    

    html {
        @media screen and (max-width: 1700px) {
            font-size: 75%;
        }
    }

    body {
        background-color: #1b1b1b;
        font-family: 'Inter', 'sans-serif';
        overflow-x: hidden;
    }

    button {
        font-family: 'Inter', 'sans-serif';
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        color: #23d997;
        background-color: transparent;
        transition: all 0.5s ease;

        &:hover {
            background-color: #23d997;
            color: #fff;
        }
    }

    h2 {
        font-weight: lighter;
        font-size: 3rem;
    }

    h3 {
        color: #fff;
    }

    h4 {
        font-weight: bold;
        font-size: 2rem;
    }

    span {
        font-weight: bold;
        color: #23d997;
    }
    
    a {
        font-size: 1.1rem;
    }

    p {
        padding: 3rem 0;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
`;

export default GlobalStyle;
