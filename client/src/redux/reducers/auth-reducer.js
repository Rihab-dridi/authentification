import { ERROR_USER, GET_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../action-types/auth-action-types"

const initialState={
    token:localStorage.getItem('token'),
    isAuth:false,
    user:null
}

export const  authReducer=(state=initialState,action)=>{
switch (action.type) {
case LOGIN_USER:
case REGISTER_USER: localStorage.setItem('token', action.payload.token )
return{
    ...state,
    isAuth:true,
    ...action.payload
}
case ERROR_USER:
case LOGOUT_USER: localStorage.removeItem('token')
return{
    ...state,
    token:null,
    isAuth:false,
    user:null
}
case GET_USER:return{
    ...state,
    isAuth:true,
    user:action.payload
   
}


    default:return state
       
}
}