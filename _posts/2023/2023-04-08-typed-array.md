---
date: 2023-04-08T09:57:06Z
lastmod: 2023-04-08T09:57:06Z
title: Typed Array
tags:
    - 🐘php
    - 🥑chevere
author: rodber
summary: Typed dynamic data structures
image: /photos/2023/koac.jpg
---

PHP has this overkill flexible data structure known as [array](https://www.php.net/manual/en/language.types.array.php) which can be used as a vector, hash table, dictionary, collection, stack, queue and I will stop quoting the manual now. TL;DR: Array is a super data-structure.

By (ab)using arrays I created lots of software in the early days as to use it for everything is dirty cheap and darn effective. But array isn't perfect. There's no type support and to validate an array you need to create a custom validator for each one of your array shapes which could get time consuming and a constant maintenance issue.

For [Chévere](https://chevere.org) I created a type sub-system and I used it as the base for typed arrays. To type arrays with Chévere is easy as:

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
