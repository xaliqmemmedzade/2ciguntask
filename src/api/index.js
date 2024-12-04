import { meta } from "@eslint/js";
import axios from "axios";
let apiUrl = import.meta.env.VITE_BASE_API_URL
export const api =axios.create({
    baseURL: apiUrl
})
