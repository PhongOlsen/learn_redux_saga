import { call, put, takeLatest } from 'redux-saga/effects';
import studentAPI from '../../api/studentAPI';
import {fetchStudentList, loading} from "./StudentSlice";

function* fetchListStudent(action: any) {
    try {
        const response = yield call(studentAPI.getAll);
        console.log(action);
        console.log(response);
        yield put(fetchStudentList(response))
    } catch (e) {
        console.log(e);
    }
}

export default function* studentSaga() {
    yield takeLatest(loading, fetchListStudent);
}
