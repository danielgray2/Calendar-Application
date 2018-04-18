 export const selectUser = (user) => {
     if(user.firstName === "Eli"){
         user.lastName = 'What a guy'
     }
    return{
        type: 'USER_SELECTED',
        payload: user
    }
 }