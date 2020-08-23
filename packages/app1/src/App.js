import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const RemoteButton = React.lazy(() => import("app2/Button"));

const App = () => (
  <div className="main">
    <h2>App 1</h2>
    <TodoInput />
    <TodoList />
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
  </div>
);

export default App;
