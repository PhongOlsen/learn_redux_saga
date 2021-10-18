import { call, put, takeLatest } from 'redux-saga/effects';
import studentAPI from '../../api/studentAPI';
import {fetchStudentList, filterStudents, filterStudentSuccess, loading} from "./StudentSlice";

function* fetchListStudent() {
    try {
        const response = yield call(studentAPI.getAll);
        yield put(fetchStudentList(response))
    } catch (e) {
        console.log(e);
    }
}

function* fetchFilterStudent(action: any) {
    try {
        console.log(action.payload);
        yield put(filterStudentSuccess(action.payload));
    } catch (e) {
        console.log(e);
    }
}

export default function* studentSaga() {
    yield takeLatest(loading, fetchListStudent);

    yield takeLatest(filterStudents, fetchFilterStudent)
}
