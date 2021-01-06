import * as actionTypes from '../action';

const initialState = {
    projectNameArray: [],
    projectDescArray: [],
    projectStDateArray: [],
    projectEndDtArray: [],
    status: ' ',
    directToAchievements: ' '
}

const ProjectsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_PROJECTSINFO:
            return {
                ...state,
                projectNameArray: action.pjtNameArray.concat(action.pjtName),
                projectDescArray: action.pjtDescArray.concat(action.pjtDesc),
                projectStDateArray: action.pjtStDateArray.concat(action.pjtStDate),
                projectEndDtArray: action.pjtEndDtArray.concat(action.pjtEndDate),
                status: action.status? "present": ' ',
                directToAchievements: action.directToAchievements
            }
    }
    return state
} 

export default ProjectsReducer