import React from "react";

const RemoteButton = React.lazy(() => import("app1/Button"));

const App = () => (
  <div>
    <h2>App 2</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
  </div>
);

export default App;
