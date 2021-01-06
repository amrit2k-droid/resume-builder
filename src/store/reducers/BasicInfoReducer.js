import * as actionTypes from "../action";

const initialState = {
    name: ' ',
    role: ' ',
    cover: ' ',
    direct: ' ',
    basicInfoRows: '',
    status: false
}

const BasicInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_BASICINFO:
            return {
                ...state, 
                name: action.name,
                role: action.role,
                cover: action.cover,
                direct: action.direct,
                basicInfoRows: action.rows,
                status: action.status
            }
    }
    return state
}

export default BasicInfoReducer