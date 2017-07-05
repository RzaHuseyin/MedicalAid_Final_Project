$(document).ready(function() {
    $(".panel-heading ").on("click", function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");

            $(".panel-heading i").removeClass("fa-minus").addClass("fa-plus");
        } else {
            $(".panel-heading  i").removeClass("fa-minus").addClass("fa-plus");
            $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
            $(".panel-heading ").removeClass("active");
            $(this).addClass("active");

        }

    });
});



// Progressbar
$(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 1;
        $("#dynamic")
            .css("width", current_progress + "%")
            .attr("aria-valuenow", current_progress)
            .text(current_progress + "% ");
        if (current_progress >= 79)
            clearInterval(interval);
    }, 10);
});


$(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 1;
        $("#dynamicScnd")
            .css("width", current_progress + "%")
            .attr("aria-valuenow", current_progress)
            .text(current_progress + "% ");
        if (current_progress >= 55)
            clearInterval(interval);
    }, 10);
});

$(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 1;
        $("#dynamicThrd")
            .css("width", current_progress + "%")
            .attr("aria-valuenow", current_progress)
            .text(current_progress + "%");
        if (current_progress >= 27)
            clearInterval(interval);
    }, 10);
});
// progresbar son




// circular progress bar
var elem = document.getElementsByClassName("my_canvas");
for (var i = 0; i < elem.length; i++) {
    var cnvs = elem.item(i);
    drawProgress(cnvs);
}

//function to call 
function drawProgress(cnvs) {

    var ctx = cnvs.getContext('2d'),
        lw = cnvs.getAttribute("data-lineWidth"),
        lc = cnvs.getAttribute("data-lineColor"),
        tc = cnvs.getAttribute("data-textColor"),
        almax = cnvs.getAttribute("data-percent"),
        al = 0,
        start = 4.72,
        cw = ctx.canvas.width,
        fs = cw * 0.14,
        ch = ctx.canvas.height,
        diff;

    function progressSim() {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = lw;
        ctx.fillStyle = tc; //'#09F';
        //strock back color draw  
        ctx.strokeStyle = "#fdfaf8";
        ctx.beginPath();
        ctx.arc(cw / 2, cw / 2, cw / 2 - (lw / 2), start, Math.PI * 20 / 10 + start, false);
        ctx.stroke();
        //strock for color draw   
        ctx.strokeStyle = lc;
        ctx.textAlign = 'center';
        ctx.font = fs + 'px sans-serif';
        ctx.fillText(al + '%', cw * .5, ch * .5 + fs * 0.3, cw);
        ctx.beginPath();
        ctx.arc(cw / 2, cw / 2, cw / 2 - (lw / 2), start, diff / 10 + start, false);
        ctx.stroke();
        if (al >= almax) {
            clearTimeout(sim);
            // Add scripting here that will run when progress completes
        }
        al++;
    }
    var sim = setInterval(progressSim, 10);
}


//circular progress bar son



// $(document).ready(function(){
//     $(".slideshow img:gt(0)").hide();


//     setInterval(function(){
//         var curr= $('.slideshow img:visible')



//         var next =curr.next().length ? curr.next() : $('.slideshow img:eq(0)');

//         curr.fadeOut(400);
//         next.fadeIn(800);
//     },3000);
// });




var nums = [].slice.call(document.querySelectorAll(".num"));

// about us -daki slider

var images = ["img/slider2.png", "img/slider3.png", "img/slider.png"];
var counter = 0;

function current(arg) {


    for (var i = 0; i < 3; i++) {
        nums[i].style.color = "#0199ED";
    }

    $("#picture").attr("src", images[$(arg).text() - 1]);
 
    
   $(arg).css("color", "red");


}

$(document).ready(function() {


    var clickaway =
        function go() {
            $("#picture").fadeOut(900, function() {
                $("#picture").attr("src", images[counter]);
                counter++;
                if (counter > 2) { counter = 0; }
                $(picture).fadeIn(800).delay(2000);
                go();
            });
        }
    clickaway();




})




var items=[].slice.call(document.querySelectorAll(".item"));
var i = 0;
var y = 0;

 var example = setInterval(slider, 3000);

function slider() {
 
     if (i == 3) { i = 0 };




    

    for (var y = 0; y < 3; y++) {
        nums[y].style.color = "#0199ED";
    }


    nums[i].style.color = "#FF820E";

    i++;


};











$('.slider-dp').lbSlider({

    leftBtn: '.left', // left button selector

    rightBtn: '.right', // right button selector

    visible: 6, // visible elements quantity







});





$('.slider-rp').lbSlider({

    leftBtn: '.left-rp', // left button selector

    rightBtn: '.right-rp', // right button selector

    visible: 4, // visible elements quantity



});


$('.slider-ts').lbSlider({

    leftBtn: '.left-ts', // left button selector

    rightBtn: '.right-ts', // right button selector

    visible: 3 // visible elements quantity



});


// -----------------------------------------------------------------------------
// sliderler son

$(window).resize(function() {
    $('.slider-rp').width($(this).width() - 3);
}).resize();


// // ----------------------------------------------------\

// accordion plus to minus
