$(function(){

  let allQuestions = [
    {
      question: 'He likes ... football.',
      option: ['Playing','Plays','Watch','Watches'],
      correct:0
    },
    {
      question: '... they from Tashkent?',
      option: ['Do','Is','Did','Are'],
      correct:3
    },
    {
      question: 'Samarkand ... the capital city of Uzbekistan.',
      option: ['Is','Are',"Isn't","Aren't"],
      correct:2
    },
    {
      question: 'I went to amusing park with my family ... Sunday.',
      option: ['At','In','On','-'],
      correct:2
    },
    {
      question: 'He ... looks angry.Is there any problem in his family?',
      option: ['Sometimes','Never','Rarely','Constantly'],
      correct:3
    },
    {
      question: 'I am ... a party at the end of this month.Did he invited you last weekend?',
      option: ['Go to','Going to','Going to go to','Go'],
      correct:1
    },
    {
      question: "I can't ... what to do!",
      option: ['Know','Decide','Wait','Three of them correct'],
      correct:1
    },
    {
      question: "You ... wear suit to the wedding.I think it's a good choice",
      option: ['Can',"Can't",'Should','Must'],
      correct:2
    },
    {
      question: '... nothing and just wait!',
      option: ['Do',"Don't","Don't do",'Make'],
      correct:0
    },
    {
      question: "They ... to the USA at the moment.You can't call them!",
      option: ['Has flied','Have flied','Arrived','Are flying'],
      correct:3
    },
    {
      question: 'I ... punished to using it.I will never use it again!',
      option: ['Have been','Have','-','Will be'],
      correct:0
    },
    {
      question: 'You ... do your housework.Otherwise you will be punished by your mother!',
      option: ['Should','Must','Have to','Had to'],
      correct:2
    },
    {
      question: 'My uncle ... finished his work.Now we can go!',
      option: ['Just has','Has just','Just have','Have just'],
      correct:1
    },
    {
      question: "I ... told about this bad news yesterday.Please,don't remind.",
      option: ['Was','Have','Had','-'],
      correct:0
    },
    {
      question: '... this food before we came Japan?',
      option: ['Has she been eating','Has she ever ate','Did she eat','Has she ever eaten'],
      correct:3
    },
    {
      question: 'Do you think ... trophy?',
      option: ['They will win','Will win they','Will they win','They win will'],
      correct:2
    },
    {
      question: 'If I ... on the time, I would work hard',
      option: ['Get it','Got it','Have got it','Can got'],
      correct:1
    },
    {
      question: 'Have you heard from your brother ...?',
      option: ['This time last month','Last week','Still','Recently'],
      correct:3
    },
    {
      question: 'Billy ... watching motorbike races.',
      option: ["'s always loving","'s always been loving","'s always loved",'Always has loved'],
      correct:2
    },
    {
      question: "If only ... a foreign language. I didn't have the choice at school.",
      option: ['I can speak','I could to speak','I could speak','I speak'],
      correct:2
    }
  ]

  $('.answerA-area').on('click',()=>{
    $('.circle').removeClass('selected')
    $('.answerA-area .circle').addClass('selected')
    $('.none-selected').css({display:'none'})
    $('.next-question').css({display:'block'})
    $('.none-selected-lastQ').css({display:'none'})
    if(allQuestions.length <= 1){
      $('.add-up').css({display:'block'})
      $('.none-selected-lastQ').css({display:'none'})
      $('.next-question').css({display:'none'})
    }
  })
  $('.answerB-area').on('click',()=>{
    $('.circle').removeClass('selected')
    $('.answerB-area .circle').addClass('selected')
    $('.none-selected').css({display:'none'})
    $('.next-question').css({display:'block'})
    $('.none-selected-lastQ').css({display:'none'})
    if(allQuestions.length <= 1){
      $('.add-up').css({display:'block'})
      $('.none-selected-lastQ').css({display:'none'})
      $('.next-question').css({display:'none'})
    }
  })
  $('.answerC-area').on('click',()=>{
    $('.circle').removeClass('selected')
    $('.answerC-area .circle').addClass('selected')
    $('.none-selected').css({display:'none'})
    $('.next-question').css({display:'block'})
    $('.none-selected-lastQ').css({display:'none'})
    if(allQuestions.length <= 1){
      $('.add-up').css({display:'block'})
      $('.none-selected-lastQ').css({display:'none'})
      $('.next-question').css({display:'none'})
    }
  })
  $('.answerD-area').on('click',()=>{
    $('.circle').removeClass('selected')
    $('.answerD-area .circle').addClass('selected')
    $('.none-selected').css({display:'none'})
    $('.next-question').css({display:'block'})
    $('.none-selected-lastQ').css({display:'none'})
    if(allQuestions.length <= 1){
      $('.add-up').css({display:'block'})
      $('.none-selected-lastQ').css({display:'none'})
      $('.next-question').css({display:'none'})
    }
  })

  let answerProperty = [Number()]
  let level;
  let numbersOfQuestions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  
  $('.question-flex p span').text(numbersOfQuestions[0])
  $('.question').text(allQuestions[0].question)
  $('.answer-A').text(allQuestions[0].option[0])
  $('.answer-B').text(allQuestions[0].option[1])
  $('.answer-C').text(allQuestions[0].option[2])
  $('.answer-D').text(allQuestions[0].option[3])
  $($('.answer .circle')[allQuestions[0].correct]).addClass('correct')


                                                                  // FUNCTIONS

  function separateAnswer(){
    if($('.answer .circle.selected').hasClass('correct')){
      answerProperty.push(1)
    }else{
      answerProperty.push(0)
    }
  }
  function changeQuestion(){
    allQuestions.shift()
    numbersOfQuestions.shift()
    $('.question-flex p span').text(numbersOfQuestions[0])
    $('.question').text(allQuestions[0].question)
    $('.answer-A').text(allQuestions[0].option[0])
    $('.answer-B').text(allQuestions[0].option[1])
    $('.answer-C').text(allQuestions[0].option[2])
    $('.answer-D').text(allQuestions[0].option[3])
    $($('.answer .circle')[allQuestions[0].correct]).addClass('correct')
  }         
  function isLastQuestion(){
    if(allQuestions.length <= 2){
      $('.change-question .next-question').css({display:'none'})
      $('.none-selected').css({display:'none'})
      $('.none-selected-lastQ').css({display:'block'})

      if($('.none-selected-lastQ').css({display:'block'})){
        $('.add-up').css({display:'none'})
      }
    }
  }      
  function SelectedOrNo(){
    $('.none-selected').css({display:'block'})
    $('.next-question').css({display:'none'})
  }                                        

                                                              // EVENTS

                                                          
  $('.none-selected').on('click',function(){
    window.alert('Please select an answer')
  })             
  $('.none-selected-lastQ').on('click',function(){
    window.alert('Please select an answer')
  })                                                   
  $('.next-question').on('click',()=>{
    SelectedOrNo()
    separateAnswer()
    isLastQuestion()
    $('.circle').removeClass('selected')
    $('.circle').removeClass('correct')
    changeQuestion()
  })
  $('.add-up').on('click',function(){
    separateAnswer()
    let correctsNumber = answerProperty.reduce((total,value)=>{
      return total + value;
    })

    if(correctsNumber <= 9){
      level = 'Beginner'
    }else if(correctsNumber > 9 && correctsNumber <= 12){
      level = 'Elementary'
    }else if(correctsNumber > 12 && correctsNumber <= 15){
      level = 'Pre-Intermediate'
    }else if(correctsNumber > 15 && correctsNumber <= 18){
      level = 'Intermediate'
    }else if(correctsNumber > 18 && correctsNumber <= 20){
      level = 'Upper-Intermediate'
    }
    let percentage = 5 * correctsNumber

    $('.tests-section').css({display:'none'})
    $('.test-result').css({display:'flex'})
    $('.about-level').text(level);
    $('.percentage').text(percentage + '%')
    $('.index-width').width(percentage + '%')
    $('.index-width').css({animationName:'width',animationDuration:'1s'})

    localStorage.clear
  })
})