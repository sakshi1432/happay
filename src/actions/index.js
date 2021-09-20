export const incNumber = (id) =>{
    return  {
        type: "ADD",
        payload:id
    }
}

export const inNumber = (num) =>{
    return  {
        type: "DECREMENT",
        payload:num
    }
}
