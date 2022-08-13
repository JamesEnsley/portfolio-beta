window.addEventListener('DOMContentLoaded', setup);

function setup(){
  const options = {
    rootMargin: '0px 0px 500px 0px'
  }

  const htmlload = new IntersectionObserver((entries,html) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('html-anim');
        right.unobserve(entry.target);   
      } else {
        return;
      }
    })
  },options);

  const cssload = new IntersectionObserver((entries,css) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('css-anim');
        right.unobserve(entry.target);   
      } else {
        return;
      }
    })
  },options);
  
  const javaload = new IntersectionObserver((entries,java) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('java-anim');
        right.unobserve(entry.target);   
      } else {
        return;
      }
    })
  },options);

  const pythonload = new IntersectionObserver((entries,python) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('python-anim');
        right.unobserve(entry.target);   
      } else {
        return;
      }
    })
  },options);

  const inventorload = new IntersectionObserver((entries,inventor) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('inventor-circle-anim');
        right.unobserve(entry.target);   
      } else {
        return;
      }
    })
  },options);

  const solidload = new IntersectionObserver((entries,solidworks) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('solidworks-circle-anim');
        right.unobserve(entry.target);   
      } else {
        return;
      }
    })
  },options);

  const grantaload = new IntersectionObserver((entries,granta) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('granta-circle-anim');
        right.unobserve(entry.target);   
      } else {
        return;
      }
    })
  },options);

  const htmlanimation = document.querySelector('.html-skill');
  htmlload.observe(htmlanimation);

  const cssanimation = document.querySelector('.css-skill');
  cssload.observe(cssanimation);

  const javaanimation = document.querySelector('.java-skill');
  javaload.observe(javaanimation);

  const pythonanimation = document.querySelector('.python-skill');
  pythonload.observe(pythonanimation);

}