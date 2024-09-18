import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import ReactModal from 'react-modal';
import { deleteQuestionApi } from '../../apis/memoApi/memoApi';
import { instance } from '../../apis/util/instance';

function GetMemos({ data }) {
    const [isModalOpen, setModalOpen] = useState(false);
    // 수정 버튼 눌렀을 때 모달 오픈
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

    const [memoId, setMemoId] = useState(0);
    const [updateMemo, setUpdateMemo] = useState({
        memoId: data.memoId,
        question: data.question,
        answer: data.answer,
        explainMemo: data.explainMemo
    });

    const handleQuestionOnClick = (memoId) => {
        setMemoId(memoId);
        setModalOpen(true);
    }

    // 모달에서 수정 완료 버튼
    const updateOkButton = async () => {
        try {                  
            // trim(): 띄어쓰기를 제외한 문자열(띄어쓰기만 해서 수정완료하는 것을 방지하기 위해서 트림을 씀)
            if(updateMemo.question.trim() === "") {
                alert("문제를 입력해 주세요 ");
                if(updateMemo.answer.trim() === "") {
                    alert("정답을 입력해 주세요 ");
                    return;
                }
                return;
            }
            if(updateMemo.answer.trim() === "") {
                alert("정답을 입력해 주세요 ");
                return;
            }
            await instance.put("/memo", updateMemo);
            alert("수정이 완료 됐습니다");
            closeUpdateModal();
        } catch {
            alert("수정 중 오류가 발생했습니다.");
        }

    }

    // 수정 버튼 눌렀을 때 모달창 false에서 true로 띄우기
    const handleUpdateOnClick = (memoId) => {
        setMemoId(memoId);
        setIsUpdateModalOpen(true);
    }
    const handleDeleteOnClick = async (memoId) => {
        if (!window.confirm("삭제 하시겠습니까? ")) {
            return;
        }
        const response = await deleteQuestionApi(memoId);
        if (!response.data) {
            console.log(response);
            alert("오류발생 다시시도 하세요");
        }
        alert("삭제 되었습니다!");
    }

    const handleUpdateInputOnChange = (e) => {
        setUpdateMemo(memo => ({
            ...memo,
            [e.target.name]: e.target.value,
        }));
    }

    const closeModal = () => {
        setModalOpen(false);
    }
    // 수정 모달창 닫기
    const closeUpdateModal = () => {
        setIsUpdateModalOpen(false);
    }

    return (
        <div key={data.memoId} >
            <div css={s.mainBox}>
                <p onClick={() => handleQuestionOnClick(data.memoId)}>▫️{data.question}</p>
                <div css={s.buttonBox}>
                    <button onClick={() => handleUpdateOnClick(data.memoId)}>수정</button>
                    <button onClick={() => handleDeleteOnClick(data.memoId)}>삭제</button>
                </div>

            </div>
            {
                // true && 값 => 값을 보여줌, 반대면 안보여줌
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
                                <div>설명: {data.explainMemo}</div>
                            </div>
                            <div css={s.modalButtonBox}>
                                <button onClick={closeModal}>닫기</button>
                            </div>
                        </div>
                    </ReactModal>
            }
            {
                memoId === data.memoId &&
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
                                backgroundColor: '#1b386a',
                                overflowY: 'hidden'
                            }
                        }}
                    >
                        <div css={s.updateModalBox}>
                            <div>
                                <p>문제 수정하기</p>
                            </div>
                            <div css={s.updateModalAnswerBox}>

                                <div css={s.coalescence}>
                                    <span>문제:</span>
                                    <textarea name="question" onChange={handleUpdateInputOnChange}  value={updateMemo.question}></textarea>
                                </div>
                                <div css={s.coalescence}>
                                    <span>정답:</span>
                                    <textarea name="answer" onChange={handleUpdateInputOnChange}  value={updateMemo.answer}></textarea>
                                </div>
                                <div css={s.coalescence3}>
                                    <span>설명:</span>
                                    <textarea name="explainMemo" onChange={handleUpdateInputOnChange}  value={updateMemo.explainMemo}></textarea>
                                </div>
                            </div>
                            <div css={s.updateButtonBox}>
                                <button onClick={updateOkButton}>확인</button>
                                <button onClick={closeUpdateModal}>취소</button>
                            </div>
                        </div>
                    </ReactModal>
            }
        </div>
    );
}

export default GetMemos;