export interface ITodosState {
    todos: { title: string, completed: boolean }[],
    completedAll: boolean,
    showType: number,
}

export const TodosState: ITodosState = {
    todos: JSON.parse(localStorage.getItem('react-todo') ?? '[]'),
    completedAll: false,
    showType: 2,
}

const reducer = (state: ITodosState = TodosState, action: any) => {
    switch (action.type) {
        case 'add': return {
            ...state,
            todos: [...state.todos, {
                title: action.title,
                completed: false,
            }],
            completedAll: false,
        };

        case 'delete': return {
            ...state,
            todos: state.todos.filter((value: any, num: number) => {
                return num !== action.num
            }),  
        };

        case 'edit': {
            const newTodo = [...state.todos];
            newTodo[action.num].title = action.title;
            return {
                ...state,
                todos: [...newTodo],
            }
        }

        case 'completedTodo': return {
            ...state,
            todos: state.todos.map((value: any, num: number) => {
                return num === action.num ? {
                    ...value,
                    completed: !value.completed,
                } : value
            })
        }

        case 'clickAll': {
            return {
                ...state,
                todos: state.todos.map((value) => {
                    return {
                        ...value,
                        completed: !state.completedAll,
                    }
                }),
                completedAll: !state.completedAll,
            }
        }

        case 'changeShowType': {
            return {
                ...state,
                showType: action.showType
            }
        }

        case 'deleteCompleted': 
            return {
                ...state,
                todos: state.todos.filter((value) => !value.completed)
            }

        default: return state;
    }
}

export default reducer;
