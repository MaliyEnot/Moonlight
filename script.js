var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n){
    showSlides (slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex=n);
}
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");


if (n>slides.length) {
    slideIndex = 1;
}
 if (n<1) {
     slideIndex = slides.length}

for (i=0;i<slides.length;i++) {
    slides[i].style.display = "none";

}

for (i=0;i<dots.length;i++){
    dots[i].className = dots[i].className.replace("active","");

}

slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className+="active";
}


function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

// const animItems = document.querySelectorAll('._anim-items');


//     window.addEventListener('scroll',animOnScroll);
//     function animOnScroll ()
//     {
//         for (let index = 0; index < animItems.length; index++) {
//             const animItem= animItems[index];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top ;
//             const animStart = 4; 

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if (animItemHeight> window.innerHeight){
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }

//             if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset <(animItemOffset + animItemHeight))
            
//                 {animItem.classList.add('_active');    }          
            
//             else {animItem.classList.remove('_active');}

//         }
//     }
//      function offset(el)
//      {
//          const rect = el.getBoundingClientRect(),
//          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//          return{top: rect.top + scrollTop, left: rect.left + scrollLeft}
//      }


     
