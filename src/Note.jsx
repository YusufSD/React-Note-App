import React from "react";

function Note({ id, noteTitle, noteContent, onDelete }) {
  const deleteClick = () => {
    onDelete(id);
  };
  return (
    <div className="noteDiv">
      <h2>{noteTitle}</h2>
      <p>{noteContent}</p>
      <button className="btn btn-danger" onClick={deleteClick}>
        Notu Sil
      </button>
    </div>
  );
}

export default Note;
