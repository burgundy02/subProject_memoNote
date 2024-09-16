import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import ReactModal from 'react-modal';

function GetMemos({data}) {
    const [isModalOpen, setModalOpen] = useState(false);
    // 수정 버튼 눌렀을 때 모달 오픈
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

    const [memoId, setMemoId] = useState(0);

    const handleQuestionOnClick = (memoId) => {
        setMemoId(memoId);
        setModalOpen(true);
    }

    // 모달에서 수정 완료 버튼
    const updateOkButton = () => {

    }

    // 수정 버튼 눌렀을 때 모달창 false에서 true로 띄우기
    const handleUpdateOnClick = () => {
        setIsUpdateModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }
    // 수정 모달창 닫기
    const closeUpdateModal = () => {
        setIsUpdateModalOpen(false);
    }

    return (
        <div>
            <div id={data.memoId} css={s.mainBox}>
                <p onClick={() => handleQuestionOnClick(data.memoId)}>▫️{data.question}</p>
                <div css={s.buttonBox}>
                    <button onClick={handleUpdateOnClick}>수정</button>
                    <button>삭제</button>
                </div>
            </div>
            {
                memoId === data.memoId &&
                <ReactModal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    style={{
                        content: {
                            boxSizing: 'border-box',
                            transform: 'translate(-50%, -50%)',
                            top: '50%',
                            left: '50%',
                            borderRadius: '30px',
                            width: '700px',
                            height: '700px',
                            color: '#dbdbdb',
                            backgroundColor: '#1b386a'
                        }
                    }}
                >
                    <div css={s.modalBox}>
                        <div css={s.dateBox}>
                            <span>등록일: {new Date(data.registerDate).toLocaleString()}</span>
                            <span>마지막 수정일: {new Date(data.updateDate).toLocaleString()}</span>
                        </div>
                        <div css={s.dataBox}>
                            <p>문제: {data.question}</p>
                            <p>정답: {data.answer}</p>
                            <div>예제: {data.explainMemo}</div>
                        </div>
                        <div css={s.modalButtonBox}>
                            <button onClick={closeModal}>닫기</button>
                        </div>
                    </div>
                </ReactModal>
                
            }
            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={{
                    content: {  
                        boxSizing: 'border-box',
                        transform: 'translate(-50%, -50%)',
                        top: '50%',
                        left: '50%',
                        borderRadius: '30px',
                        width: '700px',
                        height: '700px',
                        color: '#dbdbdb',
                        backgroundColor: '#1b386a'
                    }
                }}
            >
                <div css={s.modalBox}>
                    <p>문제</p>
                    <p>정답</p>
                    <div>예제</div>
                    <div css={s.modalButtonBox}>
                        <button onClick={closeModal}>닫기</button>
                    </div>
                </div>
            </ReactModal>
            <ReactModal 
                isOpen={isUpdateModalOpen}
                onRequestClose={closeUpdateModal}
                style={{
                    content: {
                        boxSizing: 'border-box',
                        transform: 'translate(-50%, -50%)',
                        top: '50%',
                        left: '50%',
                        borderRadius: '30px',
                        width: '700px',
                        height: '700px',
                        color: '#dbdbdb',
                        backgroundColor: '#1b386a'
                    }
                }}
            >
                <div css={s.updateModalBox}>
                    <div>
                        <p>문제 수정하기</p>
                    </div>
                    <div css={s.updateModalAnswerBox}>

                        <div css={s.coalescence}>
                            <span>문제:</span><input type="text" />
                        </div>
                        <div css={s.coalescence}>
                            <span>정답:</span><input type="text" />
                        </div>
                        <div css={s.coalescence}>
                            <span>예제:</span><input type="text" />
                        </div>
                    </div>
                    <div css={s.updateButtonBox}>
                        <button onClick={updateOkButton}>확인</button>
                        <button onClick={closeUpdateModal}>취소</button>
                    </div>
                </div>
            </ReactModal>
        </div>
    );
}

export default GetMemos;