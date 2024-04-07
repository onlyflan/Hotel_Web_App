export const addItem = (id) =>{
    return{
        type: "ADD_ITEM",
        id: id
    };
}

export const updateQuantityItem = (id,number) =>{
    return{
        type: "UPDATE_ITEM",
        id: id,
        number: number
    };
}
export const deleteItem = (id) =>{
    return{
        type: "DELETE_ITEM",
        id: id
    };
}
export const deleteALL = (id) =>{
    return{
        type: "DELETE_ALL",
    };
}