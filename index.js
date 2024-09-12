var toggleButton = document.getElementById('toggle-skills');
var skillsList = document.getElementById('skills-list');
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', function () {
    if (skillsList) {
        skillsList.style.display = skillsList.style.display === 'none' ? 'grid' : 'none';
    }
});
