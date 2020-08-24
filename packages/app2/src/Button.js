import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearTodo } from "./actions";

const style = {
  background: "#00c",
  color: "#fff",
  padding: 12,
};

const Button = (props) => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const clearTodos = () => dispatch(clearTodo());

  return (
    <div>
      <h2>App 2</h2>
      <h3>{`total todos: ${todos.length}`}</h3>
      <button style={style} onClick={clearTodos}>
        Clear
      </button>
    </div>
  );
};

export default Button;
