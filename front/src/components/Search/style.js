import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
`;

export const mainHeader = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;

export const searcInputhBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    & h4 {
        box-sizing: border-box;
        margin-right: 30px;
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
        cursor: default;
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

export const container = css` // 그냥 박스

`;

export const mainBox = css` // 데이터 조회 될 박스 - 여러개 나옴

`;

export const searchOptions = css`
    display: flex;

`;