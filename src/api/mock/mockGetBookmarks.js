import axios from "axios"
import { MOCKUP_URL } from "../MOCKUP_URL"

export const mockGetBookmarks = async () => {
    return axios.get(`${MOCKUP_URL}/bookmarks`).then(res => res.data).catch((err)=>{alert(err.message)})
}