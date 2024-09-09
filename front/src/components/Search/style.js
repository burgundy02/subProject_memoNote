import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
`;

export const mainBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;

export const searchBox = css`
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
    }
`;

export const container = css`

`;