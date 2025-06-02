function saveNotesToLocalStorage(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function getNotesFromLocalStorage() {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
}

function clearNotesFromLocalStorage() {
    localStorage.removeItem('notes');
}

function saveNotesToCache(notes) {
    if ('caches' in window) {
        caches.open('notes-cache').then(cache => {
            cache.put('notes', new Response(JSON.stringify(notes)));
        });
    }
}

function getNotesFromCache() {
    if ('caches' in window) {
        return caches.match('notes').then(response => {
            if (response) {
                return response.json();
            }
            return [];
        });
    }
}

export { saveNotesToLocalStorage, getNotesFromLocalStorage, clearNotesFromLocalStorage, saveNotesToCache, getNotesFromCache };