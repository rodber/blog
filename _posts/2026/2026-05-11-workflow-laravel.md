---
date: 2026-05-11T17:28:52Z
title: Workflow for Laravel
tags:
    - php
    - chevere
    - laravel
author: rodber
summary: Declarative multi-step workflows for Laravel on top of chevere/workflow
image: /org/chevere/packages/workflow-laravel/workflow-social.png
---

I built this package to solve a recurring Laravel problem: once business flows grow beyond linear steps, orchestration logic starts leaking everywhere. You can chain jobs, batch jobs, and build pipelines, but complex flows still end up with manual dependency wiring, conditional branches spread across classes, and hard-to-reason execution order.

 The [chevere/workflow-laravel](https://chevere.org/packages/workflow-laravel.html) is the official Laravel integration for [chevere/workflow](https://chevere.org/packages/workflow), a PHP package that provides a declarative way to define and execute workflows. With this package, you can define your business flows as a series of steps with clear dependencies and conditions, without worrying about the underlying orchestration logic.

## What it does?

This package brings Laravel-first integration for `chevere/workflow` and focuses on these capabilities:

- Declarative job definitions (describe what runs, not orchestration plumbing)
- Automatic dependency graph resolution
- Mixed sync and async execution
- Type-safe response access
- Conditional execution (`withRunIf`, `withRunIfNot`)
- Retry policies for transient failures
- Independently testable jobs and verifiable workflow graph

In practice, you define jobs and references with `variable()` and `response()`, and the engine infers execution order automatically.

## Why this matters in Laravel

Compared to common Laravel flow tools:

- Similar to `Bus::chain()`: execution follows dependencies, but you do not hand-wire every step
- Similar to `Bus::batch()`: independent jobs can run concurrently
- Similar to `Pipeline`: sequential flows are easy, but graph workflows also support branching and fan-in

This gives Laravel teams a deterministic model for complex procedures without turning orchestration into framework glue code.

## Integration details

The package integrates with standard Laravel patterns through:

- `WorkflowServiceProvider`
- `AbstractWorkflow`
- `WorkflowManager`
- `Workflow` facade
- Artisan commands: `make:workflow`, `workflow:list`, `workflow:run`

Under the hood, it uses a PSR-11 bridge backed by Laravel's container, so dependencies are resolved with the same container behavior you already trust in your app.

## Minimal example

```php
namespace App\Workflows;

use Chevere\Workflow\Interfaces\WorkflowInterface;
use Chevere\Workflow\Laravel\AbstractWorkflow;
use function Chevere\Workflow\sync;
use function Chevere\Workflow\variable;
use function Chevere\Workflow\workflow;

final class GreetUser extends AbstractWorkflow
{
    protected function definition(): WorkflowInterface
    {
        return workflow(
            greet: sync(
                fn (string $name): string => "Hello, {$name}!",
                name: variable('name')
            )
        );
    }
}
```

```bash
composer require chevere/workflow-laravel
php artisan make:workflow GreetUser
php artisan workflow:list
```

## What the Laravel community is saying

From [Laravel News](https://laravel-news.com/chevere-workflow):

- The package is presented as a cleaner alternative to stuffing multi-step logic in a single class
- `sync()` and `async()` are highlighted as first-class tools for mixed execution models
- The dependency graph auto-resolution is shown as the key differentiator
- The article emphasizes failure handling, retry support, and Laravel integration via facade + Artisan

From [Laraveles.es](https://www.laraveles.es/blog/chevere-workflow-en-laravel-pipelines-declarativos/):

- Complex Laravel flows are described as a real maintainability pain when solved with ad-hoc callbacks
- Declarative pipelines are positioned as a readability and maintenance win
- Parallel execution is emphasized for independent jobs
- Testing, queue integration, and practical use cases (orders, ETL, approvals) are highlighted

That is exactly what this package is designed to deliver.

## Why Laravel?

Among PHP communities, Laravel has consistently given my packages the most engaged and constructive feedback. Its ecosystem is vibrant, pragmatic, and deeply focused on developer experience, which aligns perfectly with the goals of `chevere/workflow`.

I chose Laravel because it offers a rare balance: strong DX, production realism, and fast community feedback loops.

Laravel teams value clear code, reliable delivery, and long-term maintainability over novelty. That is exactly who this package is for, and the early coverage confirms real demand for declarative workflow orchestration in Laravel apps.

## What comes next

I am looking forward to bringing more Laravel integrations for my packages, including [xrDebug](https://xrdebug.com) (an alternative to Spatie's Ray) and [Parameter](https://chevere.org/packages/parameter) (I/O validation layer).

I will keep improving this package with real-world feedback from Laravel teams: API ergonomics, docs quality, edge-case behavior, production patterns, and how these integrations work together. If you are building complex flows in Laravel, try it and tell me where it helps and where it hurts. That feedback will shape the next iterations.

## Bonus Track

There's one more thing: Workflow has a dedicated **VS Code extension** for workflow development available at [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Chevere.vscode-workflow). Here's a quick demo of the extension in action:

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item m-0" src="https://www.youtube.com/embed/bWUhVHoHNPE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

I will cover this extension in more detail in a future post, stay tuned!
