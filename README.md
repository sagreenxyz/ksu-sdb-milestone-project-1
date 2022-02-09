# Milestone Project 1

![Emoji Concentration](assets/example-play.gif)

[Link](https://sagreenxyz.github.io/ksu-sdb-milestone-project-1/) to hosted game.

## Background
This milestone project is an effort to show skills that have been learned from the first section of our development bootcamp program.  This first section taught skills in HTML, CSS, JavaScript and UI/UX.  The objective was to create a game.  In this case, my game is concentration - where a table of cards are placed face down.  The user must click cards to match pairs until the remain no unmatched cards.  This must be accomplished within the time limit (3 minutes) to win the game.

## Blocks

### Comparing Emojis
My original intent was to simply compare emojis like any text character.  I soon found emojis were matching that did not look the same!  Emojis are unicode characters and composed of one or more codepoints - a base code with zero or more modifiers.  Whatsmore, some sets of codepoint combinations produce the exact same emoji character.  To resolve this, I added logic around the emojis array to produce a unique identifier.  Instead of choosing emojis from ```['🙀', '👩‍🏭', '🥻', '👲🏻', '✍🏼']```, the list is converted to: ```[[0, '🙀'], [1, '👩‍🏭'], [2, '🥻'], [3, '👲🏻'], [4, '✍🏼']]```.  The integer before the emoji would then be used in the comparisons.  If a card with a ```data-emojiid``` value of 3 was compared to another with a ```data-emojiid``` of 3, the match would occur whereas a "3" versus a "4" would not.

## Other Areas of Learning

### ```node.classList.add()``` and ```node.classList.remove()```
The use of CSS is greatly simplified through the use of classes.  A style can be applied to and removed from the HTML element through the use of JavaScript ```node.classList.add()``` for adding the style and then ```node.classList.remove()``` for removal.  For example, a blinking border CSS style was created and named, ```.blinking-border{}```.  At the right place within the JavaScript logic, it was added to a div (for example, let's call this div, "card") using the following code example:

```document.getElementById('card-1').classList.add('.blinking-border');```

Later (after the duration of a ```timeOut()``` has occurred), the blinking can be stopped with the following:

```document.getElementById('card-1').classList.remove('.blinking-border');```

## Ideas for Improvement
