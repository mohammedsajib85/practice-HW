 jQuery Practice Snippets (1–100)

// 1
$(document).ready(function() {
  console.log("Page is ready!");
});

// 2
$("#btn1").click(function() {
  alert("Button clicked!");
});

// 3
$("p").click(function() {
  $(this).hide();
});

// 4
$("button").dblclick(function() {
  $(this).css("background-color", "yellow");
});

// 5
$("#demo").mouseenter(function() {
  $(this).text("Mouse entered!");
});

// 6
$("#demo").mouseleave(function() {
  $(this).text("Mouse left!");
});

// 7
$("input").focus(function() {
  $(this).css("background-color", "#ffffcc");
});

// 8
$("input").blur(function() {
  $(this).css("background-color", "#ffffff");
});

// 9
$("#hideBtn").click(function() {
  $("div").hide();
});

// 10
$("#showBtn").click(function() {
  $("div").show();
});

// 11
$("#toggleBtn").click(function() {
  $("p").toggle();
});

// 12
$("h1").hover(function() {
  $(this).css("color", "red");
}, function() {
  $(this).css("color", "black");
});

// 13
$("#slideDownBtn").click(function() {
  $("#box").slideDown();
});

// 14
$("#slideUpBtn").click(function() {
  $("#box").slideUp();
});

// 15
$("#slideToggleBtn").click(function() {
  $("#box").slideToggle();
});

// 16
$("#fadeInBtn").click(function() {
  $(".fade-box").fadeIn();
});

// 17
$("#fadeOutBtn").click(function() {
  $(".fade-box").fadeOut();
});

// 18
$("#fadeToggleBtn").click(function() {
  $(".fade-box").fadeToggle();
});

// 19
$("#changeText").click(function() {
  $("#text").text("New text added!");
});

// 20
$("#changeHtml").click(function() {
  $("#htmlBox").html("<b>Bold HTML content</b>");
});

// 21
$("#setVal").click(function() {
  $("#inputBox").val("New Value");
});

// 22
$("#appendText").click(function() {
  $("#list").append("<li>Appended item</li>");
});

// 23
$("#prependText").click(function() {
  $("#list").prepend("<li>Prepended item</li>");
});

// 24
$("#afterBtn").click(function() {
  $("#target").after("<p>Inserted after</p>");
});

// 25
$("#beforeBtn").click(function() {
  $("#target").before("<p>Inserted before</p>");
});

// 26
$("#removeItem").click(function() {
  $(".item").remove();
});

// 27
$("#emptyBox").click(function() {
  $("#box").empty();
});

// 28
$("#addClass").click(function() {
  $("#title").addClass("highlight");
});

// 29
$("#removeClass").click(function() {
  $("#title").removeClass("highlight");
});

// 30
$("#toggleClass").click(function() {
  $("#title").toggleClass("highlight");
});

// 31
$("#getAttr").click(function() {
  alert($("#link").attr("href"));
});

// 32
$("#setAttr").click(function() {
  $("#link").attr("href", "https://google.com");
});

// 33
$("#getCss").click(function() {
  alert($("#title").css("color"));
});

// 34
$("#setCss").click(function() {
  $("#title").css("font-size", "30px");
});

// 35
$("#animateBtn").click(function() {
  $("#box").animate({left: '250px'});
});

// 36
$("#chained").click(function() {
  $("#box").css("color", "blue").slideUp(2000).slideDown(2000);
});

// 37
$("#textLength").click(function() {
  alert($("#text").text().length);
});

// 38
$("#disableBtn").click(function() {
  $("#inputBox").prop("disabled", true);
});

// 39
$("#enableBtn").click(function() {
  $("#inputBox").prop("disabled", false);
});

// 40
$("#cloneBtn").click(function() {
  $("#toClone").clone().appendTo("#cloneArea");
});

// 41
$("#parentBtn").click(function() {
  alert($("#child").parent().attr("id"));
});

// 42
$("#childrenBtn").click(function() {
  $("#parent").children().css("border", "1px solid red");
});

// 43
$("#findItem").click(function() {
  $("#container").find("span").css("color", "green");
});

// 44
$("#firstItem").click(function() {
  $("li:first").css("color", "red");
});

// 45
$("#lastItem").click(function() {
  $("li:last").css("color", "blue");
});

// 46
$("#even").click(function() {
  $("li:even").css("background", "#eee");
});

// 47
$("#odd").click(function() {
  $("li:odd").css("background", "#ccc");
});

// 48
$("#formSubmit").submit(function() {
  alert("Form submitted");
});

// 49
$(window).resize(function() {
  console.log("Window resized");
});

// 50
$("#scrollCheck").scroll(function() {
  console.log("Scrolling...");
});