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
    margin: 20px;
    
    
    & > div {
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        /* border-bottom: 1px solid #dbdbdb; */
        width: 80%;

        & > p {
            margin: 12px;
            font-size: 35px;
        }
    }

`;
    // 수정 모달창 디자인
export const updateModalAnswerBox = css`
    display: flex;
    margin: 75px;
    flex-direction: column;
    justify-content: space-between;
`;


 // 수정 모달창 스판,인풋 디자인
export const coalescence = css`
    display: flex;
    // 스판 글자 세로로 나와서 스판,인풋 감싸고 있던 디비전의 길이를 늘림
    margin: 24px;
    width: 100%;

    & > textarea { 
        box-sizing: border-box;
        outline: none;
        border: none;
        border-bottom: 1px solid #dbdbdb77;
        // 인풋이 너무 길면 스판글자가 세로로 나옴 그래서 80%로 함
        width: 80%;
        height: 50px;
        color: #dbdbdb;
        font-size: 28px;
        background-color: #1b386a;
        resize: none;
        ::-webkit-scrollbar {
            display: none;
        }
    }

    & > span {
        // 스판오른쪽에 마진주면 인풋이랑 붙어있는 거리가 떨어짐
        margin-right: 7px;
        font-size: 28px;
    }
`;

export const coalescence3 = css`
     display: flex;
    // 스판 글자 세로로 나와서 스판,인풋 감싸고 있던 디비전의 길이를 늘림
    margin: 24px;
    width: 100%;

    & > textarea { 
        box-sizing: border-box;
        outline: none;
        border: none;
        border-bottom: 1px solid #dbdbdb77;
        // 인풋이 너무 길면 스판글자가 세로로 나옴 그래서 80%로 함
        width: 80%;
        height: 100px;
        color: #dbdbdb;
        font-size: 28px;
        background-color: #1b386a;
        resize: none;
        ::-webkit-scrollbar {
            display: none;
        }
    }

    & > span {
        // 스판오른쪽에 마진주면 인풋이랑 붙어있는 거리가 떨어짐
        margin-right: 7px;
        font-size: 28px;
    }
`;

// 수정 모달 확인, 취소 버튼
export const updateButtonBox = css`
    display: flex;
    justify-content: space-between;

    & > button {
        font-size: 25px;
        padding: 0px 30px;
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