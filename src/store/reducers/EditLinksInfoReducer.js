import * as actionTypes from '../action';

const initialState = {
    editLinksInfo: false,
    toEdit: ' ',
    backToLinks: false,
    status: false
}

const EditLinksInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_EDITLINKSINFO:
            return {
                ...state,
                editLinksInfo: action.editLinksInfo,
                toEdit: action.direct,
                backToLinks: action.backToLinks,
                status: action.statusBasicInfo
            }
    }
    return state
}

export default EditLinksInfoReducer