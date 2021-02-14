---
date: 2021-02-12T21:09:35Z
title: Support is broken
tags:
    - 👴🏾experience
    - 💔broken-harts
author: Sape
summary: How support went the wrong way and how I'm fixing it.
featuredImage: /photos/2021-don-sata.jpeg
---

For a couple of years I've been witness how my support offering got broken. In this post I review why my support went that way and what I'm doing to fix it for good.

## Context

Since [Chevereto](https://chevereto.com/) V2 my support offering has been built-in and back then the system was so simple that it didn't cause any issue. Then V3 emerged and the situation got way worse as it got more usage so the support.

I've been challenging myself to find a cost-effective solution. But support involves people handling people, it will be always expensive and hard to deal with. Also, V3 has too many moving parts in the system provisioning layer and for most people (specially novel users) that equals to developer responsible for the conflicts between these, to review bad system settings, etc.

For V4 I don't want to keep carrying that, so I'm designing the system with more stricter requirements and building it containerized to leverage all the provisioning on my own standard. I'm also following Clean Code principles, which have helped me to leverage technical debt.

## Frustration

Chevereto rely in so many technologies that most users **get easily frustrated** with the subtle tech terminology and concepts.

🤬 Avoid interacting with an impatient or angry user. Do not touch!.

✔ Wait until the user slow down worked great for me. Most give it another try later, with a cool head and most of the time my intervention was totally unnecessary.

🔮 A container provisioning model should remove the frustration and allow me to worry about just one standard.

## Variable demand

Support demand suffers from **unpredictable spikes**, which are normal after a new release or any breaking change. Problem is that is hard to tell how tall the tide will be every single time.

😨 Support offerings aren't flexible, it requires time to train people and to write documentation. You won't ever match the speed required by a spike.

✔ Deliver Chevereto updates to small batches of users allowed me to narrow the number of affected users, avoiding the spike.

## Flat rates

Any flat support offering will **get abused** as to include an uncapped layer of support will force that activity to be driven as an overselling business model, where users never using support will pay the bill for those folks sending you 40 emails in one morning (true story).

🤯 Users will abuse when possible, allowing that will decrease the value of your work.

✔ Support should be charged on a per-event basis.

⭐ I believe that offering a **support insurance** subscription covering up to $X support cost per year is the way to go, just like insurance companies do. Otherwise support will be too expensive, it needs a common collaboration.

## Worry too much

Worrying too much is **highly counterproductive** for me. After many years in that train I'm sure that is a really bad course of action as it gives the user a wrong idea of the value of my time.

😢 Being of top of everything is like spoiling a little child. Users will forget that they are users and will became kids of you, depending entirely on you to debug, fix simple issues and ultimate to reason.

✔ Leave users in the wild, let them grow as peers, don't want zombies. Don't explain design decisions in comments, neither reply others to create "searchable content".

⭐ Charge money for those needing your extra care and touch.

## Bad communication

Some users don't have a compelling tech vocabulary which causes a **communication jam**. There are also cultural differences, different timezones and language barriers that will also play a role.

🥴 Users not being able to communicate are too hard to handle. They require at least twice the time to deal with.

✔ Don't provide support for those who can't communicate in a reasonable manner.

⭐ Save the headache and if there too many users with this problem, they will end up forming many own user communities around your software.

## Overlapping

Users with lack of tech knowledge won't be capable to differentiate what's **your responsibility** and what's a system requirement.

😵 Some users won't take a "no" for answer and demand support for stuff which is not under your responsibility. They will use pity, public exposure, defamation, disavowing and anything in their reach to make you feel bad for not helping.

✔ I just do not provide support for stuff I don't sell, even if the software stops working.

## Getting it fixed

After taking all this out my chest I'm sure that the problem is caused by me, for my lack of professionalism in this matter, for not being able to get these noises out of my head.

So I've started changes in [Chevereto](https://chevereto.com/) that I hope will help me to drive better support:

* I won't handle any careless ticket
* Chevereto-Free won't get any Tech support anymore, only community support
* Ticket response time is now 48 hours
* Extra support is now available to purchase from (faster response time)
* I won't engage with community support

## What now?

[spoiler](https://www.youtube.com/watch?v=t2cQWCPDBC0&t=17s).
