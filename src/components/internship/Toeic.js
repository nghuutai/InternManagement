import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Toeic extends Component {

    displayResultToeic = (toeicSchedule) => {
        if(this.props.intern){
            if(this.props.intern.Toeic){
                this.props.intern.Toeic.map((value) => {
                    if(value.Id === toeicSchedule.Id){
                        if(value.Score === undefined){
                            return (
                                <button 
                                type="button" 
                                class="btn buttonAttach" 
                                onClick={() => this.props.handleOpenModalDropFile()}>ATTACH FILE</button>
                            )
                        }else {
                            return (
                                <div style={{ float: "right" }}><b>{"Total score: " + value.Score + "/990"}</b></div>
                            )
                        }
                    }
                })
            }else {
                return (
                    <button 
                    type="button" 
                    class="btn buttonAttach" 
                    onClick={() => this.props.handleOpenModalDropFile()}>ATTACH FILE</button>
                )
            }
        } else{
            return (
                <button 
                type="button" 
                class="btn buttonAttach" 
                onClick={() => this.props.handleOpenModalDropFile()}>ATTACH FILE</button>
            )
        }
        
    }

    render() {
        return (
            <div>
                 <Paper className="root">
                    <Toolbar>
                        <Typography id="tableTitle">
                            <span className="title">TOEIC TEST EXAM</span>
                        </Typography>
                    </Toolbar>
                    <Table className="toeic">   
                        <TableBody className="tableBody">
                            {
                                this.props.toeicScheduleList.map((value) => {
                                    return (
                                        <TableRow>
                                            <TableCell align="left">
                                                <span className="titleToeic">{value.Name}</span>
                                                <span>{"Date: " + value.Date}</span>
                                            </TableCell>
                                            <TableCell align="left">
                                                {/* <div style={{ float: "right" }}><b>Total score: 550/990</b></div> */}
                                                {this.displayResultToeic(value)}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>  
                </Paper>
            </div>
        );
    }
}

export default Toeic;