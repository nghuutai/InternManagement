import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import StyledTableCell from '@material-ui/core/TableCell';

import ButtonDelete from '../../ButtonSchedule/ButtonDelete';
import ButtonEdit from '../../ButtonSchedule/ButtonEdit';

class ButtonAction extends Component {
    render() {
        return (
            <StyledTableCell align="left" >
            <Grid container spacing={1}>
                 
                    <ButtonEdit 
                    Schedule={this.props.Schedule}
                    editSchedule={this.props.editSchedule}
                  />
                  
                    <ButtonDelete
                    Schedule={this.props.Schedule}
                    deleteSchedule={this.props.deleteSchedule}/>
                  </Grid>
                  </StyledTableCell>
        );
    }
}

export default ButtonAction;