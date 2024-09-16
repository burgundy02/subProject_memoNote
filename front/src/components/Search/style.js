import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    overflow: hidden;
`;

export const mainHeader = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;

    & > h2 {
        cursor: default;
    }
`;

export const searcInputhBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    & h4 {
        box-sizing: border-box;
        margin-right: 30px;
        cursor: default;
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
    /* display: flex;
    justify-content: center; */
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

export const searchOptions = css`
    display: flex;
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
    margin: 80px;
    flex-direction: column;
    justify-content: space-between;

`;
 // 수정 모달창 스판,인풋 디자인
export const coalescence = css`
    display: flex;
    // 스판 글자 세로로 나와서 스판,인풋 감싸고 있던 디비전의 길이를 늘림
    margin: 30px;
    width: 100%;

    & > input { 
        box-sizing: border-box;
        outline: none;
        border: none;
        border-bottom: 1px solid #dbdbdb77;
        // 인풋이 너무 길면 스판글자가 세로로 나옴 그래서 80%로 함
        width: 80%;
        color: #dbdbdb;
        font-size: 28px;
        background-color: #1b386a;
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