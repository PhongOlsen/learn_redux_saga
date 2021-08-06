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
    },
});

export const { fetchStudentList, loading } = studentSlice.actions;

export const selectListStudent = (state: any) => state.student.list;

export default studentSlice.reducer;
