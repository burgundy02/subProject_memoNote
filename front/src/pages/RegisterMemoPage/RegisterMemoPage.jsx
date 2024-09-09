import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
const yy =css`
box-sizing: border-box;
display: flex;
border-bottom: 1px solid #dbdbdb;
&>input{
    border: none;
}

`;

function RegisterMemoPage(props) {
    const navigate = useNavigate();

    const handleBackButtonOnClick = () => {
        navigate("/");
    }

    return (
        <div css={s.layout}>
            <div css={s.buttonBox}>
                <button onClick={handleBackButtonOnClick}>취소</button>
            </div>
            <h4>✏️단어 추가</h4>
            <div css={s.inputBox}>
                {/* <div css={yy}>
                    <span>단어</span>
                    <input type="text" />
                </div>
                 */}
                <input type="text" placeholder="단어" />
                <input type="text" placeholder="뜻" />
                <textarea name="" id="" placeholder="예제"></textarea>
                <button>추가</button>
            </div>
        </div>
    );
}

export default RegisterMemoPage;