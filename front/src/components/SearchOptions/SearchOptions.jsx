/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import * as s from './style';


const SearchOptions = ({ searchType, setSearchType }) => {
    return (
        <div>
            <label css={s.searchOption}>
                검색 유형 선택
                <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                    <option value="question">질문</option>
                    <option value="answer">답변</option>
                    <option value="all">전체</option>
                </select>
            </label>
        </div>
    );
};

export default SearchOptions;
