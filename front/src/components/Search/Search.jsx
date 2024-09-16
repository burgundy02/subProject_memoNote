import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
/** @jsxImportSource @emotion/react */
import * as s from './style';
import SearchOptions from '../SearchOptions/SearchOptions';
import { instance } from '../../apis/util/instance';
import ScrollableResults from '../ScrollableResults/ScrollableResults';
import ReactModal from 'react-modal';
import { useQuery } from 'react-query';
import GetMemos from '../GetMemos/GetMemos';

function Search(props) {
    const [isModalOpen, setModalOpen] = useState(false);
    // 수정 버튼 눌렀을 때 모달 오픈
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

    const [searchMemo, setSearchMemo] = useState({
        question: "",
        answer: "",
        all: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [data, setData] = useState(null);

    const [searchType, setSearchType] = useState('all');  // 검색 유형

    const [memoId, setMemoId] = useState(0);

    useEffect(() => {
        setSearchMemo(memo => ({
            ...memo,
            question: "",
            answer: "",
            all: "",
        }));
        // console.log(searchMemo);
    }, [searchType]);

    // useEffect(() => {
    //     // isSearchOpen 또는 다른 상태 변경 시 실행할 코드
    // }, [isSearchOpen]);

    const getAllQuestion = useQuery(
        ["getAllQuestionQuery"],
        async () => await instance.get("/memos"),
        {
            retry: 0,
        }
    );

    const handleOnChange = (e) => { // 검색어 입력
        const { name, value } = e.target;
        if (searchType === 'all') {
            console.log(value);
            // 'all'일 때는 두 필드 모두 업데이트
            setSearchMemo(memo => ({
                ...memo,
                all: value
            }));
        } else {
            console.log(value);
            // 'question' 또는 'answer'일 때 해당 필드만 업데이트
            setSearchMemo(memo => ({
                ...memo,
                [searchType]: value
            }));
        }
        console.log(searchMemo)
    };

    const searchSubmitButtonOnClick = async () => {
        try {
            // let query;
            // if (searchType === 'all') {
            //     // 전체 조회 시
            //     query = {
            //         question: searchMemo.all,
            //         answer: searchMemo.all
            //     };
            // } else {
            //     // 특정 검색 유형일 때
            //     query = searchMemo.searchType;
            // }

            const response = await instance.get("/memo/search", {params: searchMemo});

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

    const handleQuestionOnClick = (memoId) => {
        setMemoId(memoId);
        setModalOpen(true);
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
        <div css={s.layout}>
            <header css={s.mainHeader}>
                <h2>조회 페이지</h2>
                <div css={s.searcInputhBox}>
                    <h4>검색어 </h4>
                    <input
                        type="text"
                        name={searchType}
                        onChange={handleOnChange}
                        value={searchMemo.searchType}  // 'all'일 때는 searchMemo.all, 아니면 해당 필드값
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
            <div css={s.box}>
                <div css={s.container}>
                    {
                        !errorMessage && !data &&
                        getAllQuestion?.data?.data.map(question => 
                            <GetMemos data={question}/>
                        )
                    }
                    {
                        errorMessage &&
                        <h2>{errorMessage}</h2>
                    }

                    {
                        data &&
                        data.map(d => (
                            <GetMemos data={d}/>
                        ))
                        // <ScrollableResults data={data} onEdit={handleEdit} onDelete={handleDelete} />
                    }
                </div>
            </div>
        </div>
    );
}

export default Search;