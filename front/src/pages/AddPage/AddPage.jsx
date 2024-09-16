import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import { addQuestionApi } from '../../apis/memoApi/memoApi';

function AddPage(props) {

    const [questionInput, setQuestionInput] = useState({
        writer: "default",
        quest: "",
        answer: "",
        explainMemo: "",
    });

    const navigate = useNavigate();
    const handleBackButtonOnClick = () => {
        navigate("/");
    }

    const handleInputOnChnage = (e) => {
        setQuestionInput(inputs => ({
            ...inputs,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmitClick = async () => {
        const addData = await addQuestionApi(questionInput);
        console.log(addData);
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
                        <input name='quest' type="text" onChange={handleInputOnChnage} value={questionInput.quest} />
                    </div>
                </div>
                <div css={s.inputBox1}>
                    <span>정답</span>
                    <div>
                        <input name='answer' type="text" onChange={handleInputOnChnage} value={questionInput.answer} />
                    </div>
                </div>
                <div css={s.inputBox2}>
                    <span>예제</span>
                    <div>
                        <textarea name='explainMemo' onChange={handleInputOnChnage} value={questionInput.explainMemo} />
                    </div>
                </div>
            </div>
            <div>
                <button css={s.addButton} onClick={handleSubmitClick}>추가</button>
            </div>
        </div>
    );
}

export default AddPage;