import React, { useState } from "react";

import RenderList from "./RenderList";

const App = () => {
  const [resources, setResource] = useState("posts");
  return (
    <div>
      <button onClick={() => setResource("posts")}>POST</button>
      <button onClick={() => setResource("todos")}>TODOS</button>
      <div>
        <RenderList whatToFetch={resources} />
      </div>
    </div>
  );
};

export default App;
