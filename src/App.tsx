import React from "react";

const App = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }, []);

  return <div>{count}</div>;
};

export default App;
