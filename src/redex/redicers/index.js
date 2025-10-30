

const initialState={
temp : {
 
    aggiorna:Date.now()

}
}


const mainReducer = (state =initialState,action)=>{

switch(action.type){
   case "AGGIORNA" :
    return{
        ...state,
        temp:{
            ...state.temp,
            aggiorna:action.payload
        }
    }
    //case:
    default:
        return state
}

}


export default mainReducer