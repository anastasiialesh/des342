$('#text-3-b').click(function () {
  $('#text-3-a').addClass('hide')
  $('#text-3-b').addClass('hide')
  $('#text-4-a').removeClass('hide')
})

$('#text-4-a').click(function () {
  $('#text-4-b').removeClass('hide')
})
$('#text-4-b').click(function () {
  $('#text-4-b-2').removeClass('hide')
})
$('#text-4-b-2').click(function () {
  $('#text-4-c').removeClass('hide')
})

$('#text-4-d').click(function () {
  $('#text-4-e').removeClass('hide')
})
$('#text-4-e').click(function () {
  $('#text-4-d').addClass('hide')
  $('#text-4-e').addClass('hide')
  $('#text-4-f').removeClass('hide')
})


$('#text-5-a').click(function () {
  $('#text-5-b').removeClass('hide')
})
$('#text-5-b').click(function () {
  $('#text-5-c').removeClass('hide')
})
$('#text-5-c').click(function () {
  $('#text-5-d').removeClass('hide')
})


$('#text-10-a').click(function () {
  $('#text-10-b').removeClass('hide')
})
$('#text-10-b').click(function () {
  $('#text-10-c').removeClass('hide')
})
$('#text-10-c').click(function () {
  $('#text-10-d').removeClass('hide')
})
$('#text-10-d').click(function () {
  $('#text-10-e').removeClass('hide')
})


$('#text-11-a').click(function () {
  $('#text-11-b').removeClass('hide')
})
$('#text-11-b').click(function () {
  $('#text-11-c').removeClass('hide')
})
$('#text-11-c').click(function () {
  $('#text-11-d').removeClass('hide')
})


$('#text-12-a').click(function () {
  $('#text-12-b').removeClass('hide')
})
$('#text-12-b').click(function () {
  $('#text-12-c').removeClass('hide')
})
$('#text-12-c').click(function () {
  $('#text-12-d').removeClass('hide')
})


$('#text-13-a').click(function () {
  $('#text-13-b').removeClass('hide')
})
$('#text-13-b').click(function () {
  $('#text-13-c').removeClass('hide')
})
$('#text-13-c').click(function () {
  $('#text-13-d').removeClass('hide')
})

$('#text-15-a').click(function () {
  $('#text-15-b').removeClass('hide')
})


document.addEventListener('DOMContentLoaded', function () {
  var fps = new FullPageScroll('wrap', {
    mediaQuery: 'screen and (min-width: 1px)',
    goToTopOnLast: false,
    slideSelector: 'section'
  })
  fps.onslide = function (e) {
    if (e.target.currentSlide + 1 != 3) {
      $('#text-3-a').removeClass('hide')
      $('#text-3-b').removeClass('hide')
      $('#text-4-a').addClass('hide')
      $('#text-4-b').addClass('hide')
      $('#text-4-b-2').addClass('hide')
      $('#text-4-c').addClass('hide')
    }
    if (e.target.currentSlide + 1 == 3) {
      setTimeout(() => {
        $('#text-3-a').addClass('hide')
        $('#text-3-b').addClass('hide')
        $('#text-4-a').removeClass('hide')
      }, '4000')
      setTimeout(() => {
        $('#text-4-b').removeClass('hide')
      }, '6000')
      setTimeout(() => {
        $('#text-4-b-2').removeClass('hide')
      }, '8000')
      setTimeout(() => {
        $('#text-4-c').removeClass('hide')
      }, '10000')
    }
    console.log('Slide ' + (e.target.currentSlide + 1) + ' of ' + e.target.slides.length)
  }
  document.querySelectorAll('a.top').forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.preventDefault()
      fps.goToFirstSlide()
    })
  })
})
