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

export const box = css`
    display: flex;
    justify-content: center;
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

export const mainBox = css` // 데이터 조회 될 박스 - 여러개 나옴
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    margin: 20px;
    padding: 50px 10px;
    padding-right: 0;
    width: 40%;

    & > p {
        display: flex;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 90%;
        font-size: 28px;
        cursor: pointer;
    }

    &:nth-last-of-type(1) {
        justify-self: flex-start;
    }
`;

export const buttonBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 150px;

    & > button {
        font-size: 20px;

        &:nth-last-of-type(1) {
            margin-left: 5px;
        }
    }
`;

export const searchOptions = css`
    display: flex;

`;

export const modalBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    & > p {
        margin: 30px;
        font-size: 28px;
    }

    & > div {
        box-sizing: border-box;
        margin: 30px;
        font-size: 28px;
    }
`;

export const modalButtonBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    & > button {
        font-size: 20px;
    }
`;