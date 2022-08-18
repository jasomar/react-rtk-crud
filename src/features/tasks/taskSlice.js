import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        id:"1",
        title: "Task 1",
        description: "Task 1 description test 1",
        completed: false
    },
    {
        id:"2",
        title: "Task 2",
        description: "Task 2 description test 2",
        completed: false
    },
]

export const taskSlice =  createSlice ({
    name:'tasks',
    initialState:initialState,
    reducers:{ 
        addTask: (state,action) => {
          //[...state,action.payload]
          state.push(action.payload)
        },
        deleteTask:(state,action) => {
            const taskfound = state.find(task => task.id === action.payload)
            if (taskfound){
                state.splice(state.indexOf(taskfound),1)
            }
        },
        editTask:(state,action) =>{
            const {id,title,description} = action.payload
            const foundTask = state.find(task => task.id === id)
            console.log(action.payload)
            if(foundTask){
                foundTask.title = title
                foundTask.description = description
            }
        }
    }
})


export const {addTask,deleteTask,editTask} = taskSlice.actions
export default taskSlice.reducer