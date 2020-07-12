---
title: "Quickty dev update #4"
date: 2016-09-07 18:27:03 GMT
tags:
    - 👨🏾‍💻development
author: One Man Army
summary: A fourth recap on working side-by-side between Quickty and Chevereto.
featuredImage: /photos/2016-quickty-zoom.png
---

Things are on track again and is the perfect time to share some really cool stuff that is being cooked  at [Chevereto HQ](https://www.google.cl/maps/place/Recoleta+463,+Recoleta,+Regi%C3%B3n+Metropolitana/@-33.4277109,-70.6464023,3a,48.7y,75h,92.63t/data=!3m6!1e1!3m4!1sPmZEAh-tyXSiJZCY9TJbJw!2e0!7i13312!8i6656!4m5!3m4!1s0x9662c5be3da3cc45:0x38c78a31cf2d30de!8m2!3d-33.4276189!4d-70.6463782).

There will be an extensive customization layer thanks to the introduction of plugins and a new template system, all integrated from scratch rather than fill in to the current G\ architecture. Quickty is pushing a new and improved architecture for G\ that I can't wait to release.

### Plugins

Plugins will work very similar to WordPress but in our own way with several layers of customization and all the core build from scratch for it. The plugin architecture rely in the following systems:

#### Template hooks

Template hooks are all about easy extend themes with hotpot where you can inject markup code into existing templates. These defined hotpots will be in crucial points of the theme, like before the  tag, after a given button, after the footer, etc. The idea of template hooks is to allow easy addition of markup code like when you want to add an extra checkbox, an additional menu item, a form, etc.

#### Overrides

Overrides makes possible to extend and/or to modify the base system by triggering the system to use custom defined files instead of defaults. This suits perfect for those that want to add new routes, modify or extend language strings, etc.

#### Filters

Controllers are now the structure that fulfill both route and API requests and with controller filters you will be able to modify the controller I/O anytime. This is perfect when you want effortless add data to the render, either to be used in templates or in the API since controllers do all that for you. Since controllers parameters and its return array can me modified, the customization at this level is outstanding.

#### Triggers

Triggers allows to add very sophisticated functionality to your system at very specific instances. A trigger allows to do stuff after something happens, so you custom actions can be executed at crucial points in any given process like after an user is inserted in the database or after a file gets uploaded. Things like add a sepia filter to all image uploads will be dead easy to add.

#### Wapping up

This plugin architecture will make possible really extensive customization and it will provide several paths or alternatives to solve any given need. The idea is that the programmer should choose the approach that makes more sense. I'm opening the paths, you choose.

For those that want to do extensive modifications, there will be an user folder where you will be able to put all your editing in the same place. By doing this you can easily find your overrides or hooks because it will be in that user folder rather than inside the theme folder.

### New template system

I'm dropping PHP based themes in favor of [Twig](https://twig.sensiolabs.org/) based themes for more easy-to-read stuff. Twig is a template system that allows friendly editing without sacrificing performance, it is used by Drupal and it has been created by [Fabien Potencier](https://fabien.potencier.org/), the same guy that created [Symfony](https://symfony.com/).

This new template system has pushed several changes in how G\ handles templates and G\ 2.0 will get rid of the annoying get_var() functions and conditionals. Instead, the system will rely on the render output array provided by the controller so it will be easier than ever to create themes.

All templates will be in plain HTML and the folder structure also changes with a more clear and concise folder distribution.

### Betas coming!

First public beta should be released in December 2016 and from there several betas will keep shipping. The idea is to follow a stepped development to avoid a tsunami of issues on launch so the very first beta will be all about core functionality then the other betas will add the missing stuff.

The idea is to ship 4 betas before the stable release but will see if that is possible or needed.

That's all for now, stay tuned for more updates.