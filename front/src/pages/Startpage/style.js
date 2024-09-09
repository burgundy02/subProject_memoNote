import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
`;

export const logoBox = css`
    display: flex;
    justify-content: center;
    height: 60px;

    // 자식 요소 div
    & > div {
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        padding-bottom: 10px;
        border-bottom: 2px solid #dbdbdb;
        margin-bottom: 60px;
        width: 100%;
        height: 70px;

        & > h3 {
            cursor: default;
            /* // h3를 hover했을 때 크기가 커짐
            &:hover {
                transform: scale(1.1);
            } */
        }
    }

`;

export const buttonBox = css`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    height: 60px;

    & > button {
        font-size: 24px;
    }
`;

export const mainBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid white;
    border-radius: 30px;
    width: 1390px;
    height: 650px;
`;

export const titleBox = css`
    display: flex;
    justify-content: center;
    width: 100%;

    & > div {
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        width: 70%;
        // border-bottom에 줄 추가했기 때문에 div크기 만큼 bottom에 줄 생김(줄을 늘리고 싶으면 div 넓비를 늘리면 됨)
        border-bottom: 1px solid #dbdbdb;
        height: 115px;

        & > h5 {
            cursor: default;
        }
    }

`;

export const middleBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    // 남는 공간을 먹음(1은 비율 (몇 대 몇 대 몇): 1만큼 먹는다 )
    flex-grow: 1;

    & > p {
        height: 50px;
    }
`;

export const answerBox = css`
    display: flex;
    justify-content: center;
    width: 100%;

    & > div {
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        border-top: 1px solid #dbdbdb;
        width: 70%;
        height: 65px;
    
    
        & > h5 {
            box-sizing: border-box;
            margin: 10px 0px 0px;
            cursor: pointer;
            &:hover {
                transform: scale(1.1);
            }

        }
    }
    
`;
