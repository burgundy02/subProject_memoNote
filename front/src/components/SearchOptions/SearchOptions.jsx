/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import * as s from './style';
import { useEffect } from "react";


const SearchOptions = ({ searchType, setSearchType, setSearchMemo }) => {

    const inputElement = document.getElementById('searchInput');
    // console.log(inputElement);

    const handleOnChange = (e) => {
        setSearchType(e.target.value);

        setSearchMemo(memo => ({
            ...memo,
            question: "",
            answer: "",
            all: "",
        }));

        inputElement.value = "";

        // console.log(e);
    }

    return (
        <div>
            <label css={s.searchOption}>
                검색 유형 선택
                <select value={searchType} onChange={handleOnChange}>
                    <option value="question">문제</option>
                    <option value="answer">정답</option>
                    <option value="all">전체</option>
                </select>
            </label>
        </div>
    );
};

// (e) => setSearchType(e.target.value)

export default SearchOptions;
