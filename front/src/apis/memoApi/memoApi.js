import { instance } from "../util/instance";

// 추가
export const addQuestionApi = async (data) => {
    let response = null;
    try {
        response = await instance.post("/memo", data)
    } catch (e) {
        console.error(e);
        response = e.response;
    }
    return response;
}
// 삭제
export const deleteQuestionApi = async (id) => {
    let response = null;
    try {
        response = await instance.delete(`${id}`)
    } catch (e) {
        console.error(e);
    }
    return response
}