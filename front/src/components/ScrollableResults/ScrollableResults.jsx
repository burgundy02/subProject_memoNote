import React, { useState, useRef } from "react";
/** @jsxImportSource @emotion/react */
import * as s from './style';

const ScrollableResults = ({ data, onEdit, onDelete }) => {
    const containerRef = useRef(null);
    const [isScrollbarVisible, setIsScrollbarVisible] = useState(false);

    // 마우스가 스크롤바 근처에 있으면 스크롤바를 표시
    const handleMouseMove = (e) => {
        const container = containerRef.current;
        if (container) {
            const { width } = container.getBoundingClientRect();
            const mouseX = e.clientX - container.getBoundingClientRect().left;
            if (mouseX > width - 20) {
                setIsScrollbarVisible(true);
            } else {
                setIsScrollbarVisible(false);
            }
        }
    };

    // 스크롤바를 부드럽게
    const scrollbarStyle = isScrollbarVisible ? { opacity: 1 } : { opacity: 0 };

    return (
        <div css={s.scrollContainerStyle} ref={containerRef} onMouseMove={handleMouseMove}>
            <div className={s.boxesWrapperStyle}>
                {data.map((item, index) => (
                    <div key={index} css={s.boxStyle}>
                        <h3>{item.question || "No question"}</h3>
                        <p>{item.answer || "No answer"}</p>
                        {/* 수정, 삭제 버튼 */}
                        <div css={s.buttonContainerStyle}>
                            <button onClick={() => onEdit(item, index)} css={s.editButtonStyle}>수정</button>
                            <button onClick={() => onDelete(item, index)} css={s.deleteButtonStyle}>삭제</button>
                        </div>
                    </div>
                ))}
            </div>
            {
                isScrollbarVisible &&
                <div css={s.customScrollbarStyle}>
                </div>
            }
        </div>
    );
};

export default ScrollableResults;