$(document).ready(function() {

// ELEMENTS
  var $body = $("body");
  var $container = $(".container");
  var $scramble = $(".scramble");
  var $input = $(".input");
  var $notice = $(".notice");
  var $buttons = $(".button");
  var $options = $(".options-box");

// OTHER GLOBALS
  var optionsOpen = false;

// INIT
  $scramble.scramble(3000, 20, "alphabet", true);

// HELPERS
  var toBoolean = function(input) {
    return input === 'true' ? true : false;
  };

  var getValues = function() {
    var values = {};
    values.duration = Number($(".duration").eq(0).val());
    values.interval = Number($(".interval").eq(0).val());
    values.uppercase = toBoolean($("input[name=uppercase]:checked").val());
    values.characterSet = $("input[name=character-set]:checked").val();
    return values;
  };

// LISTENERS
  $buttons.on("click", function() {
    if ($(this).attr("value") === "scramble") {
      $scramble.text($input.val());
      var values = getValues();
      $scramble.scramble(values.duration, values.interval, values.characterSet, values.uppercase);
    } else if ($(this).attr("value") === "options") {
      if (!optionsOpen) {
        $options.animate({
          top: "-90px"
        });
        optionsOpen = true;
      } else {
        $options.animate({
          top: "-370px"
        });
        optionsOpen = false;
      }
    }
  });

  $input.on("keydown", function(e) {
    if (e.keyCode === 13) {

      $notice.fadeOut(500, function() {
        $notice.text("");
      });
      $scramble.text($input.val());
      var values = getValues();
      $scramble.scramble(values.duration, values.interval, values.characterSet, values.uppercase);

    } else {
      if ($input.val().length > 14) {
        $notice.text("Just press enter, already.");
        $notice.fadeIn();
      }
    }
  });


});
