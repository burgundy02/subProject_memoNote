import { css } from "@emotion/react";

// 헤더
export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const header = css`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    border: 2px solid #dbdbdb;
    border-top: none;
    border-left: none;
    border-right: none;

    & > div{
        box-sizing: border-box;
        padding-right: 150px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 790px;
    }
    h3{
        width: 250px;
        width: 100%;
        display: flex;
        justify-content: center;
        cursor: pointer;
        &>span{
            display: flex;
            align-items: center;
        }
        &>span:hover{
            transform: scale(1.1);
        }
    }
`;
export const logo = css`
    position: relative;
`;

export const logoItems = css`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 300px;
    height: 100%;
    
    & > button{
        width: 100%;
        height: 100%;
        padding: 0;
        font-size: 16px;
    }
`;