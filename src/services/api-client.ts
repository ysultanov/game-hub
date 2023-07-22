import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd1cc87c675f84bd3b3af7f4b13643964'
    }
})