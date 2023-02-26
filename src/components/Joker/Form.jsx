import React from "react";

function Form() {
  return (
    <div className="JokerForm">
      <form action="submit">
        <input type="text" placeholder="Text" />
        <input type="text" placeholder="Text" />
      </form>
      <button>Get a new meme image</button>
    </div>
  );
}

export default Form;
