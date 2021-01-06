import * as actionTypes from '../action';

const initialState = {
    editSkillsInfo: false,
    toSkills: ' ',
    backToSkills: false,
    status: false
}

const EditSkillsInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_EDITSKILLSINFO:
            return {
                ...state,
                editSkillsInfo: action.editSkillsInfo,
                toSkills: action.direct,
                backToSkills: action.backToSkills,
                status: action.statusBasicInfo
            }
    }
    return state
}

export default EditSkillsInfoReducer