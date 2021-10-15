---
date: 2021-02-14T16:28:42Z
title: Designing better Tech Support
tags:
    - 👴🏾experience
author: Sape
summary: How I'm driven a better support experience.
image: /photos/2021-don-sata.jpeg
---

For a couple of years I've been running experiments on my [Tech Support](https://chevereto.com/support) offering. I'm delivering support for ~15,000 active Chevereto installations at a minimum support cost.

To get there I challenged myself to find a cost-effective solution, but support involves people handling people. It will be always expensive and hard to deal with.

As I'm foreseeing a lot of new users for Chevereto V4, support is one of my main concerns as it could cripple growing of my installed user base, like it happened with V3.

In this post I review lessons learned and how I'm making things better for [Chevereto V4](https://github.com/chevereto/chevereto) support offering.

## Context

Since [Chevereto V2](https://github.com/Chevereto/chevereto-2) my support offering has been built-in. Back then the system was simple and it didn't cause any support offering issues. When  [Chevereto V3](https://chevereto.com/releases#v3_0_0) emerged the situation went bad for me as I got more users than I was  anticipating and support jammed the entire project.

I tried many support strategies, channels, speech, collaboration, etc. For my context, the problem narrows to bad [technology](#tech-driven-issues) and [bad practices](#bad-practices).

## Tech-driven issues

Chevereto V3 has too many moving parts in the system provisioning layer and for novel users that equals to make the developer responsible for the conflicts between these. The novel user won't mind to try to understand which is the Chevereto application layer and which is everything else, which drives an exhausting responsibility of educating users when they are in the urge of a fix.

Tech-driven issues exists because users have the freedom to install the software in a myriad of systems, but to toggle and fiddle system provisioning elements that requires a strong tech background and an open mind for learning.

### Frustration

Novel users **get frustrated** at the first subtle tech challenge. They don't care to read the error messages either, neither consume the documentation. The reality for most novel users is to run under panic when something goes wrong.

🤬 Avoid interacting with an impatient or angry user. Do not touch!

✔ Wait until the user slows down. This have worked great for me as they give it another try later anyway. I understood that in most cases my intervention was unnecessary.

🔮 A comprehensive documentation enable users to look for common issues on their own.

## Variable demand

Support demand get **unpredictable spikes**, which are normal after a new release or any breaking change. Is hard to tell how tall the tide will be every time, it is unpredictable how much panic it will drive.

😨 Support offerings aren't flexible, it requires time to train people and to write documentation. You won't ever match the speed required by a support spike.

✔ Deliver software updates to reduced batches of users. This allowed me to narrow the number of affected users, controlling the spike at my pace.

### Overlapping

Users with lack of tech knowledge won't be able to differentiate what's **vendor responsibility** and what's a system requirement.

😵 Some users won't take a "no" for answer and they will demand support for systems not under your responsibility. They will use pity, public exposure, defamation, disavowing and anything in their reach to make you feel bad.

✔ Do not provide support for stuff you don't sell.

## Bad Practices

I made the following errors on my journey. Please don't make the same mistakes. Don't be stubborn as I was.

### Flat rates

Any flat support offering will **get abused** as to include an uncapped layer of support will force the activity to be driven as overselling, where users not using support will pay the bill for those folks sending you 40 emails in one morning (true story).

😈 Users will abuse when possible (they won't know), allowing that will decrease the value of your work.

✔ Support should be charged on a per-event basis.

⭐️ Pursue offering a **support insurance** subscription covering up to $X support cost/time per year.

### Worry too much

Worrying too much is counterproductive for me.

After many years in that train I'm sure that is a bad course of action as it gives the user a wrong idea of the value of my time.

😢 Being on top of everything is like spoiling a child. Users will forget that they are users and they will grow an unhealthy dependency on you to search for, debug and to fix simple issues.

✔ Leave users in the wild, let them grow as peers. You don't want zombies. Don't explain design decisions in comments, neither reply others to create "searchable content".

⭐️ Charge money for those needing your extra care and touch. They will pay, I guarantee.

### Centralized

Support can't be centralized. It jeopardizes the adoption of the software so it must embrace others collaborating and offering paid support to others.

🤯 Support needs grows with the software adoption, eventually it become a different business on its own. To monopolize support slowed me down, it didn't bring me anything good.

✔ To distribute the support offering is a must, third-parties must be able to offer certified support, to provide services adapted to the different user niches around the software.

## Cultural-related issues

The following issues are caused by having to deal with users from different places of the world. This happens because of culture differences including language, timezones and holidays.

😖 Users not being able to communicate are too hard to handle. They require more time to deal with and the communication feels harsh for both parties.

✔ Don't provide support for those who can't communicate in a reasonable manner. Welcome translation software, but encourage the offer of country-driven support offerings.

## What now?

[spoiler](https://www.youtube.com/watch?v=t2cQWCPDBC0&t=17s).
