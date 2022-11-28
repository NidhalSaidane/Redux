import {ADD,UPDATE,DELETE,COMPLETE} from "./types"

export const addTodo= (input)=>{
    return {type:ADD,
            payload:input
    };
};

export const deleteTodo= (todo)=>{
    return {type:DELETE,
            payload:todo
    };
};

export const completeTodo= (id)=>{
    return {type:COMPLETE,
            payload:id
    };
};
export const updateTodo= (editTask,id)=>{
    return {type:UPDATE,
            payload:{editTask,id}
    };
};