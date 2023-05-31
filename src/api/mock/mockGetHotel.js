import axios from "axios";
import { MOCKUP_URL } from "../MOCKUP_URL";

export const mockGetHotel = (id) => {
    return axios.get(`${MOCKUP_URL}/hotels/${id}`).then(res => res.data).catch((err)=>{console.log(err.message)})
}