import * as types from '../constants'
import callAPI from '../fetchAPIs/callAPI'
import { put, takeEvery } from 'redux-saga/effects'
import  localStorage from '../localStorage';

function* getItems() {
    try {
        const res = yield callAPI(types.HTTP_READ, "3002/items","");
        yield put({
            type: types.GET_ITEM_SUCCESS,
            payload: res
        })
    }
    catch (error) {
        yield put({
            type: types.GET_ITEM_FAILURE,
            payload: error
        })
    }
}

function* addItem(action) {
    try {
        yield callAPI(types.HTTP_CREATE, "3002/items", action.payload);
        yield put({
            type: types.ADD_ITEM_SUCCESS
        })
        yield put({
            type: types.GET_ITEM_REQUEST
        })
    }
    catch (error) {
        yield put({
            type: types.ADD_ITEM_FAILURE,
            payload: error
        })
    }
}
function* deleteItem(action) {
    try {
        yield callAPI(types.HTTP_DELETE, "3002/items/"+ action.payload,"");
        yield put({
            type: types.DELETE_ITEM_SUCCESS
        })
        yield put({
            type: types.GET_ITEM_REQUEST
        })
    }
    catch (error) {
        yield put({
            type: types.DELETE_ITEM_FAILURE,
            payload: error
        })
    }
}
function *updateItem(action){
    let {id,name,author,age,img}=action.payload;
    let send={name:name,author:author,age:age,img:img};
    try{
        const res= yield callAPI(types.HTTP_UPDATE,"3002/items/"+id,send);
        yield put({
            type:types.UPDATE_ITEM_SUCCESS,
            payload:res
        })
        yield put({
            type:types.GET_ITEM_REQUEST
        })
    }
    catch (error){
        yield put({
            type:types.UPDATE_ITEM_FAILURE,
            payload:error
        })
    }
}

function *searchItem(action){
    try{
        const res=yield callAPI(types.HTTP_READ,"3001/items/"+action.payload,'');
        yield put({
            type:types.SEARCH_ITEM_SUCCESS,
            payload:res
        })
    }
    catch(error){
        yield put({
            type:types.SEARCH_ITEM_FAILURE,
            payload:error
        })
    }
}

function *loginUser(action){
    try {
        const res = yield callAPI(types.HTTP_CREATE,"3001/api/login",action.payload);
        if(res.message && res.message.match("account")){
            alert("Tài khoản không tồn tại");
            throw new Error(res.message)
        }
        else{
            if(res.message && res.message.match("password")){
                alert("Sai mật khẩu");
                throw new Error(res.message)
            }
            else{
                yield localStorage.setToken(res);
                yield put({
                    type:types.LOGIN_SUCCESS,
                    payload:{res}
                })
                yield window.location.href = window.location.origin + "/homepage"
            }
        }
    }
    catch(error) {
        yield put ({
            type:types.LOGIN_FAILURE,
            payload:error.message
        })
    }
}

function *regesterUser(action){
    try {
        const res = yield callAPI("POST","3001/api/regester",action.payload);
        yield put ({
            type:types.REGESTER_SUCCESS,
            payload:{res}
        });
        yield alert("Đăng kí thành công, mời bạn trở lại đăng nhập!!")
    }
    catch(error){
        yield put ({
            type:types.REGESTER_FAILURE,
            payload:error.message
        })
    }
}
export const ItemSaga = [
    takeEvery(types.GET_ITEM_REQUEST,getItems),
    takeEvery(types.ADD_ITEM_REQUEST,addItem),
    takeEvery(types.DELETE_ITEM_REQUEST,deleteItem),
    takeEvery(types.UPDATE_ITEM_REQUEST,updateItem),
    takeEvery(types.SEARCH_ITEM_REQUEST,searchItem),
    takeEvery(types.LOGIN_REQUEST,loginUser),
    takeEvery(types.REGESTER_REQUEST,regesterUser)
]