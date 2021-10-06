// GLIDE JS CAROSSEL
const slider1 = document.getElementById("glide_1");
const slider2 = document.getElementById("glide_2");

// HERO
if (slider1) {
    new Glide(slider1, {
        type: "carousel",
        startAt: 0,
        autoplay: 3000,
        hoverpause: true,
        perView: 1,
        animationDuration: 800,
        animationTimingfunc: "linear"
    }).mount();
}

// ÚLTIMOS PRODUTOS
if (slider2) {
    new Glide(slider2, {
        type: "carousel",
        startAt: 0,
        hoverpause: true,
        perView: 4,
        animationDuration: 800,
        animationTimingfunc: "ease-in-out",
        breakpoints:{
            1200:{
                perView: 3
            },
            768:{
                perView: 2,
            },

        }
    }).mount();
}