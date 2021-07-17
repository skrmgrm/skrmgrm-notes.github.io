const btnAddNote = document.querySelector(".btn-addNote");

const notesContainer = document.querySelector(".main-container");

btnAddNote.addEventListener("click", () => {
  addNewNote();
});

function addNewNote() {
  const note = document.createElement("div");

  note.classList.add("notes-container");

  note.innerHTML = `<div class="notes-container">
      <div class="menu-section">
        <div id="add-icon">
          <i class="btn-edit fas fa-check"></i>
        </div>
        <div id="delete-icon">
          <i class="btn-delete fas fa-trash"></i>
        </div>
      </div>
      <div class="main-text hidden"></div>
      <textarea id="textarea"></textarea>
    </div>`;

  const editBtn = note.querySelector(".btn-edit");
  const deleteBtn = note.querySelector(".btn-delete");
  const textarea = note.querySelector("#textarea");
  const mainText = note.querySelector(".main-text");

  editBtn.addEventListener("click", () => {
    mainText.classList.toggle("hidden");
    textarea.classList.toggle("hidden");

    editBtn.classList.toggle("fa-edit");
    editBtn.classList.toggle("fa-check");
  });

  textarea.addEventListener("input", (e) => {
    const value = e.currentTarget.value;

    mainText.innerText = value;
  });

  deleteBtn.addEventListener("click", () => {
    note.remove();
  });
  note.classList.add("note");
  notesContainer.appendChild(note);
}
