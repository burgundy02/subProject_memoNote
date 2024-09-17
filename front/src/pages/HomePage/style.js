import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`;
// 전체설정
export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 15px;
`;

// 헤더
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
    // 아이콘 리스트
    ul {
        display: flex;
        align-items: center;
        & > li{
            display: flex;
            align-items: center;
        }
        
        // 아이콘
        & > li > svg{
            /* margin: 0 5px; */
        }
    }
`;
export const body = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    /* background-color : white; */
    width: 100%;
    flex-grow: 1;
    border-radius: 15px;
`;
export const countViewContainer = css`
    position: absolute;
    top:75%;
    box-sizing: border-box;
    display: flex;
    /* justify-content: space-around; */
    justify-content: center;
    width: 100%;
    height: 100px;
    /*
    & > *{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #dbdbdb;
        width: 30%;
        height: 100%;
    }
    */
    /*
    &>:nth-child(1){
        border-radius: 15px 0 0 15px;
    }
    &>:nth-child(2){
    }
    &>:nth-child(3){
        border-radius: 0 15px 15px 0;
    }
        */
`;
export const moveViewContainer = css`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* flex-grow: 1; */
    /* padding: 20px; */
    /* margin: 10px; */
`;
export const viewText = css`
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 120px; */
    border-bottom: 2px solid #dbdbdb;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
    a{
        text-decoration: none;
        color: #dbdbdb;
    }
`;
export const countBox = css`
    box-sizing: border-box;
    display: flex;
    /* flex-grow: 1; */
    width: 150px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 40px;
    border-bottom: 2px solid #dbdbdb;

    &>span:nth-of-type(1){
        font-size: 34px;
    }
    &>span:nth-of-type(2){
        font-size: 18px;
    }
`;


export const footer = css`
    margin: 5px 0;
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: default;

    font-size: 15px;
    ul{
        display: flex;
        align-items: center;
        & > li {
            &::before   {content: "["}
            &::after    {content: "]"}

            margin: 0 5px;
            font-size: 15px;
        }
    }
`;