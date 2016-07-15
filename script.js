$(document).ready(function() {

  $("h1").click(function(){
  $("h1").animate({fontSize: "100px"});
  });
  $("h2").click(function(){
  $("h2").slideToggle();
  });
  $('a').on("click",function(){
    var imgUrl = $(this).data("img-url")
    console.log(imgUrl);
    $('img').attr("src",imgUrl)
    $('.jquery').show();
    $('img,.jquery').on("click",function(){
      $('.jquery').hide();
    });
  });
  $("li").hover(function(){
  $("li").fadeToggle("slow","linear");
  });
  $("h3").click(function(){
    $('body').css("background-image", "url(/http://www.thatericalper.com/wp-content/uploads/2014/07/rick-astley.jpg)");  
  });
});