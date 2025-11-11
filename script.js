document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('dropdown');
    dropdown.addEventListener('click', (event) => {
        event.preventDefault();
        dropdown.classList.add('active');
        setTimeout(() => {
            dropdown.classList.remove('active');
        }, 5000);
    });
});
