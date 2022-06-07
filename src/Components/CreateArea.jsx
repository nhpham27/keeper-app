import React from "react";

function CreateArea(props) {
    const [note, setNote] = React.useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(prevNote => {
            return {...prevNote, [name]:value};
        });
    }

    function addItem() {
        props.onAdd(note.title, note.content);
    }

  return (
    <div>
      <form onSubmit={(event)=>{event.preventDefault()}}>
        <input name="title" placeholder="Title" onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange}/>
        <button onClick={addItem}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;