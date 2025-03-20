(function ($){
    $.fn.changeBg = function(color) {
       this.css("background-color",color);
       return this;  // it allows mathod chaining
    };
})(jQuery);

// Note:- arrow functions do not bind this correctly in jQuery plugins. 


  $(function(){
    $("#btn").click(function(){
        // $("body").changeBg("purple");
        // changing dynamaically bg
        function getRandomColor(){
            var red = Math.floor(Math.random()*256);
            var green = Math.floor(Math.random()*256);
            var blue = Math.floor(Math.random()*256);
            return "rgb("+ red + "," + green + "," + blue + ")";
        }

        $("body").changeBg(getRandomColor());
    });
  });