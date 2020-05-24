import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import StyledTableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import 'material-design-icons/iconfont/material-icons.css';
import React, { Component } from 'react';
import 'material-design-icons/iconfont/material-icons.css';
import { filter, includes, orderBy as OrderBy } from "lodash";
import "./../../resources/styles/stylesPage.css";
import ToolbarTable from './toolbar';
import TableHeader from './table/TableHead';
import ButtonAction from './table/ButtonAction';
import Pagination from './table/Pagination';
import LoadingToeic from './table/LoadingToeic';
// import orderBy from "lodash/orderBy"
class ToeicTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { label: "Name_Schadule" },
                { label: "Data" },
                { label: "Location" },

            ],
            searchInfor: "",
            search: "",
            currentPage: 0,
            rowPerPage: 50,
            order: "desc",
            orderBy: "",
            typeOrder: {
                asc: "desc",
                desc: "asc"
            }
            
        }
    }

    setCurrentPage = (page) => {
        this.setState({
            currentPage: page
        })
    }

    setRowPerPage = (row) => {
        this.setState({
            rowPerPage: row
        })
    }

    handleSearch = (info) => {
        console.log(info);
        this.setState({
            search: info
        })
    }

    handleSort = (event, columnName) => {
        console.log(columnName)
        this.setState({
            orderBy: columnName,
            order: this.state.orderBy === columnName ? this.state.typeOrder[this.state.order] : 'asc'
        })
        console.log(this.state)
    }

    displayTable() {
        let result = this.props.data;
        console.log(this.props.data)
        var search = this.state.search;
        var data = filter(result, (item) => {
            return includes(item.Name_Schadule.toLowerCase(), search.toLowerCase());
        })
        let datasort = OrderBy(data, [this.state.orderBy], [this.state.order])
        let indexOfLast = (this.state.currentPage + 1) * this.state.rowPerPage
        let indexOfFirst = indexOfLast - this.state.rowPerPage
        console.log(this.state.orderBy)
        console.log(this.state.order)
        let ListToeic = datasort.slice(indexOfFirst, indexOfLast);
        console.log(ListToeic)

        if (this.props.loading === true) {
            return (
                <LoadingToeic></LoadingToeic>
            )
        }
        else {
            return (
                <div>
                    <Table className="tableToeic">
                        <TableHeader data={this.state.columns}
                            handleSort={(event, columnName) => this.handleSort(event, columnName)}
                            order={this.state.order}
                            orderBy={this.state.orderBy}

                        />
                        <TableBody >
                            
                            {
                                ListToeic.map((value, index) => {
                                    return (
                                            <TableRow key={index} className="tableRow ">
                                            <StyledTableCell className="columnName "  align="left" >
                                                {value.Name_Schadule}
                                            </StyledTableCell>
                                            <StyledTableCell   align="left">{value.Data} </StyledTableCell>
                                            <StyledTableCell  align="left">{value.Location} </StyledTableCell>
                                            <ButtonAction
                                            Schedule={value}
                                            deleteSchedule={this.props.deleteSchedule}
                                            editSchedule={this.props.editSchedule} />
                                        </TableRow>                                       
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </div>
            )
        }
    }

    render() {
        let result = this.props.data;
        var search = this.state.search;
        var data = filter(result, (item) => {
            return includes(item.Name_Schadule.toLowerCase(), search);
        })
        return (
            <div className="x">
                <Paper className="root">
                    <ToolbarTable 
                    Search={(info) => this.handleSearch(info)}
                    addSchedule={this.props.addSchedule} />
                    <div className="tableWrapper height">
                        {this.displayTable()}
                    </div>
                    <Pagination count={data.length}
                        rowsPerPage={this.state.rowPerPage}
                        page={this.state.currentPage}
                        setCurrentPage={(page) => this.setCurrentPage(page)}
                        setRowPerPage={(row) => this.setRowPerPage(row)}
                    />
                </Paper>
            </div>
        );
    }
}

export default ToeicTable;