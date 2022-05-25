import produce from "immer";

const UsersIntialState={
    AllUsers:[],
   

}

export const UsersReducer=produce((state,action)=>{
switch (action.type) {
   
    case  "LOAD_USERS": debugger
        state.AllUsers = action.payload
        break;
}

},UsersIntialState)