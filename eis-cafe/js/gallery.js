var allThumbImages = document.querySelectorAll('.row .column img');
var modalWindow = document.querySelector('.modal-window');
var modalImage = document.querySelector('.modal-image');
var slideCaption = document.querySelector('.caption-modal');
var slideNumber = document.querySelector('.slide-number');
var modalImageBox = document.querySelector('.modal-image-box');
var prevButton = document.querySelector('.prev-modal');
var nextButton = document.querySelector('.next-modal');
var activeImage = 0;

//----------function open Modal Window-----------------

function showModal(index) {

  var filename = allThumbImages[index].src.replace('_thumb', '');
  modalImage.src = filename;

  var caption = allThumbImages[index].getAttribute('data-caption');
  slideCaption.innerHTML = caption;
  slideNumber.innerHTML = (activeImage + 1) + ' / ' + allThumbImages.length

  modalWindow.classList.add('active');

}

//----------Open image that you click-----------------


for (var i = 0; i < allThumbImages.length; i++) {
  allThumbImages[i].addEventListener('click', function(evt) {
    var imageIndex = parseInt(evt.target.getAttribute('data-index'));
    activeImage = imageIndex;

    showModal(imageIndex);

    nextButton.addEventListener('click', function() {
      imageIndex++;
      if (imageIndex >= allThumbImages.length) imageIndex = 0;

      showModal(imageIndex);
      slideNumber.innerHTML = (imageIndex + 1) + ' / ' + allThumbImages.length

      //console.log(imageIndex);
      //console.log(allThumbImages.length);
    });

    prevButton.addEventListener('click', function() {
      imageIndex--;
      if (imageIndex < 0) imageIndex = allThumbImages.length - 1;
      showModal(imageIndex);
      slideNumber.innerHTML = (imageIndex + 1) + ' / ' + allThumbImages.length
      
    });

  });
 
}

//------Close modal window ---------------------

modalImageBox.addEventListener('click', function(evt) {
  if (evt.target == modalImageBox)
    modalWindow.classList.remove('active');
});

modalWindow.addEventListener('click', function(evt) {
  if (evt.target == modalWindow)
    modalWindow.classList.remove('active');
});

