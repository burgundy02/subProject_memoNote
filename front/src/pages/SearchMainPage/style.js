import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 30px;
    height: 60px;

    & > button {
        font-size: 24px;
    }
`;