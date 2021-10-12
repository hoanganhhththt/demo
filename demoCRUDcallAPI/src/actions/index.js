import *as types from '../constants'

export function get_all_books(payload){
    return{
        type:types.GET_ITEM_REQUEST,
        payload
    }
}
export function delete_a_book(payload){
    return{
        type:types.DELETE_ITEM_REQUEST,
        payload
    }
}
export function update_a_book(payload){
    return{
        type:types.UPDATE_ITEM_REQUEST,
        payload
    }
}
export function create_a_book(payload){
    return{
        type:types.ADD_ITEM_REQUEST,
        payload
    }
}
export function search_a_book(payload){
    return{
        type:types.SEARCH_ITEM_REQUEST,
        payload
    }
}
export const loginRequest = (payload) => {
    return({
        type: types.LOGIN_REQUEST,
        payload
    })
}

export const regesterRequest = (payload) => {
    return({
        type: types.REGESTER_REQUEST,
        payload
    })
}