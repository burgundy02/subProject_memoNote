import { instance } from "../util/instance";

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