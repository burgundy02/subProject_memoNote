import { css } from "@emotion/react";

export const scrollContainerStyle = css`
    position: relative;
    width: 100%;
    height: 300px; /* 원하는 높이 설정 */
    overflow-x: hidden;
    overflow-y: auto; /* 세로 스크롤 허용 */
    padding: 10px;
    box-sizing: border-box;
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
}
`;

export const boxesWrapperStyle = css`
  display: flex;
  flex-direction: column;
`;

export const boxStyle = css`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  box-sizing: border-box;
`;

export const customScrollbarStyle = css`
  position: absolute;
  top: 0;
  right: 0;
  width: 8px;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 50px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 4px;
  }
`;

export const editButtonStyle = css`
  margin-right: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;

export const deleteButtonStyle = css`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;

export const buttonContainerStyle = css`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;