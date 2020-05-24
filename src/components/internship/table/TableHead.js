import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import '../../../resources/styles/style.css'
class TableHead extends Component {
    createSortHandler = property => event => {
        console.log(property)
        this.props.handleSort(event, property);
    };
    render() {
        return (
            <TableRow>
                {
                    this.props.columns.map((value) => {
                        return(
                        <TableCell
                        // className="cell-head"
                        style={{ display: this.props.hideColumns.indexOf(value.id) !== -1 ? 'none' : ''}}
                        key={value.id}
                        align="left"
                        // padding={value.disablePadding ? 'none' : 'default'}
                        sortDirection={this.props.orderBy === value.id ? 'asc' : 'desc'}>
                            <b>{value.label}</b>
                            <TableSortLabel 
                            active={true}
                            direction={this.props.orderBy === value.id ? this.props.order: 'desc'}
                            onClick={this.createSortHandler(value.id)}>
                            </TableSortLabel>
                        </TableCell>
                        )
                    })
                }
            </TableRow>
        );
    }
}

export default TableHead;