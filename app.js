$(function(){

  $('.switch-icons i').on('click',function(){
    $('.switch-info').css({
      animationName:'fadeOutX',
      animationDuration:'1s'
    })
    $('.switch-info').fadeOut(1000)
  })

  $('.morning').on('click',function(){
    $(this).css({transform:'translateY(-200%)'})
    $('.evening').css({transform:'translateY(0%)'})
    $('header').css({
      borderBottom:'5px solid orange',
      backgroundColor:'rgb(35, 35, 35)'
    })
    $('header .logo h1').css({
      color:'#fff'
    })
    $('footer').css({
      color:'#fff',
      backgroundColor:'rgb(35, 35, 35)',
      borderTop:'5px solid orange'
    })
    $('footer ul li a i').css({
      color:'#fff'
    })
    $('main').css({
      backgroundColor:'rgba(95, 93, 93, 0.329)'
    })
    $('.intro-test h2').css({
      color:'#fff',
      boxShadow:'2px 2px 16px 2px #fff',
      backgroundColor:'rgb(90, 90, 194)',
      textShadow: '0px 0px 6px #000'
    })
    $('.intro-test .intro-test_text').css({
      color:'#fff',
      textShadow: '0px 0px 8px #000'
    })
    $('.user-information .intro-test_text').css({
      color:'#fff',
      textShadow: '0px 0px 6px #000'
    })
    $('.question-flex').css({
      backgroundColor:'rgb(35, 35, 35)',
      boxShadow:'2px 2px 16px 2px rgba(95, 93, 93, 0.329)',
      color:'#fff'
    })
    $('.tests-section .motiv-header_test').css({
      color:'#fff',
      textShadow: '0px 0px 6px #000'
    })
    $('.answer-block div').css({
      backgroundColor:'rgb(35, 35, 35)',
      boxShadow:'2px 2px 16px 2px rgba(95, 93, 93, 0.329)',
      color:'#fff'
    })
    $('.next-question').css({
      backgroundColor:'rgb(90, 90, 194)'
    })
    $('.user-name').css({
      color:'#fff'
    })
    $('.result-in_text .motiv-header_test').css({
      color:'#fff'
    })
    $('.result-in_text h1').css({
      textShadow: '0px 0px 6px #000'
    })
    $('.result-in_text h2').css({
      textShadow: '0px 0px 6px #fff'
    })
    $('.percentage').css({
      textShadow: '0px 0px 6px #fff'
    })

  })

  $('.evening').on('click',function(){
    $(this).css({transform:'translateY(-200%)'})
    $('.morning').css({transform:'translateY(0%)'})
    $('header').css({
      borderBottom:'5px solid rgb(35, 35, 35)',
      backgroundColor:'rgba(95, 93, 93, 0.329)'
    })
    $('header .logo h1').css({
      color:'rgb(35, 35, 35)'
    })
    $('footer').css({
      color:'rgb(35, 35, 35)',
      backgroundColor:'rgba(95, 93, 93, 0.329)',
      borderTop:'5px solid rgb(35, 35, 35)',
    })
    $('footer ul li a i').css({
      color:'rgb(35, 35, 35)'
    })
    $('main').css({
      backgroundColor:'#fff'
    })
    $('.intro-test h2').css({
      color:'#fff',
      boxShadow:'2px 2px 16px 2px #fff',
      backgroundColor:'rgb(56, 176, 56)',
      textShadow: '0px 0px 6px #000'
    })
    $('.intro-test .intro-test_text').css({
      color:'rgb(35, 35, 35)',
      textShadow: '0px 0px 6px #fff'
    })
    $('.user-information .intro-test_text').css({
      color:'rgb(35, 35, 35)',
      textShadow: '0px 0px 6px #fff'
    })
    $('.question-flex').css({
      backgroundColor:'rgba(122, 121, 121, 0.201)',
      boxShadow:'2px 2px 16px 2px rgb(122 121 121 / 42%)',
      color:'#212529'
    })
    $('.tests-section .motiv-header_test').css({
      color:'rgb(35, 35, 35)',
      textShadow: '0px 0px 6px #fff'
    })
    $('.answer-block div').css({
      backgroundColor:'rgba(122, 121, 121, 0.201)',
      boxShadow:'2px 2px 8px 2px rgb(122 121 121 / 42%)',
      color:'#212529'
    })
    $('.next-question').css({
      backgroundColor:'rgb(56, 176, 56)'
    })
    $('.user-name').css({
      color:'#212529'
    })
    $('.result-in_text .motiv-header_test').css({
      color:'#212529'
    })
    $('.result-in_text h1').css({
      textShadow: '0px 0px 6px #fff'
    })
    $('.result-in_text h2').css({
      textShadow: '0px 0px 3px red'
    })
    $('.percentage').css({
      textShadow: '0px 0px 3px red'
    })

  })

  $('.get-started').on('click',function(){
    $('.intro-test').remove()
    $('.user-information').css({display:'flex'})
  })

})