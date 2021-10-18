import {createSlice} from "@reduxjs/toolkit";

export interface StudentState {
    list: any;
}

const initialState: StudentState = {
    list: [],
}

export const studentSlice = createSlice({
    name:'student',
    initialState,
    reducers: {
        loading(state: any) {
            console.log(state);
        },
        fetchStudentList(state, action: any) {
            state.list = action.payload.data;
            console.log(action);
        },
        filterStudents(state, action: any) {
            console.log(action);
        },
        filterStudentSuccess(state, action: any) {
            console.log(action);
            console.log(action.payload);
        }
    },
});

export const { fetchStudentList, loading, filterStudents, filterStudentSuccess} = studentSlice.actions;

export const selectListStudent = (state: any) => state.student.list;

export default studentSlice.reducer;
