if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/serviceworkers.js')
    .then(function (reg) {
        console.log('[ServiceWorker] Registered');
    })
    .catch(function (err) {
        console.log('erro', err);
    });
}

//Preloader

jQuery(document).ready(function ($) {
    var Body = $('body');
    Body.addClass('preloader-site');
});

$(window).on('load', function () {
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');
});

//Plugin Modal

// Get the modal
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get the image and insert it inside the modal - use its "alt" text as a caption

var img0 = document.getElementById('myImg0');
img0.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var img1 = document.getElementById('myImg1');
img1.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var img2 = document.getElementById('myImg2');
img2.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

document.getElementsByClassName