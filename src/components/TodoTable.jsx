import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { DeleteIcon } from "./UI/icons";
import { todosActions } from "../store/todosSlice";
import { fetchTodos, fetchTodosV2 } from "../store/todosSlice";


const TodoTable = () => {
  // const [items, setItems] = useState(todoItems);
  const items = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosV2());
  }, [])

  const handleDeleteClick = (id) => {
    console.log(id);
    dispatch(todosActions.removeTodo(id));
  };

  const handleCheckClick = (id) => {
    console.log(id);
  };

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-min gap-2 w-full max-w-lg text-sm text-left text-gray-table-auto border-collapse border-spacing-2 @container">
        {items.map((item) => (
          <div
            key={item.id}
            className="hover:bg-slate-200 bg-white rounded-md flex items-center gap-2 p-2 [&>*]:flex [&>*]:items-center"
          >
            <div>
              <input
                type="checkbox"
                className="default:ring-2 checked:bg-green invisible @sm:visible"
                onClick={() => handleCheckClick(item.id)}
              />
            </div>
            <div className="flex-grow flex-shrink-0">{item.todo}</div>
            <div>
              <button
                className="text-red-500 px-2 rounded-sm text-base"
                onClick={() => handleDeleteClick(item.id)}
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoTable;
