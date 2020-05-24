import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import AddForm from './AddForm'
import Modal from './Modal'
import Toeic from './Toeic';
import * as message from '../../core/common/message.en'

class AddInternshipPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 0,
            openModalDropFile: false,
            errorMessage: '',
            files: [],
        }
    }

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue,
        })
    }

    handleCloseModalDropFile = (value) => {
        this.setState({
            openModalDropFile: value,
        })
    }

    handleOpenModalDropFile = () => {
        this.setState({
            openModalDropFile: true,
        })
    }

    getStatus = (status) => {
        if(status === 'rejected_file_type'){
            this.setState({
                errorMessage: message.PLEASE_SELECT_THE_FILES_WITH_THE_EXTENSION_JPG_OR_PNG,
            })
        }
        else{
            this.setState({
                errorMessage: '',
            })
        }
    }

    getFiles = (files) => {
        console.log(files)
        let arr = this.state.files
        arr.push(files)
        this.setState({
            files: arr
        })
    }

    handleAttachFile = () => {
        console.log("attach successful")
    }

    displayForm = () => {
        if(this.state.value === 0){
            return (
                <AddForm
                courseList={this.props.courseList}
                addIntern={this.props.addIntern}
                listIntern={this.props.listIntern}>
                </AddForm>
            )
        }else if(this.state.value === 1){
            return (
                <Typography component="div" style={{ paddingLeft: 8*3, paddingRight: 8*3, paddingBottom: 8*3 }}>
                    <Toeic
                    handleOpenModalDropFile={() => this.handleOpenModalDropFile()}
                    toeicScheduleList={this.props.toeicScheduleList}></Toeic>
                    <Modal
                    open={this.state.openModalDropFile}
                    handleClose={(value) => this.handleCloseModalDropFile(value)}
                    accept="image/*"
                    getStatus={(status) => this.getStatus(status)}
                    getFiles={(files) => this.getFiles(files)}
                    errorMessage={this.state.errorMessage}
                    onAttach={() => this.handleAttachFile()}
                    ></Modal>
                </Typography>
            )
        }else if(this.state.value === 2){
            return(
                <Modal
                open={this.state.open}
                handleClose={(value) => this.handleClose(value)}></Modal>
            )
        }
    }
    render() {
        return (
            <div >
                <Paper className="root">
                <AppBar position="static" color="default">
                    <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    >
                        <Tab label="Information" className="tabChild"/>
                        <Tab label="Toeic" className="tabChild"/>
                    </Tabs>
                </AppBar>
                {this.displayForm()}
                </Paper>
            </div>
        );
    }
}

export default AddInternshipPage