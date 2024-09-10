import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
/** @jsxImportSource @emotion/react */
import * as s from './style';
import SearchOptions from '../SearchOptions/SearchOptions';


function Search({ children }) {

    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const [searchMemo, setSearchMemo] = useState({
        question: "",
        answer: "",
    });

    const [searchType, setSearchType] = useState('question');  // 검색 유형
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);  // 검색 옵션 창 열림 여부

    // useEffect(() => {
    //     // isSearchOpen 또는 다른 상태 변경 시 실행할 코드
    // }, [isSearchOpen]);

    const handleSearchButtonClick = () => {
        if (!searchMemo.question.trim()) {
            // 검색창이 비어있으면 전체 조회
            console.log("전체 조회 실행");
        } else if (searchType === 'question') {
            // 문제 이름으로 검색
            console.log("문제 이름으로 검색:", searchMemo.question);
        } else if (searchType === 'answer') {
            // 정답 이름으로 검색
            console.log("정답 이름으로 검색:", searchMemo.question);
        }
        setIsOptionsOpen(false);  // 검색 후 옵션 창 닫기
    };

    const handleIsSearchOpen = () => { // 상세검색 - 정답으로 검색(default), 문제로 검색, 달력 받아와서 날짜로 검색, 작성자로 검색(로그인 기능 추가 시)
        setIsSearchOpen(true); // 처음에 true로 바꿔줌


        setIsSearchOpen(false); // 동작이 끝나면 false로 바꿈
    }

    const handleOnChange = (e) => { // 검색어 입력하는거
        setSearchMemo({
            ...searchMemo,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div css={s.layout}>
            <header css={s.mainBox}>
                <h2>조회 페이지</h2>
                <div css={s.searchBox}>
                    <input type="text"
                        placeholder='검색어를 입력해 주세요'
                        name="question"
                        onChange={handleOnChange}
                        value={searchMemo.question}
                    />
                    <button onClick={() => setIsSearchOpen(true)}>
                        <FaSearch />
                    </button>
                </div>
            </header>
                <SearchOptions
                    isOpen={isSearchOpen}
                    onRequestClose={() => setIsSearchOpen(false)}  // 모달 닫는 함수
                    searchType={searchType}
                    setSearchType={setSearchType}
                    handleSearchButtonClick={handleSearchButtonClick}
                />
            </div>
    );
}

export default Search;