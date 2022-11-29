---
date: 2022-12-01T14:38:50Z
lastmod: 2022-12-01T14:38:50Z
title: Chevereto goes free
tags:
    - 🤯show
author: OMA
summary: Now AGPLv3 licensed for personal use.
image: /photos/2022-chevereto-ultimate.png
---

At Chevereto we now provide a brand new free edition for personal usage, with same versioning and tooling than our paid editions.

The motivation for this new free edition is that Chevereto's paywall drives away too many users in a market dominated by free tier players. I'm amazed that we made it this far with a tall entry barrier like that one.

I took a ton of lessons from my previous Open Source projects and I'm doing things with more brains. In this post I want to expose this new project and what I learned from my previous experiences.

## Chevereto 1, 2 & Chevereto-Free

Open Source in Chevereto has been a thing since its first version and I've been trying to succeed with [FLOSS](https://en.wikipedia.org/wiki/Free_and_open-source_software) within 15 years of its development. All these previous attempts have failed in commercial terms which is crucial for me and the longevity of the project.

With [Chevereto V1](https://releases.chevereto.com/1.X/) I learned that I needed a paid edition to move forward. With [Chevereto V2](https://releases.chevereto.com/2.X/) I realized that giving away old major releases doesn't catch the eye. With [Chevereto-Free](https://github.com/rodber/chevereto-free) I understood  that the value proposition must be more compiling and that removing a few features won't direct drive sales.

Out of all these free editions the most known was Chevereto-Free which lasted for about 5 years. What went wrong?

## How Chevereto-Free went wrong

Chevereto-Free was a hard-fork where I removed selected paid features and I marketed it on the personal/community user-space. It started in 2016 and I [killed it on 2021](../2021/2021-06-25-adios-chevereto-free.md).

Chevereto-Free got positive results in the following areas:

* Exposed Chevereto to a new audience
* Got security advisories that made Chevereto safer

But Chevereto-Free packed a combo of bad decisions and it focused in the wrong market. It took me time to get *free* from its noise and I can do a proper analysis now.

### 😵‍💫 Bad naming

The name "Chevereto-Free" was a mistake as it gave users the feeling of a different project/organization when I all wanted was to label that the software had two editions, by naming it like that it was a different project on its own.

Users of Chevereto-Free never felt part of Chevereto and they hardly came to be part of the [community](https://chevereto.com/community/).

### 🥵 Overkill

In Chevereto-Free I removed paid functionality, namely [external storage](https://v4-admin.chevereto.com/features/external-storage.html), [banners](https://v4-admin.chevereto.com/settings/banners.html), social features and [bulk importing](https://v4-admin.chevereto.com/dashboard/bulk-importer.html). But I kept multi-user, guest uploads, watermarking, spam tools, multi-language, custom logo, etc. This feature pack was a mistake because Chevereto-Free was more than enough for non-personal usage and I saw lots of commercial use cases which rarely purchased software that they could afford with no trouble.

Having too many features made challenging for users to determine the value of the paid offering.

### 🤪 Unrealistic expectations

With Chevereto-Free I was expecting too much from their users. Not because a project is Open Source people will flock to help you with it and being realistic nobody will donate their time to benefit an unknown company/project. You know the old saying: Never expect anything and you won't be ever disappointed.

I got frustrated with Chevereto-Free because I was expecting too much from their users.

### 💸 Costly to produce

The biggest mistake of Chevereto-Free was that it was a free product that it wasn't any free to produce. The forking process was all manual meaning that every time I needed to tag a new release I had to take the paid branch as a base and manual remove the paid features from scratch.

The software release process in Chevereto-Free was exhausting and extremely annoying.

### 😭 Different versioning

Chevereto-Free had its own versioning which was really stupid.

Having a different versioning required mapping to understand how Chevereto-Free releases correlate with paid edition and it enforced the fact of it being a different project. This mess affected everything including documentation, Dockerfile, guides, bug tracking, etc.

## Chevereto free edition

🥳 Chevereto free edition is now available at [chevereto/chevereto](https://github.com/chevereto/chevereto).

What's changed? A lot! With all the lessons learned this new edition is more solid and mature.

### 🎉 Same name, version, APIs and docs

Both Chevereto editions share name, version, APIs and docs. All Chevereto infra and documentation works the same among its two editions. This reduces complexity and enables to focus in the same software rather than split projects.

This also extend to issues and bugs, I'm talking about two identical automated branches.

### 🥹 Made for personal usage

Chevereto free edition is exclusively for personal usage and it enforces that by removing guest uploads, external storage, spam fight servicing, multi-user, moderation tools and anything else that could suit a non-personal service provisioning.

Nobody should pay to use Chevereto for personal needs.

### 😎 Continuous delivery

Chevereto free edition releases gets auto build and published soon as a new paid tag is released. All this is made on top of GitHub Workflows, it cost us next to *nada* to produce releases on pair with the other Chevereto editions.

There's version parity between all Chevereto editions, its all automatic.

## Upgrade from Chevereto-Free

Personal users of Chevereto-Free are encouraged to migrate now to Chevereto free edition. Not only the software is newer, it has tons of [new features](https://v4-docs.chevereto.com/introduction/changelog/4.0.html) and [nifty additions](2022-09-20-chevereto-4.md) that will make your experience a delight.

For those using Chevereto-Free commercially: Head to [chevereto.com/pricing](https://chevereto.com/pricing) to get our Pro edition. At Chevereto we will happy to assist you with the migration process.

Chevereto supports all popular infra provisioning systems, including Docker, VPS, cPanel, Plesk and more. Chevereto V4 runs anywhere and it is the best Chevereto yet, I recommend you to try out its free edition or request your own private demo from our website.
