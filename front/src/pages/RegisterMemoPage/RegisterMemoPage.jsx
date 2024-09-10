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
            <div css={s.backButtonBox}>
                <button onClick={handleBackButtonOnClick}>취소</button>
            </div>
            <div css={s.titleBox}>
                <h4>✏️문제 추가</h4>
            </div>
            <div css={s.box}>
                <div css={s.inputBox1}>
                    <span>문제</span>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div css={s.inputBox1}>
                    <span>정답</span>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div css={s.inputBox2}>
                    <span>예제</span>
                    <div>
                        <textarea name=""></textarea>
                    </div>
                </div>
            </div>
            <div>
                <button css={s.addButton}>추가</button>
            </div>
        </div>
    );
}

export default RegisterMemoPage;