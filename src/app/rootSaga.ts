import { all } from 'redux-saga/effects';
import studentSaga from "../features/student/StudentSaga";

export default function* rootSaga() {
    yield all([studentSaga()]);
}
