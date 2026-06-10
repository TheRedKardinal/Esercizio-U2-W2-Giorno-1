const toggleBtn = document.getElementById('toggle-tema');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleBtn.textContent = document.body.classList.contains('dark') ? 'Tema chiaro' : 'Tema scuro';
});