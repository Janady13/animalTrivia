const revealBtn = document.getElementById('reveal-btn')
const answer = document.getElementById('answer')
const question = document.getElementById('question')


revealBtn.addEventListener('click', function(){
   answer.style.display = 'block'
   question.style.background = '#68e1fd'
   question.style.color = '#1434A4'
   revealBtn.style.visibility = 'hidden'
})

