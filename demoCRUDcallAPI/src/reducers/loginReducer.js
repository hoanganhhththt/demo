import * as types from '../constants'

const DEFAULT_STATE = {
    isLoading: false,
    error: false,
    messageError: ""
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.REGESTER_REQUEST:
        case types.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.REGESTER_SUCCESS:
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case types.REGESTER_FAILURE:
        case types.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true,
                messageError: action.payload.message
            }
        default:
            return {
                ...state
            }
    }
}