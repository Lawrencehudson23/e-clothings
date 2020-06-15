import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    // *,
    // *::after,
    // *::before {
    // margin: 0;
    // padding: 0;
    // box-sizing: inherit;
    // }

    @font-face {
        font-family: 'Couture Bold';
        font-style: normal;
        font-weight: normal;
        src: local('Couture Bold'), url('couture-bld.woff') format('woff');
    }
    
    @font-face {
        font-family: 'Couture Bold Italic';
        font-style: normal;
        font-weight: normal;
        src: local('Couture Bold Italic'), url('couture-bldit.woff') format('woff');
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
    
    .name {
        font-size: 12px;
    
    }
    
    
    .price {
        font-size: 12px;
    }
    
    .dollar {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 12px;
    }
`;
