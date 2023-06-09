
/**
* Template Name: ZenBlog
* Updated: Mar 10 2023 with Bootstrap v5.2.3
* Template URL: https://bootstrapmade.com/zenblog-bootstrap-blog-template/
* Author: BootstrapMade.com
* License: https:///bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Mobile nav toggle
   */

  const mobileNavToogleButton = document.querySelector('.mobile-nav-toggle');

  if (mobileNavToogleButton) {
    mobileNavToogleButton.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    });
  }

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToogleButton.classList.toggle('bi-list');
    mobileNavToogleButton.classList.toggle('bi-x');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }
/**
   * show more / show less
   */
//   $(".toggle_btn").click(function(){
//     $(this).toggleClass("active");
//    $(".wrapper ul").toggleClass("active");
 
//    if($(".toggle_btn").hasClass("active")){
//      $(".toggle_text").text("Show Less");
//    }
//    else{
//      $(".toggle_text").text("Show More");
//    }
//  });

  /**
   * Hero Slider
   */
  var swiper = new Swiper(".sliderFeaturedPosts", {
    spaceBetween: 0,
    speed: 500,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },
  });

  /**
   * Open and close the search form.
   */
  const searchOpen = document.querySelector('.js-search-open');
  const searchClose = document.querySelector('.js-search-close');
  const searchWrap = document.querySelector(".js-search-form-wrap");

  searchOpen.addEventListener("click", (e) => {
    e.preventDefault();
    searchWrap.classList.add("active");
  });

  searchClose.addEventListener("click", (e) => {
    e.preventDefault();
    searchWrap.classList.remove("active");
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

  // const myModal = document.getElementById('myModal')
  // const myInput = document.getElementById('myInput')
  
  //   myModal.addEventListener('shown.bs.modal', () => {
  //     myInput.focus()
  // })

  // $('#myModal').on('shown.bs.modal', function () {
  //   $('#myInput').trigger('focus')
  // });

  const readMoreBtn = document.querySelector(".read-more-btn");
  const text = document.querySelector(".text");

    readMoreBtn.addEventListener("click", (e) => {
    text.classList.toggle("show-more");
      if (readMoreBtn.innerText === "Read More") {
      readMoreBtn.innerText = "Read Less";
      } else {
      readMoreBtn.innerText = "Read More";
      }
  });

  $(function() {
    $(".item").slice(0, 4).show(); // select the first ten
    $("#load").click(function(e) { // click event for load more
      e.preventDefault();
      $(".item:hidden").slice(0, 4).show(); // select next 10 hidden divs and show them
      if ($(".item:hidden").length == 0) { // check if any hidden divs still exist
        alert("No more divs"); // alert if there are none left
      }
    });
  });



// .modal-subscribe
function fallbackPjax(options) {
  var url = $.isFunction(options.url) ? options.url() : options.url,
      method = options.type ? options.type.toUpperCase() : 'GET'

  var form = $('<form>', {
    method: method === 'GET' ? 'GET' : 'POST',
    action: url,
    style: 'display:none'
  })

  if (method !== 'GET' && method !== 'POST') {
    form.append($('<input>', {
      type: 'hidden',
      name: '_method',
      value: method.toLowerCase()
    }))
  }

  var data = options.data
  if (typeof data === 'string') {
    $.each(data.split('&'), function(index, value) {
      var pair = value.split('=')
      form.append($('<input>', {type: 'hidden', name: pair[0], value: pair[1]}))
    })
  } else if ($.isArray(data)) {
    $.each(data, function(index, value) {
      form.append($('<input>', {type: 'hidden', name: value.name, value: value.value}))
    })
  } else if (typeof data === 'object') {
    var key
    for (key in data)
      form.append($('<input>', {type: 'hidden', name: key, value: data[key]}))
  }

  $(document.body).append(form)
  form.submit()
}

  $(document).on('click', '.popup--exit', function(event) {
    $(".mail__popup").removeClass('active');
    setTimeout(function() {
      $(".mail__popup").removeClass('ontop');
    }, 250);
    console.log("clicked close btn")
    localStorage.setItem("popup", "closed")
    overflowOn();
    addBinding();
  });

  $(document).on('click', '.mail', function(event) {
    // if (screen.width < 500 && window.orientation === 0 && $('body').scrollTop() > 20) {
    // 	$('html, body').animate({scrollTop: 0}, '250'); 
    // 	setTimeout(function() {
    // 		$("#popup--mail").addClass('active ontop');
    // 	}, 500);
    // } else if (screen.width < 500 && window.orientation === 0) {
    // 	$('html, body').animate({scrollTop: 0}, '100'); 
    // 	setTimeout(function() {
    // 		$("#popup--mail").addClass('active ontop');
    // 	}, 250);
    // } else {
    // 	$("#popup--mail").addClass('active ontop');
    // }
    $("#popup--mail").addClass('active ontop');
    // overflowOff();
    removeBinding();
  });

  // let closeModalBtn = document.querySelector(".jsCloseMail")			
  // if(closeModalBtn) {
  // 	closeModalBtn.addEventListener('click', () => {
  // 		console.log("clicked close btn")
  // 		localStorage.setItem("popup", "closed")
  // 	})
  // };			
  
  let getPopup = document.querySelector(".jsModalMail")

  if(localStorage.getItem("popup") === "open" || localStorage.getItem("popup") !== "closed") {
    console.log("Modal = open")
    setTimeout(function() {
      getPopup.classList.add("active","ontop")
    }, 3000)
  }

  if(!localStorage.getItem("popup")) { 
    console.log("Set local storage and its value to open")
    localStorage.setItem("popup", "open")
  }
  
  // if(localStorage.getItem("popup")) {    
  // 	if(localStorage.getItem("popup") === "open") {
  // 		console.log("Modal = open")
  // 		setTimeout(function() {
  // 			getPopup.classList.add("active","ontop")
  // 		}, 3000)
  // 	}
  // } else {

  // 	localStorage.setItem("popup", "open")
  // 	if(localStorage.getItem("popup") !== "closed") {
  // 		console.log("Modal !== closed")
  // 		setTimeout(function() {
  // 			getPopup.classList.add("active","ontop")
  // 		}, 3000)
  // 	}
  // };

  $(document).on('click', '.popup--exit', function(event) {
    $(".mail__popup").removeClass('active');
    setTimeout(function() {
      $(".mail__popup").removeClass('ontop');
    }, 250);
    console.log("clicked close btn")
    localStorage.setItem("popup", "closed")
    overflowOn();
    addBinding();
  });

  $(document).on('submit','#pricingform', function(e){
    if ($.trim($("#pricingform__email").val()) === "" || $.trim($("#pricingform__firstname").val()) === "" || $.trim($("#pricingform__lastname").val()) === "" || !$("#pricingform__gdpr").is(":checked")) {
      $("#pricing_signup").addClass("shake");
      setTimeout(function() {
        $("#pricing_signup").removeClass("shake");
      }, 500);
      return false;
    }
    var action = $(this).attr('action');
    var formdata = $(this).serialize();
    $('#popup--pricing').addClass("success");
    $.post(action, formdata, function(data){
      console.log("success");
    });
    return false;
  });

  // .modal-backdrop classes

  $(".modal-transparent").on('show.bs.modal', function () {
    setTimeout( function() {
      $(".modal-backdrop").addClass("modal-backdrop-transparent");
    }, 0);
  });
  $(".modal-transparent").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-transparent");
  });

  $(".modal-fullscreen").on('show.bs.modal', function () {
    setTimeout( function() {
      $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
      }, 0);
  });
  $(".modal-fullscreen").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen"); 
  });

  // $(document).ready(function () {
  //   $('.comic-content .col-12:lt(4)').show();
  //   $('.less').hide();
  //   var items =  9;
  //   var shown =  4;
  //   $('.more').click(function () {
  //       $('.less').show();
  //       shown = $('.comic-content .col-12:visible').length+4;
  //       if(shown< items) {
  //         $('.comic-content .col-12:lt('+shown+')').show(300);
  //       } else {
  //         $('.comic-content .col-12:lt('+items+')').show(300);
  //         $('.more').hide();
  //       }
  //   });
  //   $('.less').click(function () {
  //       $('.comic-content .col-12').not(':lt(4)').hide(300);
  //       $('.more').show();
  //       $('.less').hide();
  //   });
  // });

});

