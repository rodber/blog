---
date: 2022-12-07T12:51:01Z
lastmod: 2024-01-13T15:19:59Z
title: Chevere Router
tags:
    - php
    - chevere
author: rodber
summary: A strict, strong typed router for PHP.
image: /org/chevere/packages/router/router-social.png
---

New from [Chevere](https://chevere.org) is the [chevere/router](https://chevere.org/packages/router) package for PHP. This software provides a strict typed router, enabling to create a more predictable HTTP routing for PHP.

Router software for PHP trends into practices like optional path wildcards, multiple resolver contexts and tons of functionality that does the same but with *different API*. Have you ever seen a car with two steering wheels? That's how most PHP router software looks to me.

Routing is the system where HTTP endpoints gets defined, where users determine the most relevant binding for a website. A weak routing experience degrades the quality of the application.

## Introduction

My motivation with Router was to create a package focused in a neat syntax and strict handling. The goal of this package is to enable a more robust syntax for routing binding.

Here, it looks neat and clean:

```php
use function Chevere\Router\router;
use function Chevere\Router\routes;
use function Chevere\Router\route;

router(
    web: routes(
        route(
            path: '/',
            GET: new HomeGetController(),
        ),
        route(
            path: '/product/{id}',
            GET: new ProductGetController(),
            POST: new ProductPostController(),
        ),
    ),
);
```

## Features

* Define path, name, view, middleware and HTTP method to controller binding using named arguments.
* HTTP method binding works with [Http Controller](https://chevere.org/packages/http#controller) objects.
* Wildcards (`{id}` in the code above) inherits regex from parameter attributes at controller layer.
  * Can be implicit (`{id}`) or explicit (`{id:[0-9]+}`).
  * Detects conflicts for all endpoints.
* Supports route groups, define `web`, `api`, `admin` and any group you may need to add.
* Supports [PSR middleware](https://www.php-fig.org/psr/psr-15/).

## How it works

Under the hood Router detects path collision, controllers conflicts, path wildcard regex from attributes and it uses [FastRoute](https://github.com/nikic/FastRoute) for request matching. You don't need to worry about anything about it, I just wanted to write this.

Router creates an index for further introspection, which at this time is not that useful but it will be relevant for `chevere/router-dump`, which will enable to dump routing to a file. This will suit the need of **self-exposed APIs** for routing defined using `chevere/router`.

## Learn more

Head over to the [documentation](https://chevere.org/packages/router) and leave a star at [GitHub](https://github.com/chevere/router).
