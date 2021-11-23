import axios, {AxiosResponse} from "axios";
import {Article} from "../models/Article";

/**
 * setup search api endpoint.
 * for more about wikipedia search API visit https://www.mediawiki.org/wiki/API:Search
 */
axios.defaults.baseURL =
    'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch='

/**
 * handle response
 * for more about wikipedia API response visit https://www.mediawiki.org/wiki/API:Search#JavaScript
 * @param response
 */
const responseBody = (response: AxiosResponse) => response.data.query.search;

// we dont need anything except get request
const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody)
}

const Articles = {
    // get list of articles
    list: (key: string) => requests.get<Article[]>(key)
}

const agent = {
    Articles
}

export default agent;