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
    width: 80%;
`;

// export const inputBox1 = css`
//     display: flex;
//     justify-content: center;
//     width: 100%;
//     height: 85%;

//     & > span {
//         box-sizing: border-box;
//         font-size: 24px;
//         margin: auto 0;
//         cursor: default;
//     }

//     & > div {
//         box-sizing: border-box;
//         border-bottom: 1px solid #dbdbdb;
//         margin-left: 20px;
//         width: 35%;

//         & > input {
//             box-sizing: border-box;
//             border: none;
//             padding: 30px;
//             width: 100%;
//             height: 80px;
//             outline: none;
//             font-size: 24px;
//             color: #dbdbdb;
//             background-color: #1b386a;
//         }
//     }
// `;

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
        line-height: 1.7;
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

export const inputBox2 = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 75%;
    /* height: 80px; */

    & > span {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        font-size: 24px;
        margin: 0 15px 0 0;
        cursor: default;
    }

    & > textarea {
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        margin: 30px 0px;
        padding: 30px;
        flex-grow: 1;
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
        &:focus{
            border: 2px solid #dbdbdb;
        }
    }
`;

export const addButton = css`
    font-size: 24px;
`;