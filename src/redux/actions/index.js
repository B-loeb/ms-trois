export const addItem = (service) => {
    return {
        type : "ADDITEM",
        payload : service
    }
}

export const deleteItem = (service) => {
    return {
        type : "DELETEITEM",
        payload : service
    }
}