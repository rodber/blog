---
date: 2024-01-10T14:10:59Z
lastmod: 2024-01-11T15:47:44Z
title: Chevere Parameter 1.0
tags:
    - php
    - chevere
author: rodber
summary: Library around parameter-argument
image: /org/chevere/packages/parameter/parameter-social.png
---

New from Chevere is the [Parameter](https://chevere.org/packages/parameter) package. This software provides a library around parameter-argument, with extra rules which can be used for both validation and to expose I/O schemas.

The package source is available at [chevere/parameter](https://github.com/chevere/parameter).

## What it does?

Parameter enables to create dynamic parameters of any type with extra rules.

For example, an integer of minimum value 10:

```php
use function Chevere\Parameter\int;

$int = int(min: 10);
$int($var); // exception if $var < 10
```

In function or method parameters you can use attributes to define validation rules for parameters and return value.

```php
use Chevere\Parameter\Attributes\FloatAttr;
use Chevere\Parameter\Attributes\IntAttr;
use Chevere\Parameter\Attributes\ReturnAttr;
use function Chevere\Parameter\returnAttr;
use function Chevere\Parameter\validated;

#[ReturnAttr(
    new FloatAttr(min: 0, max: 2400)
)]
function wageWeekWA(
    #[IntAttr(min: 1628)]
    int $cents,
    #[FloatAttr(min: 0, max: 40)]
    float $hours
) {
    return $cents*$hours/100;
}
validated('wageWeekWA', $cents, $hours);
```

Validation can be triggered using `validated` (example above), [inline](https://chevere.org/packages/parameter.html#inline-usage) and/or [delegated](https://chevere.org/packages/parameter.html#attribute-delegated-validation) to a caller wrapper. Parameter provides helpers to access rules for both parameters and return value to ease wiring process.

Rules defined by each parameter provide a human-readable schema which allows to expose the validation criteria.

## Supported types

Parameter supports built-in types including scalar (bool, int, string, float), null, array, object, union composite type and both mixed and iterable type alias.

## Usage

Parameter offers introspection via helpers and schema definition which enables to understand and export parameter rules. The validation rules defined using this package can be read and re-used for multiple purposes.

The [Action](https://chevere.org/packages/action) package wraps Parameter to offer a convention to work with. Action is the building block for [Workflow](https://chevere.org/packages/workflow) and [Http](https://chevere.org/packages/http).

Parameter introspection is used at [Router](https://chevere.org/packages/router) to generate path regex by reading attribute rules on Http Controller path parameters. Parameter schemas are used at [Schwager](https://chevere.org/packages/schwager) which reads Http Controller attributes and expose that schema. [Schwager HTML](https://github.com/chevere/schwager-html) also uses parameter schemas.

I'm writing another Parameter-based package which generates parameters from a MySQL database schema. The concept is to describe MySQL tables using [ArrayParameter](https://chevere.org/packages/parameter#array), enabling to validate data retrieval and provide schema introspection for any set of columns.

## Wrapping up

Parameter plays at low-level and is a flexible system which can be used to build anything on top of it. From simple wrappers up to full flagged conventions, it enables to build a solid foundation for your validation needs with a neat syntax backed on PHP's newest features introduced onwards PHP 8, like named arguments and attributes.

I'm looking forward to see what else I can built on top of it.
