import { useRef, useState } from "react";

export default function TaskList({ todo, handleDelete, handleChangeTodo }) {
  let [isEditing, setIsEditing] = useState(false);

  let todoContent;

  if (isEditing) {
    todoContent = (
      <>
        <input
          type="text"
          className="text-neutral-700 border-2	border-green-500	mr-5 rounded "
          value={todo.title}
          disabled={!isEditing}
          onChange={(e) => {
            handleChangeTodo({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button
          className="btn-primary bg-green-50	rounded p-1 border border-solid border-box cursor-pointer"
          onClick={(tod) => {
            setIsEditing((isEditing = !isEditing));
          }}
        >
          save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        <input
          type="text"
          className="text-neutral-700 border-2	border-gray-500	mr-5 rounded "
          value={todo.title}
          disabled={!isEditing}
          onChange={(e) => {
            handleChangeTodo({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button
          className="btn-primary bg-green-50	rounded p-1 border border-solid border-box cursor-pointer"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <div className="flex justify-between items-center w-full">
      <span className="justify-end">{todoContent}</span>
      <button
        onClick={() => handleDelete(todo)}
        className="border-solid	border-red-400 hover:bg-red-700		border-2 rounded mr-1 px-2 text-white	 bg-red-400	"
      >
        Delete
      </button>
    </div>
  );
}
