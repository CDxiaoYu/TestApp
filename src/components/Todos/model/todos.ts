import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodosState {
    todos: any,
    allCompleted: string,
}

const initialState: TodosState = {
    todos: JSON.parse(localStorage.getItem('react-todo') ?? '[]'),
    // 0 不显示 1 存在未完成 2 全部完成
    allCompleted: '0',
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

        add: (state, action: PayloadAction<string>) => {
            state.todos.push({
                title: action.payload,
                completed: false,
            })
            localStorage.setItem('react-todo',JSON.stringify(state.todos));
        },
        completedTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos?.map((value: any, num: string) => {
                if(num === action.payload) {
                    return {
                        title: value?.title,
                        completed: !value?.completed
                    }
                }
                return value
            })
            localStorage.setItem('react-todo',JSON.stringify(state.todos));

        },
        deletedTodo: (state, action: PayloadAction<string>) => {
            state.todos.splice(action.payload,1);
            localStorage.setItem('react-todo',JSON.stringify(state.todos));
            
        },

        deletedCompletedTodo: (state) => {
            state.todos = state.todos.filter((value: any) => {
                return !value.completed
            })
            localStorage.setItem('react-todo',JSON.stringify(state.todos));
        },

        clickAllCompleted: (state) => {
            if(state.allCompleted === '1') {
                state.todos = state.todos.map((value: any) => {
                    return {
                        ...value,
                        completed: true,
                    }
                })
                state.allCompleted = '2'
                console.log(2)
            } else {
                state.todos = state.todos.map((value: any) => {
                    return {
                        ...value,
                        completed: false,
                    }
                })
                state.allCompleted = '1'
            }
            localStorage.setItem('react-todo',JSON.stringify(state.todos));
        },

        syncAllCompleted: (state) => {
            if(state.todos.length === 0){
                state.allCompleted === '0'
            }
        }
        
   
    }
})

export const { add, completedTodo, deletedTodo, deletedCompletedTodo, clickAllCompleted, syncAllCompleted } = todosSlice.actions;

export default todosSlice.reducer;