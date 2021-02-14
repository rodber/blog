---
date: 2021-02-14T16:28:42Z
title: Designing better Tech Support
tags:
    - 👴🏾experience
author: Sape
summary: How I'm driven a better support experience.
featuredImage: /photos/2021-don-sata.jpeg
---

For a couple of years I've been running experiments on my [Tech Support](https://chevereto.com/support) offering and on my own I'm delivering support for about 15,000 active Chevereto installations at a minimum support cost.

To get there I challenged myself to find a cost-effective solution, but support involves people handling people so it will be always expensive and hard to deal with. As I'm foreseeing a next order of magnitude usage for V4, support is one of my main concerns as it could cripple further grow of my installed user base, just like it happened with V3.

In this post I review lessons learned and how I'm making things better for [Chevereto V4](https://github.com/chevereto/chevereto).

## Context

Since [Chevereto V2](https://github.com/Chevereto/chevereto-2) my support offering has been built-in. Back then the system was so simple that it didn't cause any issue. Then [Chevereto V3](https://chevereto.com/releases#v3_0_0) emerged and the situation got way worse as I got way more users than I anticipated.

I tried with many support strategies, channels, etc. For me the problem narrows down to bad [technology](#tech-driven-issues) and [bad practices](#bad-practices).

## Tech-driven issues

Chevereto V3 has too many moving parts in the system provisioning layer and for most people (specially novel users) that equals to developer responsible for the conflicts between these, to review bad system settings, etc.

Most of these issues exists because users have the freedom to install and use the software in a myriad of systems, to toggle and fiddle system provisioning elements that requires a strong tech background.

### Frustration

Most novel users **get easily frustrated** at the first subtle tech challenge. Some users don't even care to read the error message and just run un panic.

🤬 Avoid interacting with an impatient or angry user. Do not touch!

✔ To wait until the user slow down worked great for me. Most give it another try later and most of the time my intervention was totally unnecessary.

🔮 A container provisioning model should remove the frustration and allow me to worry about just one standard.

## Variable demand

Support demand get **unpredictable spikes**, which are normal after a new release or any breaking change. Problem is that is hard to tell how tall the tide will be every single time, it is unpredictable how much panic it will cause.

😨 Support offerings aren't flexible, it requires time to train people and to write documentation. You won't ever match the speed required by a spike.

✔ Deliver Chevereto updates to small batches of users allowed me to narrow the number of affected users, avoiding the spike.

### Overlapping

Users with lack of tech knowledge won't be capable to differentiate what's **your responsibility** and what's a system requirement.

😵 Some users won't take a "no" for answer and demand support for stuff which is not under your responsibility. They will use pity, public exposure, defamation, disavowing and anything in their reach to make you feel bad for not helping.

✔ I do not provide support for stuff I don't sell, even if the software stops working.

## Bad Practices

I made the following errors and although I learned a lot from it, I can't recommend enough to don't make the same mistakes. Don't be stubborn as I was.

### Flat rates

Any flat support offering will **get abused** as to include an uncapped layer of support will force the activity to be driven as overselling, where users never using support will pay the bill for those folks sending you 40 emails in one morning (true story).

😈 Users will abuse when possible (they won't know), allowing that will decrease the value of your work.

✔ Support should be charged on a per-event basis.

⭐ I believe that offering a **support insurance** subscription covering up to $X support cost per year is the way to go, just like insurance companies do. Otherwise support will be too expensive, it needs a common collaboration.

### Worry too much

Worrying too much is **highly counterproductive** for me. After many years in that train I'm sure that is a really bad course of action as it gives the user a wrong idea of the value of my time.

😢 Being of top of everything is like spoiling a little child. Users will forget that they are users and will became kids of you, depending entirely on you to debug, fix simple issues and ultimate to reason.

✔ Leave users in the wild, let them grow as peers, don't want zombies. Don't explain design decisions in comments, neither reply others to create "searchable content".

⭐ Charge money for those needing your extra care and touch.

### Centralized

Support can't be centralized, it jeopardizes the adoption of the software so it must embrace others collaborating and doing a business out of it.

🤯 Support needs grows with the software adoption, eventually it become a different business on its own. To monopolize support only slowed me down, it didn't bring me anything good.

✔ To distribute the support offering is a must, third-parties must be able to offer certified support, to provide services adapted to the different user niches around the software.

## Cultural-related issues

The following issues are caused by just have to deal with people from too many different places of the world, including language, timezones and holidays.

😖 Users not being able to communicate are too hard to handle. They require at least twice the time to deal with and the communication always feels harsh for both parties.

✔ Simply don't provide support for those who can't communicate in a reasonable manner. Encourage and support them to form user communities around your software.

## What now?

[spoiler](https://www.youtube.com/watch?v=t2cQWCPDBC0&t=17s).
