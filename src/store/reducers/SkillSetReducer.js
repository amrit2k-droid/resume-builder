import * as actionTypes from '../action';

const initialState = {
    skillArray: [],
    directToProjects: ' '
}

const SkillSetReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_SKILLSINFO:
            return {
                ...state,
                skillArray: action.skillToSave.concat(action.lastSkill),
                directToProjects: action.direct
            }
    }
    return state
}

export default SkillSetReducer