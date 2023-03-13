import React, { useState, useEffect, useMemo, useCallback } from "react";

function UseMemo() {
  const [userNumber, setUserNumber] = useState("");
  const [randomInput, setRandomInput] = useState("");

  const fib = useCallback((n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }, []);

  const fibNumber = useMemo(() => fib(userNumber), [userNumber, fib]);

  useEffect(() => {
    console.log("New NUmber");
  }, [fibNumber]);

  return (
    <div>
      <label>Sequence</label>
      <input
        type="number"
        name=""
        value={userNumber}
        placeholder="Positinon"
        onChange={(e) => setUserNumber(e.target.value)}
      />
      <p>Number : {fibNumber || "--"}</p>
      <label>Name</label>

      <input
        type="text"
        name=""
        value={randomInput}
        placeholder="textt"
        onChange={(e) => setRandomInput(e.target.value)}
      />
      <p>{randomInput}</p>
    </div>
  );
}

export default UseMemo;
