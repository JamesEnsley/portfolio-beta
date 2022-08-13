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
        left.unobserve(entry.target);   
      } else {
        return;
      }
    })
  },options);

  const up = new IntersectionObserver((entries,up) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('up-slide');
        up.unobserve(entry.target);   
      } else {
        return;
      }
    })
  },options);
  
  /* UP SLIDE DIVS */
  const hometop = document.querySelector('.top-info');
  up.observe(hometop);

  const homemid = document.querySelector('.mid-info');
  up.observe(homemid);

  const homebot = document.querySelector('.bot-info');
  up.observe(homebot);

  const frogeimg = document.querySelector('.froge');
  up.observe(frogeimg);

  const rowone = document.querySelector('.row-1');
  up.observe(rowone);

  const rowtwo = document.querySelector('.row-2');
  up.observe(rowtwo);

  const porttitle = document.querySelector('.port-title');
  up.observe(porttitle);

  const skilltitle = document.querySelector('.skill-title');
  up.observe(skilltitle);

  const contacttitle = document.querySelector('.contact-title');
  up.observe(contacttitle);

  const email = document.querySelector('.email');
  up.observe(email);

  const phone = document.querySelector('.phone');
  up.observe(phone);

  /* RIGHT SLIDE DIVS*/
  const title = document.querySelector('.about-title');
  right.observe(title);

  const subtitle = document.querySelector('.about-subtitle');
  right.observe(subtitle);

  const line = document.querySelector('.about-line');
  right.observe(line);

  const infoleft = document.querySelector('.about-info-left');
  right.observe(infoleft);

  const pfp = document.querySelector('.pfp');
  right.observe(pfp);

  const slideshow2 = document.querySelector('.slider-frame2');
  right.observe(slideshow2);

  const softbox = document.querySelector('.softbox');
  right.observe(softbox);

  /* LEFT SLIDE DIVS*/
  const slideshow = document.querySelector('.slider-frame');
  left.observe(slideshow);
  
  const inforight = document.querySelector(".about-info-right");
  left.observe(inforight);

  const circleskill = document.querySelector('.circleskills');
  left.observe(circleskill);

}