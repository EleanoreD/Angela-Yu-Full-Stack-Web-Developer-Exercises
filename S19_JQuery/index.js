// Can use the ready method but if the script is put int he correct place there is no need for this
//$("h1.classname");
//$(#div name"h1");

// selects all of the chosen elements on screen $("button")

// changes the element to green $("h1").css("color", "green");

// uses the css property to get the value of something console.log($("h1").css("font-size"));

// If you have one value in the syntax you are getting the value, if you have two then you are setting the value.

// We can use a class in our style sheet to keep our code clean

// can query if it has a class $("h1).hasClass("margin-50"); in the consoles, this will return a boolean

// $("h1").removeClass("big-title");

// $("h1").text("Goodbye"); Changes all of the text on the page

//console.log($("img").attr("src"));

//console.log($("a").attr("href", "https://www.yahoo.com"));

// $("h1").click(function () {
//   $("h1").css("color", "pink");
// });

// $("button").click(function () {
//   $("h1").css("color", "purple");
// });

// $("input").keydown(function (event) {
//   console.log(event.key);
// });
// if you use document in the fiel this will log all keystroke o n the website

// $("input").keydown(function (event) {
//   $("h1").text(event.key);
// });

// can use any event in this function eg click
// $("h1").on("mouseover", function () {
//   $("h1").css("color", "orange");
// });

//$("h1").before("<button>new</button>"); can be used in the console for on the fly changes
// can also be after prepend and append check the documentation

// to remove
//$("button").remove;

//Animations

// //Hide something
// $("button").on("click", function () {
//   $("h1").hide();
// });
// can use .show to make it reappear

// $("button").on("click", function () {
//   $("h1").toggle();
// });

// $("button").on("click", function () {
//   $("h1").fadeOut();
// });
// also has fadeIn to make it come back

// all the methods come with a toggle option too eg fadeToggle
// Slide up and SLide down

// $("button").on("click", function () {
//   $("h1").slideToggle();
// });

// custome animations, can only use numberical tools in the curly brackets
// $("button").on("click", function () {
//   $("h1").animate({ opacity: 0.5 });
// });

// can chain the animations
// $("button").on("click", function () {
//   $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
// });
