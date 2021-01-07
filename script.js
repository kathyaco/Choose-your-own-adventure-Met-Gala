// when I click on open-letter button
//    hide the envelope img and h1 and display text:“Congrats! You have been invited
$(".open-letter").click(function() {
    $(".envelope").hide();
    $(".intro").hide();

});
// hide invitation until open letter function is clicked
$(".open-letter").click(function() {
    $(".invitation").fadeIn();
    $(".button").fadeIn();
});
//If no-button is pressed, show the end screen
$(".no-button").click(function() {
    $(".button").hide();
    $(".invitation").hide();
    $("end-text").fadeIn();
    $(".the-end").fadeIn();
});
//If yes-button is pressed, show celebrity imgs
$(".yes-button").click(function() {
    $(".button").hide();
    $(".invitation").hide();
    $(".celebrity-imgs").fadeIn();
});
//if rihanna is double clicked buttons will show, 
$(".rihanna").dblclick(function() {
    $(".button").hide();
    $(".invitation").hide();
    $(".celebrity-imgs").hide();
    $(".riri-looks").fadeIn();
});
$(".diddy").dblclick(function() {
    $(".button").hide();
    $(".invitation").hide();
    $(".celebrity-imgs").hide();
    $(".riri-looks").hide();
    $(".diddy-looks").fadeIn();
});
$(".jared-leto").dblclick(function() {
    $(".button").hide();
    $(".invitation").hide();
    $(".celebrity-imgs").hide();
    $(".leto-looks").fadeIn();
});
$(".cher").dblclick(function() {
    $(".button").hide();
    $(".invitation").hide();
    $(".celebrity-imgs").hide();
    $(".cher-looks").fadeIn();
});
//hide riri looks
$(".riri2014").hide();
$(".r2014").click(function() {
    $(".riri-looks").hide();
    $(".riri2014").show();
    $(".results").text("Amazing! Your dress is so elegant");
});

$(".riri2015").hide();
$(".r2015").click(function() {
    $(".riri-looks").hide();
    $(".riri2015").show();
    $(".results").text("This dress will be remembered for ages!");
});

$(".riri2018").hide();
$(".r2018").click(function() {
    $(".riri-looks").hide();
    $(".riri2018").show();
    $(".results").text("So cool, I have never seen anything like it.");
});
//hide cher looks
$(".cher1974").hide();
$(".c1974").click(function() {
    $(".cher-looks").hide();
    $(".cher1974").show();
    $(".results").text("You just broke a barrier, women after you will now be able to dress just like you.");
});
$(".cher1985").hide();
$(".c1985").click(function() {
    $(".cher-looks").hide();
    $(".cher1985").show();
    $(".results").text("Absolutley beautiful");
});
//hide diddy looks
$(".diddy2005").hide();
$(".d2005").click(function() {
    $(".diddy-looks").hide();
    $(".diddy2005").show();
    $(".results").text("Dope!.");
});
$(".diddy2017").hide();
$(".d2017").click(function() {
    $(".diddy-looks").hide();
    $(".diddy2017").show();
    $(".results").text("Stunt on all of us");
});
//hide leto's looks
$(".leto2018").hide();
$(".l2018").click(function() {
    $(".leto-looks").hide();
    $(".leto2018").show();
    $(".results").text("So beautiful to look at");
});
$(".leto2019").hide();
$(".l2019").click(function() {
    $(".leto-looks").hide();
    $(".leto2019").show();
    $(".results").text("OH NO! OH Wait... Woahh!");
});