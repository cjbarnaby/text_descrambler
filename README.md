## Text deScrambler - A jQuery Plugin.

Check out the demo [here](http://cjbarnaby.com.au/text-descrambler/).

___

### Description
**Text DeScrambler** is a jQuery plugin designed to simulate the cliched movie trope of a sequence of characters being descrambled (usually in the context of a hacker realising the password was the bad guy's wife's birthday backwards, or whatever).

### Usage
When called on an element with a `text` value to reveal that value through a process that simulates the 'unscrambling' of each character in the string.

```js
$(".elementToScramble").scramble(4000, 20, "alphabet", true);
```

#### Parameters

```js
.scramble(duration, interval, characterSet, uppercase)
```

##### _duration_

- Description: Time, in milliseconds, over which the deScrambling effect will take place.
- Type: Number
- Optional
- Default: `3000`
- Min: `200`
- Max: `20000`

##### _interval_

- Description: Time, in milliseconds, between each successive character being unscrambled.
- Type: Number
- Optional
- Default: `20`
- Min: `5`
- Max: `10000`

##### _characterSet_

- Description: The character set (from a list of pre-defined character set) to use when substituting scrambled characters in the string.
- Type: String
- Optional
- Default: `"all"``
- Acceptable parameters:
  - "all" - combination of all character sets.
  - "alphanumeric" - all letters and numbers.
  - "alphabet" - all letters only.
  - "punctuation" - punctuation only.
  - "numbers" - numbers only.

##### _uppercase_

- Description: Determines whether the substitued scrambled characters are to be uppercase or lowercase.
- Type: Boolean
- Optional
- Default: `true`
