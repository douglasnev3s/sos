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
var modalImg = document.getElementById("myModalImg");
var captionText = document.getElementById("myModalCaption");
// Get the image and insert it inside the modal - use its "alt" text as a caption
function insertImageOnModal(src,alt) {
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = alt;
}
// Get the <span> element that closes the modal

function closeImg() {
    modal.style.display = "none";
}