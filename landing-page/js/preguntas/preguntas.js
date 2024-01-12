document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.pregunta');

    questions.forEach(question => {
        question.addEventListener('click', function () {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            if (this.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });
});
