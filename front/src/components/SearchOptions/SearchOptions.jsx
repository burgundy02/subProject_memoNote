/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import * as s from './style';


const SearchOptions = ({ searchType, setSearchType }) => {

    const handleOnChange = (e) => {
        setSearchType(e.target.value);
        console.log(e);
    }

    return (
        <div>
            <label css={s.searchOption}>
                검색 유형 선택
                <select value={searchType} onChange={handleOnChange}>
                    <option value="question">질문</option>
                    <option value="answer">답변</option>
                    <option value="all">전체</option>
                </select>
            </label>
        </div>
    );
};

// (e) => setSearchType(e.target.value)

export default SearchOptions;
