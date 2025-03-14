---
date: 2013-09-02T22:36:00Z
lastmod: 2024-01-13T15:25:45Z
title: The G\ library
tags:
    - php
    - dev
author: rodber
summary: Never liked the available frameworks, so I'm making a new one.
image: /photos/2013-g.png
---

Something that has come recently is a thing that so far I'm calling "G\ Library" and in this post in [Chevereto community](https://chevereto.com/community) I talked about it briefly. Since that draft this thing has grow a lot and now I'm ready to talk more about it and explain why I think that is necessary and why I'm working on it.

I've never liked frameworks because they suit almost every need and therefore they are very general. This makes frameworks things that do a lot of functions but they don't focus in anything. Any framework that is highly focused in something is a rare thing and therefore is not so popular, which in fact is great because they work more like libraries rather than frameworks. The perfect example of this is jQuery which is a library rather than a framework.

When I coded Chevereto V2 I never noticed that certain paradigms or implementations could make the work harder, mostly because the script was small. Soon as I started to work in V3 I noticed how complicated it will be to put all together and keep order if I didn't change the complete logic of the system so I had to come up with something.

Instead of go around an steal code structures from other scripts, I thought on how I should implement what I needed in JavaScript and I started to think why not?. Why not port that JS logic into PHP... I mean, is there any syntax or language limitation? Then I noticed that since PHP 5.3 the limitations are gone because I can use [Namespaces](http://www.php.net/manual/en/language.namespaces.rationale.php) and [Anonymous functions](http://php.net/manual/en/functions.anonymous.php). Instead of fallback something to be used in PHP 5, I wrote (well, I'm still writing) a library that needs at least PHP 5.3.0 so I can take advantage of these new goodies which allows me a very JS like approach (only in syntax terms).

So far so good but what it does? I like to think about it like G\ library is similar to what jQuery can do for you in JS but in PHP. It has a built-in set of functions and classes that helps you to code less, but without the hassles that MVC frameworks has. If you need a user module you need to code it, but you have all the built in methods to help you in the DB handle, theme display, etc.

So G lets you add routes like `/hello-world` in few lines of code and it allows you to use themes or templates just like WordPress. It gives you this base and then you can relax and code what you actually need to code, not the path resolution, URL handling, etc.

Currently I'm doing Chevereto V3 using the G\ library so that is the perfect real world case scenario for this library. Once G is ready it will be released as a MIT Open Source library available for everyone.
