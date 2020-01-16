import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    *:focus {
        outline: 0;
    }
    html, body, #root {
        height: 100%;
    }
    body {
        min-height: 100%;
        background: #E5E6F0;
        -webkit-font-smoothing: antialiased !important;
        text-rendering: optimizeLegibility !important;
    }
    body, input, button {
        font: 14px Roboto, sans-serif;
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    button {
        border: 0;
        cursor: pointer;
    }
`;
