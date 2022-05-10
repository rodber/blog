---
date: 2022-05-03T15:29:55Z
title: Throwable Handler for PHP
tags:
    - 🐘php
    - 🥑chevere
author: rodber
summary: Multi-purpose throwable handling.
image: /org/chevere/packages/throwable-handler/throwable-handler-social.png
---

New from [Chevere](https://chevere.org) is the [chevere/throwable-handler](https://chevere.org/packages/throwable-handler) package for PHP. This software enables to easily configure how a PHP logic handles its exceptions, with a myriad of alternatives to support generating documents for HTML, console and plain-text.

## Demo

![HTML demo](/org/chevere/packages/throwable-handler/demo.svg)

* [HTML](https://chevere.github.io/throwable-handler/demo/output/html.html)
* [HTML (silent)](https://chevere.github.io/throwable-handler/demo/output/html-silent.html)
* [Plain text](https://chevere.github.io/throwable-handler/demo/output/plain.txt)
* [Console (asciinema)](https://asciinema.org/a/qqrx4VwYsLgMB5dmuSzSjr7G7)

## Features

There's a strong focus in consistency. All documents share the exact same text content, try copying the HTML text and it will match console and plain-text representations. This is because the system is intended to be used in contexts where users and/or developers need to share these documents.

* Multiple use modes (auto, triggered, manual)
* Supports nested throwables (`previous: $e`)
* Console document
  * Colorful console output (where available)
* Plain document
  * Same as console (no-color)
  * Same as copy HTML text
* HTML document
  * Responsive design (narrow devices)
  * Silent mode for end-user

The system enables to go all-auto or fine-tune everything, all depends on how your app works.

## Automatic handling

Using `set_exception_handler` this package can be used to handle throwables automatically. For example, to quick setup the console handler for the whole script:

```php
use Chevere\ThrowableHandler\ThrowableHandler;

set_exception_handler(ThrowableHandler::CONSOLE);
```

## Trigger handling

You can use helper functions to manually setup throwable handling. For example, to handle a caught `$e` as HTML:

```php
use function Chevere\ThrowableHandler\handleAsHtml;

try {
    // ...
} catch(Throwable $e) {
    handleAsHtml($e);
}
```

## Manual handling

You can do the whole thing all manual and retrieve `$document` directly. For example, a plain document:

```php
use function Chevere\ThrowableHandler\plainDocument;

$document = plainDocument($throwable);
```

## Learn more

Head over to the [documentation](https://chevere.org/packages/throwable-handler) and leave a star at [GitHub](https://github.com/chevere/throwable-handler).
