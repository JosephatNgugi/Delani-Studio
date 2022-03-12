

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
    })
});