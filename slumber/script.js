let dragged

      /* events fired on the draggable target */
      const source = document.getElementById('draggable')
      source.addEventListener('drag', event => {
        console.log('dragging')
      })

      source.addEventListener('dragstart', event => {
        // store a ref. on the dragged elem
        dragged = event.target
        // make it half transparent
        event.target.classList.add('dragging')
      })

      source.addEventListener('dragend', event => {
        // reset the transparency
        event.target.classList.remove('dragging')
      })

      /* events fired on the drop targets */
      const target = document.getElementById('droptarget')
      target.addEventListener(
        'dragover',
        event => {
          // prevent default to allow drop
          event.preventDefault()
          //add styles here
        },
        false
      )

      target.addEventListener('dragenter', event => {
        // highlight potential drop target when the draggable element enters it
        if (event.target.classList.contains('dropzone')) {
          event.target.classList.add('dragover')
        }
      })

      target.addEventListener('dragleave', event => {
        // reset background of potential drop target when the draggable element leaves it
        if (event.target.classList.contains('dropzone')) {
          event.target.classList.remove('dragover')
        }
      })

      target.addEventListener('drop', event => {
        let url = '#p4'
        // prevent default action (open as link for some elements)
        event.preventDefault()
        // move dragged element to the selected drop target
        if (event.target.classList.contains('dropzone')) {
          event.target.classList.remove('dragover')
          event.target.appendChild(dragged)
          //alert('dropped')
          window.location = url
        }
      })


      $(document).ready(function () {
        $('.gallery').slick({
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          autoplay: true,
          autoplaySpeed: 2000
        })
      })



      ;('use strict')

function toggleIcon() {
  $('.icon').on('click', function () {
    $('.icon').toggleClass('active')
    $('.menu-mobile').slideToggle(300)
  })
}

function closeMobileMenu() {
  $('.menu-mobile').on('click', 'a', function () {
    $('.icon').trigger('click')
  })
}

//when the page loads call toggleIcon;
$(toggleIcon)
$(closeMobileMenu)


$('#s-purple').click(function () {
    $('#r-yellow').addClass('hide')
    $('#r-blue').addClass('hide')
    $('#r-green').addClass('hide')
    $('#r-purple').removeClass('hide')
  })

  $('#s-yellow').click(function () {
    $('#r-purple').addClass('hide')
    $('#r-blue').addClass('hide')
    $('#r-green').addClass('hide')
    $('#r-yellow').removeClass('hide')
  })

  $('#s-blue').click(function () {
    $('#r-yellow').addClass('hide')
    $('#r-purple').addClass('hide')
    $('#r-green').addClass('hide')
    $('#r-blue').removeClass('hide')
  })

  $('#s-green').click(function () {
    $('#r-yellow').addClass('hide')
    $('#r-blue').addClass('hide')
    $('#r-purple').addClass('hide')
    $('#r-green').removeClass('hide')
  })


  let timer = 0
window.addEventListener('load', event => {
  let intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.classList.add('up')
        }, timer)
        timer += 50
        intersectionObserver.unobserve(entry.target)
        setTimeout(function () {
          timer = 0
        }, 1000)
      }
    })
  })

  document.querySelectorAll('.animate').forEach(obj => {
    intersectionObserver.observe(obj)
  })
})


$('.name').click(function () {
  $('form').toggleClass('hide')
  $('.faces').toggleClass('hide')
})
$('.face').click(function () {
  $('.faces').toggleClass('hide')
  $('form').toggleClass('hide')
})


new CircleType(document.getElementById('round-text'));
$(round-text.element).fitText();