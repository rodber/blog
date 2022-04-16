---
date: 2020-07-23T19:44:41Z
title: Hello, Chevere
tags:
    - 🤯show
    - 🔬dev
    - 🐘php
    - 🥑chevere
author: rodber
summary: My opinionated PHP framework for building extensible server-side applications.
image: /photos/2020-chevere.png
---

I've created a PHP development framework, and I called it [Chevere](https://chevere.org/). I named it Chevere with the explicit intention to honor how [Chevereto](https://chevereto.com/) pushed me into another stage of my career.

> The word [_chévere_](https://en.wiktionary.org/wiki/ch%C3%A9vere) literally means terrific, cool, awesome, nifty. Perfect naming for a software product!

This is the second framework I [announce](../2014/2014-03-14-introducing-g-library.md) and this time I'm better prepared for the challenge. The original idea that I had [the first time](../2013/2013-09-02-the-g-library.md) is still there and I've been all these years lurking for more knowledge to make it happen.

I made Chevere for easing my development, aiming for software meant to be customized and yet performing. It is intended to be used for the creation of pluggable software and it can be progressively implemented in any project.

Chevere is a brand new foundation aiming for PHP 8, _the ocho_. I made it to use it with application runners and I've made strong opinions on its design towards a better usage of the PHP programming language.

## Introduction

[PHP](https://www.php.net/) is a programming language, which allows the creation of scripts that can be _wired_ to do anything. Its usual implementation is to provide website applications hosted in a server providing access to multiple users, which access these applications using a client device (i.e. a web browser).

This basic foundation made PHP capable to power most of the web (yes, the whole internet) that you use everyday and that's how I meet it. Writing PHP for the last 14 years has gave me the insight and experience to introduce a clean, strict, and modern PHP framework that suits the process of pushing PHP beyond the basic known web foundation.

## Mistakes made

### 🤦🏾 Bad planning

[Chevereto V2](https://github.com/chevereto/chevereto-2) was very basic with just three views and even being spaghetti code, I never experienced any maintenance issues because the code base was small. With [Chevereto V3](https://v3-docs.chevereto.com/) I added listings, dashboard panel, users, albums, etc. I thought that the new feature set was large enough for the iteration, I didn't worry about making it extensible.

It happened that V3 brought a huge increase in users which started to suggest many RFC to improve the software. I learned that users wanting to do more with a piece of software of this kind was a common and broad thing. The more users, the more needs.

As I didn't create the software for extensibility, it shortly became a problem and I quickly witnessed how the hype for my software faded away due the lack of advanced customization and my slow pace to deliver trendy features.

Everyday people came with great ideas, but I was hands-tied with the code structure made for it and it was frustrating for me to say "no" to mostly everything. New features and releases starting to take longer, it was maintenance hell.

It was foolish to don't embrace change, to assume that "it will do" and no re-design the architecture.

### 🤤 Lack of responsibility

Up to Chevereto V3, I took the well-know [front controller](https://en.wikipedia.org/wiki/Front_controller) mapped to the web server to provide the application. The model was everywhere, and since the market existed, I assumed that it was OK to rely the responsibility of designing my own application model in favor of choose the market defacto standard. Also, I didn't knew that much about software architecture back then anyway.

My mistake was that I didn't realized how not-standard was the market until I got in the mud, and I experienced first-hand the annoyance of having to deal with each hosting provider doing their own PHP recipe, targeting different niche(s). The hosting market offering became a nightmare for me, and I had to spent a lot of time adapting my software to support the universe of available servers.

I learned how and when to delegate responsibility in the systems that I design, and that mission critical systems like the server layer must be designed on my discretion.

### 😴 Late response

I assumed stupid stuff, like that [cPanel](https://en.wikipedia.org/wiki/CPanel) based shared servers was my market or that the maintenance hell was how every software works in this world. I assumed that clients won't look for newer tech, that "if ain't broke don't fix it" and I told myself everything needed to resist the need of change.

When VPS offering became cheap as $5/mo I should have jump immediately into that world and _fuck off_ the previous service model. I wasn't quick enough to foresee how I could benefit from the new server offering and I refused change, just because.

My mistake was that I should have started this new foundation earlier.

## The change

### 😱 Everything

I needed to change my software to make it customizable enough, from the simple turnkey options up to very specific needs. Must became easier to others to collaborate in all layers, and I must offer a delicate fine-tuned control on the service provisioning so it can be optimized.

Nothing was available for my goals.

A new foundation was needed to be created from scratch forbidding all the old bad habits and embracing change and modern PHP from the beginning.

Thats how I got into the long journey of crafting a new system that can be plugged to the very _line_, covering from the most basic "what-if" up to complex systems extending their base functionality.

### 🔌 Pluggable

Chevere is all about being able to create pluggable distributed applications that can be _wired_ to do _anything_. Pluggable applications are those in which it is intended to allow extension via adding extra code, think about it as a bunch of wires and switches.

A pluggable architecture is a must have for me because it enables me to put toggles and hooks that will allow me to easily change the code and to distribute these assets. It also enables users to do their own changes and to grow an ecosystem of developers and services around my software.

### 👯 Performing

Adding more bells & whistles turns costumers, but it also means lot of trouble. At first, adding more plugins means more uncertain computing time so the application runtime strategy must be addressed.

#### Enter looping

I figured out that I had to focus in reducing the bootstrapping operations and isolate the application jobs much as possible. I ended up finding a nice profit by using application runners, which allow to preserve these states for faster runtime operations and the performance is ridiculously great.

I've an [example script](https://github.com/chevere/examples/tree/main/03.Http) which you use to test the performance of different runtime strategies for a complete request-response context.

**System used** Ubuntu 18.04 Intel i7-2600K (8) @ 3.800GHz.

```sh
ab -t 10 -c 10 <target>
```

Table below shows the raw performance vanilla PHP. This measures how "fastest" PHP can go.

| Vanilla `echo "Hello, World!"` | [#/sec] (mean) |
| ------------------------------ | -------------- |
| PHP -S                         | 8477.45        |
| Apache 2.4                     | 8696.59        |

Adding stuff on top of vanilla PHP will drastically reduce the performance as shown in the table below, where the application footprint is huge with a reduction of about 90% of vanilla PHP performance.

| Chevere `Hello, <name>!` | [#/sec] (mean) |
| ------------------------ | -------------- |
| PHP -S                   | 419.86         |
| Apache 2.4               | 884.46         |

The reduction is because, even using cache, the system needs to bootstrap everything on every single request.

But when using application runners the bootstrapping remains in the loop and the result is a drastically improvement in application I/O performance.

Table below shows how the application is now faster than vanilla PHP.

| Chevere `Hello, <name>!` | [#/sec] (mean) |
| ------------------------ | -------------- |
| RoadRunner 1.8           | 11818.71       |
| Swoole 4.5               | 13428.49       |

The Chevere application with routing, controller, cache, hooks and a bunch of static code is performing way faster than a bare `echo "Hello, World!"` and it is doing it with types and data structures everywhere.

Application runners are _la zorra_, but the caveat is that code for it must address thread safety and many other considerations that we take from granted from the HTTP Web Server realm. Not a big deal, I've to change everything anyway and the performance improvement totally worth the effort. I'm a [one-man army or not](https://www.youtube.com/watch?t=63&v=ko1q9xy6PLk)?

### 🧰 Tooling

Chevere is a collection of highly opinionated components that provide the basic tooling needed for the changes I require. Rather offering an application model or even over simplify things, it focus exclusively in the tools.

In Chevere is standard to bring your own knowledge, as for me each different application need suits its own efficient way to develop and present a software system. I don't believe that making fixed application models ease the developers life at all.

I can't live with the idea of a fixed application model. What can I say? I like Lego bricks and I hate the little wheels on the side of the bike.

### 🛒 A different market

The current server market offering is great and it gets better quickly.

Developers can provision elaborated systems, in flexible setups at very good prices. Remarkable PHP software projects have mature enough to provide the modern tooling needed to go wild with this server offering. Projects like [Swoole](https://www.swoole.co.uk/), [RoadRunner](https://roadrunner.dev/) and [ReactPHP](https://reactphp.org/) (to name a few) are allowing to make it a thing.

## Development

Development started in 2018-05 and it took long to have it ready to be presented. At this time I'm using it for the development of Chevereto V4 and I will label it for production soon as I feel it is ready.

## Getting started

Want to use Chevere?! Awesome, go to [chevere.org](https://chevere.org/) where you can learn everything about it. Chances are that you won't have any _puta_ clue on how to use it.

Don't mind, feel free to contact me to talk and review your existing system and how Chevere could help you.

## What now?

[spoiler](https://www.youtube.com/watch?v=rRm0NDo1CiY).
