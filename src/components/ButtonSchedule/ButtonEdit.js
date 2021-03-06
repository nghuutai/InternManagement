import React,{ Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import * as messages from '../../core/common/message.en';

class ButtonEdit extends Component {
  
    constructor(props){
        super(props)
        this.notificationDOMRef = React.createRef();
        this.state = {
            id: '',
            NameSchedule: {
                value: '',
                valid: false,
                error: ''
            },
            Location: {
                value: '',
                valid: false,
                error: ''
            },
            Date: {
                value: '',
                valid: false,
                error: ''
            },
            open: false,
        }
    }
    componentWillMount(){
      if(this.props.Schedule){
        let middle = this.props.Schedule.Data.split('/', 3)
        let date = middle[2] + "-" + middle[1] + "-" + middle[0]
        this.setState({
          id : this.props.Schedule.id,
          NameSchedule: {
            value: this.props.Schedule.Name_Schadule,
            valid: false,
            error: ''
        },
        Location: {
            value: this.props.Schedule.Location,
            valid: false,
            error: ''
        },
        Date: {
            value: date,
            valid: false,
            error: ''
        },
  
        })
      } 
    }
    handleChange = (event) => {
      let test = ''
      switch(event.target.name){
          case "Date":
              if(event.target.value.length === 0){
                  test = false
              }
              break
          case "NameSchedule":
              if(event.target.value.length === 0){
                  test = false
              }
              break
          case "Location":
              if(event.target.value.length === 0){
                  test = false
              }
              break
          default:
              break
      }
      this.setState({
          [event.target.name]: {value: event.target.value, valid: test}
      })
  }
  validateForm = (event) => {
    let test
    let err = ''
    switch(event.target.name){
        case "NameSchedule":
            if(!event.target.value){
                err = messages.typeInvalid("Name Schedule")
                test = true
            }else{
                if(event.target.value.length === 0){
                    test = false
                }
            }
            break
        case "Date":
            if(!event.target.value){
                err = messages.typeInvalid("Date")
                test = true
            }
            break
        case "Location":
            if(!event.target.value){
              err = messages.typeInvalid("Location")
              test = true
            }else{
                if(event.target.value.length === 0){
                   test = false
                }
              }
            break
        default:
            break
    }
    this.setState({
        [event.target.name]: {value: event.target.value, valid:test, error: err}
    })
}
  disabledButtonSave = () => {
    if(this.state.NameSchedule.value.length>0 && this.state.Date.value.length>0 
         && this.state.Location.value.length>0){
           if(!this.state.NameSchedule.valid && !this.state.Date.valid
               && !this.state.Location.valid){
                  return true 
                  
          } 
          return false
     }else{ 
      return false
   }
}
displayValid = (valid,err) => {
  if(valid){
      return(
          <div className="coverSmall">
          <small className="small">{err}</small>
          </div>
      )
  }
}
  handleClickOpen= () =>  { 
    this.setState({
      open: !this.state.open
    });
  }
  handleClose= () =>  {
    this.setState({
      open: !this.state.open,
    });
  }
  handleSave = () => {
        const moment = require('moment');
        let date = moment.utc(this.state.Date.value).format();
        let Schedule = {
            "id": this.state.id,
            "NameSchedule": this.state.NameSchedule.value,
            "Date": date,
            "Location": this.state.Location.value,
        }
        this.props.editSchedule.editSchedule(Schedule);
        this.resetForm();
       
}
resetForm = () => {
  if(this.props.Schedule){
    let middle = this.props.Schedule.Data.split('/', 3)
    let date = middle[2] + "-" + middle[1] + "-" + middle[0]
    this.setState({
      id : this.props.Schedule.id,
      NameSchedule: {
        value: this.props.Schedule.Name_Schadule,
        valid: false,
        error: ''
    },
    Location: {
        value: this.props.Schedule.Location,
        valid: false,
        error: ''
    },
    Date: {
        value: date,
        valid: false,
        error: ''
    },

    })
  }
  this.handleClose();
}

  render() {
  return (
    <div>
      <Button variant="contained" color="primary" className="a"  onClick={this.handleClickOpen}>
                  <i className="material-icons md-18 x"  >
                    edit</i>
                    Edit</Button>
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Schedule</DialogTitle>
        <DialogContent>
          <DialogContentText>
       
          </DialogContentText>
          <Grid container spacing={1}>
          <Grid item xs={8} >
          <TextField
            error={this.state.NameSchedule.valid}
            InputLabelProps={{style: {color: "gray"}}}
            id="NameSchedule"
            label="Name Schedule"
            name="NameSchedule"
            type="text"
            fullWidth
            value={this.state.NameSchedule.value}
            onChange={(event) => this.handleChange(event)}
            onBlur={(event) => this.validateForm(event)} 
          /> 
          {this.displayValid(this.state.NameSchedule.valid,this.state.NameSchedule.error)}
          </Grid>
            <Grid item xs={1} sm={4} >          
            <TextField
            error={this.state.Date.valid}
            InputLabelProps={{ shrink: true, required: true, style: {color: "gray", fontSize:"17px"} }}
            id="Date"
            label="Date"
            name="Date"
            value={this.state.Date.value}
            placeholder="dd/mm/yyyy"
            className="textField"
            type="Date"
            fullWidth
            onChange={(event) => this.handleChange(event)}
            onBlur={(event) => this.validateForm(event)} 
            />
            {this.displayValid(this.state.Date.valid,this.state.Date.error)}
            </Grid>
            <Grid item xs={12}>
            <TextField
            error={this.state.Location.valid}
            InputLabelProps={{style: {color: "gray"}}}
            margin="dense"
            id="Location"
            label="Location"
            name="Location"
            value={this.state.Location.value}
            type="text"
            fullWidth
            onChange={(event) => this.handleChange(event)}
            onBlur={(event) => this.validateForm(event)}
            />
            {this.displayValid(this.state.Location.valid,this.state.Location.error)}
            </Grid>
        </Grid>
        </DialogContent>
        <DialogActions>
          <button class="btn buttonView" onClick={()=>this.resetForm()} color="primary">
            Cancel
          </button>
          <button class="btn buttonView" disabled={this.disabledButtonSave() ? false : true} onClick={() => this.handleSave()} color="primary">
            Save
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
}

export default ButtonEdit;