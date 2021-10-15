---
date: 2021-01-20T20:48:42Z
title: Monetize your Chevereto installation
tags:
    - 👴🏾experience
    - 🤑money-making
author: OMA
summary: Pushing towards a saner service provisioning
image: /photos/2021-money.jpg
---

Doing [Chevereto](https://chevereto.com/) allowed me to learn and understand the subtle needs of self-hosted services, specially those around money making for providing an image hosting service for others.

This post is about how monetization has been changing around web services, and how Chevereto will drive monetization for their users in an organic manner.

## Context

About a decade ago it was standard to _easy_ make money online with the good old traffic + ads formula. This is always a thing to talk among people of my age in this business, imagine the hype of getting a printed check which reads your name and GOOGLE for the ads clicks in your website.

For Chevereto installations, ads was THE way to make money until a couple of years back when all started to went down and not only at Chevereto, ads everywhere started to pay way less than before.

New ways to make revenue are needed, but in the context of what Chevereto is and avoiding the vices and bad practices of established services.

## Vices

There are business practices and habits that I classify as vices due that is stuff that I know that **drives trouble**. The following practices are bad and triggers a lot of nasty consequences.

### Freemium as the standard

Freemium is the concept of accessing to a limited version of a product which you can later upgrade to access to more features. To offer something for free it means that the costs of the operation are **covered** by:

- 🎩 Service owner money.
- 😒 Charging more to paid customers.
- 🤬 User data mining.

When offering a free tier it will be normal to get a lot of heat, which carries the following expenses:

- 😞 Controlling illegal activities
- 👨🏾‍💻 Monitor abuse
- 😨 Moderate content

Freemium is likely to be the most **expensive** thing you can throw to a software system.

### Flat fees

Services that flat charge users for what they use trend to exploit a revenue model based on **overselling**, which is the concept of selling more accounts that your infrastructure can support at full load. It exists because there's an installed capacity that is unlikely to be used all at the same time. In other words, those that barely use the system are paying for those who abuse it.

Flat fees won't account for the fair usage charges, it will end up with a global costs calculation:

```sh
total_cost / all_users = cost_per_user
cost_per_user + revenue_margin = cost_paid_by_user
```

To get more revenue the only alternative is to either reduce total cost or getting more users at the same cost. Overselling could work for a while, and we likely don't notice it because service providers are putting more infrastructure but hey, try to commit a transaction on New Years eve.

### Unnatural offering

Service providers offering unlimited storage, bandwidth or anything without a soft-cap are **bullshit** and this comes in the same bunch of the overselling guys, which is obvious if you think about it:

> I need moar users, so I will offer unlimited storage! I'm genius MARKETING HALL OF FAME!!1!"

Big companies can afford do this silly offering, but even they are all screwed because it is not _natural_ to offer something like that.

Check on how Google, the biggest thing in tech, had to take back its free photo offering same as PhotoBucket, TinyPic, etc. Chances are that this will be the same path for Flickr, Imgur, 500px and many others if they don't stop _stupidity_.

## A better business model

Many of the vices described can be avoided by just not being a jerk. On top of that I've came with my own personal considerations which are now core values that I'm putting for my software now.

### Pay for what you use

Users should pay for their specific service usage costs, with rate and limits based on their usage volume. This suppress the need of having to figure out where to get the money to sustain a **growing** user base.

- 🤑 Rate limit all that drives costs
- 😎 No surprises on your billing

The concept behind this is to allow to tweak exactly the offering for your target audience. In some contexts the usage will be driven by storage where in other situations it could be traffic or anything else.

### Specific

To make your service offering _very_ specific is what will give you the edge in users, traffic and everything else in any given niche. Being specific will grant you these:

- 👩🏾‍🎤 More similar alike users
- 🤗 Better engagement

You want a user-base with similar needs and goals, don't want to mix people with different use cases for your service, you want a cohesive user base.

### Freedom to use

Users should have the freedom to choose _how to use_ the service. This enables users to spontaneously find new uses for your service (specially if they are paying for).

The service must provide all the feasible use options, allowing users to do _more_ for what they pay for.

- 🤯 Don't drive usage, let users drive your offering
- 🤓 Allow, encourage and welcome _any_ user interface

The idea is that users can consume your service as they like, which is achieved by offering the service as a headless API in which clients can directly interact or better, you provide a tailored user interface for it.

## Wrapping up

To make money with media sharing websites has changed a lot and following the steps of big service providers is a no-no.

There's a complete new generation of creators and needs around it, which is currently being exploited by the same old gang of services.

I hope that I empower new creators on their own premises to make things more equal for everybody.
