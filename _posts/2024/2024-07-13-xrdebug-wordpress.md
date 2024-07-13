---
date: 2024-07-13T19:45:38Z
lastmod: 2024-07-13T19:45:38Z
title: xrDebug WordPress
tags:
    - 🤯show
    - 🔬dev
    - 🐘php
author: rodber
summary: Debug WordPress with xrDebug
image: /org/xrdebug/packages/wordpress/xrdebug-wordpress-social.png
---

I've released [xrdebug/wordpress](https://github.com/xrdebug/wordpress), the official client for debugging WordPress with [xrDebug](https://xrdebug.com).

This plugin is available for the newly released xrDebug 2.0. It requires PHP 8.1 and it works on WordPress V5.9 (tested up to V6.5). It is based on the [xrDebug PHP library](https://github.com/xrdebug/php) and it adds WordPress specific helpers that will make WordPress debugging easy.

## Debug helpers

This plugin includes helpers [xr](https://github.com/xrdebug/php?tab=readme-ov-file#xr), [xrr](https://github.com/xrdebug/php?tab=readme-ov-file#xrr), [xri](https://github.com/xrdebug/php?tab=readme-ov-file#xri), [vd](https://github.com/xrdebug/php?tab=readme-ov-file#vd) and [vdd](https://github.com/xrdebug/php?tab=readme-ov-file#vdd).

Use function [wp_xri](https://github.com/xrdebug/wordpress?tab=readme-ov-file#wp_xri) to access the xrDebug WordPress inspector instance, which can be used to control the WordPress inspector logging features.

### showErrors

Use method `showErrors` to show the PHP errors during the WordPress request.

```php
wp_xri()->showErrors();
```

To stop showing errors pass `FALSE` as argument.

```php
wp_xri()->showErrors(FALSE);
```

### showHooks

Use method `showHooks` to show the WordPress hooks executed during the WordPress request.

```php
wp_xri()->showHooks();
```

To stop showing hooks pass `FALSE` as argument.

```php
wp_xri()->showHooks(FALSE);
```

### showMails

Use method `showMails` to show the emails sent during the WordPress request.

```php
wp_xri()->showMails();
```

To stop showing emails pass `FALSE` as argument.

```php
wp_xri()->showMails(FALSE);
```

### showQueries

Use method `showQueries` to show the SQL queries executed during the WordPress request.

```php
wp_xri()->showQueries();
```

To stop showing queries pass `FALSE` as argument.

```php
wp_xri()->showQueries(FALSE);
```

## Wrapping up

WordPress is a massive popular CMS and now your development experience can be less miserable thanks to xrDebug.

Hope you can give it a try, feel free to spread the word!
