import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ButtonAdd from '../ButtonSchedule/ButtonAdd';

class ToolbarTable extends Component {
    handleChange = (event) => {
        this.props.Search(event.target.value)
    }
    render() {
        return (
            <div>
                <Toolbar >
                    <Typography id="tableTitle">
                        <span className="title">TOEIC SCHEDULES</span>
                    </Typography>
                    <div className="spacer" />
                    <Paper className="search">
                        <InputBase
                            placeholder="Search toiec"
                            className="inputSearch"
                            onChange={(event) => this.handleChange(event)}
                        />
                        <i className="fa fa-search icon" aria-hidden="true" ></i>
                    </Paper>
                    <ButtonAdd addSchedule={this.props.addSchedule}/>
                    {/* <button type="button" className="btn buttonView">ADD
                    </button> */}
                </Toolbar>
            </div>
        );
    }
}

export default ToolbarTable;