import axios from "axios";
import {baseApi} from "../common/contant";

const studentAPI = {
    getAll() {
        const url = '/students';
        return axios.get(baseApi + url);
    }
}
export default studentAPI;
