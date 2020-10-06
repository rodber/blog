---
date: 2016-05-14T05:24:19Z
title: "Quickty dev update #3"
tags:
    - 👨🏾‍💻development
author: One Man Army
summary: A third recap on working side-by-side between Quickty and Chevereto.
featuredImage: /photos/2016-quickty-growl.png
---

Recently I've been working in some really neat stuff and Quickty is looking awesome. In this update I will catch up a little bit and I will talk about more features and current development status.

### Live customization

As I mentioned in the previous update, something in very high priority is a theme editor which will make Quickty something extremely easy to customize for the end user.

This theme editor is actually a live editor that works with Handlebars.js so it compiles on the fly which means real deal preview and besides that, all this editing is handled as a JSON object so the thing is build up from the ground to be shareable, which you will be able to do directly from the editor.

My goal is that everyone —from a casual user up to a web developer— can customize Quickty and help to make it more unique for everybody. I've been playing with this stuff and is really fun to modify the style to make it look like Dropbox, YouTube, Mediafire, anything. I can't wait to see how cool it will be to add themes on the fly and build up a massive theme gallery.

### API galore

In Quickty there will be some cool API features like permissions and logging. API permissions means that keys can be restricted in how much a given key can do with your content or your account and logging allows to see what a given app is doing with your content so there won't be surprises.

This API features are superb in so many ways since you can be sure that a given app won't ever be able to change your email or password if you don't want it and that you will be able to see what is being done with the keys at any time.

If everything goes as expected, Quickty will have a robust API from day zero so anyone will be able to hook it to any new or existing app.

### User session control

Every modern system must have user session control. That's why Quickty will allow you to manage and control all the active sessions or connected devices from the settings panel. By adding this feature you can check right away which devices are using your account and manage access right away.

Session control shows you the last know location and allows you to revoke access.

This is also a security feature because it allows you to revoke unwanted devices accessing your account due to situations like the use of a shared computer or a stolen device.

### Growl alerts

Back in the day, [Growl](https://growl.info/) was the must have third-party application on your Mac and I always wanted to port some of that style into my projects. Quicky is now finally having this stuff which allows multiple notifications, custom templates and custom actions.

The system plays a sound when you get one of these. Still working in get the perfect tune.

### Handlebars templates

[Handlebars.js](https://handlebarsjs.com/) is just awesome and in Quickty it does all the dynamic HTML parsing. File preview, growl alerts, context menus, live theme editor and modal boxes are just some of the stuff that is now powered by Handlebars.js. This has been a great addition and it allows me to easily craft more complex stuff yet easier than ever.

At Quickty I even use sub-templates and since Handlebars.js handles conditionals and loops, templates will be dead easy to customize so you will only need to worry to edit one file and everything will work like magic.

### G\ Library 2.0

G\ Library is my micro-framework which powers Chevereto and for Quickty, G\ will move to the next level taking full advantage of a new route handling system that will allow easier sub-routing and blend the new API with it.

In short, G\ 2.0 aims to unify all the requests so every route bind will be pushed to the API, meanings that new stuff added will be right there for the API.

Thanks to all the work done in Chevereto, G\ will also include more flexible customization, more built-in functions and improved performance (yes, even better performance).

### Development status

Front-end is in very advanced stage and the system works almost flawlessly with dummy content. At this time I'm working in the little details, mostly mobile related. I'm looking forward to finish this stage so the easy part begins (Backend).

### Back to work!

That's all for now, hope to post a new update soon.
