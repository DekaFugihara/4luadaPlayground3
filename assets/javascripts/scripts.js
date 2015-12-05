$(function(){
  $( "[data-role='header'], [data-role='footer']" ).toolbar({ theme: "a" });
});

$(document).on("pagecontainerchange", function(){
  console.log("aaa");
  var current = $(".ui-page-active").jqmData("title");
  $("[data-role='navbar'] a.ui-btn-active").removeClass('ui-btn-active');
  $("[data-role='navbar'] a").each(function(){
    if ( $(this).text() === current ){
      $(this).addClass("ui-btn-active");
    }
  });

});