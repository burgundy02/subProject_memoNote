import axios from "axios"

export const instance = axios.create({ // 백엔드랑 연결 해주는거
    baseURL: "http://localhost:8080"
});