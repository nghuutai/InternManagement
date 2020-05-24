import React, { Component } from 'react';
import ToeicTable from '../../components/toeic/toeic.component';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as GetAPI from "./../../actions/intership.action";
class ToeicPage extends Component {
  componentWillMount() {
    this.props.getAPI.getToeicScheduleList() 
}

  render() {
    // console.log(this.props.toeicSchedule);
    return (
     <div>
       <ToeicTable data={this.props.toeicSchedule}
       loading={this.props.load}
       addSchedule={this.props.getAPI}
       deleteSchedule={this.props.getAPI}
       editSchedule={this.props.getAPI}></ToeicTable>
     </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    toeicSchedule: state.toeic.toeicSchedule,
    load: state.toeic.loading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { getAPI: bindActionCreators(GetAPI,dispatch) }
}

export default connect(mapStateToProps,mapDispatchToProps) (ToeicPage);