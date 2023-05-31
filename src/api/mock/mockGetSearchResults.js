import axios from "axios"
import { MOCKUP_URL } from "../MOCKUP_URL"

export const mockGetSearchResults = () => {
    return axios.get(`${MOCKUP_URL}/results`).then(res => res.data).catch((err)=>{console.log(err.message)})
}