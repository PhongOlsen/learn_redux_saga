import axios from "axios";
import {baseApi} from "../common/contant";

const studentAPI = {
    getAll() {
        const url = '/students';
        return axios.get(baseApi + url);
    },
    postStudent(data: any) {
        const url = '/students';
        return axios.post(baseApi + url, data);
    },
    deleteStudent(id: any) {
        const url = '/students';
        return axios.delete(baseApi + url + `/${id}`);
    }
}
export default studentAPI;
