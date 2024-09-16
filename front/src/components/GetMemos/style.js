import { css } from "@emotion/react";

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
    width: 600px;
    height: 139px;

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

export const modalBox = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
`;

export const dateBox = css`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 10px;

    & > span {
        cursor: default;
        font-size: 18px;

        &:nth-of-type(1) {
            margin-bottom: 3px;
        }
    }
`;

export const dataBox = css`
    flex-grow: 1;
    padding: 30px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
    
    & > p {
        border-bottom: 1px solid #dbdbdb77;
        margin: 80px 0px;
        padding-bottom: 20px;
        font-size: 28px;
        cursor: default;
    }

    & > div {
        border-bottom: 1px solid #dbdbdb77;
        padding-bottom: 20px;
        font-size: 28px;
        cursor: default;
    }
`;

// 수정 모달창 디자인
export const updateModalBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    

    & > div {
        
        box-sizing: border-box;
        border-bottom: 1px solid #dbdbdb;
        width: 80%;

    }
`;

export const modalButtonBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    & > button {
        font-size: 20px;
        margin-bottom: 70px;
    }
`;