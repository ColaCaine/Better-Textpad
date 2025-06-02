// This file contains the main JavaScript logic for the application. It handles user interactions, such as saving notes, formatting text (bold, italic, highlight), and managing autosave functionality. It also implements JSON export and browser cache management for data backups.

document.addEventListener('DOMContentLoaded', () => {
    const noteEditor = document.getElementById('note-editor');
    const saveButton = document.getElementById('save-button');
    const exportButton = document.getElementById('export-button');
    const fontSelector = document.getElementById('font-selector');
    const highlightButton = document.getElementById('highlight-button');
    const boldButton = document.getElementById('bold-button');
    const italicButton = document.getElementById('italic-button');

    // Load notes from local storage on startup
    loadNotes();

    // Event listeners
    saveButton.addEventListener('click', saveNotes);
    exportButton.addEventListener('click', exportNotes);
    fontSelector.addEventListener('change', changeFont);
    highlightButton.addEventListener('click', toggleHighlight);
    boldButton.addEventListener('click', toggleBold);
    italicButton.addEventListener('click', toggleItalic);
    noteEditor.addEventListener('input', autosave);

    function saveNotes() {
        const notes = noteEditor.innerHTML;
        localStorage.setItem('notes', notes);
        alert('Notes saved!');
    }

    function loadNotes() {
        const savedNotes = localStorage.getItem('notes');
        if (savedNotes) {
            noteEditor.innerHTML = savedNotes;
        }
    }

    function exportNotes() {
        const notes = noteEditor.innerHTML;
        const json = JSON.stringify({ notes });
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'notes.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function changeFont() {
        const selectedFont = fontSelector.value;
        noteEditor.style.fontFamily = selectedFont;
    }

    function toggleHighlight() {
        document.execCommand('backColor', false, 'yellow');
    }

    function toggleBold() {
        document.execCommand('bold');
    }

    function toggleItalic() {
        document.execCommand('italic');
    }

    function autosave() {
        const notes = noteEditor.innerHTML;
        localStorage.setItem('notes', notes);
    }
});