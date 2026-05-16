import React from "react";
import { useState, useCallback, type FC } from "react";

interface AppProps {
  message: string;
}

const App: FC<AppProps> = ({ message }) => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <main>
      <h1>{message}</h1>
      <p>Current count: <strong>{count}</strong></p>
      <button onClick={increment} type="button">
        Increment Counter
      </button>
    </main>
  );
};

export default App;