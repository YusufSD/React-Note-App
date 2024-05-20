import React, { useState } from "react";

function CreateNote({ onAdd }) {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (e) => {
    e.preventDefault();
    setNote({
      title: "",
      content: "",
    });
    onAdd(note);
  };

  return (
    <div className="createDiv">
      <form>
        <input
          type="text"
          className="form-control input mb-3"
          name="title"
          value={note.title}
          placeholder="Note Başlığı"
          onChange={handleChange}
        />
        <textarea
          className="form-control input mb-3"
          name="content"
          rows="5"
          value={note.content}
          placeholder="Notunuzu Giriniz"
          onChange={handleChange}
        ></textarea>
        <div className="buttonDiv">
          <button onClick={submitNote} className="addButton">
            Ekle
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNote;
