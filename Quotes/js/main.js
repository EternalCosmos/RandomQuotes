var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

$(document).ready(function () {
  getColor ();
  return getQuote(`http://api.forismatic.com/api/1.0/?method=getQuote&key=${Math.floor(Math.random() * 888889) + 111111}&format=jsonp&lang=en&jsonp=parseQuote`)
})


function getQuote(url) {
  var tag = document.createElement("script");
  tag.src = url;
  $('.script-container').html(tag);
}

function parseQuote(response) {
  $("#text").text(`«${response.quoteText}»`);
  $("#author").text(response.quoteAuthor);
};

function getColor () {
  var color = Math.floor(Math.random() * colors.length);
  $("body").css("background-color", colors[color]);
  $(".new-quote").css("background-color", colors[color]);
  $(".tweet-quote").css("background-color", colors[color]);
  $("p").css("color", colors[color]);
}

function changeColors () {
  var color = Math.floor(Math.random() * colors.length);
  console.log(color)
  $("body").animate({
    backgroundColor: colors[color]
  }, 500);
  $(".new-quote").animate({
    backgroundColor: colors[color]
  }, 500);
  $(".tweet-quote").animate({
    backgroundColor: colors[color]
  }, 500);
  $("p").animate({
    color: colors[color]
  }, 500);
}


$('#new-quote').click(function () {  
  changeColors (colors);
  $("#author").animate({
    opacity: 0
  }, 500,
    function () {
      $(this).animate({ opacity: 1 }, 500);
    })
  $("#text").animate({
    opacity: 0
  }, 500,
    function () {
      $(this).animate({ opacity: 1 }, 500);
      getQuote(`http://api.forismatic.com/api/1.0/?method=getQuote&key=${Math.floor(Math.random() * 888889) + 111111}&format=jsonp&lang=en&jsonp=parseQuote`);
    })
})
