---
date: 2020-07-23T19:44:41Z
title: Hello, Chevere
tags:
    - 🤯showtime
author: One Man Army
summary: My opinionated PHP framework for building extensible server-side applications.
featuredImage: /photos/2020-chevere.png
---

I've created a new PHP development framework: [Chevere](https://chevere.org/).

I made it for easing my development, aiming for software meant to be heavily customized and yet highly performing. It is intended to be used for the creation of pluggable software, and it can be progressively implemented in any project.

Chevere is a brand new foundation aiming for PHP 8, _the ocho_. I made it to use it with application runners (loop, async) and I've taken many strong opinions on its design towards a safer (and better) usage of the PHP programming language.

I named it Chevere with the explicit intention to honor how [Chevereto](https://chevereto.com/) pushed me again into another stage of my career, and here we are.

> Also, the word [_chévere_](https://en.wiktionary.org/wiki/ch%C3%A9vere) literally means terrific, cool, awesome, nifty. Perfect naming.

## Introduction

[PHP](https://www.php.net/) is a programming language, which allows the creation of scripts that can be _wired_ to do anything. Its most common implementation is to provide website applications hosted in a server providing access to multiple users, which access these applications using a client device (browser).

This basic foundation made PHP capable to power most of the web (yes, the whole internet) that you use everyday, but its popularity is constantly declining in favor of newer technologies.

With Chevere I'm introducing a clean PHP framework that suits the process of pushing PHP beyond the basic known web foundation. It took me years to craft this system architecture, and it accounts all my experience around developing Chevereto. Chevere is all about just better software, and I hope that it also helps others sharing the same mindset.

## Mistakes made

### Bad planning

[Chevereto V2](https://github.com/chevereto/chevereto-2) was very basic with just three views and even being mostly spaghetti code, I never experienced any maintenance issues because the code base was so small. With [Chevereto V3](https://v3-docs.chevereto.com/) I added listings, dashboard panel, users, albums, etc. I thought that the new feature set was large enough for the iteration, I didn't worry about making it extensible.

It happened that V3 brought a huge increase in users which started to suggest many stuff to improve the software. I learned that users wanting to do more with a piece of software of this kind was a very common and broad thing. The more users, the more needs. It is very logic if you think about it.

As I didn't create the software for extensibility, it shortly became a problem and I quickly witnessed how the hype for my software faded away due the lack of advanced customization and my slow pace to deliver trendy features.

Everyday people came with great ideas, but I was hands-tied with the code structure already made and it was very frustrating for me to say "no" to mostly everything. New features and releases starting to take too long, it was maintenance hell.

It was foolish to don't embrace change, to assume that "it will do" and try to cover everything on my own.

### Lack of responsibility

Up to Chevereto V3, I took the well-know [front controller](https://en.wikipedia.org/wiki/Front_controller) mapped to the web server to provide the application. The model was everywhere, and since the market already existed, I assumed that it was OK to rely the responsibility of designing my own application model in favor of choose the market defacto standard. Also, I didn't knew that much about software architecture back then anyway.

My mistake was that I didn't realized how not-standard was the market until I got in the mud, and I experienced first-hand the annoyance of having to deal with each hosting provider doing their own flavoured PHP recipe, targeting a different niche. The hosting market offering became a nightmare for me, and I had to spent a lot of time adapting my software to support the universe of available servers.

I learned how and when to delegate responsibility in the systems that I design, and that mission critical stuff like the server layer must be designed on my entirely discretion.

### Late response

I assumed stupid stuff, like that [cPanel](https://en.wikipedia.org/wiki/CPanel) based shared servers was my only market or that the maintenance hell was how every software works in this world. I also assumed that clients won't look for newer tech, that "if ain't broke don't fix it" and basically, I told myself everything needed to resist the need of change.

When VPS offering became cheap as $5/mo I should have jump immediately into that world and _fuck off_ the previous service model. I wasn't quick enough to forsee how I could benefit from the new server offering and I refused change, just because.

My mistake was that I should have started this new foundation much earlier.

## The change

### Everything

I needed to change my software to make it customizable enough, from the simple turnkey options up to very specific needs. Must became easier to others to collaborate in all layers, and I must offer a delicate fine-tuned control on the service provisioning so it can be highly optimized.

Nothing was available for my goals, so a new foundation was needed to be created from scratch, forbidding all the old bad habits and embracing change and modern PHP from the beginning.

Thats how I got into the long journey of crafting a new system that can be plugged to the very _line_, covering from the most basic "what-if" up to complex systems extending their base functionality.

### Pluggable

Chevere is all about being able to create pluggable distributed applications that can be _wired_ to do _anything_. Pluggable applications are those in which it is intended to allow extension via adding extra code, think about it as a bunch of wires and switches.

A pluggable architecture is a must have for me because it enables me to put toggles and hooks that will allow me to easily change the code and to distribute these assets. It also enables users to do their own changes and to grow an ecosystem of developers and services around my software.

### Performing

Adding more bells & whistles turns costumers, but it also means lot of trouble. At first, adding more plugins means more uncertain computing time so the application runtime strategy must be addressed.

I figured out that I had to focus in reducing the runtime operations and to isolate the application jobs much as possible. I ended up finding a nice profit by using application runners, which allows to  run the application by implementing a process loop. Rather than bootstrapping on every request, application runners allow to preserve these states for faster runtime operations and the performance gain is just ridiculously great.

I've a [example script](https://github.com/chevere/examples/tree/master/03.Http) where you can test on your own, it allows to benchmark the performance of different runtime strategies, for a complete request-response context with a hook altering the response data.

```sh
ab -t 10 -c 10 <target>
```

| Software | [#/sec] (mean) |
|-|-|
| PHP -S | 419.86 |
| Apache 2.4 | 884.46 |
| Vanilla PHP -S | 8477.45 |
| Vanilla Apache 2.4 | 8696.59 |
| RoadRunner 1.8 | 11818.71 |
| Swoole 4.5 | 13428.49 |

What you are seeing in the table above is how a code base with routing, controller, cache, hooks and a bunch of static code is performing way faster than a bare `<?php echo 'Hello, World!';` and it is doing it with types everywhere, data structures and many other sophisticated tools.

Application runners are _la cumbia_, but the caveat is that code for it must address thread safety. Not a big deal, I've to change everything anyway.

### Tooling

Chevere is a collection of highly opinionated components that provide the basic tooling needed for the changes I require. Rather offering an application model or even over simplify things, it focus exclusively in the tools.

In Chevere is common to bring your own stuff and knowledge, as for me each different need suits its own efficient way to develop and present a software system. I don't believe that making fixed application models ease the developers life at all.

I just can't live the idea of a fixed application model. What can I say? I like Lego bricks and I hate the little wheels on the side of the bike.

### A different market

The current server market offering is great, and it gets better very quickly. Developers can provision elaborated systems, in flexible setups at very good prices. Also, remarkable PHP software have mature enough to provide the modern tooling needed to go wild with this server offering. Projects like [Swoole](https://www.swoole.co.uk/), [RoadRunner](https://roadrunner.dev/) and [ReactPHP](https://reactphp.org/) (just to name a few) are allowing to make it a thing.

This market and new tooling is perfect for me as it enables me to deliver a more sophisticated software solution.

## Development

Development started in 2018-05 and it took long to have it ready to be presented. At this time I'm using it for the development of [Chevereto V4](https://github.com/chevereto/chevereto) and I will label it for production soon as I feel it is ready.

## Getting started

Want to use Chevere?! Awesome, go to [chevere.org](https://chevere.org/) where you can learn everything about it. Everything MIT licensed.

Chances are that you won't have any fucking clue on how to use it anyway. Don't mind, feel free to contact me if you want me to review your existing system and how Chevere could help you.

## What now?

[spoiler](https://www.youtube.com/watch?v=rRm0NDo1CiY).
