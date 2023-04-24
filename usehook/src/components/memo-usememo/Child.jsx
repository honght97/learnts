import React from "react";

const Child = () => {
  console.log("child component - render");
  return (
    <div>
      <p>Child Component</p>
    </div>
  );
};

export default React.memo(Child, (prevProps, nextProps) => {
  return prevProps.name === nextProps.name;
});
