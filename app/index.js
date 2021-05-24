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
		breakpoint: 1300,
		settings: {
		  slidesToShow: 4,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: true,
		}
	  },
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: true,
		}
	  },
	  {
		breakpoint: 820,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2,
		}
	  },
	  {
		breakpoint: 480,
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










console.log('Boilerplate is working!');