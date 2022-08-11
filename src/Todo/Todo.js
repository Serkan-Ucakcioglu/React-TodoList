import { useState, useRef } from "react";
import TaskList from "./TaskList";

let nextId = 0;
function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodo] = useState([]);
  const [show, setShow] = useState(false);
  const input = useRef();

  const handleInput = () => {
    if (text.length < 3) {
      input.current.classList.add("border-red-600", "border-2", "border-solid");
    } else {
      setTodo([
        ...todos,
        {
          id: Date.now(),
          title: text,
        },
      ]);
      setText("");
      console.log(nextId);
    }
  };

  const handleDelete = (todo) => {
    setTodo(todos.filter((a) => a.id != todo.id));
  };

  function handleChangeTodo(newTodo) {
    setTodo(
      todos.map((t) => {
        if (t.id === newTodo.id) {
          return newTodo;
        } else {
          return t;
        }
      })
    );
  }

  return (
    <header>
      <div className=" w-full flex-col items-center justify-center mx-auto	">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" flex items-center	 justify-center pt-9 box-border	"
        >
          <input
            className="w-11/12		border-solid h-10		 placeholder:italic placeholder:text-slate-400  peer-invalid:text-red-500 block bg-white w-full  rounded-md py-2 pl-9 pr-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Todo..."
            type="text"
            name="search"
            value={text}
            ref={input}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="bg-cyan-500 hover:bg-cyan-600 py-1.5 px-4 mx-3 rounded text-white inline"
            onClick={() => handleInput()}
          >
            add
          </button>
        </form>
        <ul className="	mx-auto	lg flex flex-col items-center	 mt-20">
          {todos.map((todo) => (
            <li
              className="flex h-10 mb-2	 hover:bg-white	 cursor-pointer last-of-type:mb-4	 items-center justify-around pl-2 border-solid border-2 border-black			rounded h-10 my-2   w-full"
              key={todo.id}
            >
              <TaskList
                class="flex flex-row"
                todo={todo}
                handleDelete={handleDelete}
                handleChangeTodo={handleChangeTodo}
              />
            </li>
          ))}
        </ul>
        {todos.length > 0 && (
          <div className="bg-sky-300	mt-6	 rounded  border-solid p-2 h-3	border inline ">
            {todos.length} adet todo var.
          </div>
        )}
      </div>
    </header>
  );
}

export default Todo;
