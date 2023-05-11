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
  
  document.querySelectorAll('a.top').forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.preventDefault()
      fps.goToFirstSlide()
    })
  })
})

$('#text-3-b').click(function() {
  $(this).toggleClass('pulse'); 
});
$('#text-4-a').click(function() {
  $(this).toggleClass('pulse'); 
});
$('#text-4-b').click(function() {
  $(this).toggleClass('pulse'); 
});
$('#text-4-b-2').click(function() {
  $(this).toggleClass('pulse'); 
});
$('#text-4-d').click(function() {
  $(this).toggleClass('pulse'); 
});
$('#text-4-e').click(function() {
  $(this).toggleClass('pulse'); 
});
$('#text-5-a').click(function() {
  $(this).toggleClass('pulse'); 
});
$('#text-5-b').click(function() {
  $(this).toggleClass('pulse'); 
});
$('#text-5-c').click(function() {
  $(this).toggleClass('pulse'); 
});

$('#text-10-a').click(function() {
  $(this).toggleClass('pulse'); 
});
$('#text-10-b').click(function() {
  $(this).toggleClass('pulse'); 
});
$('#text-10-c').click(function() {
  $(this).toggleClass('pulse'); 
});
$('#text-10-d').click(function() {
  $(this).toggleClass('pulse'); 
});


$('#text-11-a').click(function() {
  $(this).toggleClass('pulse'); 
});
$('#text-11-b').click(function() {
  $(this).toggleClass('pulse'); 
});
$('#text-11-c').click(function() {
  $(this).toggleClass('pulse'); 
});


$('#text-12-a').click(function() {
  $(this).toggleClass('pulse'); 
});
$('#text-12-b').click(function() {
  $(this).toggleClass('pulse'); 
});
$('#text-12-c').click(function() {
  $(this).toggleClass('pulse'); 
});


$('#text-13-a').click(function() {
  $(this).toggleClass('pulse'); 
});
$('#text-13-b').click(function() {
  $(this).toggleClass('pulse'); 
});


$('#text-15-a').click(function() {
  $(this).toggleClass('pulse'); 
});


var hSong = document.getElementById ('hSong');
var icon = document.getElementById ('icon');

icon.onclick = function(){
  if(hSong.paused){
    hSong.play();
    icon.src = "images/sound.png";
  }
  else{
    hSong.pause();
    icon.src = "images/mute.png";
  }
}


function myFunction() {
  var x = document.getElementById("hSong").loop;
}



// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}