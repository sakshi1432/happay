export const incNumber = (id) =>{
    return  {
        type: "INCREMENT",
        payload:id
    }
}

export const inNumber = (num) =>{
    return  {
        type: "DECREMENT",
        payload:num
    }
}