import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from "@material-ui/core";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {loading, selectListStudent} from "../features/student/StudentSlice";
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import studentAPI from "../api/studentAPI";


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function Student() {
    const match = useRouteMatch();
    const history = useHistory();
    const classes = useStyles();
    const studentList = useAppSelector(selectListStudent);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(loading());
    },[dispatch]);
    const removeStudent = async (e: any, item: any) => {
        console.log(item);
        const response = await studentAPI.deleteStudent(item.id);
        console.log(response);
        dispatch(loading());
    }
    return (
        <div>
            <div style={{padding:'16px'}}>
                <h1>Student</h1>
                <Link to={`${match.url}/addEditStudent`}>
                    <Button style={{float: 'right'}}>Add Student</Button>
                </Link>
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="caption table">
                    <caption>A basic table example with a caption</caption>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">City</TableCell>
                            <TableCell align="right">Mark</TableCell>
                            <TableCell align="right">Gender</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {studentList.map((item: any, index: any) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {item.name}
                                </TableCell>
                                <TableCell align="right">{item.age}</TableCell>
                                <TableCell align="right">{item.city}</TableCell>
                                <TableCell align="right">{item.mark}</TableCell>
                                <TableCell align="right">{item.gender}</TableCell>
                                <TableCell align="center">
                                    <Button>Edit</Button>
                                    <Button onClick={(e) => removeStudent(e,item)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Student;
