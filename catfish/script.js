$('#text-3-b').click(function () {
  $('#text-3-a').addClass('hide')
  $('#text-3-b').addClass('hide')
  $('#text-4-a').removeClass('hide')
})

$('#text-4-a').click(function () {
  $('#text-4-b').removeClass('hide')
})
$('#text-4-b').click(function () {
  $('#text-4-c').removeClass('hide')
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
        $('#text-4-c').removeClass('hide')
      }, '8000')
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
