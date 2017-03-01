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

// DEMO SCRAMBLE
  $scramble.scramble(3000, 20, "alphabet", true);

// HELPERS
  var toBoolean = function(input) {
    return input === 'true' ? true : false;
  };

  var scrambleDemo = function() {
    input = $input.val() === "" ? "Text deScrambler" : $input.val();
    duration = Number($(".duration").eq(0).val());
    interval = Number($(".interval").eq(0).val());
    uppercase = toBoolean($("input[name=uppercase]:checked").val());
    characterSet = $("input[name=character-set]:checked").val();
    $scramble.text(input);
    $scramble.scramble(duration, interval, characterSet, uppercase);
  };

// LISTENERS
  // button click (scramble or options)
  $buttons.on("click", function() {
    // SCRAMBLE button
    if ($(this).attr("value") === "scramble") {
      scrambleDemo();
      // OPTIONS button
    } else if ($(this).attr("value") === "options") {
      if (!optionsOpen) {
        $options.animate({
          top: "-90px"
        });
      } else {
        $options.animate({
          top: "-370px"
        });
      }
      optionsOpen = !optionsOpen;
    }
  });

  // enter keydown
  $input.on("keydown", function(e) {
    if (e.keyCode === 13) {
      $notice.fadeOut(500, function() {
        $notice.text("");
      });
      scrambleDemo();
    } else {
      if ($input.val().length > 18) {
        $notice.text("Just press enter, already.");
        $notice.fadeIn();
      }
    }
  });
});
