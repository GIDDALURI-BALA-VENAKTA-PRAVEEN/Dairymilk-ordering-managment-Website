import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
*{
    margin:0;
    paddong:0;
    box-sizing:border-box;
}

html{
    font-size:80%;
    overflow-x:hidden;
}

h1{
    color:${({theme})=>theme.colors.heading};
    font-size:6rem;
    font_weight:900;
}

h2{
    color:${({theme}) => theme.colors.white};
    font-size:4.4rem;
    font-weight:300;
    white-space:normal;
    text-align:center;
}
`;