import { useTodo } from "../context/TodoContext";
import { useState } from "react";
function TodoItem(obj) {
  //console.log("Item =",todo.todo);
  const [isTodoEditable, setisTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(obj.todo.todo);
  // console.log("todoMSG =  ", todoMsg);
  const { deleteTodo, updateTodo, toggleCompleted } = useTodo(); ////////////

  const editTodo = () => {
    //updateTodo((todo.id,{...todo,todo:todoMsg}))
    updateTodo(obj.id, { ...obj, todo: todoMsg });
    setisTodoEditable(false);
  };
  const toggleComplete = () => {
    // console.log("ToCO = ",obj.todo.todo.id);
    toggleCompleted(obj.todo.todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        obj.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={obj.completed}
        onChange={toggleComplete}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${obj.completed ? "line-through" : ""}`}
        value={todoMsg.todo}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (obj.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setisTodoEditable((prev) => !prev);
        }}
        disabled={obj.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => {
          console.log(obj.todo.todo.id);
         deleteTodo(obj.todo.todo.id);
        }}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
