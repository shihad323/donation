document.getElementById('home').addEventListener('click',function(event){
    event.preventDefault();
    window.location.href='index.html';
})
document.getElementById('question1').addEventListener('click', function() {
    const answer = document.getElementById('answer1');
    answer.classList.toggle('hidden');
});

document.getElementById('question2').addEventListener('click', function() {
    const answer = document.getElementById('answer2');
    answer.classList.toggle('hidden');
});