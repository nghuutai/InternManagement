import React,{ Component } from 'react';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

class ButtonDelete extends Component {
  
    constructor(props){
        super(props)
        this.notificationDOMRef = React.createRef();
        this.state = {
            open: false,
        }
    }
    onDelete = () => {
       let id= this.props.Schedule.id;
      this.props.deleteSchedule.deleteSchedule(id);
      this.handleClickOpen();
      }
    handleClickOpen= () =>  { 
    this.setState({
      open: !this.state.open
    });
  }

  render() {
  return (
    <div>
      <Button  variant="contained" color="default" className="a" onClick={this.handleClickOpen}>
                  <i className="material-icons md-18 x" >
                   delete</i>
                    Delete</Button>
      <Dialog
        open={this.state.open}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Confirm deletion schedule?</DialogTitle>
        <DialogActions>
          <Button onClick={this.handleClickOpen} color="primary">
            Cancel
          </Button>
          <Button onClick={() => this.onDelete()} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
}
export default ButtonDelete;