var slideIndex_main = 0;

ShowSlides();
function ShowSlides() {
    var i;
    var main_slides = document.getElementsByClassName("main-slide");
    var right_slides = document.getElementsByClassName("right-slide");
    var left_slides = document.getElementsByClassName("left-slide");

    for (i = 0; i < main_slides.length; i++) {
        main_slides[i].style.display = "none";
        right_slides[i].style.display = "none";
        left_slides[i].style.display = "none";
    }

    slideIndex_main++;
    if (slideIndex_main > main_slides.length || slideIndex_main > right_slides.length || slideIndex_main > left_slides.length) {
        slideIndex_main = 1;
    }

    main_slides[slideIndex_main - 1].style.display = "block";
    right_slides[slideIndex_main - 1].style.display = "block";
    left_slides[slideIndex_main - 1].style.display = "block";

    setTimeout(ShowSlides, 3500);
}

// تم دارک
function light() {
    document.getElementById('light-box').style = "display:none;";
    document.getElementById('dark-box').style = "display:block;" + " width: fit-content;";
    document.getElementById('body').style = " transition: 1.5s ease-in-out;" + "background-color: #c3c3c3;" + "color:black;";
    // حاشیه های کار
    document.getElementById('header-row').style = " transition: 1.5s ease-in-out;" + "background-color: blanchedalmond;";
    document.getElementById('main-logo-1').style="display:block";
    document.getElementById('main-logo-2').style="display:none";
    for (var i = 0; i < 7; i++) {
        document.querySelectorAll('.color')[i].style = " transition: 1.5s ease-in-out;" + "color:black;";
    }

    for (var i = 0; i < 6; i++) {
        document.querySelectorAll('.white-logo')[i].style = "display:none;";
    }

    for (var i = 0; i < 4; i++) {
        document.querySelectorAll('.li-menu')[i].style = " transition: 0.7s ease-in-out;" + "color:black;";
    }

    for (var i = 0; i < 3; i++) {
        document.querySelectorAll('.black-logo')[i].style = "display:inline-block;";
        document.querySelectorAll('.logo-black')[i].style="display:inline-block" +"margin:auto";
        document.querySelectorAll('.logo-white')[i].style="display:none";
    }
}

// تم لایت
function dark() {
    document.getElementById('dark-box').style = "display:none;";
    document.getElementById('light-box').style = "display:block;" + " width: fit-content;";
    document.getElementById('body').style = " transition: 1.5s ease-in-out;" + "background-color: #202020;" + "color:#fff";
    // حاشیه های کار
    document.getElementById('header-row').style = " transition: 1.5s ease-in-out;" + "background-color: rgb(166, 131, 80);";
    document.getElementById('main-logo-1').style="display:none";
    document.getElementById('main-logo-2').style="display:block";
    for (var i = 0; i < 7; i++) {
        document.querySelectorAll('.color')[i].style = " transition: 1.5s ease-in-out;" + "color:#fff;";
    }

    for (var i = 0; i < 6; i++) {
        document.querySelectorAll('.white-logo')[i].style = "display:inline-block;" + "margin : -2px -2.5px; 0px 0";
    }

    for (var i = 0; i < 4; i++) {
        document.querySelectorAll('.li-menu')[i].style = " transition: 0.7s ease-in-out;" + "color:#fff;";
    }

    for (var i = 0; i < 3; i++) {
        document.querySelectorAll('.black-logo')[i].style = "display:none;";
        document.querySelectorAll('.logo-black')[i].style="display:none";
        document.querySelectorAll('.logo-white')[i].style="display:inline-block" + "margin:auto";
    }
}

// z-index-2
function z_index_enter() {
    document.getElementById('game-setup-text').style =" transition: 0.7s ease-in-out;" + "background-color: #1515C9;" + "color: white;" + "margin: 7% 0 0 0;" + "border: 3px solid #1515C9;" + "border-bottom-right-radius: 0px;" + "border-bottom-left-radius: 0px;";
    document.getElementById('game-setup-zindex').style =" transition: 0.7s ease-in-out;" + "border-top-right-radius: 0px;" + "border-top-left-radius: 0px;";
}

function z_index_out() {
    document.getElementById('game-setup-text').style = "";
    document.getElementById('game-setup-zindex').style = "";
}




// پرفروش ها
function enter_1_pup() {
    var pic = document.getElementById('pup-pic-1');
    pic.src = "./pic/gaming/pc/pc-2.jpg";
}
function out_1_pup() {
    var pic = document.getElementById('pup-pic-1');
    pic.src = "./pic/gaming/pc/pc-1.jpg";
}

function enter_2_pup() {
    var pic = document.getElementById('pup-pic-2');
    pic.src = "./pic/gaming/pc/pc-1.jpg";
}
function out_2_pup() {
    var pic = document.getElementById('pup-pic-2');
    pic.src = "./pic/gaming/pc/pc-2.jpg";
}

function enter_3_pup() {
    var pic = document.getElementById('pup-pic-3');
    pic.src = "./pic/gaming/pc/pc-2.jpg";
}
function out_3_pup() {
    var pic = document.getElementById('pup-pic-3');
    pic.src = "./pic/gaming/pc/pc-3.jpg";
}

function enter_4_pup() {
    var pic = document.getElementById('pup-pic-4');
    pic.src = "./pic/gaming/pc/pc-2.jpg";
}
function out_4_pup() {
    var pic = document.getElementById('pup-pic-4');
    pic.src = "./pic/gaming/pc/pc-4.jpg";
}

