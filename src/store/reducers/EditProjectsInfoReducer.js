import * as actionTypes from '../action';

const initialState = {
    editProjectsInfo: false,
    toProjects: ' ',
    backToProjects: false,
    status: false
}

const EditProjectsInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_EDITPROJECTSINFO:
            return {
                ...state,
                editProjectsInfo: action.editProjectsInfo,
                toProjects: action.direct,
                backToProjects: action.backToProjects,
                status: action.statusBasicInfo
            }
    }
    return state
}

export default EditProjectsInfoReducer