import * as actionTypes from '../action';

const initialState = {
    email: ' ',
    github: ' ',
    linkedIn: ' ',
    profileLink:  ' ',
    contact: ' ',
    directToWorkEx: ' '
}

const LinksReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_LINKSINFO:
            return {
                ...state, 
                email: action.email,
                github: action.github,
                linkedIn: action.linkedIn,
                profileLink: action.profile,
                contact: action.contact,
                directToWorkEx: action.direct
            }
    }
    return state
}

export default LinksReducer