var swiper = new Swiper(".mySwiper", {
  speed: 400, 
  slidesPerView: 'auto',
  spaceBetween: 0,
  freeMode: true,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper2", {
  speed: 400, 
  slidesPerView: '3',
  spaceBetween: 24,
  freeMode: true,
  // loop: true,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  breakpoints: {
        // when window width is <= 499px
        380: {
            slidesPerView: 1.5,
            spaceBetweenSlides: 50
        },
        480: {
          slidesPerView: 2,
          spaceBetweenSlides: 50
         },
         768: {
          slidesPerView: 2.5,
          spaceBetweenSlides: 50
         },
        // when window width is <= 999px
        999: {
            slidesPerView: 3,
            spaceBetweenSlides: 50
        }
    }
});

//video slider
var swiper = new Swiper(".mySwiper3", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper4", {
  spaceBetween: 40,
  thumbs: {
    swiper: swiper,
  },
});

// video z index

function myFunction() {
  document.getElementById("mySwiper3").style.zIndex = 0;
  document.getElementById("mySwiper4").style.zIndex = 1;

}
function myFunction2() {
  document.getElementById("mySwiper3").style.zIndex = 1;
  document.getElementById("mySwiper4").style.zIndex = 0;

}
//video auto play off
// var myVideo = document.getElementById("videoPlayer1");

// function pause() { 
//   if(myVideo.play) {
//     myVideo.pause();
//   } else{
//     myVideo.play;
//   }
// }
var myVideo = document.querySelectorAll("#videoPlayer1, #videoPlayer2, #videoPlayer3");

function pause() { 
  for (var i = 0; i < myVideo.length; i++){

    myVideo[i].pause()

   }
}
// var myVideo = document.querySelectorAll("#videoPlayer1, #videoPlayer2, #videoPlayer3");
// var isPlaying = false;

// function pause() { 
//   for (var i = 0; i < myVideo.length; i++){

//     isPlaying ? myVideo[i].pause() : myVideo[i].play();

//    }
//    myVideo.onplaying = function() {
//     isPlaying = false;
//   };
//   myVideo.onpause = function() {
//     isPlaying = false;
//   };
// }
// play pause
// var myAudio = document.getElementById("videoPlayer1");
// var isPlaying = false;

// function play() {
//   isPlaying ? myAudio.pause() : myAudio.play();
// };

// myAudio.onplaying = function() {
//   isPlaying = true;
// };
// myAudio.onpause = function() {
//   isPlaying = false;
// };
//review slider
var swiper = new Swiper(".mySwiper5", {
  speed: 400, 
  slidesPerView: 'auto',
  spaceBetween: 20,
  centeredSlides: true,
  loop: true, 
  // loop: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
//   breakpoints: {
//     // when window width is <= 499px
//     380: {
//         slidesPerView: 1,
//         spaceBetweenSlides: 50
//     },
//     480: {
//       slidesPerView: 1,
//       spaceBetweenSlides: 50
//      },
//      768: {
//       slidesPerView: 2,
//       spaceBetweenSlides: 50
//      },
//     // when window width is <= 999px
//     999: {
//         slidesPerView: 'auto',
//         spaceBetweenSlides: 50
//     }
// }
});

jQuery(document).ready(function($){
  $(document).ready(function(){
      $(window).scroll(function(){
          var scroll = $(window).scrollTop();
          if (scroll > 10) {
            $(".nav-bar").css("background" , "#96CAE1");
          }
    
          else{
              $(".nav-bar").css("background" , "transparent");  	
          }
      })
    })
// position
    var $details = $(".nav-bar"),
	detailsPos = $details.position().top;
$(window).on("scroll", function() {
    if ($(window).scrollTop() > detailsPos)
        $details.css("position", "fixed").css("top",0);
    else
        $details.css("position", "fixed").css("top",20);
});

// Tabs
document.getElementById("one").onclick = function () {
  showTab(this)
};
document.getElementById("two").onclick = function () {
  showTab(this)
};
document.getElementById("three").onclick = function () {
  showTab(this)
};

function showTab(e) {
  let selectType = $(e).attr("data-select");
  if (selectType == 'one') {
      $("#tabs2,#tabs3").hide();
      $("#tabs1").show();
      $("#one").addClass('active bg-deep-blue');
      $("#two,#three").removeClass(' active');

  } else if (selectType == 'two') {

      $("#tabs1,#tabs3").hide();
      $("#tabs2").show();
      $("#two").addClass(' active');
      $("#one,#three").removeClass(' active').addClass('text-blue-400');

  } else if (selectType == 'three') {

      $("#tabs1,#tabs2").hide();
      $("#tabs3").show();
      $("#three").addClass(' active');
      $("#one,#two").removeClass(' active').addClass('text-blue-400');

  } else if (selectType == 'foure') {

      $("#tabs1,#tabs2,#tabs3").hide();
      $("#tabs4").show();
      $("#foure").addClass(' active');
      $("#one,#two,#three").removeClass(' active').addClass('text-blue-400');

  } 
}
// swiper button
$('.swiper-button').click(function(){
  $('.swiper-button').removeClass("active2");
  $(this).addClass("active2");
});
// video active button
$('.video-thumbs').click(function(){
  $('.video-thumbs').removeClass("video-active");
  $(this).addClass("video-active");
});
  })  