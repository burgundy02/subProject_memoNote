import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    overflow: hidden;
`;

export const mainHeader = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;

    & > h2 {
        cursor: default;
    }
`;

export const searcInputhBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    & h4 {
        box-sizing: border-box;
        margin-right: 30px;
        cursor: default;
    }

    & input {
        box-sizing: border-box;
        width: 50%;
        padding: 10px;
        border-radius: 4px; /* 모서리 둥글게 */
        font-size: 24px;
        color: #dbdbdb;
        background-color: #1b386a;
        outline: none;
        border: none;
        border-bottom: 1px solid #dbdbdb;
    }
    & button {
        border: none;
        font-size: 30px;
    }
`;

export const searchButton = css`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    
    & > :not(:nth-last-of-type(1))::after { // 이거 맞나?????
            display: inline-block;
            content: "";
            margin: 0px 5px;
            height: 60%;
        }
`;

export const box = css`
    /* display: flex;
    justify-content: center; */
    box-sizing: border-box;
    margin-left: 110px;
    width: 100%;
    height: 100%;
`;

export const container = css` // 그냥 박스
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 500px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const searchOptions = css`
    display: flex;

`;