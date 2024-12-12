document.querySelectorAll('.flip-container').forEach(container => {
    container.addEventListener('click', () => {
        container.classList.toggle('clicked');
    });
});
