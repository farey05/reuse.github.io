$(document).ready(function () {

    function set_dark_mode(){
        $("html").css("--header-background", "#222222");
        $("html").css("--color_background", "#141414");
        $("html").css("--type-info-bg", "#222");
        $("html").css("--main-color", "#6DC180");
    }

    if(localStorage.getItem("dark") === "t") set_dark_mode();

    $("#dark").on("click", function(){
        if(localStorage.getItem("dark") === "t") localStorage.setItem("dark", "f");
        else localStorage.setItem("dark", "t");
        location.reload();
    })


    ///nav menu
    $("#burger-nav").on( "click", function() {
        $("#nav-menu").toggle(300);
    });
    ///nav menu

    ///slider
    var SliderOffset = 0;
    var slides = document.querySelectorAll("#slider-block");

    
    
    $(".slider-line").css("width", `${100 * slides.length}vw`);

    $("#slider-button-next").on("click", function () {
        SliderOffset += 100;
        if(SliderOffset < slides.length * 100){
            $(".slider-line").css("right", SliderOffset + "vw")
        }
        else{
            SliderOffset = 0;
            $(".slider-line").css("right", SliderOffset + "vw")
        }
    });

    $("#slider-button-prev").on("click", function () {
        SliderOffset -= 100;
        if(SliderOffset >= 0){
            $(".slider-line").css("right", SliderOffset + "vw")
        }
        else{
            SliderOffset = slides.length * 100 - 100;
            $(".slider-line").css("right", SliderOffset + "vw")
        }
    });

    slides.forEach(slide => {
        let BgSrc = slide.getAttribute("data-src");
        slide.style.backgroundImage = `url(${BgSrc})`; 
        slide.style.backgroundSize = "100%"; 
        slide.style.backgroundPosition = "center"; 

        slide.style.backgroundRepeat = "no-repeat"; 
    });
    ///slider

    var faq = document.querySelectorAll(".faq-question");

    faq.forEach(e => {
        
        $(e.querySelector("#faq-open")).on("click", function () {
            $(e.querySelector(".faq-answer")).toggle(500);
        });
    });

    ///add to card
    // $("button").click(function (e) { 
    //     e.preventDefault();
    //         let data = $(e.currentTarget).data("product-id");
    //         $.post("/core/php/add-to-card.php", {id: data},
    //             function (data, textStatus, jqXHR) {
                    
    //             },
    //             "dataType"
    //         );
    // });

});

