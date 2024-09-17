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
    height: 70px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    border: 2px solid #dbdbdb;
    border-top: none;
    border-left: none;
    border-right: none;

    & > div{
        box-sizing: border-box;
        padding-right: 130px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 790px;
    }
    h3{
        width: 250px;
        width: 100%;
        padding: 0 0 0 15px;
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

    & > h3 > span {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
        
        & > span {
            margin: -5px 0;
            font-size: 25px;
        }
    }
`;

export const logoItems = css`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 270px;
    height: 100%;
    font-size: 24px;
    
    & > button{
        width: 100%;
        height: 100%;
        padding: 0;
        font-size: 16px;
    }
`;