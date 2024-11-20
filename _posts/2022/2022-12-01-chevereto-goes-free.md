---
date: 2022-12-01T14:38:50Z
lastmod: 2022-12-01T14:38:50Z
title: Chevereto goes free
tags:
    - chevereto
    - show
author: OMA
summary: Now AGPLv3 licensed for personal use.
image: /photos/2022-chevereto-ultimate.png
---

At Chevereto we now provide a brand new [free edition](https://github.com/chevereto/chevereto) for personal usage with same versioning and tooling than our [paid editions](https://chevereto.com/pricing).

The motivation for this new free edition is that Chevereto's paywall drives away many users in a market dominated by free tier players. I'm amazed that we made it this far with a tall entry barrier like that one.

I took a ton of lessons from my previous Open Source projects and I'm doing things with more brains. In this post I want to expose this new project and what I'm doing different now.

## Previous attempts

Open Source in Chevereto has been a thing since its first version. I've been trying to succeed with [FLOSS](https://en.wikipedia.org/wiki/Free_and_open-source_software) within 15 years of its development. All these previous attempts have failed in commercial terms which is crucial for me and the longevity of the project.

With [Chevereto V1](https://releases.chevereto.com/1.X/) I learned that I needed a paid edition to move forward. With [Chevereto V2](https://releases.chevereto.com/2.X/) I realized that giving away old major releases doesn't catch the eye. With [Chevereto-Free](https://github.com/rodber/chevereto-free) I understood  that the value proposition must be more compelling and that removing a few features won't direct drive sales.

## How Chevereto-Free went wrong

Chevereto-Free was a hard-fork where I removed selected paid features and I marketed it on the personal/community user-space. It started in 2016 and I [killed it on 2021](../2021/2021-06-25-adios-chevereto-free.md).

Chevereto-Free got positive results in:

* Exposing Chevereto to a new audience
* Security advisories

But in Chevereto-Free I made a lot of bad decisions and I targeted the wrong market. It took me time to get *free* from its noise and I can do a proper analysis now.

### 😵‍💫 Bad naming

The name "Chevereto-Free" was a mistake as it gave users the feeling of a different project/organization when I all wanted was to label that the software had two editions. By naming it like that it was a different project on its own, with all that carries.

Users of Chevereto-Free never felt part of Chevereto and they didn't came to be part of the [community](https://chevereto.com/community/).

### 🥵 Overkill

In Chevereto-Free I removed paid functionality, namely [external storage](https://v4-admin.chevereto.com/features/external-storage.html), [banners](https://v4-admin.chevereto.com/settings/banners.html), social features and [bulk importing](https://v4-admin.chevereto.com/dashboard/bulk-importer.html). But I kept multi-user, guest uploads, watermarking, spam tools, multi-language, custom logo, etc. This feature pack was a mistake because Chevereto-Free was more than enough for non-personal usage and indeed I saw lots of commercial use cases which rarely purchased software that they could afford with no trouble.

Having too many features made challenging for users to determine the value of the paid offering.

### 🤪 Unrealistic expectations

I got frustrated with Chevereto-Free because I was expecting too much from their users. Not because a project is Open Source people will flock to help you with it. Being realistic, nobody will donate their time to benefit an unknown company/project.

You know the old saying: Never expect anything and you won't be ever disappointed.

### 💸 Costly to produce

Chevereto-Free's biggest mistake was being a free product which was expensive to produce. To create a new Chevereto-Free version the process required manual forking, taking the source branch as a base and manually remove the paid features from scratch, for each version!

The software release process in Chevereto-Free was exhausting, expensive and above all: Annoying.

### 😭 Different versioning

Having different versions required mapping to understand how Chevereto-Free releases correlate with paid editions and it enforced the fact of it being a different project. This mess affected everything including documentation, Dockerfile, guides, bug tracking, etc.

Chevereto-Free had its own versioning which was super stupid. Everything needed to be made twice.

## Chevereto free edition

🥳 The new Chevereto free edition is now available at [chevereto/chevereto](https://github.com/chevereto/chevereto).

What's changed? A lot! With all the lessons learned this new edition is more solid and mature. Everything is built automatically and compatible with all our existing docs and infra. It is the best free edition I've ever made.

### 🎉 Same name, version, APIs and docs

All Chevereto editions share name, version, APIs, bugs and docs. Everything works the same among all its editions. This reduces complexity and enables to focus in the same software rather than split projects.

This extends to issues, bugs, marketing, everything. I'm talking about identical systems where the only difference is the software feature pack.

### 😘 Made for personal usage

Chevereto free edition is for personal usage, this edition doesn't include guest uploads, external storage, spam fight, multi-user, moderation tools and anything that could suit a non-personal service provisioning.

Nobody should pay to use Chevereto for personal needs, and those needing extras can afford to pay and sustain further development of the software.

### 😎 Automated continuous delivery

Chevereto free edition releases gets automatic build and published as a new paid tag is released. All this is made on top of [GitHub Actions](https://github.com/features/actions), it cost us next to *nada* to produce releases on pair with the other Chevereto editions.

Auto-built releases are a delight for us to work with, and for our users it grants instant availability for our software.

## Upgrade now

Users of Chevereto-Free are encouraged to migrate now. Chevereto free edition is newer with tons of [new features](https://v4-docs.chevereto.com/introduction/changelog/4.0.html) and [nifty additions](2022-09-20-chevereto-4.md) that will make your experience a delight.

For those using Chevereto-Free commercially: Go to [chevereto.com/pricing](https://chevereto.com/pricing) to get our Pro edition. At Chevereto we will happy to assist you with the migration process.

👏 Chevereto supports all popular infra provisioning systems, including Docker, VPS, cPanel, Plesk and more. Chevereto V4 runs anywhere and it is the best Chevereto yet, I recommend you to try out its free edition or request your own private demo from our website.
