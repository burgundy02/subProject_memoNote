import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
`;

export const mainHeader = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;

export const searcInputhBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    & input {
        width: 80%;
        padding: 10px;
        border: 1px solid #ccc; /* 테두리 추가 */
        border-radius: 4px; /* 모서리 둥글게 */
        font-size: 16px; /* 텍스트 크기 */
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

export const container = css` // 그냥 박스

`;

export const mainBox = css` // 데이터 조회 될 박스 - 여러개 나옴

`;

export const searchOptions = css`

`;