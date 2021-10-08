import * as React      from 'react';
import Paper           from '@mui/material/Paper';
import Table           from '@mui/material/Table';
import TableBody       from '@mui/material/TableBody';
import TableCell       from '@mui/material/TableCell';
import TableContainer  from '@mui/material/TableContainer';
import TableHead       from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow        from '@mui/material/TableRow';
import {useSelector}   from "react-redux";
import Avatar          from "@material-ui/core/Avatar";
import {useStyles}     from "./styles";

const columns = [
    {id: 'title', label: 'title', minWidth: 170},
    {id: 'category', label: 'category', minWidth: 100},
    {id: 'image', label: 'image', minWidth: 100, format: 'img'},
    {id: 'price', label: 'price', minWidth: 100},
];


const selectProducts = (state) => state.products.products;

const TableTest = (props) => {
    const classes = useStyles();

    const products = useSelector(selectProducts);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <Paper sx={{width: '100%', overflow: 'hidden'}}>
            <TableContainer sx={{maxHeight: 440}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format === 'img' ?

                                                        <Avatar
                                                            src={value}
                                                            className={classes.avatar}
                                                        /> : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={products.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default TableTest;
