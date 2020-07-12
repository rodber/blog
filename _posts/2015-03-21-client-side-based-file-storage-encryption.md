---
title: Client-side based file storage encryption
date: 2015-03-21 23:23:51 GMT
tags:
    - 💻systems
author: Sape
summary: Encryption in a storage service is a must have because it provides a better layer of privacy.
featuredImage: /photos/2015-encryption.jpg
---

Encryption is the process which encodes or transform data making it useless without the proper decryption mechanism. For example, it allows to transform a file, like a picture, into just useless bytes without the encryption key.

For today standards data encryption in a storage service is a must have because it allows a better layer of privacy —a very thin layer anyway— which aims to protect whatever you throw in these services and keep some eyes out of that content. Any storage service made to be used in private or personal environments must have this thing.

### The problem with encryption

A robust encryption model is quite simple: The user password is the «constant» element to generate encryption keys for each stored file so the encryption and decryption works on-the-fly for each session when someone is logged in. Hopefully all this happens at client side so the decrypted files are never handled by the server.

Problem is that this model has several pitfalls when some basic features must be added to the system. For example, if you want to change the password —remember that this is the «constant» key element— you must decrypt and re-encrypt everything. Another example is when someone want to share a file which means that there must be a way to store or include the decryption key somewhere like implicit in the link or in the database. What I’m saying is that this and many other features compromises the strength of the system. There is no way to make the files truly private in any mainstream service with all the fancy features checklist.

### How encryption is actually used

Since you can’t fully encrypt the files —without sacrifice several features of the overall system— the deal is just handle a portion of the encryption thing and actually, **the true goal of file encryption in storage services is to blind the storage part**. The files sent to the storage server must be encrypted, which allows to use any third-party service (Amazon S3, Google Cloud, etc.) to store whatever because they won’t be able to index, label or do anything with those encrypted files because they are dealing only with encrypted data which is worthless without the encryption keys.

**Most storage services store the file encryption keys** which may look bad if you truly care about privacy. The only thing that they do for privacy is that the third-party storage server —and any party with access to the storage server— can’t access to the information directly. This is not that bad if you think about it because by doing this they are abstracting this part of the system.

### The MEGA client-side encryption system

MEGA is not that different from any other storage service and they store the encryption keys like everybody else. They say that the key is behind the user’s password and several other claims that doesn’t seem to be real for what I saw and Arstechnica wrote about MEGA [calling it Megabad](https://arstechnica.com/business/2013/01/megabad-a-quick-look-at-the-state-of-megas-encryption/) revealing a lot of issues back in 2013.

MEGA is well know because of their privacy —or encryption— concerns. Actually, their motto is «The Privacy Company» so I did some own research to understand how their encryption system works. Honestly, when they launched back in 2013 I didn’t pay to much attention to their encryption mechanism because the things that I code are made to be used in public environments so encryption is not something needed. That has changed a little bit because **I’m planning to add personal modes** to both [Chevereto](https://chevereto.com) and Quickty and I really like the client-side encryption system used by MEGA which means that the job is done by the web browser, not the remote server.

There are several caveats in file encryption and systems designed to deliver this files. **Encrypt and decrypt is something that takes a high load of resources** and on top of that you must deliver this dynamic —or cached— files. If your server will be decrypting files it will eventually get out of resources very quickly and that is why client-side decryption is great because it works directly in the client web browser rather than the remote server. This means **zero server load** for both encryption/decryption and final file delivery processes.

### Missing things

A client-side decryption model has things that must be worked out. For example, it takes a lot of resources (CPU and RAM) when you download a couple large files at the same time. And **not all the modern web browsers apply the HTML 5 local storage API in the same way**, in most cases the implementation is highly limited. Actually, MEGA works properly only in Chrome and Opera —Opera uses the same Google fork of webkit— so it is still very limited, even in 2015.

There are also limitations in mobile devices. In both iOS and Android the browsers has **limitations in the HTML 5 APIs** like local storage or the file API. Even if all the related APIs are fully implemented it won’t be the same thing because of the resources demanded by the processes which have a cap since they are running in a web browser so a custom app is the way to go.

### Conclusions

A system that works natively only in two major web browsers and that it needs polyfills to make it work is not something good at all. If MEGA started all this thing in 2013 and in two years there are still issues related to cross-browser support means that the future doesn't seem that good for this technique.

The only way to guarantee privacy means that several features must be removed and no one does that. File keys are stored to make the whole thing works with all the fancy features that users demands but if the keys are stored somewhere... **What is the point of do any job client-side anyway?**. Maybe it will save server resources but at a ver high cost: Limited support.

If the storage service has access to both keys and files —which are in the third-party storage server— there is no additional privacy layer introduced by doing client-side encryption or decryption. Maybe interception if the connection is not secure but if the system connects using a certificate theres no need to do anything else.

This client-side encryption system indeed increases user’s privacy but only if the system doesn’t store the keys at all. There are some small services that works like this and those services are really secure but you can do very limited stuff. At the end, **users trend to use the services that will allow them do do more** with their content like sharing or things like that and the privacy is not that bad, at least that is way better than nothing.
