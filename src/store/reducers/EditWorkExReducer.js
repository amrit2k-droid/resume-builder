import * as actionTypes from '../action';

const initialState = {
    edit: ' ',
    direct: ' ',
    backToWorkEx: false,
    status: false
}

const EditWorkExReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_EDITWORKEXINFO:
            return {
                edit: action.editBool,
                direct: action.direct,
                backToWorkEx: action.backToWorkEx,
                status: action.statusBasicInfo
            }
    }
    return state
}

export default EditWorkExReducer