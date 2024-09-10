import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
/** @jsxImportSource @emotion/react */
import * as s from './style';
import SearchOptions from '../SearchOptions/SearchOptions';
import { instance } from '../../apis/util/instance';
import ScrollableResults from '../ScrollableResults/ScrollableResults';


function Search({ children }) {

    const [searchMemo, setSearchMemo] = useState({
        question: "",
        answer: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [data, setData] = useState(null);

    const [searchType, setSearchType] = useState('question');  // 검색 유형
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);  // 검색 옵션 창 열림 여부

    // useEffect(() => {
    //     // isSearchOpen 또는 다른 상태 변경 시 실행할 코드
    // }, [isSearchOpen]);

    const handleOnChange = (e) => { // 검색어 입력하는거
        setSearchMemo({
            ...searchMemo,
            [e.target.name]: e.target.value
        });
    };

    const searchSubmitButtonOnClick = async () => {
        try {
            let query;

            switch (searchType) {
                case "question":
                    query = searchMemo.question;
                    break;
                case "answer":
                    query = searchMemo.answer;
                    break;
                case "all":
                    query = searchMemo;
                    break;
                default:
                    alert("유효하지 않은 검색입니다.")
                    return;
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


    // const searchQuestionSubmitButton = async () => {
    //     try {
    //         const response = await instance.get("/memo/search", searchMemo.question)
    //         if(!response) {
    //             alert("조회 가능한 데이터가 없습니다")
    //         }
    //     } catch(error) {

    //     }
    // }

    // const searchAnswerSubmitButton = async () => {
    //     try {
    //         const response = await instance.get("/memo/search", searchMemo.answer)
    //         if(!response) {
    //             alert("조회 가능한 데이터가 없습니다")
    //         }
    //     } catch(error) {

    //     }
    // }

    return (
        <div css={s.layout}>
            <header css={s.mainHeader}>
                <h2>조회 페이지</h2>
                <div css={s.searcInputhBox}>
                    <input type="text"
                        placeholder='검색어를 입력해 주세요'
                        name="question"
                        onChange={handleOnChange}
                        value={searchMemo.question}
                    />
                    <button>
                        <FaSearch />
                    </button>

                    <div css={s.searchOptions}>
                        <SearchOptions
                            searchType={searchType}
                            setSearchType={setSearchType}
                        />
                    </div>

                </div>
                <div css={s.searchButton}>
                    <button onClick={() => searchSubmitButtonOnClick("all")}>통합검색</button>
                    <button onClick={() => searchSubmitButtonOnClick("question")}>문제 이름으로 조회</button>
                    <button onClick={() => searchSubmitButtonOnClick("answer")}>정답 이름으로 조회</button>
                </div>
            </header>
            <div css={s.container}>
                <div css={s.mainBox}>
                    {
                        errorMessage &&
                        <h2>{errorMessage}</h2>
                    }

                    {
                        data &&
                        <ScrollableResults data={data} onEdit={handleEdit} onDelete={handleDelete}  />
                    }
                </div>
            </div>
        </div>
    );
}

export default Search;