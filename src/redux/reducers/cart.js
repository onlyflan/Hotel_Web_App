
const initCart = []

export const cartReducer = (state = initCart, action) =>{
    const newState = [...state]
    switch(action.type){
        case "ADD_ITEM":
            const indextItem = newState.findIndex( item => item.id === action.id );
            if(indextItem === -1){
                newState.push({
                    id: action.id,
                    quantity: 1
                });
            }else{
                newState[indextItem].quantity += 1 
            }
            return newState
        case "UPDATE_ITEM":
            const indextItemUpdate = newState.findIndex( item => item.id === action.id );
            newState[indextItemUpdate].quantity += action.number
            return newState
        case "DELETE_ITEM":
            return newState.filter(item => item.id !== action.id)
        case "DELETE_ALL":
            return []
        default:
            return state;
    }
    
}
