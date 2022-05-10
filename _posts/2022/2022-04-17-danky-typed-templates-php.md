---
date: 2022-04-17T13:51:19Z
lastmod: 2022-05-10T14:19:19Z
title: Danky, typed templates for PHP
tags:
    - 🐘php
    - 🥑chevere
author: rodber
summary: Classes as templates for PHP.
image: /org/chevere/packages/danky/danky-social.jpg
---

When it comes to templates there are two distinctive approaches. You have raw code, and template-syntax where there's no programing language but placeholders for limited programming functionality. Code below is a raw template, where you use a PHP file with explicit `<?php` placeholders for PHP syntax, the primitive way to create templates.

```php
// greet.php

<h1><?php echo $greet; ?></h1>
```

Then there's template-syntax which appeared as an answer to how ugly and unsafe it gets to create raw templates. In this context, placeholders are used to define strings that will get replaced.

```php
// greet.tpl

<h1>{{ greet }}</h1>
```

In this post I explain what is wrong with these template systems and what I'm doing about it.

## Templates are broken

I get the idea of template files being _anon bytes_ of code that can be re-used. But I don't see why these need to be **not scoped** and **not declare** the variables it needs to handle. Templates are files **without any signature** on the variables required for the rendering, the only way to tell which variables are required is on runtime/compilation.

This brings a lot of issues:

* Unrestricted access to data (raw templates).
* Requires introspection to know which variables are required.
* Can't tell if the template is missing a variable unless it panics.
* Templates gets harder to test.
* It makes to repeat yourself.

The more relevant issue is that templates makes you to repeat yourself because of the **unpredictable coupling** between template and its replacements. If the template file change variables, the system that perform template parsing and the test to check the outcome must change.

### On the wild

This error on Uber (reported by [@ynorsk](https://twitter.com/ynorsk/status/1512746491261116419), [@rogeriopvl](https://twitter.com/rogeriopvl/status/1512686156223328260), [@delroth_](https://twitter.com/delroth_/status/1512604223573315586) and [@ignacio_s](https://mobile.twitter.com/ignacio_s/status/1512844950135664648)) is remarkable as users received a notification message that reads `Ready to ride again? Save <nil>`. To get these _nil savings_ it means that someone forgot to check for the passed value and a null got fault-tolerant interpreted in a template file as `<nil>`.

To be fair, I ignore if Uber uses a template for these notifications as this could happen in any weak-typed system. The issue that should be troubling your head at this time is that if Uber used a template system then it may be coupled, and if Uber didn't use a template then they are passing uncontrolled weak types internally. In any case, I think that the situation is ridiculous for a company of the size and technological footprint as Uber.

## My solution

If templates where **classes**, they can declare its scope and variables, adding context. This enables easier detect issues on template wiring and to enforce types on variables, making templates trivial to change and tests.

😘 In this post I introduce [Danky](https://chevere.org/packages/danky), which I created to avoid the caveats of traditional template systems.

## What is Danky?

![Danky](/org/chevere/packages/danky/danky-social-alt.svg)

Danky is a native template system for PHP. Contrary to all other template systems and engines, in Danky **templates are classes**.

🦄 In Danky, templates **explicit declare** its scope.

```php
<?php // Quote.php

use Chevere\Danky\Template;

class Quote extends Template
{
    public function __construct(string $text, string $author) {
        $this->render =
            <<<HTML
            <quote>"$text" --$author</quote>
            HTML;
    }
};
```

That `<<<HTML ...` is [Heredoc](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.heredoc) syntax [string literal](https://www.php.net/manual/en/language.types.string.php). In Danky, you use all the stuff that _has been always there_ to handle multi-line string literals. Heredoc is great for templates as it evaluates variables, making templates clean to read.

Templates must assign the `$render` property, which accepts `string` and `Template` types. When needing to render the template is easy as:

```php
<?php
echo
    new Quote(
        text: 'Hello, world!',
        author: 'Rodolfo'
    );
```

Which echoes:

```html
<quote>"Hello, world!" --Rodolfo</quote>
```

🥳 **Congratulations**! You mastered Danky.

### Name meaning

The name and logo comes from a popular ice-cream sold in Chile, for the meaning refer to [Urban Dictionary](https://www.urbandictionary.com/define.php?term=danky).

## Get Danky

Danky is available through [Packagist](https://packagist.org/packages/chevere/danky) and the repository source is at [GitHub](https://github.com/chevere/danky).

👉 Check the [documentation](https://chevere.org/packages/danky) to start using Danky today.
