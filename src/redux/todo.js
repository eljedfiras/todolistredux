import { createSlice } from "@reduxjs/toolkit" 

const todoSlice = createSlice ({
    name: "todos",
    initialState:[{
        id: Math.random(),
        description:"Wa&ke Up early",
        isDone: true,
    },
    {
        id: Math.random(),
        description: "Check the charts",
        isDone: false,
    },
    {
        id: Math.random(),
        description: "make a plan",
        isDone : true , 
    }] ,

    reducers:{

        add:(state,action)=>{
            const newTask={
                id:Math.random,
                description:action.payload,
                isDone:false,
            }
            state.push(newTask)

        },
        delet:(state,action)=>{
            return state.filter((e)=> e.id !== action.payload)
        },
        toggole:(state,action)=>{
            return state.map((e)=> {
                if (e.id === action.payload) {
                    return {...e, isDone : !e.isDone}
                }
                else {return e}
            })
        },

       


        editTodo:(state,action)=>{
            const index = state.findIndex((e)=> e.id === action.payload)
            state[index].description = prompt('Change ToDo')
        },
    }

    })

    export const {add, delet, toggole, editTodo} = todoSlice.actions;
    export default todoSlice.reducer

   