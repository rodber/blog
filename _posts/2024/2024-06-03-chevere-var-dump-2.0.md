---
date: 2024-06-03T18:51:42Z
lastmod: 2024-06-03T18:51:42Z
title: Chevere VarDump 2.0
tags:
    - show
    - php
    - chevere
author: rodber
summary: Beautiful looking dumps!
image: /org/chevere/packages/var-dump/var-dump-social.png
---

New from Chevere is the [VarDump 2.0.0](https://github.com/chevere/var-dump/releases/tag/2.0.0) package. This update adds foldable sections and improve HTML rendering with CSS classes, foldable sections and automatic light/dark mode display.

## Demo

Play with it, see for yourself:

<div class="iframe-container rainbow-box">
    <iframe border="0" loading="lazy" src="https://chevere.github.io/var-dump/demo/output/html.html"></iframe>
</div>

There's a demo available for each output format:

* [HTML](https://chevere.github.io/var-dump/demo/output/html.html)
* [Plain text](https://chevere.github.io/var-dump/demo/output/plain.txt)
* [Console (asciinema)](https://asciinema.org/a/496889)

## It folds!

This is for those working with big objects and/or large datasets. As the previous version didn't fold, all properties were being displayed expanded which made a poor debug experience. Without folding it was hard to navigate and display looked complex to the eye.

The new VarDump 2.0 adds foldable sections with pure HTML (no JS required) using the [details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) and [summary](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary) HTML tags. The system takes fully advantage of these HTML elements and thanks to these the user experience has been dramatically improved.

It folds similar to how your editor does, with clear indentation marks and it recognizes the whole line for showing/hide the nested structure.

## Uses CSS

Previous VarDump version used [style attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style) for HTML display. It became an issue when dealing with large objects as the style rules clogged output as every style property was being repeated over and over for every variable. Using style limited a lot the HTML display and it didn't take advantage of advanced CSS rules.

VarDump 2.0 now uses [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) and generated HTML is more lightweight which makes a smaller footprint output. It allows tools like [xrDebug](https://xrdebug.com) to process smaller messages on HTTP and to tweak display accordingly on the dump window.

Using CSS instead of style enabled browser specific rules and more advanced styling options. For example, I needed some tweaking for Safari in order to display the detail marker on the right spot.

## Auto dark/light mode

The addition of CSS enabled automatic color mode based on your device preference. Instead of being fixed to a given color display, VarDump 2.0 adapts to your OS color setting which your eyes will be really thankful.

This is the light version:

![Demo light](/org/chevere/packages/var-dump/2.0/demo-light.webp)

And this is the dark version:

![Demo dark](/org/chevere/packages/var-dump/2.0/demo-dark.webp)

## The Prettiest Dumps of Our Lives

This project has been a lot of fun and I keep learning from it. Thanks to VarDump I also made [xrDebug](https://xrdebug.com/) and I'm happy with the flexing I'm doing here.

Let me emphasize the motto: ***Beautiful looking dumps!***
