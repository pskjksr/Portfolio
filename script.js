document.querySelectorAll('.works li').forEach(item => {
    item.addEventListener('click', () => {
        alert(`You clicked on ${item.textContent}`);
    });
});
