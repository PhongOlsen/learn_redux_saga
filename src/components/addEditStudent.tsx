import React from 'react';
import {Link} from "react-router-dom";
import { Box, Typography } from '@material-ui/core';
import {ChevronLeft} from "@material-ui/icons";
import StudentForm from "./studentForm";

const initialValues = {
    name: '',
    age: '',
    mark: '',
    gender: 'male',
    city: '',
}

function AddEditStudent() {

    const handleStudentFormSubmit = async (formValues: any) => {

    };

    return (
        <Box>
            <Link to="/students">
                <Typography variant="caption" style={{ display: 'flex', alignItems: 'center' }}>
                    <ChevronLeft /> Back to student list
                </Typography>
            </Link>

            <Typography variant="h4">{'Add new student'}</Typography>
                <Box mt={3}>
                    <StudentForm initialValues={initialValues} onSubmit={handleStudentFormSubmit} />
                </Box>
        </Box>
    );
}

export default AddEditStudent;
