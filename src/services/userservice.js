  import {api} from "../api"
  export const getAllUser = async () => {
    const res = await api.get("/users")
    if (!res.data) {
        throw new Error("No Data")
    }return res.data
}

export const getSingleUser = async (id) => {
    const res = await api.get(`/users/${id}`)
    if (!res.data) {
        throw new Error("No Data")
    }return res.data
}