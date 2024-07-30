/* eslint-disable no-unused-vars */
import React from "react";
import { useContext} from "react";

export  const todoContext= React.createContext({
todos:[
{
    completed: false,
    id:1,
    todo: "Todo 1 "
}

],
addTodo:(todo)=>{},
updateTodo:(id,todo)=>{},
deleteTodo:(id)=>{},
toggleCompleted:(id)=>{}


});

export const useTodo= ()=>useContext(todoContext)

export  const TodoProvider=  todoContext.Provider


