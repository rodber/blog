---
date: 2015-08-05T17:27:49Z
lastmod: 2024-01-13T15:23:42Z
title: "Quickty dev update #1"
tags:
    - 🔬dev
author: rodber
summary: A recap on working side-by-side between Quickty and Chevereto.
image: /photos/2015-quickty-peafowl.png
---

I’ve been working side-by-side between Quickty and Chevereto and several things have happened so far and I  think that is good time to share it. Currently I’m into an early stage of the front development stage so this post refers mostly to this process.

### Rebuilding Peafowl

Soon as I was half way designing Quickty I noticed that my current custom made front-end framework will fall short in several things. To be honest, Peafowl —that’s the name of the framework— was never designed with the idea of responsive web or to have a large set of elements, it was just a work in progress that worked great in Chevereto but I know that it won’t be the same for Quickty, so I decided to rebuild it from scratch for both Quickty and Chevereto 4.

Don’t panic. Rebuild in this case doesn’t means that I will start from square one, it means that I will re-visit the core components and that I will have to fit some coding structures into existing code. Part of this process involves the addition of [Normalize](https://necolas.github.io/normalize.css/) and some [Bootstrap](https://getbootstrap.com) core components like grid, table and responsive elements.

I’ve already improved the font icons and now it will include [Entypo+](https://www.entypo.com) and Font awesome, each one with his own CSS prefix so there is no naming issues. There are more than 950 icons in the new Peafowl with an smaller file size compared with the current font icons.

Peafowl also does a lot of JavaScript and it should get improved because now it looks like  huge unsorted jQuery cake of event listeners. At this time I don’t know yet how I will structure or which library/framework I will use for this but it is something that I will get worked out because it needs and urgent revision.

### Planned backend improvements

There are some few improvements in the to-do list for the backend (G\ Library) that will be addressed in the following months. Some of these improvements are:

* Support for sub-routes and better route observation
* More DB methods
* Support for multiple login sessions
* Better naming conventions

Working with G\ has been a great experience and it will be awesome to incorporate more elements to make it more usable.

I hope to get the front-end ready by the end of the month so once I get it done I can start to develop the backend. It should take some months to put it al together but everything is going very well.
