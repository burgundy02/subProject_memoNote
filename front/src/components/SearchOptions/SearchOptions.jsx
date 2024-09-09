/** @jsxImportSource @emotion/react */
import React from 'react';
import Modal from 'react-modal';
import * as s from './style';  // 스타일 파일에서 스타일을 가져옴

// 모달의 root 엘리먼트를 설정해야 합니다.
Modal.setAppElement('#root');

function SearchOptions({ isOpen, onRequestClose, searchType, setSearchType, handleSearchButtonClick }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}  // 모달을 닫는 함수
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '20px',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    border: '1px solid #ccc',
                    width : '200px',
                    height: '200px'
                },
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                },
            }}
        >
            <div css={s.searchOption}>
                <h3>검색 유형 선택</h3>
                <label>
                    <input
                        type="radio"
                        name="searchType"
                        value="question"
                        checked={searchType === 'question'}
                        onChange={() => setSearchType('question')}
                    />
                    문제 이름으로 검색
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="searchType"
                        value="answer"
                        checked={searchType === 'answer'}
                        onChange={() => setSearchType('answer')}
                    />
                    정답 이름으로 검색
                </label>
                <br />
                <button onClick={handleSearchButtonClick}>검색</button>
                <button onClick={onRequestClose} style={{ marginLeft: '10px' }}>닫기</button>
            </div>
        </Modal>
    );
}

export default SearchOptions;
