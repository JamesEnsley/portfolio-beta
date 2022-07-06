window.addEventListener('DOMContentLoaded', setup);

function setup(){
  const options = {
    rootMargin: '0px 0px -300px 0px'
  }

  const right = new IntersectionObserver((entries,right) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('right-slide');
        right.unobserve(entry.target);   
      } else {
        return;
      }
    })
  },options);

  const left = new IntersectionObserver((entries,left) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('left-slide');
        right.unobserve(entry.target);   
      } else {
        return;
      }
    })
  },options);
  
  /* RIGHT SLIDE DIVS*/
  const title = document.querySelector('.about-title');
  right.observe(title);

  const subtitle = document.querySelector('.about-subtitle');
  right.observe(subtitle);

  const line = document.querySelector('.about-line');
  right.observe(line);

  const infoleft = document.querySelector('.about-info-left');
  right.observe(infoleft)

  const pfp = document.querySelector('.pfp');
  right.observe(pfp);

  const slideshow2 = document.querySelector('.slider-frame2');
  right.observe(slideshow2);

  /* LEFT SLIDE DIVS*/
  const slideshow = document.querySelector('.slider-frame');
  left.observe(slideshow);
  
  const inforight = document.querySelector(".about-info-right");
  left.observe(inforight);

}
