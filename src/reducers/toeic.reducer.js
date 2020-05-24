import _ from 'lodash';
import * as types from '../core/common/action.types';

const defaultstate = {
  toeicSchedule: [
    { id: "01",
      Name_Schadule: "Speaking",
      Data: "01/03/2019",
      Location: "75 Mai Xuan Thuong",
      
    },
    { id: "02",
      Name_Schadule: "Write",
      Data: "02/03/2019",
      Location: "DH Qui Nhon",
    },
    
    { id: "02",
      Name_Schadule: "Listening",
      Data: "05/03/2019",
      Location: "75 Mai Xuan Thuong",
    },
    { id: "03",
      Name_Schadule: "adc",
      Data: "04/03/2019",
      Location: "DH Qui Nhon",
    },
    
    { id: "04",
      Name_Schadule: "toiec 5",
      Data: "06/03/2019",
      Location: "75 Mai Xuan Thuong",
    },
    { id: "05",
      Name_Schadule: "toiec 6",
      Data: "07/03/2019",
      Location: "DH Qui Nhon",
    },
    { id: "06",
      Name_Schadule: "toiec 7",
      Data: "09/03/2019",
      Location: "75 Mai Xuan Thuong",
    },
    { id: "07",
      Name_Schadule: "toiec 8",
      Data: "08/03/2019",
      Location: "DH Qui Nhon",
    },
    { id: "08",
      Name_Schadule: "toiec 9",
      Data: "12/03/2019",
      Location: "DH Qui Nhon",
    },
  
    { id: "09",
      Name_Schadule: "toiec 10",
      Data: "11/03/2019",
      Location: "75 Mai Xuan Thuong",
    },
    { id: "10",
      Name_Schadule: "tuoihahaa",
      Data: "15/03/2019",
      Location: "75 Mai Xuan Thuong",
    },
    { id: "11",
      Name_Schadule: "hihihi",
      Data: "13/03/2019",
      Location: "75 Mai Xuan Thuong",
    },
    { id: "12",
      Name_Schadule: "working",
      Data: "18/03/2019",
      Location: "75 Mai Xuan Thuong",
    },
    { id: "13",
      Name_Schadule: "todoin",
      Data: "17/03/2019",
      Location: "75 Mai Xuan Thuong",
    },
    { id: "14",
      Name_Schadule: "hoaga",
      Data: "31/04/2019",
      Location: "75 Mai Xuan Thuong",
    },
  ],
  loading: false
}

const IntershipReducer = function (state = defaultstate, action) {
  switch (action.type) {
    case types.GET_TOEIC_SCHEDULE_LIST: {
      return _.assign({}, state, { toeicSchedule: action.toeicSchedule, loading: true })
    }
    default: {
      return state;
    }
  }
};

export default IntershipReducer;