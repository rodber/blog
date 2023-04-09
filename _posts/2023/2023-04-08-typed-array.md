---
date: 2023-04-08T09:57:06Z
lastmod: 2023-04-09T12:09:59Z
title: Typed Array
tags:
    - 🐘php
    - 🥑chevere
author: rodber
summary: Typed dynamic data structures.
image: /photos/2023/koac.jpg
---

PHP has this flexible data structure known as [array](https://www.php.net/manual/en/language.types.array.php) which can be used as a vector, hash table, dictionary, collection, stack, queue and perhaps many more. You get the idea, array is the ominipresent PHP's super data-structure.

By (ab)using arrays as the only way to handle data I created lots of software in the early days as for me to use array for everything was dirty cheap and darn effective. This "arrays for everything" motto is common in PHP and you can see it everywhere, developers trends to rely on array when possible and there's nothing wrong when handled with care.

When working with arrays the annoyance is on creating custom validators for each different array shape and not being 100% sure about the entire structure of the array being handled at a given time. The later happens often when the array comes from a third-party package, which adds another concern to be worried about. Altough there's [ArrayObject](https://www.php.net/manual/es/class.arrayobject.php) for type hinting array access, it suits better for a generic list of values as the complexity increases when wanting multiple types or complex validation rules for each different key.

I wanted a way to stricly-type any array of any nested deep with generic and/or fixed values. To achieve this I had to create a [parameter-argument](https://chevere.org/library/parameter.html) abstraction for each single PHP variable type.

The outcome of this research is a superb type system built on top of PHP which allowed me to achive the concept of Typed Array. In this post I introduce this concept and how it may be used.

## ArrayParameter

[ArrayParameter](https://chevere.org/library/parameter.html#array-parameter) is a component that enables to define any array. It has nothing in common with its `ArrayObject` cousin as `ArrayParameter` is used to define an array parameter which you can assert against any array.

To stricly type arrays with Chévere is easy as:

```php
// 1. Define the parameter
$parameter = arrayp(
    username: stringp('^[a-z0-9]{4,29}$'),
    age: integerp(minimum: 13)
);
// 2. Get some data to validate
$array = [
    'username' => 'rodolfo',
    'age' => 20,
];
// 3. Profit
assertArray($parameter, $array);
```

It supports to define default values which comes handy when wanting to fill-in missing data to validate:

```php
$parameter = arrayp(
    date: stringp(),
    report: stringp(
        regex: '/^sales|refunds$/',
        default: 'sales'
    ),
);
$array = [
    'date' => '2023-04-07',
    // note missing report key
];
$assert = assertArray($parameter, $array);
/*
$assert = [
    'date' => '2023-04-07',
    'report' =>'sales',
];
*/
```

To validate against multiple types you can use `unionp`:

```php
$parameter = arrayp(
    email: unionp(null(), stringp()),
);
assertArray($parameter, [
    'email' => null
]);
assertArray($parameter, [
    'email' => 'rodolfo@local'
]);
```

To validate a one-dimension generic array you can use `genericp`:

```php
$parameter = arrayp(
    ids: genericp(integerp()),
);
assertArray($parameter, [
    'ids' => [0, 1, 2, 3]
]);
```

To validate a multi-dimension generic array is obvious as put `arrayp` inside `genericp`:

```php
$parameter = arrayp(
    users: genericp(
        arrayp(
            id: integerp(),
            name: stringp(),
        )
    ),
);
assertArray($parameter, [
    'users' => [
        [
            'id' => 1,
            'name' => 'rodolfo'
        ],
        [
            'id' => 2,
            'name' => 'alejandro'
        ],
    ]x
]);
```

You can mix `unionp` with `genericp`. For example to define a parameter that can be `[]` or a list of integers:

```php
$parameter = arrayp(
    ids: union(
        arrayp(),
        genericp(integerp())
    ),
);
assertArray($parameter, [
    'ids' => []
]);
assertArray($parameter, [
    'ids' => [4, 5, 6]
]);
```

Use optional parameters when needing to validate a key-pair only if present. If no pair is provided no validation will be enforced.

```php
$parameter = arrayp(name: stringp())
    ->withOptional(
        color: stringp(),
        shape: stringp(),
    );
// Note assertion on optional keys
assertArray($parameter, [
    'name' => 'rodolfo',
]);
assertArray($parameter, [
    'name' => 'rodolfo',
    'color' => 'pink',
]);
assertArray($parameter, [
    'name' => 'rodolfo',
    'color' => 'pink',
    'shape' => 'sphere',
]);
```

This system works for any array shape and supports all types. You can validate nested structures of any depth with this, go wild it supports everything.

This was designed with a high level of abstraction to be able to create something similar to a sub-language as it was the only way to create an experience capable of successfully wrapping array.

I'm very happy with the results and with the way I solved this issue. It worth the investment as I won't ever need to write the logic to validate arrays! And all these dirty cheap arrays can now become oh-la-la top tier data-structures with little effort on my end.
