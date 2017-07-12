$(window).load(function(){
  $("#sub_img img").click(function(){
    var img_src = $(this).attr("src");
    $("#top_img img").attr("src", img_src);
  });
});