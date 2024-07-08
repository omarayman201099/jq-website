const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});



$(".closebtn").click(function () {
    $(".off-screen-menu").removeClass("active")
    $(".ham-menu").removeClass("active");
})




$(document).ready(function () {
    $(".card-header").click(function () {
        // self clicking close
        if ($(this).next(".card-body").hasClass("active")) {
            $(this).next(".card-body").removeClass("active").slideUp()
            $(this).children("span").removeClass("fa-minus").addClass("fa-plus")
        }
        else {
            $(".card .card-body").removeClass("active").slideUp()
            $(".card .card-header span").removeClass("fa-minus").addClass("fa-plus");
            $(this).next(".card-body").addClass("active").slideDown()
            $(this).children("span").removeClass("fa-plus").addClass("fa-minus")
        }
    })
})



window.onload = function () {

    countDownToTime("10 october 2021 1:56:00");
}

function countDownToTime(countTo) {

    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime() / 1000);

    let now = new Date();
    now = (now.getTime() / 1000);

    timeDifference = (futureDate - now);

    let days = Math.floor(timeDifference / (24 * 5 * 5));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`)


    setInterval(function () { countDownToTime(countTo); }, 1000);
}



$(".navLink").click(function(e){
    let sectionId = $(this).attr("href")
    console.log(sectionId)
     let sectionTop =$(sectionId).offset().top;
     console.log(sectionTop);
    // $("html", "body").animate({ //! select elements the correct way ("html, body") NOT ("html","body")  
    $("html, body").animate({  
        //  scrollTo:sectionTop //! "scrollTop" Not "scrollTo"
         scrollTop:sectionTop

},4000)
})