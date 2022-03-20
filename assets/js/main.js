$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4.5,
        loop: true,
        margin: 10,
        center: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
    })
});


function clickEventDropDown() {
    var dropmenu = document.getElementsByClassName("header__menu-search-option")[0].style;
    var bgricon = document.getElementsByClassName("header__menu-wrap")[0].style;
    var icon = document.getElementsByClassName("drop-icon")[0];
    // console.log(icon);
    if (dropmenu.display === "block") {
        dropmenu.display = "none";
        bgricon.backgroundColor = "#000"
        icon.classList.remove("fa-times-circle");
        icon.classList.remove("far");
        icon.classList.add("fa-bars");
        icon.classList.add("fas");

    } else {
        dropmenu.display = "block"
        bgricon.backgroundColor = "#9c3737";
        icon.display = "none";
        icon.classList.remove("fa-bars");
        icon.classList.remove("fas");
        icon.classList.add("fa-times-circle");
        icon.classList.add("far");

    }
}

// var headerMenu = document.getElementsByClassName(".drop__menu")
// console.log(headerMenu);
// headerMenu.addEventListener("click", function(e) { console.log(e.target) })