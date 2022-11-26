import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import Checkbox from '@mui/material/Checkbox';
import {stableSort, getComparator, createData} from './helper';
import {headCells} from './data';
import { EnhancedTableHead } from './EnhancedTableHead';
import { EnhancedTableToolbar } from './EnhancedTableToolbar';
import { Button } from '@mui/material/index';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {basic_api, campaign_api , export_to_excel} from "../../helper/api";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function TableCampaign() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows,setRows]=useState([]);

    const navigate =useNavigate();

    const handleNewCampiagn=()=>{
        navigate('/content-create')
    }
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    // const handleClick = (event, name) => {
    //     const selectedIndex = selected.indexOf(name);
    //     let newSelected = [];
    //
    //     if (selectedIndex === -1) {
    //         newSelected = newSelected.concat(selected, name);
    //     } else if (selectedIndex === 0) {
    //         newSelected = newSelected.concat(selected.slice(1));
    //     } else if (selectedIndex === selected.length - 1) {
    //         newSelected = newSelected.concat(selected.slice(0, -1));
    //     } else if (selectedIndex > 0) {
    //         newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    //     }
    //
    //     setSelected(newSelected);
    // };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 15));
        setPage(0);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const handleEditRow = () => {
        console.log('Edit works');
        let newSelected = [];
        setSelected(newSelected);
    };

    const handleExportToExcel=()=>{
        window.location.href=basic_api+export_to_excel
    }

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

     useEffect(()=>{
         axios.get(basic_api+campaign_api).then(response=>{
             if(response&&response.data){
                setRows(setRowsFromResponse(response));
             }
         })
             .catch(error=>console.log(error))
     },[setRows])

   const setRowsFromResponse=(response)=>{
       const rows=[]
       response.data.forEach(row=>{
           rows.push(
               createData(row.id,row.code, row.campaign_name, row.page_name, row.campaign_objective, row.add_set_name)
           )
       })
       return rows;
    }
    return (
        <Box sx={{ width: '100%' ,marginTop:2}}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} tableName={'Campaigns'} />
               <div style={{padding:"0px 0px 20px 0px"}}>

                   <Button sx={{marginLeft:2}} variant="contained" endIcon={<AddIcon />} onClick={handleNewCampiagn}>
                       New Campaign
                   </Button>

                   <Button sx={{marginLeft:2}} variant="contained" endIcon={<ExitToAppIcon/>}  size="middle" onClick={handleExportToExcel}>
                       Export To Excel
                   </Button>

               </div>
                <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={'small'}>
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                            headCells={headCells}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.id}
                                            selected={isItemSelected}
                                        >
                                            {/*<TableCell padding="checkbox">*/}
                                            {/*    <Checkbox*/}
                                            {/*        onClick={(event) => handleClick(event, row.name)}*/}
                                            {/*        color="primary"*/}
                                            {/*        checked={isItemSelected}*/}
                                            {/*        inputProps={{*/}
                                            {/*            'aria-labelledby': labelId*/}
                                            {/*        }}*/}
                                            {/*    />*/}
                                            {/*</TableCell>*/}
                                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                                {row.code}
                                            </TableCell>
                                            <TableCell align="left">{row.campaign_name}</TableCell>
                                            <TableCell align="left">{row.page_name}</TableCell>
                                            <TableCell align="left">{row.campaign_objective}</TableCell>
                                            <TableCell align="left">{row.add_set_name}</TableCell>
                                            <TableCell align="left">
                                                <IconButton variant="outlined" onClick={handleEditRow}>
                                                    <EditIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: 33 * emptyRows
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}
