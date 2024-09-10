import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useNavigate } from 'react-router-dom';

function Startpage(props) {
    // 상태
    const navigate = useNavigate();

    const handleButtonOnClick = () => {
        navigate("/");
    }

    return (
        <div css={s.layout}>
            {/* <div css={s.logoBox}>
                <div>
                    <h3>LOGO</h3>
                </div>
            </div> */}
            <div css={s.buttonBox}> 
                <button>다시 풀기</button>
            </div>
            <div css={s.mainBox}>
                <div css={s.titleBox}>
                    <div>
                        {/* 이모티콘: window + . */}
                        <h5>영어단어의 뜻을 맞춰보세요😊</h5>
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
        </div>
    );
}

export default Startpage;

