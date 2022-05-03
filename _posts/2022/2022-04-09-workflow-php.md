---
date: 2022-04-09T15:55:48Z
lastmod: 2022-04-16T17:21:29Z
title: Workflow for PHP
tags:
    - 🤯show
    - 🐘php
    - 🥑chevere
author: rodber
summary: Workflow for PHP in a similar fashion to GitHub Actions.
image: /org/chevere/packages/workflow/workflow-social.png
---

One of my goals with [Chevere](https://chevere.org) was to learn more problem-solving approaches and the culture that comes with these. I achieved this by consuming more software, starting with CI tools and I continued all the way up to esoteric software practices.

Out of all I was exposed [GitHub Actions](https://github.com/features/actions) caught my attention: You can declare interconnected jobs and use actions published by third-parties to keep you productive. What interested me the most was the [workflow pattern](https://en.wikipedia.org/wiki/Workflow_pattern), which inspired me to create the [Workflow package](https://chevere.org/packages/workflow) for Chevere.

## Introduction

When I have to write a new system I try to keep it neat and clean. To achieve this I do TDD, ensure a good code coverage threshold and if fancy times aim for high [MSI](https://en.wikipedia.org/wiki/Mutation_testing). This is not always the case (is the oddity) as this approach gets expensive and not needed for most organizations.

Any evolving system could be eventually get patched the MVP way, which is to add features the quickest. Once done, who cares... It works and we are printing money. While the product get features this fashion it does increasing technical debt. This will happen in any project as teams change, people bring different approaches, tech evolves, the only guy who knows the system that deep is now 90 years old, etc.

At some point it will be expensive to go in any direction namely to maintain, to change or to replace it.

## Predict the unknown

I can abstract predictable needs, but many stuff are too green and potential candidates for re-factoring loop as it evolves. I realized that my code went wrong when new business rules keep being added for a long period (4 years). You know how it goes, one writes a clean implementation and years later it has a galore of prep steps, moderation enforcement, etc.

My mess was caused by adding more features and enforcing new rules on users. For user restrictions you apply request middleware, but for random extra stuff there's no one-size fits all solution. Plugin strategies (event sourcing among others) help, but is not that flexible and it works best if the system needs are already predicted. Back to square one.

## Here be Workflows!

A workflow enables to define a procedure of a series of interconnected independent jobs. With workflows you care about the job units that define the process to solve the problem, not how abstract "the problem".

✨ Think about it as Lego, but instead of bricks we use Jobs which are made from templates called Actions.

A workflow-based approach has interesting advantages:

* Actions are re-usable.
* Testing gets lighter on Workflows ("the problem").
* Easy re-arrange jobs and its dependencies.
* Room for endless additions.

**Challenges**:

* Async (parallel) execution.
* Validate declaration.
* Run-if conditions.

## Chevere Workflow

![Workflow](/org/chevere/packages/workflow/workflow-social-alt.svg)

The [Workflow package](https://chevere.org/packages/workflow) provides managing for complex workflow declarations.  This post is a glorified ad for my package, _pretends to be shocked!_ as I believe using the workflow pattern can solve a ton of problems.

### Superb workflow syntax

The most important aspect of Workflow is the end-user experience, is all about enable to easy solve progressive problems and its syntax is a reflection of this motto.

```php
use function Chevere\Workflow\job;
use function Chevere\Workflow\workflow;

workflow(
    prepare:
        job(
            PrepareTweet::class,
            message: '${message}',
            url: '${url}',
        ),
    send:
        job(
            SendTweet::class,
            payload: '${prepare:payload}',
        ),
);
```

### Actions

[Actions](https://chevere.org/library/action) contains the logic for Workflow jobs, responsible for declaring the `run` method and its expected response parameters. Actions can be _anything_ although my recommendation is to keep actions minimal as possible.

Don't hesitate to split a process in four, twelve or more job-actions. That's the point! The more you _unitize_ the procedures the easier it gets to maintain and keep all moving parts willing to move.

### Variables & References

It uses `${var}` for declaring Workflow variables that must be passed by the Workflow runner. It uses `${job:key}` to reference previous jobs response keys.

Variables `${message}` and `${url}` are Workflow variables, `${prepare:payload}` is a job response variable reference. Job `send` needs a payload parameter, which pass `${prepare:payload}` as a variable reference. This job implicit declares that it depends on `prepare` job and it will run always after `prepare`.

### Dependencies

Workflow supports explicit declare jobs dependencies using `withDepends` method. A job won't run until their previous job dependencies are resolved, it determines a dependency graph for this purpose.

### Async

Workflow uses [amphp](https://amphp.org/) to handle parallel processing. This is _true parallel processing_ using multiple process or native threads, without blocking and no extensions required.

Jobs run async by default if no dependencies are declared (either implicit or explicit).

### Strict

Workflow gets validated against the complete declaration and Jobs must be compatible with each other. A Workflow won't run if it detects that Jobs aren't compatible.

If `Action::run` for `job` respond with `['user' => 'Rodolfo']`, other jobs can freely reference that variable as `${job:user}` to pass `Rodolfo` on runtime. If a job references undeclared response keys, or if the value doesn't match type declaration the Workflow will emit an Exception.

### Extensible

Workflows can grow at wild and many strategies can be used for it. For example, using a base workflow for common functionality, pack related Actions in packages, add a plugin layer to enable users to add their own extra jobs, etc.

The Workflow package, as the entire Chevere library, is completely [immutable](https://chevere.org/developer/standard/immutability.html). Users can safely use our logic in several different contexts where mutable code will be your doom, specially when using application runners.

## Feedback

By the time I'm writing this the Workflow package is on early preview `0.2` and is missing must-have additions like conditional job syntax. You are welcome to contribute and provide feedback at [chevere/workflow](https://github.com/chevere/workflow).

I hope this problem-solving approach can help you to attack your problems on a cheaper and more maintainable manner, at least that's what my design and intentions aims for.
