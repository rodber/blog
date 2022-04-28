---
date: 2022-04-17T13:51:19Z
title: Danky, native templates for PHP
tags:
    - 🤯show
    - 🐘php
    - 🥑chevere
author: rodber
summary: File-functions as templates for PHP.
image: /logos/chevere/packages/danky/danky-social.jpg
---

`🚧 under preview`

When it comes to templates there are two distinctive approaches. You have raw code, and template-syntax where there's no programing language but placeholders for limited programming functionality.

Code below is a raw template, where you use a PHP file with explicit `<?php` placeholders for PHP syntax. This is the primitive way to create templates.

```php
// greet.php

<h1><?php echo $greet; ?></h1>
```

Then there's template-syntax, which appeared as an answer to how ugly and unsafe it gets to create raw templates.

```php
// greet.tpl

<h1>{{ greet }}</h1>
```

😣 I never liked any of these alternatives. This is because in both cases you end up with template file without any context.

## The problem with templates

I get the idea of these template files being anon bytes of code that can be re-used. But I don't see why these need to be **not scoped** and **not declare** the variables it needs to handle.

This brings a lot of issues:

* Unrestricted access to data (raw templates).
* Requires introspection to know which variables are required.
* Can't tell if the template is missing a variable unless it panics.
* Templates gets harder to test.

## My solution

If templates were **anonymous file-return functions**, they will declare its scope and variables, adding context for these. This enables to easier detect issues on template wiring and to enforce types on variables, making templates trivial to tests.

😘 In this post I introduce [Danky](https://chevere.org/packages/danky), which I created to avoid the caveats of traditional template systems.

## What is Danky?

![Danky](/logos/chevere/packages/danky/danky-social-alt.svg)

Danky is a native template system for PHP. Contrary to all other template systems and engines, in Danky **templates are functions** provided as file returns.

🦄 In Danky, templates **explicit declare** its scope, parameters and `string` return type.

```php
<?php // quote.php

return function(string $text, string $author): string {
    return
        <<<HTML
        <quote>"$text" --$author</quote>
        HTML;
};
```

That `<<<HTML ...` is [Heredoc](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.heredoc) syntax [string literal](https://www.php.net/manual/en/language.types.string.php). In Danky, you use all the stuff that _has been always there_ to handle multi-line string literals. Heredoc is great for templates as it evaluates variables, making templates clean to read.

```php
<?php // home.php

return function(string $content): string {
    return
        <<<HTML
        <main>
            $content
        </main>
        HTML;
}
```

👽 Next, `import` which runs the template function.

```php
<?php // index.php

use function Chevere\Danky\import;

require_once __DIR__ . '/vendor/autoload.php';

echo
    import(
        'home',
        content: import(
            'quote',
            text: 'Hello, world!',
            author: 'Rodolfo'
        )
    );
```

🥳 **Congratulations**! You mastered Danky.

```html
<main>
    <quote>"Hello, world!" --Rodolfo</quote>
</main>
```

### Name meaning

The name and logo comes from a popular ice-cream sold in Chile, for the meaning refer to [Urban Dictionary](https://www.urbandictionary.com/define.php?term=danky).

## Get Danky

Danky is available through [Packagist](https://packagist.org/packages/chevere/danky) and the repository source is at [GitHub](https://github.com/chevere/danky).

👉 Check the [documentation](https://chevere.org/packages/danky) to start using Danky today.
