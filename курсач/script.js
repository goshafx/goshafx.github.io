document.getElementById('toggle-mode').addEventListener('change', function() {
    const body = document.body;
    body.classList.toggle('light-mode');

    const button = document.getElementById('toggle-mode');
    if (body.classList.contains('light-mode')) {
        button.setAttribute('aria-label', 'Темный режим');
    } else {
        button.setAttribute('aria-label', 'Светлый режим');
    }
});