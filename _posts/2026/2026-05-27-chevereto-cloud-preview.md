---
date: 2026-05-27T15:21:07Z
title: Chevereto Cloud Preview
tags:
    - chevereto
    - show
    - cloud
author: OMA
summary: Now open for public test preview
image: /photos/2026/yue-wu-1M5CYAqXwaE-unsplash.jpg
---

I built Chevereto so people could own their media. Not rent it. Not hand it over to a platform that monetizes it, buries it in ads, or pulls the plug without warning. The whole point was that you run it, you control it, you own it.

But self-hosting has friction. Servers, configs, updates, security patches. It's manageable if you enjoy that stuff, or if you have someone who does for you. Not everyone does. And that friction has been keeping Chevereto out of reach for a lot of people who would otherwise benefit from it.

Chevereto Cloud is my answer to that.

## What it is

Chevereto Cloud is a fully managed hosting service that runs Chevereto for you. No server setup. No sysadmin work. No licensing fees on top. You sign up, you get a running Chevereto instance, and you're done in about sixty seconds.

The key thing is that "managed" doesn't mean "we own your stuff." **Your files are never stored on our servers**. You connect your own storage provider (S3, Cloudflare R2, Backblaze B2, Google Cloud, Azure, Wasabi, and others). We handle the infrastructure. Your data is yours. That's not a marketing line, it's how the system is built.

There's also no lock-in. If you ever want to move to self-hosted, you can. That's been a design principle from the start, and Cloud doesn't change it.

## Test preview is live now

Chevereto Cloud is now open for test preview at [cloudpreview.chevereto.com](https://cloudpreview.chevereto.com).

![preview](/photos/2026/chevereto-cloud-preview.webp)

This is a preview. All **data will be reset** when the preview period ends. Don't use it for anything you intend to keep, it's purely for exploring and breaking things. There's no checkout, no transactions. Just sign up and start poking at it.

I posted the full details in the community forum: [🎉 Introducing Chevereto Cloud (Test Preview)](https://chevereto.com/community/threads/🎉-introducing-chevereto-cloud-test-preview.16387/#post-80132).

## I want your feedback

This has been years in the making. The multitenancy architecture, the storage decoupling, the provisioning layer—all of it was built toward this moment. But software that hasn't been used by real people isn't done. It's just ready to be tested.

What I need right now is people signing up, running into edges, and telling me what they found. The experience should be seamless. If it isn't, I want to know where it breaks.

Go try it. Break it. Tell me what you think.
