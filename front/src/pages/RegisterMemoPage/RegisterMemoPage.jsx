import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';

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
                <input type="text" placeholder="단어" />
                <input type="text" placeholder="뜻" />
                <textarea name="" id="" placeholder="예제"></textarea>
                <button>추가</button>
            </div>
        </div>
    );
}

export default RegisterMemoPage;