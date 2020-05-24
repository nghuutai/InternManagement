import _ from 'lodash';
import * as types from "./../core/common/action.types";

const defaultState = {
    interships: [],
    course: [],
    login:[],
    newIntern: {},
    oldIntern: {},
    loading: false,
    toeicSchedule: [
        {
            Id: 1,
            Name: "Test toeic batch 1",
            Date: "21/06/2019",
            Location: "75 Mai Xuân Thưởng"
        },
        {
            Id: 2,
            Name: "Test toeic batch 2",
            Date: "20/09/2019",
            Location: "75 Mai Xuân Thưởng"
        },
    ],
    totalCoreToeic: {},
};


const IntershipReducer = function (state = defaultState, action) {
    switch (action.type) {
        case types.GET_INTERSHIP_LIST: {
            return _.assign({}, state, { interships: action.internship, loading: true });
        }
        case types.GET_COURSE_LIST: {
            return _.assign({}, state, { course: action.course });
        }
        case types.CREATE_NEW_INTERN: {
            return _.assign({}, state, { newIntern: action.newIntern });
        }
        case types.UPDATE_INTERN: {
            return state;
        }
        case types.DELETE_INTERN: {
            return _.assign({}, state, { oldIntern: action.oldIntern});
        }
        case types.LOGIN_INTERSHIP_LIST: {
            return _.assign({}, state, { login: action.login });
        }
        case types.GET_TOEIC_SCHEDULE_LIST: {
            return _.assign({}, state, { toeicSchedule: action.toeicSchedule})
        }
        case types.UPLOAD_FILES: {
            return _.assign({}, state, {totalCoreToeic: action.totalCoreToeic})
        }
        default: {
            return state;
        }
    }
};

export default IntershipReducer;