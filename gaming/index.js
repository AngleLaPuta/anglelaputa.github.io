$(document).ready(function() {
  var adImages = [
    'ad.jpg',
    'ad.gif',
    'https://i.pinimg.com/736x/f8/97/ef/f897ef30cc7da93a5ddd408c375e35b6.jpg',
    'https://pa1.aminoapps.com/7752/2d18d30f402f990645c85948d873e10e09bbab73r1-320-235_00.gif'
  ];

  function getRandomTime() {
    return Math.floor(Math.random() * 10000) + 5000;
  }

  function showAdWithDelay() {
    var $ad = $('.ad');
    $ad.fadeIn();

    // Select a random image source from the adImages array
    var randomIndex = Math.floor(Math.random() * adImages.length);
    var randomImageSrc = adImages[randomIndex];

    // Set the src attribute of the ad image
    $ad.find('img').attr('src', randomImageSrc);

    // Redirect to example.com when the ad is clicked
    $ad.find('img').on('click', function() {
      window.open('https://anglelaputa.github.io/twitter/comms.html', '_blank');
    });

    $ad.find('.close-button').on('click', function() {
      $ad.fadeOut();
    });

    // Remove the existing classes and add the new class to position the ad
    $ad.removeClass('right left').addClass(Math.random() < 0.5 ? 'right' : 'left');
  }

  setInterval(showAdWithDelay, getRandomTime());
});
