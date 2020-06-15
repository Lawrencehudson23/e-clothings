import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Couture Bold';
        font-style: normal;
        font-weight: normal;
        src: local('Couture Bold'), url('./font/couture-bld.otf') format('otf');
    }

    @font-face {
        font-family: 'Couture Bold Italic';
        font-style: normal;
        font-weight: normal;
        src: local('Couture Bold Italic'), url('./font/couture-bldit.otf') format('otf');
    }
    
    body {
        font-family: "Couture Bold";
        padding: 20px 40px;

        @media screen and (max-width:800px){
            padding:10px;

        }

    }
    
    a {
        text-decoration: none;
        color: #000;
    }
    
    * {
        box-sizing:border-box;
    }

`;
