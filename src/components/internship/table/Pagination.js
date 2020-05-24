import React, { Component } from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import LastPageIcon from '@material-ui/icons/LastPage';
import FirstPageIcon from '@material-ui/icons/FirstPage'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import PropTypes from 'prop-types';

class Pagination extends Component {
    handleChangePage = (event, newPage) => {
        this.props.setCurrentPage(newPage)
    }
    handleChangeRowsPerPage = (event) => {
        this.props.setRowPerPage(parseInt(event.target.value))
        this.props.setCurrentPage(0)
    }
    render() {
        return (
            <TablePagination
                rowsPerPageOptions={[10, 50, 100]}
                colSpan={7}
                count={this.props.count}
                rowsPerPage={this.props.rowsPerPage}
                page={this.props.page}
                SelectProps={{
                    inputProps: { 'aria-label': 'Rows per page' },
                    native: true,
                }}
                onChangePage={(event,newPage) => this.handleChangePage(event,newPage)}
                onChangeRowsPerPage={(event) => this.handleChangeRowsPerPage(event)}
                ActionsComponent={TablePaginationActions}
            > 
            </TablePagination>
        );
    }
}

// const useStyles1 = makeStyles(theme => ({
//     root: {
//       flexShrink: 0,
//       color: theme.palette.text.secondary,
//       marginLeft: theme.spacing(2.5),
//     },
// }));

function TablePaginationActions(props) {
    //const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    function nextPage(event) {
        onChangePage(event, page + 1)
        // console.log(page)
    }
    function previousPage(event) {
        onChangePage(event, page - 1)
    }
    function lastPage(event){
        onChangePage(event, Math.ceil(count/rowsPerPage) - 1)
    }
    function firstPage(event){
        onChangePage(event, 0)
    }
    //console.log(props.page)
    return (
        <div className="rootPagination">
            <IconButton 
            aria-label="First Page"
            onClick={() => firstPage()}
            disabled={page === 0}>
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton 
            aria-label="Previous Page"
            onClick={() => previousPage()}
            disabled={page === 0}
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton 
            aria-label="Next Page"
            onClick={() => nextPage()}
            disabled={page === (Math.ceil(count/rowsPerPage) - 1)}>
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton 
            aria-label="Last Page"
            onClick={() => lastPage()}
            disabled={page === (Math.ceil(count/rowsPerPage) - 1)}>
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}
TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};
export default Pagination;