import React, { useState, useRef, useLayoutEffect } from "react";

function UseLayoutEffect() {
  const [number, setNumber] = useState(0);
  const [sectionStyle, setSectionStyle] = useState({});
  const sectionRef = useRef();

  useLayoutEffect(() => {
    const random = Math.floor(Math.random() * 200);

    for (let i = 0; i <= 10000000; i++) {
      if ((i = 10000000)) {
        setSectionStyle({ paddingTop: `${random}px` });
      }
    }
  }, [number]);

  return (
    <>
      <section ref={sectionRef} style={sectionStyle}>
        <p>{number}</p>
        <div>
          <button onClick={() => setNumber((prev) => prev - 1)}>-</button>
          <button onClick={() => setNumber((prev) => prev + 1)}>+</button>
        </div>
      </section>
    </>
  );
}

export default UseLayoutEffect;
