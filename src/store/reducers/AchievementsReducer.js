import * as actionTypes from '../action';

const initialState = {
    achievementArray: [],
    directToPreview: ' '
}

const AchievementsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_ACHIEVEMENTSINFO:
            return {
                achievementArray: action.achievementArray.concat(action.lastRowOfAchievement),
                directToPreview: action.direct
            }
    }
    return state
}

export default AchievementsReducer