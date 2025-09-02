export const myAction=(data)=>{
    return{     
        type:"ADD",
        data
    }
}

export const delateAction=(data)=>{
    return{     
        type:"DEl",
        data
    }
}
    export const editAction=(i,newvalue)=>{
    return{     
        type:"EDIT",
        data:{i,newvalue}
    }
}
