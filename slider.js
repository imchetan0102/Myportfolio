// $(document).ready(function() {
//     var slideIndex = 0;
//     showSlides();

//     function showSlides() {
//         var slides = $('.slide');
//         slides.hide();
//         slideIndex++;
//         if (slideIndex > slides.length) {
//         slideIndex = 1;
//         }
//         $(slides[slideIndex - 1]).fadeIn(1000);
//         setTimeout(showSlides, 3000); // Change slides every 3 seconds (adjust as needed)
//     }
//     });





const parentContainer = document.querySelector('.boxconS');

parentContainer.addEventListener('click', event=>{

  const current = event.target;

  const isReadMoreBtn = current.className.includes('read-more-btnS');

  if(!isReadMoreBtn) return;
  
  const currentText = event.target.parentNode.querySelector('.read-more-textS');

  currentText.classList.toggle('read-more-textS--show');

  current.textContent = current.textContent.includes( 'Read More') ?

  "Read More..." : "Read Less...";
})
