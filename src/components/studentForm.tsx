import React, {useState} from 'react';
import {Box, Button, CircularProgress, FormControl, FormControlLabel, FormLabel, Radio} from '@material-ui/core';
import {TextField, RadioGroup} from "@material-ui/core";
import {useAppDispatch} from "../app/hooks";
import {filterStudents} from "../features/student/StudentSlice";

function StudentForm(props: any) {
    const [gender, setGender] = useState([]);
    const dispatch = useAppDispatch();
    const handleFormSubmit = async () => {
        try {
            dispatch(filterStudents({id: 1}))
        } catch (error) {
            console.log(error)
        }
    };

    const onChangeGender = () => {

    }
    return (
        <Box maxWidth={400}>
            <form>
                <TextField name="name" label="Full Name" />

                <FormControl margin="normal" component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>

                    <RadioGroup name='gender' value={0} onChange={onChangeGender}>
                        {gender?.map((item: any) => {
                            return (
                                <FormControlLabel
                                    key={item.value}
                                    value={item.value}
                                    label={item.label}
                                    control={<Radio />}
                                />
                            )
                        })}
                    </RadioGroup>
                </FormControl>

                <TextField name="age" label="Age" type="number" />
                <TextField name="mark" label="Mark" type="number" />

                <Box mt={3}>
                    <Button onClick={handleFormSubmit} variant="contained" color="primary">
                        {<CircularProgress size={16} color="primary" />}
                        &nbsp;Save
                    </Button>
                </Box>
            </form>
        </Box>
    );
}

export default StudentForm;
