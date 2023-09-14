import { createGlobalStyle } from "styled-components";
import background from "./img/currencyBackground.png";

export const GlobalStylee = createGlobalStyle`

    html {
        box-sizing: border-box;
    }

    *, :after, :before {
        box-sizing: inherit ;
    }

    body {
        background-image: url(${background});
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        font-family: "Orbitron", sans-serif;
        font-size: 17px;
    }
    
`;