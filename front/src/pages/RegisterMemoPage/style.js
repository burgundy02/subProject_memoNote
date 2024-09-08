import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-radius: 30px;
    padding: 30px;
    width: 1500px;
    height: 850px;

    h4 {
        margin-top: 30px;
        margin-bottom: 10px;
        color: #dbdbdb;
        cursor: default;
    }
`;

export const buttonBox = css`
    display: flex;
    width: 100%;

    button {
        box-sizing: border-box;
        font-size: 20px;
    }
`;

export const inputBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 2px solid #dbdbdb;
    width: 65%;
    height: 85%;

    input {
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #dbdbdb;
        margin: 10px;
        padding: 30px;
        width: 600px;
        height: 80px;
        outline: none;
        font-size: 20px;
        color: #dbdbdb;
        background-color: #1b386a;
        cursor: pointer;

        &::placeholder {
            color: #dbdbdb;
        }
    }

    textarea {
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #dbdbdb;
        margin: 30px;
        padding: 30px;
        width: 600px;
        height: 100px;
        outline: none;
        font-size: 20px;
        color: #dbdbdb;
        resize: none;
        background-color: #1b386a;
        cursor: pointer;
        overflow-y: auto;

        &::-webkit-scrollbar {
            display: none;
        }

        &::placeholder {
            color: #dbdbdb;
        }
    }

    button {
        box-sizing: border-box;
        margin-top: 20px;
        width: 800px;
        font-size: 20px;
    }
`;