---
date: 2024-03-08T14:36:22Z
lastmod: 2024-03-08T14:36:22Z
title: Wordle-CLI
tags:
    - php
    - game
author: rodber
summary: Rodber's Wordle-CLI
image: /photos/2024/wordle-cli-social.png
---

I've made a CLI version of the popular game [Wordle](https://en.wikipedia.org/wiki/Wordle). It is available for macOS, Linux and Windows at [rodber/wordle-cli](https://github.com/rodber/wordle-cli). Download latest binaries from the [releases page](https://github.com/rodber/wordle-cli/releases/).

Wordle-CLI is available in **multiple languages** including English, Spanish and Portuguese. The game is **configurable** as you can pick word length (from 3 to 8) and number of attempts (from 1 to no-limit).

## How to play?

Run the binary and follow the instructions. You pick language, word length and number of allowed tries.

Here's a quick example:

[![asciicast](https://asciinema.org/a/PWipTLDGqHYi1y17ENyX8kYRy.svg)](https://asciinema.org/a/PWipTLDGqHYi1y17ENyX8kYRy)

## The code

Wordle logic is very basic, you pick a word and compare against the input of the same length. It split words using `mb_str_split` and char by char it compares and assign the result green for exact match, yellow for partial and white for no match.

Word list is taken from public sources, from there these get compiled into PHP code by word length and language. For example, 3 letter words in English are in a `./app/lang/en/words/3.php` file and so on.

## Purpose of this project

I just wanted to play Wordle in the terminal, there's no other purpose. It was a fun project to make and I hope you enjoy it too.

Have fun!
