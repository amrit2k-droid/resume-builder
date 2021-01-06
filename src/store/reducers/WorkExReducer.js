import * as actionTypes from '../action';

const initialState =  {
    designationArray: [],
    companyArray: [],
    startDateArray: [],
    endDateArray: [],
    isActive: ' ',
    directToProjects: ' ',
    workExRows: []
}

const WorkExReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_WORKEXINFO:
            return {
                ...state,
                designationArray: action.designationArray.concat(action.designation),
                companyArray: action.companyArray.concat(action.company),
                startDateArray: action.startDateArray.concat(action.startDate),
                endDateArray: action.endDateArray.concat(action.endDate),
                isActive: action.isActive? "present": ' ',
                directToProjects: action.directToProjects,
                workExRows: action.rows
            }
    }
    return state
}

export default WorkExReducer