$(function(){;

  $('.submit').on('click',function(){

    if($('.name-input').val() < 1 || $('.number-input').val() < 1){
      $('.name-input').css({display:'none'})
      $('.number-info').css({display:'none'})
      $('.submit').css({display:'none'})
      $('.error-info').css({display:'block'})
    }else{
      $('.user-information').css({display:'none'})
      $('.tests-section').css({display:'flex'})
    }

    let userNameValue = $('.name-input').val()

    $('.user-name span').text(userNameValue)

    localStorage.setItem('userName', $('.name-input').val())
    localStorage.setItem('userContact', $('.number-input').val())

  })

  $('.error-info i').on('click',function(){
    $('.error-info').css({display:'none'})
    $('.name-input').css({display:'block'})
    $('.number-info').css({display:'flex'})
    $('.submit').css({display:'block'})
  })


})