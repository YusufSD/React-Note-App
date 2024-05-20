import "./App.css";
import { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (comingNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, comingNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index != id;
      });
    });
  };

  return (
    <div className="App">
      <Header />
      <CreateNote onAdd={addNote} />
      <div className="notesDiv">
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              noteTitle={noteItem.title}
              noteContent={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
      <div className="footerDiv">
        <Footer />
      </div>
    </div>
  );
}

export default App;
