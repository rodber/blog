---
date: 2022-04-09T15:55:48Z
lastmod: 2025-01-17T16:30:57Z
title: Workflow PHP
tags:
    - php
    - chevere
author: rodber
summary: Workflow procedures for PHP
image: /org/chevere/packages/workflow/workflow-social.png
---

One of my goals with [Chevere](https://chevere.org) was to learn more about problem-solving approaches and the culture that comes with them. I achieved this by exploring various software, starting with CI tools and continuing through to esoteric software practices. Among all the tools I encountered, [GitHub Actions](https://github.com/features/actions) caught my attention the most. It allows you to declare interconnected jobs and use actions published by third parties to stay productive. What interested me the most was the [workflow pattern](https://en.wikipedia.org/wiki/Workflow_pattern), which inspired me to create the [Workflow package](https://chevere.org/packages/workflow) for Chevere.

## Technical debt

When I have to produce a new system, I try to keep it neat and clean. To achieve this, I use [TDD](https://en.wikipedia.org/wiki/Test-driven_development), ensure a good code coverage threshold, and aim for high [MSI](https://en.wikipedia.org/wiki/Mutation_testing) when possible. However, this approach can be expensive and is often sacrificed in many organizations.

Any evolving system is prone to being patched in the MVP way, which means adding features as quickly as possible. Once done, who cares... It works, and we are making money. While the product gains features in this manner, it also accumulates [technical debt](https://en.wikipedia.org/wiki/Technical_debt). This happens in any project as teams change, people bring different approaches, technology evolves, and the only person who knows the system is now 90 years old, etc.

At some point, it will become expensive to go in any direction, whether it is to maintain, change, or replace the system.

## Predict the unknown

I can abstract predictable needs, but many aspects are too uncertain and potential candidates for a re-factoring loop as they evolve. I realized that my code went wrong when new business rules kept being added for a long period (4 years in a row). You know how it goes; you struggle in a loop to find the solution for a known problem that will keep changing over time.

I noticed that my mess was caused by the combination of adding more features while altering permissions and not extensively testing them. I first tried with plug-in strategies and noticed that my business logic was getting sparse as I was pushing beyond what a plug-in system is meant for.

To easily maintain the business, it requires abstracting everything into modules that can be plugged into each other.

## Here be Workflows!

A Workflow allows you to define a procedure consisting of a series of interconnected independent jobs. With workflows, you focus on the job units that define the process to solve the problem, rather than abstracting "the problem".

✨ Think about it as Lego, but instead of bricks, we use **Jobs** which are made from templates called **Actions**.

A workflow-based approach has several advantages:

* Actions are reusable.
* Testing becomes lighter on the Workflow ("the problem").
* Easy to rearrange jobs and their dependencies.
* Room for endless additions.

**Challenges**:

* Async (parallel) execution in PHP.
* Validating definitions.
* Run-if conditions.

## Chevere Workflow

The [Workflow package](https://chevere.org/packages/workflow) provides management for complex workflow declarations. This post is a glorified ad for my package, _pretends to be shocked!_ as I believe using the workflow pattern can solve a ton of problems.

### Superb syntax

The most important aspect of Workflow is the end-user experience. It's all about enabling easy solutions to progressive problems, and its syntax reflects this motto.

```php
use function Chevere\Workflow\job;
use function Chevere\Workflow\reference;
use function Chevere\Workflow\variable;
use function Chevere\Workflow\workflow;

workflow(
    prepare:
        job(
            new PrepareTweet(),
            message: variable('message'),
            url: variable('url'),
        ),
    send:
        job(
            new SendTweet(),
            payload: reference('prepare', 'payload'),
        ),
);
```

### Actions

[Actions](https://chevere.org/packages/action) contain the logic for Workflow jobs and are responsible for declaring the `main()` method and its expected response parameters. Actions can be _anything_, although my recommendation is to keep actions as minimal as possible.

Don't hesitate to split a process into four, twelve, or more job-actions. That's the point! The more you _unitize_ the procedures, the easier it gets to maintain and keep all moving parts willing to move.

### Variables & References

It uses `variable('var')` for declaring Workflow variables that must be passed by the Workflow runner. It uses `reference('job', 'key')` to reference previous jobs' response keys.

Variables `variable('message')` and `variable('url')` are Workflow variables, while `reference('prepare', 'payload')` is a Job response reference. Job `send` needs a payload parameter, which passes `reference('prepare', 'payload')`. This job implicitly declares that it depends on the `prepare` Job and will always run after `prepare`.

### Dependencies

Workflow supports explicitly declared job dependencies using the `withDepends` method. A job won't run until its previous job dependencies are resolved, and it determines a dependency graph for this purpose.

### Async

Workflow uses [amphp](https://amphp.org/) to handle parallel processing. This is _true parallel processing_ using multiple processes or native threads, without blocking.

Jobs run async by default if no dependencies are declared (either implicit or explicit).

### Strict

Workflow gets validated against the complete declaration, and Job references must be compatible with each other. Job declarations must match the Action binding, and Jobs' variables and reference parameters are asserted for matching.

### Extensible

Workflows can grow wildly under many strategies. For example, using a base Workflow for common functionality, packing related Actions in packages, adding a plugin layer to enable users to add their own extra Job, etc.

## Feedback

By the time I'm writing this, the Workflow package is in early preview (`0.8`) and is missing essential features like conditional job syntax. You are welcome to contribute and provide feedback at [chevere/workflow](https://github.com/chevere/workflow).

I hope this problem-solving approach can help you tackle your problems in a cheaper and more maintainable manner.
