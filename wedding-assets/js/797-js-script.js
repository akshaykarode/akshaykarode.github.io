! function(a) {
    "use strict";
    a(window).on("load", function() {
        a(".loader-inner").fadeOut(), a(".loader").delay(200).fadeOut("slow")
    });
    var s = a(".header"),
        e = s.offset();
    a(window).scroll(function() {
        a(this).scrollTop() > e.top + 50 && s.hasClass("default") ? s.fadeOut("fast", function() {
            a(this).removeClass("default").addClass("switched-header").fadeIn(200), a(".scroll-to-top").addClass("active")
        }) : a(this).scrollTop() <= e.top + 50 && s.hasClass("switched-header") && s.fadeOut("fast", function() {
            a(this).removeClass("switched-header").addClass("default").fadeIn(100), a(".scroll-to-top").removeClass("active")
        })
    }), a("a.scroll").smoothScroll({
        speed: 800,
        offset: -180
    }), a(".popup-image").magnificPopup({
        type: "image",
        fixedContentPos: !1,
        fixedBgPos: !1,
        mainClass: "mfp-no-margins mfp-with-zoom",
        image: {
            verticalFit: !0
        },
        zoom: {
            enabled: !0,
            duration: 300
        }
    }), a(".popup-youtube, .popup-vimeo").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    });
    var o = a(".video-cover .play-but");
    a(".video-cover").each(function() {
        a(this).find("iframe").length && a(this).find("iframe").attr("data-src", a(this).find("iframe").attr("src"), a(this).find("iframe").attr("src", ""))
    }), o.on("click", function() {
        var s = a(this).closest(".video-cover"),
            e = s.find("iframe");
        return s.addClass("show-video"), e.attr("src", e.attr("data-src")), !1
    });

    var countDownDate = new Date("May 17, 2020 12:00:00").getTime();
    var x = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Output the result in an element with id="demo"
        document.getElementById("love-countdown").innerHTML = `<div class="col"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1 ">${days}</span> <span class="label ">Days</span></div></div> <div class="col"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1">${hours}</span> <span class="label">Hours</span></div></div> <div class="col"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1">${minutes}</span> <span class="label">Minutes</span></div></div> <div class="col"><div class="card card-body countdown-shadow p-3"><span class="counter text-primary mb-1">${seconds}</span> <span class="label">Seconds</span></div></div>`;
        // If the count down is over, write some text 
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("love-countdown").innerHTML = `<h1 class="text-primary" style="font-family: cursive;">Congratulations ! Happy Married Life ...</h1>`
        }
      }, 1000);
}(jQuery);