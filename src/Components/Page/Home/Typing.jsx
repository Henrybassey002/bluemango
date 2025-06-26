//Menu Item card bootstrap design.

import { useState } from "react";

export function ParentComponent() {
  const [dataFromChild, setDataFromChild] = useState(null);

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };
  return (
    <div className="">
      <h3>Parent:</h3>
      <p>Data from Child{dataFromChild}</p>
      <ChildComponent sendDataToParent={handleDataFromChild} />
    </div>
  );
}

export function ChildComponent() {
  return (
    <div className="">
      <h3>Child:</h3>
      <input
        type="text"
        placeholder="child input"
        onChange={(e) => props.sendDataToParent(e.target.value)}
      />
    </div>
  );
}
