import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useNavigate } from 'react-router-dom';

function Startpage(props) {
    // 상태
    const navigate = useNavigate();
    // useState: 배열이다, useState배열의 첫 번째 값은 상태, 두 번째 값은 setter함수 / toggle
    const [ toggle, setToggle ] = useState("question");


    const handleButtonOnClick = () => {
        navigate("/");
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
        <div css={s.layout}>
            {/* <div css={s.logoBox}>
                <div>
                    <h3>LOGO</h3>
                </div>
            </div> */}
            <div css={s.buttonBox}> 
                <button onClick={handleButtonOnClick}>취소</button>
                <button>다시 풀기</button>
            </div>
            {
                toggle === "question" ? 
                <div css={s.mainBox} onClick={handleToggleOnClick}>
                    <div css={s.titleBox}>
                        <div>
                            {/* 이모티콘: window + . */}
                            <h4>영어단어의 뜻을 맞춰보세요😊</h4>
                        </div>
                    </div>
                    <div css={s.middleBox}>
                        <p>
                            문제 : fire
                        </p>
                    </div>
                    <div css={s.answerBox}>
                        <div>
                            <h5>답을 확인하려면 화면을 클릭하세요</h5>
                        </div>
                    </div>
                </div>
                :
                <div css={s.mainBox} onClick={handleToggleOnClick}>
                    <h1>정답화면 구현준</h1>
                </div>
            }
        </div>
    );
}

export default Startpage;

