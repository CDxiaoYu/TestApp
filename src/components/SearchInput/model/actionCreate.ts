export const add = (title: string) => {
    return {
        type: 'add',
        title
    }
}

export const deleteTodo = (num: number) => {
    
    return {
        type: 'delete',
        num
    }
}

export const editTodo = (title: string, num: number) => {
    return {
        type: 'edit',
        title,
        num
    }
}

export const completedTodo = (num: number) => {
    return {
        type: 'completedTodo',
        num
    }
} 

export const clickAll = (num: number) => {
    return {
        type: 'clickAll',
    }
}

export const changeShowType = (showType: string) => {
    return {
        type: 'changeShowType',
        showType
    }
}

export const deleteCompleted = () => {
    return {
        type: 'deleteCompleted'
    }
}

export default {
    add,
    deleteTodo,
    editTodo,
    clickAll,
    completedTodo,
    changeShowType,
    deleteCompleted,
}
