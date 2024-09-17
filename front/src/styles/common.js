import { css } from "@emotion/react";

export const reset = css`
            /* 글꼴 : https://fonts.google.com/selection/embed */
    @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
    * {
        font-family: "Jua", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    html, body, #root {
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: white;
    }
    /* 폰트 크기의 팽창을 방지합니다. */
    html {
        -moz-text-size-adjust: none;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
    }

    h1, h2, h3, ul, p {
        margin: 0;
        padding: 0;
    }

    ul, ol {
        list-style-type: none;
    }

    button {
        border: none;
        color: #85d2f3;
        background-color: transparent;
        cursor: pointer;
    }
    button:active {
        color: #296ce9;
        background-color: transparent;
    }

    button:disabled {
        color: #087fff40;
        background-color: transparent;
        cursor: default;
    }
`;