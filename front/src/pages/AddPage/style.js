import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 30px;
    width: 100%;
    height: 100%;

    h4 {
        margin-top: 30px;
        margin-bottom: 10px;
        color: #dbdbdb;
        cursor: default;
    }
`;

export const backButtonBox = css`
    display: flex;
    padding-left: 20px;
    width: 100%;

    & > button{ 
        font-size: 24px;
    }
`;

export const titleBox = css`
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding-bottom: 15px;
    border-bottom: 2px solid #dbdbdb;
    width: 90%;
`;

export const box = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 0px 50px;
    padding: 20px;
    width: 100%;
`;

export const inputBox1 = css`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 85%;

    & > span {
        box-sizing: border-box;
        font-size: 24px;
        margin: auto 0;
        cursor: default;
    }

    & > div {
        box-sizing: border-box;
        border-bottom: 1px solid #dbdbdb;
        margin-left: 20px;
        width: 35%;

        & > input {
            box-sizing: border-box;
            border: none;
            padding: 30px;
            width: 100%;
            height: 80px;
            outline: none;
            font-size: 24px;
            color: #dbdbdb;
            background-color: #1b386a;
        }
    }
`;

export const inputBox2 = css`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 85%;

    & > span {
        box-sizing: border-box;
        font-size: 24px;
        margin: auto 0;
        cursor: default;
    }

    & > div {
        box-sizing: border-box;
        border-bottom: 1px solid #dbdbdb;
        margin-left: 20px;
        width: 50%;

        & > textarea {
            box-sizing: border-box;
            border: none;
            margin: 30px 0px;
            padding: 30px;
            width: 100%;
            height: 100px;
            outline: none;
            font-size: 24px;
            color: #dbdbdb;
            resize: none;
            background-color: #1b386a;
            overflow-y: auto;
    
            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
`;

export const addButton = css`
    font-size: 24px;
`;