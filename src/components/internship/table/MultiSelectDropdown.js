import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

class MultiSelectDropdown extends Component {
    constructor(props){
        super(props)
        this.state = {
            columnSelected: [],
            name: ['Name','Phone','Email','Gender','DOB','University','Faculty','Course'],
        }
    }

    handleChange = (event) => {
        this.props.getSelectedColumns(event.target.value)
        this.setState({
          columnSelected: event.target.value
        })
    }

    render() {
        return (
            <div>
                <FormControl style={{ margin: "10px"}}>
                    <InputLabel htmlFor="select-multiple">Columns</InputLabel>
                    <Select
                        multiple
                        value={this.state.columnSelected}
                        onChange={(event) => this.handleChange(event)}
                        renderValue={selected => selected.join(', ')}
                        style={{ width: "90px"}}
                    >
                        {this.state.name.map(name => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={this.state.columnSelected.indexOf(name) === -1} style ={{ color: "#00a0af" }} />
                            <ListItemText primary={name} />
                        </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        )
    }
}

export default MultiSelectDropdown
