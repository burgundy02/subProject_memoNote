import { css } from "@emotion/react";

// 뒷 배경
export const mainLayout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d0d0d0ff;
`;

// 네이비색 배경
export const box = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 30px;
    width: 1500px;
    height: 850px;
    background-color: #1b386a;
    font-size: 38px;
    color: #dbdbdb;
`;