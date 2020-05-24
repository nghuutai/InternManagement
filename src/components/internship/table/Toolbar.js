import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import 'material-design-icons/iconfont/material-icons.css';
import Modal from './../Modal'
import MultiSelectDropdown from './MultiSelectDropdown'

class ToolbarTable extends Component {

    resetValue = () => {
        this.setState({
            value : [],
            file : []
        })
    }

    handleChange = (event) => {
        this.props.handleSearch(event.target.value)
    }

    onAddIntership() {
        this.context.router.push("/addInternship")
    }

    showModal = () => {
        this.props.showModal(true)
    }

    handleCloseModalDropFile = () => {
        this.props.handleCloseModalDropFile()
    }

    getStatus = (status) => {
        this.props.validateExcelFile(status)
    }

    getFiles = (file) => {
        this.props.getFile(file)
    }    

    handleAttachFile = () => {
        console.log("attach successful")
        this.props.showData()
    }

    showDialog = () => {
        return <Modal 
                    open={ this.props.open }
                    handleClose={(value) => this.handleCloseModalDropFile(value)}
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    getStatus={(status) => this.getStatus(status)}
                    getFiles={(files) => this.getFiles(files)}
                    errorMessage={this.props.errorMessage}
                    onAttach={() => this.handleAttachFile()}
                />
    }

    render() {

        // var { value } = this.state
        // if(value.length){
        //     this.checkOut(value)
        // }

        return (
            <div>
                <Toolbar>
                    <Typography id="tableTitle">
                        <span className="title">INTERNSHIPS</span>
                    </Typography>
                    <div className="spacer" />
                    <div className="multi-select">
                        <MultiSelectDropdown
                        getSelectedColumns={(arrCol) => this.props.getSelectedColumns(arrCol)}
                        ></MultiSelectDropdown>
                    </div>
                    <Paper className="search">
                        <InputBase
                            placeholder="Search internship"
                            className="inputSearch"
                            onChange={(event) => this.handleChange(event)} />
                        <i class="fa fa-search icon" aria-hidden="true"></i>
                    </Paper>
                    <button type="button" class="btn buttonView"
                        onClick={this.onAddIntership.bind(this)}>ADD
                    </button>&nbsp;&nbsp;
                    <button type="button" class="btn buttonView"
                        onClick={this.showModal}>IMPORT
                    </button>
                        { this.showDialog() }
                </Toolbar>
            </div>
        );
    }
}

ToolbarTable.contextTypes = {
    router: PropTypes.object
};

export default ToolbarTable;