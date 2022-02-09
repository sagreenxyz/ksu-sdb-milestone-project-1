# Milestone Project 1

![Emoji Concentration](example-play.gif)

[Link](https://sagreenxyz.github.io/ksu-sdb-milestone-project-1/) to hosted game.

## Background
This milestone project is an effort to show skills that have been learned from the first section of our development bootcamp program.  This first section taught skills in HTML, CSS, JavaScript and UI/UX.  The objective was to create a game.  In this case, my game is concentration - where a table of cards are placed face down.  The user must click cards to match pairs until the remain no unmatched cards.  This must be accomplished within the time limit (3 minutes) to win the game.

## Blocks

### Comparing Emojis
My original intent was to simply compare emojis like any text character.  I soon found emojis were matching that did not look the same!  Emojis are unicode characters and composed of one or more codepoints - a base code with zero or more modifiers.  Whatsmore, some sets of codepoint combinations produce the exact same emoji character.  To resolve this, I added logic around the emojis array to produce a unique identifier.  Instead of choosing emojis from ```[':smirk_cat:', ':hear_no_evil:', ':horse:', ':panda_face:', ':mega:']```, the list is converted to: ```[[0, ':smirk_cat:'], [1, ':hear_no_evil:'], [2, ':horse:'], [3, ':panda_face:'], [4, ':mega:']]```.  The integer before the emoji would then be used in the comparisons.  If a card with a ```data-emojiid``` value of 3 was compared to another with a ```data-emojiid``` of 3, the match would occur whereas a "3" versus a "4" would not.

## Ideas for Improvement
