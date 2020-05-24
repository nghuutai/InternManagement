import React, { Component } from 'react';
import AddInternshipPage from '../../components/internship/AddInternship.component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as GetAPI from '../../actions/intership.action'

class AddInternship extends Component {

    constructor(props){
        super(props)
        this.state = {
            files : [],
            value : []
        }
    }

    componentWillMount() {
        this.props.getAPI.getSourseList()
        this.props.getAPI.getToeicScheduleList()
    }

    resetValue = () => {
        this.setState({
            files : [],
            value : []
        })
    }

    

    

    render() {
        // console.log(this.props.toeicScheduleList)
        return (
            <div>
                <AddInternshipPage
                courseList={this.props.courseList}
                listIntern={this.props.listIntern}
                addIntern={this.props.getAPI}
                toeicScheduleList={this.props.toeicScheduleList}></AddInternshipPage>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        courseList: state.intership.course,
        listIntern: state.intership.interships,
        toeicScheduleList: state.intership.toeicSchedule,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return { getAPI: bindActionCreators(GetAPI,dispatch)}
}
export default connect(mapStateToProps, mapDispatchToProps)(AddInternship)
