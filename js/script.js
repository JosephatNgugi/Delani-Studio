let userName = $("#name").val();
let userEmail = $("#email").val();
let userMessage = $("#message").val();

$(function(){
    $(".imgHide1, .showText1").click(function() {            //Toggle show and Hide 
        $(".imgHide1, .showText1").toggle(800);             //between paragraph andimage function on click
    });
    $(".imgHide2, .showText2").click(function() {            //Toggle show and Hide 
        $(".imgHide2, .showText2").toggle(800);             //between paragraph andimage function on click
    });
    $(".imgHide3, .showText3").click(function() {            //Toggle show and Hide 
        $(".imgHide3, .showText3").toggle(800);             //between paragraph andimage function on click
    });
    $(".toggleShow").click(function(){
        $(".imgHide1, .imgHide2, .imgHide3").toggle(800);
        $(".showText1, .showText2, .showText3").toggle(1000)
    });


    // portfolio hover effects
    $(".image1").hover(function() {
        $(this).animate({opacity: 0.2}, 500);
        $(".imgText1").show(500);
    }, function() {
        $(this).animate({opacity: 1.0}, 500);
        $(".imgText1").hide(500);

    });
    $(".image2").hover(function() {
        $(this).animate({opacity: 0.2}, 500);
        $(".imgText2").show(500);
    }, function() {
        $(this).animate({opacity: 1.0}, 500);
        $(".imgText2").hide(500);

    });
        $(".image3").hover(function() {
        $(this).animate({opacity: 0.2}, 500);
        $(".imgText3").show(500);
    }, function() {
        $(this).animate({opacity: 1.0}, 500);
        $(".imgText3").hide(500);

    });
        $(".image4").hover(function() {
        $(this).animate({opacity: 0.2}, 500);
        $(".imgText4").show(500);
    }, function() {
        $(this).animate({opacity: 1.0}, 500);
        $(".imgText4").hide(500);

    });
        $(".image5").hover(function() {
        $(this).animate({opacity: 0.2}, 500);
        $(".imgText5").show(500);
    }, function() {
        $(this).animate({opacity: 1.0}, 500);
        $(".imgText5").hide(500);

    });
        $(".image6").hover(function() {
        $(this).animate({opacity: 0.2}, 500);
        $(".imgText6").show(500);
    }, function() {
        $(this).animate({opacity: 1.0}, 500);
        $(".imgText6").hide(500);

    });
        $(".image7").hover(function() {
        $(this).animate({opacity: 0.2}, 500);
        $(".imgText7").show(500);
    }, function() {
        $(this).animate({opacity: 1.0}, 500);
        $(".imgText7").hide(500);

    });
        $(".image8").hover(function() {
        $(this).animate({opacity: 0.2}, 500);
        $(".imgText8").show(500);
    }, function() {
        $(this).animate({opacity: 1.0}, 500);
        $(".imgText8").hide(500);

    });

    //form Validation

});
function validate(event){
event.preventDefault();
let output = `Hello ${userName}, We have recieved your Message. We will get back to you soon. Thank you!`;
document.getElementById("output").innerText = output;
}