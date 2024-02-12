document.addEventListener('DOMContentLoaded', function() {
    var horarioSection = document.getElementById('horarioSection');
    var toggleBtn = document.getElementById('toggleHorarioBtn');
    var closeBtn = document.getElementById('closeHorarioBtn');

    toggleBtn.addEventListener('click', function() {
        horarioSection.style.display = horarioSection.style.display === 'none' ? '' : 'none';
    });

    closeBtn.addEventListener('click', function() {
        horarioSection.style.display = 'none';
    });
});
