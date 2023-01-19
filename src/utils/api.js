import axios from "axios";
import { useYourContext } from "./ContextApi";

// AIzaSyCNTqR4dGKh3kTt18Uhlky1hqS68EPQiCE
// f46841cd43fce4b2f
// 310b65ce1f6614cc6

// AIzaSyCNTqR4dGKh3kTt18Uhlky1hqS68EPQiCE
// d69b9f2a78fc34153
const BASE_URL =`https://www.googleapis.com/customsearch/v1`
const params = {
    key:'AIzaSyCNTqR4dGKh3kTt18Uhlky1hqS68EPQiCE',
    cx:'0621a8005624f4086'
}

export const fetchDataFromApi = async (payload) => {
    // setLoading(true)
    const {data} = await axios.get(BASE_URL,{
        params:{...params,...payload}
    })
    // setLoading(false)
    return data
};
