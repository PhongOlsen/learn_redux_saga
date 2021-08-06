import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {loading, selectListStudent} from "../features/student/StudentSlice";

function Student() {
    const studentList = useAppSelector(selectListStudent);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(loading());
    },[dispatch]);
    return (
        <div>
            <h1>List Student</h1>
            {studentList?.map((item: any, index: any) => {
                return (
                    <ul>
                        <li>
                            {item?.name}
                        </li>
                    </ul>
                )
            })}
        </div>
    );
}

export default Student;
