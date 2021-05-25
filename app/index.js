import './index.scss';

$('.slider').slick({

	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	infinite:true,
	arrows: true,
	responsive: [
		  {
		breakpoint: 1200,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  infinite: true,
		}
	  },
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  infinite: true,
		}
	  },
	  {
		breakpoint: 780,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  infinite: true,
		  autoplay: true,
		  autoplaySpeed: 3000,
		  arrows: false,
		}
	  },
	  {
		breakpoint: 690,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 3000,
		  arrows: false,
		}
	  }
	]
});

window.onload= function() {
        document.getElementById('burgerlink').onclick = function() {
        toogleclass(this);
        opennav('nav', this);
        return false;
    };
};

function opennav(id, click_burger) {
    const div = document.getElementById(id);
    if(div.style.display == 'flex') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'flex';
    }
};

function toogleclass(click_burger) {
	if (click_burger.classList.contains('active')) {
		click_burger.classList.remove('active');
	}
	else {
		click_burger.classList.add('active');
	}
};


'use strict';
/* begin begin Back to Top button  */
(function() {
  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -6000);
      setTimeout(backToTop, 500); 
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
/* end begin Back to Top button  */

jQuery(function($){
	$("#InputTel1").mask("+7 (999) 999-99-99");
	console.log($("input[data-bme='Ваше имя']"))
	});






console.log('Boilerplate is working!');