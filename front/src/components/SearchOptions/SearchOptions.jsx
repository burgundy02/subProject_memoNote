/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const searchOption = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size : 25px;

    & select {
        font-size: 15px;
        margin-top: 5px;
    }
`;

const SearchOptions = ({ searchType, setSearchType }) => {
    return (
        <div>
            <label css={searchOption}>
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
