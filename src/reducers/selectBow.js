export default function(state = null, action){
    switch(action.type){
        case 'BOW_SELECTED':
            return action.payload;
    }
    return state;
}