function enter_5_pup() {
    var pic = document.getElementById('pup-pic-5');
    pic.src = "./pic/gaming/pc/pc-2.jpg";
}
function out_5_pup() {
    var pic = document.getElementById('pup-pic-5');
    pic.src = "./pic/gaming/pc/pc-5.jpg";
}

function enter_6_pup() {
    var pic = document.getElementById('pup-pic-6');
    pic.src = "./pic/gaming/pc/pc-4.jpg";
}
function out_6_pup() {
    var pic = document.getElementById('pup-pic-6');
    pic.src = "./pic/gaming/pc/pc-5.jpg";
}

function enter_7_pup() {
    var pic = document.getElementById('pup-pic-7');
    pic.src = "./pic/gaming/pc/pc-2.jpg";
}
function out_7_pup() {
    var pic = document.getElementById('pup-pic-7');
    pic.src = "./pic/gaming/pc/pc-6.jpg";
}


// کیس های گیمینگ
function enter_1_case() {
    var pic = document.getElementById('case-pic-1');
    pic.src = "./pic/gaming/pc/pc-2.jpg";
}
function out_1_case() {
    var pic = document.getElementById('case-pic-1');
    pic.src = "./pic/gaming/pc/pc-1.jpg";
}

function enter_2_case() {
    var pic = document.getElementById('case-pic-2');
    pic.src = "./pic/gaming/pc/pc-1.jpg";
}
function out_2_case() {
    var pic = document.getElementById('case-pic-2');
    pic.src = "./pic/gaming/pc/pc-2.jpg";
}

function enter_3_case() {
    var pic = document.getElementById('case-pic-3');
    pic.src = "./pic/gaming/pc/pc-2.jpg";
}
function out_3_case() {
    var pic = document.getElementById('case-pic-3');
    pic.src = "./pic/gaming/pc/pc-3.jpg";
}

function enter_4_case() {
    var pic = document.getElementById('case-pic-4');
    pic.src = "./pic/gaming/pc/pc-2.jpg";
}
function out_4_case() {
    var pic = document.getElementById('case-pic-4');
    pic.src = "./pic/gaming/pc/pc-4.jpg";
}

function enter_5_case() {
    var pic = document.getElementById('case-pic-5');
    pic.src = "./pic/gaming/pc/pc-2.jpg";
}
function out_5_case() {
    var pic = document.getElementById('case-pic-5');
    pic.src = "./pic/gaming/pc/pc-5.jpg";
}

function enter_6_case() {
    var pic = document.getElementById('case-pic-6');
    pic.src = "./pic/gaming/pc/pc-2.jpg";
}
function out_6_case() {
    var pic = document.getElementById('case-pic-6');
    pic.src = "./pic/gaming/pc/pc-6.jpg";
}

function enter_7_case() {
    var pic = document.getElementById('case-pic-7');
    pic.src = "./pic/gaming/pc/pc-2.jpg";
}
function out_7_case() {
    var pic = document.getElementById('case-pic-7');
    pic.src = "./pic/gaming/pc/pc-6.jpg";
}


// کارت گرافیک
function enter_1_gpu() {
    var pic = document.getElementById('gpu-pic-1');
    pic.src = "./pic/gaming/gpu/gpu-2.jpg";
}
function out_1_gpu() {
    var pic = document.getElementById('gpu-pic-1');
    pic.src = "./pic/gaming/gpu/gpu-1.jpg";
}

function enter_2_gpu() {
    var pic = document.getElementById('gpu-pic-2');
    pic.src = "./pic/gaming/gpu/gpu-1.jpg";
}
function out_2_gpu() {
    var pic = document.getElementById('gpu-pic-2');
    pic.src = "./pic/gaming/gpu/gpu-2.jpg";
}

function enter_3_gpu() {
    var pic = document.getElementById('gpu-pic-3');
    pic.src = "./pic/gaming/gpu/gpu-1.jpg";
}
function out_3_gpu() {
    var pic = document.getElementById('gpu-pic-3');
    pic.src = "./pic/gaming/gpu/gpu-3.jpg";
}

function enter_4_gpu() {
    var pic = document.getElementById('gpu-pic-4');
    pic.src = "./pic/gaming/gpu/gpu-1.jpg";
}
function out_4_gpu() {
    var pic = document.getElementById('gpu-pic-4');
    pic.src = "./pic/gaming/gpu/gpu-4.jpg";
}

function enter_5_gpu() {
    var pic = document.getElementById('gpu-pic-5');
    pic.src = "./pic/gaming/gpu/gpu-1.jpg";
}
function out_5_gpu() {
    var pic = document.getElementById('gpu-pic-5');
    pic.src = "./pic/gaming/gpu/gpu-5.jpg";
}

function enter_6_gpu() {
    var pic = document.getElementById('gpu-pic-6');
    pic.src = "./pic/gaming/gpu/gpu-1.jpg";
}
function out_6_gpu() {
    var pic = document.getElementById('gpu-pic-6');
    pic.src = "./pic/gaming/gpu/gpu-6.jpg";
}

function enter_7_gpu() {
    var pic = document.getElementById('gpu-pic-7');
    pic.src = "./pic/gaming/gpu/gpu-1.jpg";
}
function out_7_gpu() {
    var pic = document.getElementById('gpu-pic-7');
    pic.src = "./pic/gaming/gpu/gpu-7.jpg";
}