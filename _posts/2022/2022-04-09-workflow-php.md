---
date: 2022-04-09T15:55:48Z
lastmod: 2024-01-13T15:20:33Z
title: Chevere Workflow
tags:
    - php
    - chevere
author: rodber
summary: Workflow for PHP in a similar fashion to GitHub Actions.
image: /org/chevere/packages/workflow/workflow-social.png
---

One of my goals with [Chevere](https://chevere.org) was to learn more problem-solving approaches and the culture that comes with these. I achieved this by consuming more software, starting with CI tools and I continued all the way up to esoteric software practices. Out of all I was exposed [GitHub Actions](https://github.com/features/actions) caught my attention: You can declare interconnected jobs and use actions published by third-parties to keep you productive. What interested me the most was the [workflow pattern](https://en.wikipedia.org/wiki/Workflow_pattern), which inspired me to create the [Workflow package](https://chevere.org/packages/workflow) for Chevere.

## Technical debt

When I have to produce a new system I try to keep it neat and clean. To achieve this I do [TDD](https://en.wikipedia.org/wiki/Test-driven_development), ensure a good code coverage threshold and if fancy times aim for high [MSI](https://en.wikipedia.org/wiki/Mutation_testing). This is not always the case as this approach gets expensive and gets sacrificed for most organizations.

Any evolving system is potential for getting patched the MVP way which is to add features the quickest. Once done, who cares... It works and we are printing money. While the product get features this fashion it does increasing [technical debt](https://en.wikipedia.org/wiki/Technical_debt). This will happen in any project as teams change, people bring different approaches, tech evolves, the only guy who knows the system is now 90 years old, etc.

At some point it will be expensive to go in any direction namely to maintain, to change or to replace it.

## Predict the unknown

I can abstract predictable needs, but many stuff are too green and potential candidates for re-factoring loop as it evolves. I realized that my code went wrong when new business rules keep being added for a long period (4 years in a row). You know how it goes, you struggle in a loop to find the solution for a known problem that will be changing with time.

I noticed that my mess was caused by the combination of adding more features while altering permissions and not extensively testing that. I tried first with plug-in strategies and I noticed that my business logic was getting sparse as I was pushing beyond what a plug-in system is meant for.

To be able to easy maintain the business it requires to abstract  everything in modules that we can plug each other.

## Here be Workflows!

A Workflow enables to define a procedure of a series of interconnected independent jobs. With workflows you care about the job units that define the process to solve the problem, not how to abstract "the problem".

✨ Think about it as Lego, but instead of bricks we use **Jobs** which are made from templates called **Actions**.

A workflow-based approach has interesting advantages:

* Actions are re-usable.
* Testing gets lighter on Workflow ("the problem").
* Easy re-arrange jobs and its dependencies.
* Room for endless additions.

**Challenges**:

* Async (parallel) execution in PHP.
* Validate definition.
* Run-if conditions.

## Chevere Workflow

![Workflow](/org/chevere/packages/workflow/workflow-social-alt.svg)

The [Workflow package](https://chevere.org/packages/workflow) provides managing for complex workflow declarations. This post is a glorified ad for my package, _pretends to be shocked!_ as I believe using the workflow pattern can solve a ton of problems.

### Superb syntax

The most important aspect of Workflow is the end-user experience. Is all about enable to easy solve progressive problems and its syntax is a reflection of this motto.

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

[Actions](https://chevere.org/packages/action) contains the logic for Workflow jobs, responsible for declaring the `run` method and its expected response parameters. Actions can be _anything_ although my recommendation is to keep actions minimal as possible.

Don't hesitate to split a process in four, twelve or more job-actions. That's the point! The more you _unitize_ the procedures the easier it gets to maintain and keep all moving parts willing to move.

### Variables & References

It uses `variable('var')` for declaring Workflow variables that must be passed by the Workflow runner. It uses `reference('job', 'key')` to reference previous jobs response keys.

Variables `variable('message')` and `variable('url')` are Workflow variables, `reference('prepare', 'payload')` is a Job response reference. Job `send` needs a payload parameter, which pass `reference('prepare', 'payload')`. This job implicit declares that it depends on `prepare` Job and it will run always after `prepare`.

### Dependencies

Workflow supports explicit declare jobs dependencies using `withDepends` method. A job won't run until their previous job dependencies are resolved, it determines a dependency graph for this purpose.

### Async

Workflow uses [amphp](https://amphp.org/) to handle parallel processing. This is _true parallel processing_ using multiple process or native threads, without blocking and no extensions required.

Jobs run async by default if no dependencies are declared (either implicit or explicit).

### Strict

Workflow gets validated against the complete declaration and Job references must be compatible with each other. Job declaration must match the Action binding, and Jobs variables and references parameters are asserted for matching.

### Extensible

Workflows can grow at wild under many strategies. For example, using a base Workflow for common functionality, pack related Actions in packages, add a plugin layer to enable users to add their own extra Job, etc.

## Feedback

By the time I'm writing this the Workflow package is on early preview `0.8` and is missing must-have additions like conditional job syntax. You are welcome to contribute and provide feedback at [chevere/workflow](https://github.com/chevere/workflow).

I hope this problem-solving approach can help you to attack your problems on a cheaper and more maintainable manner.
