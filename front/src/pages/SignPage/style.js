import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:unset;
    align-items: center;
    flex-direction: column;
    padding: 15px;
    h2{
        font-size: 30px;
    }
`;

export const signLayout = css`
    margin: 20px 0 0 0;
    box-sizing: border-box;
    width: 650px;
    height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 2px solid black; */
    border-radius: 15px;
`;
export const loginContainer = css`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;

`;
export const boxContainer = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const loginBox = css`
    box-sizing: border-box;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-around;
    h2{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        border-radius: 15px 0 0  0;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
    &>h2:nth-of-type(1){
        /* background-color: #333333; */
        border-bottom: 2px solid #dbdbdb;
    }
`;

export const signupBox = css`
    box-sizing: border-box;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-around;
    h2{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        border-radius: 0 15px 0  0;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
    &>h2:nth-of-type(2){
        border-bottom: 2px solid #dbdbdb;
    }
`;

export const inputBox = css`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > button{
        width: 100%;
        height: 50px;
        font-size: 24px;
        margin: 15px 0;
    }
`;

export const inputSection = css`
    display: flex;
    box-sizing: border-box;
    align-items: flex-end;
    font-size: 24px;
    /* padding: 0 50px; */
    width: 75%;
    height: 80px;
    &>span{
        min-width: 100px;
        width: 100px;
        padding: 0;
        margin: 0 15px 0 0 ;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        line-height: 2;
    }
    &>input {
        box-sizing: border-box;
        height: 40px;
        border: none;
        outline: none;
        color: #dbdbdb;
        width: 100%;
        font-size: 24px;
        background-color: #1b386a;
        border-bottom: 1px solid #dbdbdb;

        &:focus{
            border-bottom: 2px solid #dbdbdb;
        }
    }

`;