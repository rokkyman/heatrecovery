console.log('Hello!');
$(document).ready(function(){
  $('.v1-brands--list').slick({
    rows:2,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    prevArrow:  '<button type="button" class="slick-prev">' +
                  '<svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                    '<path d="M6 0.5L1 5.5L6 10.5" stroke="#1F56CE" stroke-linecap="round" stroke-linejoin="round"/>' +
                  '</svg>' +
                '</button>',
    nextArrow:  '<button type="button" class="slick-next">' +
                  '<svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                    '<path d="M1 0.5L6 5.5L1 10.5" stroke="#1F56CE" stroke-linecap="round" stroke-linejoin="round"/>' +
                  '</svg>' +
                '</button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 414,
        settings: {
          rows: 1,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
});

