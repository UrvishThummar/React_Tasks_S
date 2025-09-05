const arr = []
export const myReducer = (state = arr, action) => { 


    if (action.type === "ADD") {
        state = [
            ...state, action.data
        ]
    }
    else if (action.type === "DEl") {
        const array = [...state]
        array.splice(action.data, 1)
        return array
    }
 
    else if (action.type === "EDIT") {
        const { i, newvalue } = action.data;
        const newarr = [...state]
        newarr[i] = newvalue
        return newarr
    }   
    return state
}
