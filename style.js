function editTask(button) {
    const li = button.parentElement;
    const taskText = li.
    const editInput = document.getElementById('edit-input');
    const saveBtn = document.getElementById('save-btn');

    editInput.value = taskText;
    editInput.style.display = 'inline';
    saveBtn.style.display = 'inline';

    saveBtn.onclick = function() {
        li.firstChild.textContent = editInput.value + ' ';
        editInput.style.display = 'none';
        saveBtn.style.display = 'none';
    };
}
