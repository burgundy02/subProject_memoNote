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
        const errorFieldMessage = {
            quest: "문제를 입력해주세요",
            answer: "정답 입력해주세요",
            // explainMemo: "설명을 입력해주세요",
        }

        for (let [key, value] of Object.entries(errorFieldMessage)) {
            if (questionInput[key].trim() === "") {
                alert(value);
                return;
            }
        }
        if (!window.confirm("추가하시겠습니까?")) {
            return;
        }

        const addData = await addQuestionApi(questionInput);
        if (!addData.data) {
            alert("문제 추가에 실패 하였습니다 다시 시도하세요.")
            return;
        }
        if (window.confirm("추가성공! 확인하시겠습니까?")) {
            navigate("/memo/search")
        }
        setQuestionInput({
            writer: "default",
            quest: "",
            answer: "",
            explainMemo: "",
        })
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
                <div css={s.inputSection}>
                    <span>문제</span>
                    <input name='quest' type="text" onChange={handleInputOnChnage} value={questionInput.quest} />
                </div>
                <div css={s.inputSection}>
                    <span>정답</span>
                    <input name='answer' type="text" onChange={handleInputOnChnage} value={questionInput.answer} />
                </div>
                <div css={s.inputBox2}>
                    <span>설명</span>
                    <textarea name='explainMemo' onChange={handleInputOnChnage} value={questionInput.explainMemo} />
                </div>
            </div>
            <div>
                <button css={s.addButton} onClick={handleSubmitClick}>추가</button>
            </div>
        </div>
    );
}

export default AddPage;