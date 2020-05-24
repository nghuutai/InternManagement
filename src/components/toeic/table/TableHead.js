import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import StyledTableCell from '@material-ui/core/TableCell';
import "./../../../resources/styles/stylesPage.css"
import TableHead from '@material-ui/core/TableHead';
import { TableSortLabel } from '@material-ui/core';
class TableHeader extends Component {

    createSortHandler = property => event => {
        this.props.handleSort(event, property);
    }

    render() {
        console.log(this.props.order)
        return (
            <TableHead className="colorToeic" >
                <TableRow >
                    {
                        this.props.data.map((value) => {
                            return (
                                <StyledTableCell
                                    className="color1Toeic"
                                    key={value.label}
                                    align="left"
                                    sortDirection={this.props.orderBy === value.label ? "asc" : "desc"}>
                                    <b> {value.label} </b>
                                    {/* {console.log(value.label)} */}
                                    <TableSortLabel
                                        active={true}
                                        direction={this.props.orderBy === value.label ? this.props.order : "desc"}
                                        onClick={this.createSortHandler(value.label)} />
                                </StyledTableCell>
                            )
                        })
                    }
                    <StyledTableCell className="color1Toeic" align="left"><b>Action</b></StyledTableCell>
                </TableRow>
            </TableHead>
        );
    }
}

export default TableHeader;