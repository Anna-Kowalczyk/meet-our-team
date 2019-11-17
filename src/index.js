import "./main.scss";
import 'slick-carousel';

const slider = document.querySelector('[data-slider]');
const mailIconWrapper = document.querySelectorAll('.mail-icon-wrapper');

//initialize slick slider
$("[data-slider]").slick({
  autoplay: true,
  arrows: true
});

//add event listener on team member element click
if(mailIconWrapper && slider) {
  mailIconWrapper.forEach((el,key) => {
    el.addEventListener('click',() => {
      $("[data-slider]").slick("goTo", key);
      console.log(el);
    });
  });
}
