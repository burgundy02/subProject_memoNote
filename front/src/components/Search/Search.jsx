import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
/** @jsxImportSource @emotion/react */
import * as s from './style';
import SearchOptions from '../SearchOptions/SearchOptions';
import { instance } from '../../apis/util/instance';
import ScrollableResults from '../ScrollableResults/ScrollableResults';
import ReactModal from 'react-modal';

function Search(props) {
    const [isModalOpen, setModalOpen] = useState(false);

    const [searchMemo, setSearchMemo] = useState({
        question: "",
        answer: "",
        all: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [data, setData] = useState(null);

    const [searchType, setSearchType] = useState('all');  // 검색 유형

    // useEffect(() => {
    //     // isSearchOpen 또는 다른 상태 변경 시 실행할 코드
    // }, [isSearchOpen]);

    const handleOnChange = (e) => { // 검색어 입력
        const { name, value } = e.target;
        if (searchType === 'all') {
            // 'all'일 때는 두 필드 모두 업데이트
            setSearchMemo(memo => ({
                ...memo,
                all: value
            }));
        } else {
            // 'question' 또는 'answer'일 때 해당 필드만 업데이트
            setSearchMemo(memo => ({
                ...memo,
                [searchType]: value
            }));
        }
        console.log(value)
    };

    const searchSubmitButtonOnClick = async () => {
        try {
            let query;
            if (searchType === 'all') {
                // 전체 조회 시
                query = {
                    question: searchMemo.all,
                    answer: searchMemo.all
                };
            } else {
                // 특정 검색 유형일 때
                query = searchMemo[searchType];
            }

            const response = await instance.get("/memo/search", {
                params: query,
            });

            if (!response.data || response.data.length === 0) {
                alert("조회 가능한 데이터가 없습니다")
                setData(null);  // 데이터 초기화
                return;
            }
            setData(response.data);  // 조회된 데이터 설정
            setErrorMessage("");
        } catch (error) {
            setErrorMessage("데이터 조회 중 오류가 발생했습니다.");
        }
    };

    const handleEdit = (item, index) => {

    };

    const handleDelete = (item, index) => {
        console.log("삭제 버튼 클릭됨:", item);
        const updatedData = data.filter((_, i) => i !== index);
        setData(updatedData);

    };

    const handleQuestionOnClick = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div css={s.layout}>
            <header css={s.mainHeader}>
                <h2>조회 페이지</h2>
                <div css={s.searcInputhBox}>
                    <h4>검색어 </h4>
                    <input
                        type="text"
                        name={searchType}
                        onChange={handleOnChange}
                        value={searchMemo[searchType]}  // 'all'일 때는 searchMemo.all, 아니면 해당 필드값
                    />
                    <div css={s.searchOptions}>
                        <button onClick={searchSubmitButtonOnClick}>
                            <FaSearch />
                        </button>

                            <SearchOptions
                                searchType={searchType}
                                setSearchType={setSearchType}
                            />
                    </div>

                </div>
                <div css={s.searchButton}>
                    {/* <button onClick={searchSubmitButtonOnClick}>통합검색</button>
                    <button onClick={() => searchSubmitButtonOnClick("question")}>문제 이름으로 조회</button>
                    <button onClick={() => searchSubmitButtonOnClick("answer")}>정답 이름으로 조회</button> */}
                </div>
            </header>
            <div css={s.container}>
                <div css={s.mainBox}>
                    <p onClick={handleQuestionOnClick}>▫️문제문제문제aaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <div css={s.buttonBox}>
                        <button>수정</button>
                        <button>삭제</button>
                    </div>
                </div>
                <div css={s.mainBox}>
                    <p onClick={handleQuestionOnClick}>▫️문제문a</p>
                    <div css={s.buttonBox}>
                        <button>수정</button>
                        <button>삭제</button>
                    </div>
                </div>
                <div css={s.mainBox}>
                    <p onClick={handleQuestionOnClick}>▫️문제문제문제aaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <div css={s.buttonBox}>
                        <button>수정</button>
                        <button>삭제</button>
                    </div>
                </div>
                <div css={s.mainBox}>
                    <p onClick={handleQuestionOnClick}>▫️문제aaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <div css={s.buttonBox}>
                        <button>수정</button>
                        <button>삭제</button>
                    </div>
                </div>
                <div css={s.mainBox}>
                    <p onClick={handleQuestionOnClick}>▫️문제문제문제aaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <div css={s.buttonBox}>
                        <button>수정</button>
                        <button>삭제</button>
                    </div>
                </div>
                {
                    errorMessage &&
                    <h2>{errorMessage}</h2>
                }

                {
                    data &&
                    <ScrollableResults data={data} onEdit={handleEdit} onDelete={handleDelete} />
                }
            </div>
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
            
        </div>
    );
}

export default Search;