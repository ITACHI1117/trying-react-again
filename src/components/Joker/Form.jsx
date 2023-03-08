import React from "react";

function Form() {
  const getMemeImage = () =>{
    console.log("Meems");
  }
  return (
    <div className="JokerForm">
      <form action="submit">
        <input type="text" placeholder="Text" />
        <input type="text" placeholder="Text" />
      </form>
      <button onClick={getMemeImage}>Get a new meme image</button>
    </div>
  );
}

export default Form;
