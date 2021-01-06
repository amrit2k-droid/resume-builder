import * as actionTypes from '../action';

const initialState = {
    editAchInfo: false,
    toAchievements: ' ',
    status: false
}

const EditAchInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_EDITACHIEVEMENTSINFO:
            return {
                ...state,
                editAchInfo: action.editAchInfo,
                toAchievements: action.direct,
                status: action.statusBasicInfo
            }
    }
    return state
}

export default EditAchInfoReducer