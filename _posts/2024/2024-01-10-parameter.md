---
date: 2024-01-10T14:10:59Z
lastmod: 2024-01-10T14:10:59Z
title: Chevere Parameter 1.0
tags:
    - 🐘php
    - 🥑chevere
author: rodber
summary: Library around parameter-argument
image: /org/chevere/packages/parameter/parameter-social.png
---

New from Chevere is the [Parameter](https://chevere.org/packages/parameter) package. This software provides a library around parameter-argument, with extra rules which can be used for both validation and to expose I/O schemas.

The package is available at [chevere/parameter](https://github.com/chevere/parameter).

## What it does?

Parameter enables to create dynamic parameters of any type with extra rules.

For example, an integer of minimum value 10:

```php
use function Chevere\Parameter\int;

$int = int(min: 10);
$int($var); // exception if $var < 10
```

In function or method parameters you can use attributes to define validation rules for parameters and return value:

```php
use Chevere\Parameter\Attributes\FloatAttr;
use Chevere\Parameter\Attributes\IntAttr;
use Chevere\Parameter\Attributes\ReturnAttr;
use function Chevere\Parameter\returnAttr;
use function Chevere\Parameter\valid;

#[ReturnAttr(
    new FloatAttr(min: 0, max: 2400)
)]
function wageWeekWA(
    #[IntAttr(min: 1628)]
    int $cents,
    #[FloatAttr(min: 0, max: 40)]
    float $hours
) {
    valid(); // valid $cents, $hours
    $wage = $cents*$hours/100;
    return returnAttr()($wage); // valid $wage
}
```

Validation can be triggered inline (examples above in function body) or delegated to a caller wrapper. Parameter provides helpers to access these rules to ease wiring process.

Rules defined by each parameter provide a human-readable schema which allows to expose the validation criteria.

## Supported types

Parameter supports built-in types including scalar (bool, int, string, float), null, array, object, union composite type and both mixed and iterable type alias.

## Usage

Parameter offers introspection via helpers and schema definition which enables to understand and export parameter rules. The validation rules defined using this package can be read and re-used for multiple purposes.

The [Action](https://chevere.org/packages/action) package wraps Parameter to offer a convention to work with. Action is the building block for [Workflow](https://chevere.org/packages/workflow) and [Http](https://chevere.org/packages/http).

Parameter introspection is used at [Router](https://chevere.org/packages/router) to generate path regex by reading attribute rules on Http Controller path parameters. Parameter schemas are used at [Schwager](https://chevere.org/packages/schwager) which reads Http Controller attributes and expose that schema. [Schwager HTML](https://github.com/chevere/schwager-html) also uses parameter schemas.

At this time I'm writing another package based on Parameter which generates parameter object definition from a MySQL database schema. The concept is to describe MySQL tables using [ArrayParameter](https://chevere.org/packages/parameter#array) enabling to validate data retrieval and provide schema introspection for any set of columns.

## Wrapping up

The Parameter package fills in for the lack of several language features, all around parameter-argument, which I always missed when creating software.

Parameter plays at low-level and it is a very flexible system which can be used to build anything on top of it. From simple wrappers up to full flagged conventions.

Parameter offers a super syntax backed on PHP's newest features introduced since PHP 8. It uses named arguments, attributes, constructor promotion and more. It is a library for the PHP 8 (and beyond) era.

To be able to craft this piece of engineering is a gift and I'm happy to share my work.
