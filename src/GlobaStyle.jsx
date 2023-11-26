import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Anybody', sans-serif;
        font-size: 62.5%;
        
    }

    body {
        max-width: 1920px;
        overflow-x: hidden;
    }
`;

export default GlobalStyle;