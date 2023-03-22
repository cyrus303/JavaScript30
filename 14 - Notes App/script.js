const addNoteEl = document.getElementById('add-note');
const notesContainerEl = document.getElementById('notes-container');

getNotesLS().forEach((note) => {
  const noteEl = createNoteEl(note.id, note.content);
  addNoteEl.before(noteEl);
});

function addNote() {
  const notes = getNotesLS();
  const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: '',
  };

  const noteEl = createNoteEl(noteObj.id, noteObj.content);

  addNoteEl.before(noteEl);
  notes.push(noteObj);
  saveNotesLS(notes);
}

function createNoteEl(id, content) {
  const note = document.createElement('textarea');
  note.name = 'note';
  note.className = 'note';
  note.placeholder = 'Empty Note';
  note.id = id;
  note.value = content;

  note.addEventListener('dblclick', () => {
    deleteNote(id, note);
  });

  note.addEventListener('input', () => {
    updateNote(id, note.value);
  });

  return note;
}

function deleteNote(id, note) {
  const confirm = window.confirm('Do you want to delete this note?');
  if (confirm) {
    const notes = getNotesLS().filter((note) => note.id != id);
    console.log(notes);
    saveNotesLS(notes);
    addNoteEl.removeChild(note);
  }
}

/! delete note need to be worked on*/;

function updateNote(id, content) {
  console.log(`id: ${id} content:${content}`);
  const notes = getNotesLS();
  const target = notes.filter((note) => note.id === id)[0];
  target.content = content;
  saveNotesLS(notes);
}

function saveNotesLS(notes) {
  localStorage.setItem('note-app', JSON.stringify(notes));
}

function getNotesLS() {
  const notes = JSON.parse(localStorage.getItem('note-app') || '[]');
  return notes;
}

addNoteEl.addEventListener('click', addNote);
