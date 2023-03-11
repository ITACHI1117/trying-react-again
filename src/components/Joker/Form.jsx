import React, { useState } from "react";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

function Form() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });
  const { getMemeImage } = useContext(DataContext);

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <div className="JokerForm">
      <form action="submit">
        <input
          name="firstName"
          onChange={handleChange}
          type="text"
          placeholder="Text"
          value={formData.firstName}
        />
        <input
          name="lastName"
          onChange={handleChange}
          type="text"
          placeholder="Text"
          value={formData.lastName}
        />
      </form>
      <button onClick={getMemeImage}>Get a new meme image</button>
    </div>
  );
}

export default Form;
