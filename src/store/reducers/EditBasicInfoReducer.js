import * as actionTypes from '../action';

const initialState = {
    editBasicInfo: false,
    toBasicInfo: ' ',
    editBasicInfo1: false
}

const EditBasicInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_EDITBASICINFO:
            return {
                ...state,
                editBasicInfo: action.editBasicInfo,
                toBasicInfo: action.direct,
                editBasicInfo1: action.editBasicInfo1
            }
    }
    return state
}

export default EditBasicInfoReducer