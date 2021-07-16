## Text deScrambler - A jQuery Plugin.

Check out the interactive demo [here](http://cjbarnaby.com.au/text_descrambler/).

___

### Description
**Text DeScrambler** is a jQuery plugin designed to simulate the cliched movie trope of a sequence of characters being descrambled (usually in the context of a hacker realising the password was the bad guy's wife's birthday backwards _all along_, or whatever).

### Usage
When called on an element with a `text` value, the `scramble` mothod will reveal that value through a process that simulates the 'unscrambling' of each character in the string.

```js
$(".elementToScramble").scramble(4000, 20, "alphabet", true);
```

#### Parameters

```js
$element.scramble(duration, interval, characterSet, uppercase)
```

##### _duration_

- **Description**: Time, in milliseconds, over which the deScrambling effect will take place.
- **Type**: Number.
- **Optional**.
- **Default**: `3000`.
- **Min**: `1000`.
- **Max**: `20000`.

##### _interval_

- **Description**: Time, in milliseconds, between each successive character being unscrambled.
- **Type**: Number.
- **Optional**.
- **Default**: `20`.
- **Min**: `5`.
- **Max**: `1000`.

##### _characterSet_

- **Description**: The character set (from a list of pre-defined character set) to use when substituting scrambled characters in the string.
- **Type**: String.
- **Optional**.
- **Default**: `"all"`.
- **Acceptable parameters**:
  - `"all"` - combination of all character sets, exlcuding emoji.
  - `"allPlusEmoji"` - combination of all character sets, including emoji
  - `"alphanumeric"` - all letters and numbers.
  - `"alphabet"` - all letters only.
  - `"punctuation"` - punctuation only.
  - `"numbers"` - numbers only.
  - `"emoji"` - emoji (a set of 500 random emojis)
  
##### _uppercase_

- **Description**: Determines whether the substitued scrambled characters are to be uppercase or lowercase.
- **Type**: Boolean.
- **Optional**.
- **Default**: `true`.

### Installation

- Copy [the minimized plugin](https://github.com/cjbarnaby/text-descrambler/raw/master/dist/descrambler.min.js) **or** [annotated plugin](https://github.com/cjbarnaby/text-descrambler/raw/master/dist/descrambler.js) to your app's directory:
```sh
# EITHER: annotated plugin
curl https://github.com/cjbarnaby/text-descrambler/raw/master/dist/descrambler.js > descrambler.js
# OR: minimized plugin
curl https://github.com/cjbarnaby/text-descrambler/raw/master/dist/descrambler.min.js > descrambler.js
```
- Copy jQuery to your app's directory:
```sh
curl https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js > jQuery.js
```
- Create a file for your own custom JavaScript:
```sh
touch main.js
```
- Add jQuery and the deScrambler plugin to your HTML:
```HTML
<head>
  <script src="jQuery.js"></script>
  <script src="dist/descrambler.js"></script>
  <script src="main.js"></script>
</head>
<body>
  <p>Here's some text.</p>
</body>
```
- Start scrambling! In your custom `main.js` file:
```js
$(document).ready(function() {
  $("p").scramble();
});
```

### Notes

- This plugin works best with monospace fonts.
- If `(interval / duration / $el.text().length) < 1`, the scrambling sequence will run indefinitely (and never resolve to the element's original text value).
