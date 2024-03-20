---
date: 2023-06-20T10:25:53Z
lastmod: 2023-06-20T10:25:53Z
title: Schwager API
tags:
    - 🐘php
    - 🥑chevere
author: rodber
summary: Al empate Schwager.
image: /org/chevere/packages/schwager/schwager-social.png
---

New from Chevere is the [Schwager](https://chevere.org/packages/schwager) package. This software generates an API spec, which is a document that describes how to interact with an API created using [Router](https://chevere.org/packages/router).

Schwager takes many influences from [OpenAPI](https://www.openapis.org) and if you don't get the joke in the name: Schwager means "brother in law" and it sounds a lot like *Swagger* (former OpenAPI's name).

## 16th competing standard

This [xkcd](https://xkcd.com/927/) never gets old when it comes to talk about standards.

It took me about a week to rip-off OpenAPI design and improve it to my please. My focus was to provide a system enabling to easy expose the API, supporting PSR-15 and with considerable less maintenance needs.

As I designed [Router](https://chevere.org/packages/router), [Http](https://chevere.org/packages/http) and [Schwager](https://chevere.org/packages/schwager), all components works flawlessly each other with minimal user effort needed.

My standard exists because it was way cheaper for me to spawn this project than be bound to OpenAPI's from now.

## API specification

The Schwager [API specification](https://chevere.org/packages/schwager.html#specification) is unsurprisingly familiar to OpenAPI on:

* The `servers` and `paths` members
* Responses mapped by status code
* Parameter schemas

But Schwager differs on several key elements. At first, it is white-label as you can define `api` property freely enabling you to set the pace for each project by defining its own API standard.

Schwager doesn't merge parameters like OpenAPI. Path variables are mapped at path level while body and query parameters have its own respective namespace.

Finally, Schwager enables to define more than one response schema per status code.

## Learn more

Head over to the [documentation](https://chevere.org/packages/schwager) and check the source at [GitHub](https://github.com/chevere/schwager).
