import React, { useState, useCallback, useEffect } from "react";

function UseCallback() {
  const [result, setResult] = useState();
  const [num1] = useState(4);
  const [num2] = useState(5);

  const sum = useCallback(() => num1 + num2, [num1, num2]);
  useEffect(() => {
    console.log(`New array ${sum()}`);
    setResult(sum());
  }, [sum]);
  return (
    <div>
      <form>
        <input type="" name="" onChange={(e) => setResult(e.target.value)} />
      </form>
      <p>{result}</p>
    </div>
  );
}

export default UseCallback;
