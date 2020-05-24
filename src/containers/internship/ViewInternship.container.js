import React, { Component } from 'react';
import ViewInternshipPage from '../../components/internship/ViewInternship.component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as GetAPI from '../../actions/intership.action'
class ViewInternship extends Component {
    constructor(props){
        super(props)
        this.state = {
            info: {}
        }
    }
    componentWillMount() {
        this.props.getAPI.getSourseList()
        this.props.getAPI.getToeicScheduleList()
        this.props.listIntern.map((value) => {
            if(value.ID === this.props.params.id){
                this.setState({
                    info: value
                })
            }
        })
    }
    render() {
        return (
            <div>
                <ViewInternshipPage
                id={this.props.params.id}
                courseList={this.props.courseList}
                intern={this.state.info}
                listIntern={this.props.listIntern}
                getAPI={this.props.getAPI}
                toeicScheduleList={this.props.toeicScheduleList}></ViewInternshipPage>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        listIntern: state.intership.interships,
        courseList: state.intership.course,
        toeicScheduleList: state.intership.toeicSchedule,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return { getAPI: bindActionCreators(GetAPI,dispatch)}
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewInternship)
