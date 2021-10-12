import * as types from '../constants'

const DEFAULT_STATE={
    listBook:[],
    error:false,
    isFetching:false
}

export default (state=DEFAULT_STATE,action)=>{
    switch(action.type){
        case (types.GET_ITEM_REQUEST):
        case (types.UPDATE_ITEM_REQUEST):
        case (types.DELETE_ITEM_REQUEST):
        case (types.ADD_ITEM_REQUEST):
        case (types.SEARCH_ITEM_REQUEST):
            return{
                ...state,
                isFetching:true
            }
        case (types.GET_ITEM_SUCCESS):
        case (types.SEARCH_ITEM_SUCCESS):
            return{
                ...state,
                listBook:action.payload,
                isFetching:false
            }
        case (types.UPDATE_ITEM_SUCCESS):
        case (types.ADD_ITEM_SUCCESS):
        case (types.DELETE_ITEM_SUCCESS):
            return{
                ...state,
                isFetching:false
            }
        case (types.GET_ITEM_FAILURE):
        case (types.ADD_ITEM_FAILURE):
        case (types.UPDATE_ITEM_FAILURE):
        case (types.DELETE_ITEM_FAILURE):
        case (types.SEARCH_ITEM_FAILURE):
            return{
                ...state,
                error:true,
                isFetching:false
            }
        default:
            return state;
    }
}