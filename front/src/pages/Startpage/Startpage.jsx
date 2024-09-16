import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { instance } from '../../apis/util/instance';

function Startpage(props) {
    // 상태
    const navigate = useNavigate();
    // useState: 배열이다, useState배열의 첫 번째 값은 상태, 두 번째 값은 setter함수 / toggle
    const [ toggle, setToggle ] = useState("question");

    const question = useQuery(
        ["questionQuery"],
        async () => await instance.get("/memo"),
        {
            retry: 0,
        }
    );

    const handleButtonOnClick = () => {
        navigate("/");
    }

    const handleRandomButtonOnClick = () => {
        setToggle("question");
        question.refetch();
    }

    const handleToggleOnClick = () => {
        if(toggle === "question") {
            // setToggle하면 answer이라는 문자열 값으로 덮어씌어짐/ toggle에 들어감
            setToggle("answer");
            return; // 함수 빠져나가는 return
        }
        setToggle("question");
    }

    return (
        <>
            <div css={s.buttonBox}> 
                <button onClick={handleButtonOnClick}>취소</button>
                <button onClick={handleRandomButtonOnClick}>다시 풀기</button>
            </div>
            <div css={s.layout}>
                {/* <div css={s.logoBox}>
                    <div>
                        <h3>LOGO</h3>
                    </div>
                </div> */}
                {
                    toggle === "question" ? 
                    <div css={s.mainBox} onClick={handleToggleOnClick}>
                        <div css={s.titleBox}>
                            <div>
                                {/* 이모티콘: window + . */}
                                <h4>문제를 맞춰보세요😊</h4>
                            </div>
                        </div>
                        <div css={s.middleBox1}>
                            <p>
                                문제 : {question?.data?.data.question}
                            </p>
                        </div>
                        <div css={s.questionBox}>
                            <div >
                                <h5>정답을 보려면 화면을 클릭하세요</h5>
                            </div>
                        </div>
                    </div>
                    :
                    <div css={s.mainBox} onClick={handleToggleOnClick}>
                        <div css={s.lineBox}>
                            <h4>문제의 답입니다😁</h4>
                        </div>
                        <div css={s.middleBox2}>
                            <p>문제: {question?.data?.data.question}</p>
                            <p>정답: {question?.data?.data.answer}</p>
                            <p>예제: {question?.data?.data.explainMemo}</p>
                        </div>
                        <div css={s.answerBox}>
                            <div >
                                <h5>문제를 보려면 화면을 클릭하세요</h5>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}

export default Startpage;

