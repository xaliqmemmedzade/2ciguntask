import { api } from "../api"

export const getUserPosts = async (id) => {
    const res = await api.get(`/posts?userId=${id}`)
    console.log(res.data);
    if (!res.data) {
        throw new Error('No data')
    }
    return res.data


}