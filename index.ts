const toggleButton = document.getElementById('toggle-skills');
const skillsList = document.getElementById('skills-list');

toggleButton?.addEventListener('click', () => {
    if (skillsList) {
        skillsList.style.display = skillsList.style.display === 'none' ? 'grid' : 'none';
    }
});
