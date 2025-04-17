function showList() {
    const container = document.getElementById('image-container');
    container.classList.remove('grid-container');
    container.classList.add('list-container');
    container.querySelectorAll('.grid-item').forEach(item => item.classList.replace('grid-item', 'list-item'));
}

function showGrid() {
    const container = document.getElementById('image-container');
    container.classList.remove('list-container');
    container.classList.add('grid-container');
    container.querySelectorAll('.list-item').forEach(item => item.classList.replace('list-item', 'grid-item'));
}
