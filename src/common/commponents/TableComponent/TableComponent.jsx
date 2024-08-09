import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const TableComponent = ({headings,rows,coulums}) => {    
    debugger
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const handleChangePage = (event ,newPage) => {
        setPage(newPage);
    };
  return (
    // <Paper>
    //     <TableContainer component={Paper}>
    //         <Table sx={{ minWidth: 700 }} aria-label="customized table">            
    //             <TableHead>
    //                 <TableRow>
    //                     {
    //                     headings ?.map((val,ind)=>{
    //                         return(
    //                             <StyledTableCell key={`stc_${ind}`} align="right">{val}</StyledTableCell>
    //                         )
    //                     })  
    //                     }
    //                 </TableRow>
    //             </TableHead>
    //             <TableBody>
    //                     {
    //                         rows?.map((obj,i)=>{
    //                             return <StyledTableRow key={`str_${i}`}>{obj}                                    
    //                                     {
    //                                         coulums ?.map((key,ind)=>{
    //                                         return <StyledTableCell key={`stc_${ind}`}>{obj[key]}</StyledTableCell>
                                            
    //                                         })  
    //                                     }
    //                                 </StyledTableRow>    
                                 
    //                         })
    //                     }
    //             </TableBody>
    //         </Table>                 
    //     </TableContainer>
    //     <TablePagination
    //       rowsPerPageOptions={[5, 10, 25]}
    //       component="div"
    //       count={rows.length}
    //       rowsPerPage={rowsPerPage}
    //       page={page}
    //       onPageChange={handleChangePage}
    //       onRowsPerPageChange={handleChangeRowsPerPage}
    //     />  
    // </Paper>
    <table border="1px">
    <thead>
        <tr>
            {
                headings.map((val,i)=>{
                    return(
                        <th key={i}>{val}</th>
                    )
                })
            }
        </tr>
    </thead>
    <tbody>
        {
            rows.map((obj,i)=>{
                return(
                    <tr key={i}>
                        {
                            coulums.map((k,index)=>{
                                return <td key ={index}>{obj[k]}</td>
                            })
                        }
                    </tr>                            
                )
            })
        }
    </tbody>
  </table>
       
   
  )
}

export default TableComponent
